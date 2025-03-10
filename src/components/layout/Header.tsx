import { ModeToggle } from "../buttons/ModeToggle";

export const Header = () => {
 return (
  <header className="bg-gray-800 text-white p-4 shadow-md flex justify-between items-center">
   <h1 className="text-2xl">Grindatunet</h1>
   <ModeToggle />
  </header>
 );
};
