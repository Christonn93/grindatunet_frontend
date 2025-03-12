import { GalleryVerticalEnd } from "lucide-react";
export const WelcomeContainer = () => {
 return (
  <div className="flex flex-col items-center gap-2">
   <a href="#" className="flex flex-col items-center gap-2 font-medium">
    <div className="flex h-8 w-8 items-center justify-center rounded-md">
     <GalleryVerticalEnd className="size-6" />
    </div>
    <span className="sr-only">Grindatunet</span>
   </a>
   <h1 className="text-xl font-bold">Velkommen til Grindatunet</h1>
   <div className="text-center text-sm">
    Har ikke konto?{" "}
    <a href="#" className="underline underline-offset-4">
     Registrer bruker
    </a>
   </div>
  </div>
 );
};
