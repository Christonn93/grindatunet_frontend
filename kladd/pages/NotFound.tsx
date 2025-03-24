import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const NotFoundPage = () => {
 const navigate = useNavigate();

 return (
  <div className="flex flex-col items-center justify-center min-h-full p-8">
   <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
    <h1 className="text-5xl font-bold text-gray-800">404</h1>
    <p className="mt-2 text-gray-600 text-lg">Oops! Page not found.</p>
    <Button className="mt-4" onClick={() => navigate("/")}>
     Go Back Home
    </Button>
   </div>
  </div>
 );
};
