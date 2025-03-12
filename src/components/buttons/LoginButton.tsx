import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
 const navigate = useNavigate();

 const handleLogin = () => {
  navigate("/minside");
 };

 return (
  <Button type="button" className="w-full" onClick={handleLogin}>
   Login
  </Button>
 );
};
