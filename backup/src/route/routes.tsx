import { Home, Calendar, Newspaper, LogOut, BookOpen } from "lucide-react";

export type RouteItem = {
 id: string;
 name: string;
 path: string;
 pageTitle: string;
 color: string;
 icon: React.ElementType;
};

export const routes: RouteItem[] = [
 {
  id: "dashboard",
  name: "Min side",
  path: "/bruker/minside",
  pageTitle: "Dashboard",
  color: "default",
  icon: Home,
 },
 {
  id: "booking",
  name: "Booking",
  path: "/bruker/booking",
  pageTitle: "Booking",
  color: "default",
  icon: Calendar,
 },
 {
  id: "newsletter",
  name: "Hyttenytt",
  path: "/bruker/hyttenytt",
  pageTitle: "Newsletter",
  color: "default",
  icon: Newspaper,
 },
 {
  id: "feedback",
  name: "Hytteboka",
  path: "/bruker/hytteboka",
  pageTitle: "Feedback",
  color: "default",
  icon: BookOpen,
 },
 {
  id: "logout",
  name: "Logg ut",
  path: "/bruker/logout",
  pageTitle: "Logout",
  color: "red",
  icon: LogOut,
 },
];
