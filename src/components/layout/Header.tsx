import { NgLogo } from "../logo/NgLogo";

export const Header = () => {
 return (
  <header className="p-4 flex justify-between items-center">
   <div className="flex items-center gap-4">
    <NgLogo />
    <h1 className="text-2xl">Grindatunet</h1>
   </div>
  </header>
 );
};
