export const decodeToken = (token: string) => {
 try {
  const payload = JSON.parse(atob(token.split(".")[1]));
  return payload;
 } catch (error) {
  console.error("Invalid token format", error);
  return null;
 }
};

export const isTokenExpired = (token: string) => {
 const decoded = decodeToken(token);
 if (!decoded || !decoded.exp) return true;
 return Date.now() >= decoded.exp * 1000;
};
