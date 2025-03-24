import { useLogin } from "@/hooks/query/auth/useLogin";
import { useState } from "react";
import { FormWrapper } from "../wrappers/FormWrapper";
import { FormGroup } from "./FormGroup";
import { LegalNotice } from "../notice/LegalNotice";

export const LoginForm = () => {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [rememberMe, setRememberMe] = useState(false);

 const loginMutation = useLogin();

 const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  loginMutation.mutate({ username, password });
 };

 return (
  <>
   <FormWrapper
    onSubmit={handleSubmit}
    formHeader="Logg inn"
    buttonText="Login"
    isSubmitting={loginMutation.isPending}
    submittingText="Logging in..."
    isError={!!loginMutation.isError}
    errorText="Invalid credentials"
   >
    <FormGroup label="Brukernavn">
     <input type="text" className="p-2 border rounded-md w-full" placeholder="Skriv inn brukernavn" value={username} onChange={(e) => setUsername(e.target.value)} required />
    </FormGroup>

    <FormGroup label="Passord">
     <input type="password" className="p-2 border rounded-md w-full" placeholder="Skriv inn passord" value={password} onChange={(e) => setPassword(e.target.value)} required />
    </FormGroup>

    <FormGroup label="Husk meg">
     <input type="checkbox" className="h-5 w-5" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} />
    </FormGroup>
   </FormWrapper>

   <LegalNotice privacyPolicyLink="/privacy-policy" termsLink="/terms" />
  </>
 );
};
