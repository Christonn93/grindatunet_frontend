import { Menu } from "lucide-react";
import { useState } from "react";
import { DropMenu } from "../dropdown/DropMenu";
import { DropMenuMobile } from "../dropdown/DropMenuMobile";
import { ListLinkItem } from "../list/ListLinkItem";

// Define navigation links dynamically
const navLinks = [
 { title: "Home", link: "/home" },
 { title: "Hyttenytt", link: "/news" },
 { title: "Hytteboka", link: "/review" },
 { title: "Book et opphold", link: "/booking" },
];

export const HeaderNav = () => {
 const [isOpen, setIsOpen] = useState(false);

 return (
  <nav className="px-6 py-3">
   <div className="container mx-auto flex justify-between items-center">
    {/* Left-side menu */}
    <ul className="hidden md:flex space-x-6 text-gray-700">
     {navLinks.map(({ title, link }) => (
      <ListLinkItem key={link} title={title} link={link} />
     ))}
    </ul>

    {/* Dropdown Menu */}
    <DropMenu />

    {/* Mobile Menu Button */}
    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
     <Menu size={24} />
    </button>
   </div>

   {/* Mobile Menu */}
   {isOpen && (
    <ul className="md:hidden mt-2 space-y-2 bg-white p-4 shadow-md rounded-md">
     {navLinks.map(({ title, link }) => (
      <ListLinkItem key={link} title={title} link={link} />
     ))}
     <li>
      <DropMenuMobile />
     </li>
    </ul>
   )}
  </nav>
 );
};
