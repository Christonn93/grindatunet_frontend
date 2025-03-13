import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import crypto from "crypto";
import qs from "qs";

const WP_BASE_URL = "https://wp.grindatunet.no/wordpress";
const OAUTH_CONSUMER_KEY = "your_consumer_key";
const OAUTH_CONSUMER_SECRET = "your_consumer_secret";

/**
 * Generates an OAuth 1.0a signature
 */
const generateOAuthSignature = (method: string, url: string, params: Record<string, string>) => {
 const sortedParams = Object.keys(params)
  .sort()
  .map((key) => `${key}=${encodeURIComponent(params[key])}`)
  .join("&");

 const baseString = `${method.toUpperCase()}&${encodeURIComponent(url)}&${encodeURIComponent(sortedParams)}`;
 const signingKey = `${encodeURIComponent(OAUTH_CONSUMER_SECRET)}&`;

 return crypto.createHmac("sha1", signingKey).update(baseString).digest("base64");
};

/**
 * Requests a temporary OAuth token
 */
interface OAuthParams {
 oauth_consumer_key: string;
 oauth_nonce: string;
 oauth_signature_method: string;
 oauth_timestamp: string;
 oauth_version: string;
 oauth_signature: string;
 [key: string]: string;
}

const getRequestToken = async () => {
 const url = `${WP_BASE_URL}/oauth1/request`;
 const params: OAuthParams = {
  oauth_consumer_key: OAUTH_CONSUMER_KEY,
  oauth_nonce: crypto.randomBytes(16).toString("hex"),
  oauth_signature_method: "HMAC-SHA1",
  oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
  oauth_version: "1.0",
  oauth_signature: "",
 };

 params["oauth_signature"] = generateOAuthSignature("POST", url, params);

 const response = await axios.post(url, qs.stringify(params), {
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
 });

 return qs.parse(response.data);
};

/**
 * Exchanges request token for an access token
 */
const getAccessToken = async (oauthToken: string, oauthVerifier: string) => {
 const url = `${WP_BASE_URL}/oauth1/access`;
 const params: OAuthParams & { oauth_token: string; oauth_verifier: string } = {
  oauth_consumer_key: OAUTH_CONSUMER_KEY,
  oauth_nonce: crypto.randomBytes(16).toString("hex"),
  oauth_signature_method: "HMAC-SHA1",
  oauth_timestamp: Math.floor(Date.now() / 1000).toString(),
  oauth_version: "1.0",
  oauth_token: oauthToken,
  oauth_verifier: oauthVerifier,
  oauth_signature: "",
 };

 params["oauth_signature"] = generateOAuthSignature("POST", url, params);

 const response = await axios.post(url, qs.stringify(params), {
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
 });

 return qs.parse(response.data);
};

/**
 * Custom hook for handling authentication with OAuth 1.0a
 */
export const useLogin = () => {
 return useMutation({
  mutationFn: async () => {
   // Step 1: Get Request Token
   const requestTokenResponse = await getRequestToken();
   if (!requestTokenResponse.oauth_token) {
    throw new Error("Failed to obtain request token");
   }

   const oauthToken = requestTokenResponse.oauth_token as string;

   // Step 2: Redirect user for authorization
   window.location.href = `${WP_BASE_URL}/oauth1/authorize?oauth_token=${oauthToken}`;
  },
 });
};

/**
 * Custom hook for handling the access token exchange after authorization
 */
export const useAccessToken = () => {
 return useMutation({
  mutationFn: async () => {
   const urlParams = new URLSearchParams(window.location.search);
   const oauthToken = urlParams.get("oauth_token");
   const oauthVerifier = urlParams.get("oauth_verifier");

   if (!oauthToken || !oauthVerifier) {
    throw new Error("Missing OAuth verification parameters.");
   }

   return getAccessToken(oauthToken, oauthVerifier);
  },
 });
};
