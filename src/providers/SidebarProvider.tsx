import { SidebarContext } from "@/context/SidebarContext";
import { useMobile } from "@/hooks/handlers/useMobile";
import type React from "react";
import { useEffect, useState } from "react";

export function SidebarProvider({ children }: { children: React.ReactNode }) {
 const [isOpen, setIsOpen] = useState(false);
 const isDesktop = useMobile("(min-width: 1024px)");

 // Close sidebar on mobile when clicking outside
 useEffect(() => {
  const handleOutsideClick = (event: MouseEvent) => {
   if (!isDesktop && isOpen) {
    const sidebar = document.getElementById("dashboard-sidebar");
    const toggle = document.getElementById("sidebar-toggle");

    if (sidebar && !sidebar.contains(event.target as Node) && toggle && !toggle.contains(event.target as Node)) {
     setIsOpen(false);
    }
   }
  };

  document.addEventListener("mousedown", handleOutsideClick);
  return () => {
   document.removeEventListener("mousedown", handleOutsideClick);
  };
 }, [isDesktop, isOpen]);

 // Set sidebar open by default on desktop
 useEffect(() => {
  setIsOpen(isDesktop);
 }, [isDesktop]);

 const toggle = () => setIsOpen(!isOpen);
 const close = () => setIsOpen(false);

 return <SidebarContext.Provider value={{ isOpen, toggle, close }}>{children}</SidebarContext.Provider>;
}
