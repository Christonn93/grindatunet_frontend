import { LayoutDashboard, CalendarCheck, Newspaper, BookText, Wallet } from "lucide-react";

export const adminRoutes = [
 {
  id: "dashboard",
  name: "Dashboard",
  path: "/admin/kontrollpanel",
  pageTitle: "Dashboard",
  icon: LayoutDashboard,
 },
 {
  id: "booking",
  name: "Booking",
  path: "/admin/booking",
  pageTitle: "Booking",
  icon: CalendarCheck,
  children: [
   {
    name: "Oversikt",
    path: "/admin/booking",
   },
   {
    name: "Ny Booking",
    path: "/admin/booking/new",
   },
   {
    name: "Innstillinger",
    path: "/admin/booking/settings",
   },
  ],
 },
 {
  id: "hyttenytt",
  name: "Hyttenytt",
  path: "/admin/hyttenytt",
  pageTitle: "Hyttenytt",
  icon: Newspaper,
  children: [
   {
    name: "Oversikt",
    path: "/admin/hyttenytt",
   },
   {
    name: "Nyhet",
    path: "/admin/hyttenytt/new",
   },
   {
    name: "Innstillinger",
    path: "/admin/hyttenytt/settings",
   },
  ],
 },
 {
  id: "hytteboka",
  name: "Hytteboka",
  path: "/admin/hytteboka",
  pageTitle: "Hytteboka",
  icon: BookText,
  children: [
   {
    name: "Oversikt",
    path: "/admin/hytteboka",
   },
   {
    name: "Ny Oppføring",
    path: "/admin/hytteboka/new",
   },
   {
    name: "Innstillinger",
    path: "/admin/hytteboka/settings",
   },
  ],
 },
 {
  id: "okonomi",
  name: "Økonomi",
  path: "/admin/okonomi",
  pageTitle: "Økonomi",
  icon: Wallet,
  children: [
   {
    name: "Oversikt",
    path: "/admin/okonomi",
   },
   {
    name: "Inntekter",
    path: "/admin/okonomi/inntekter",
   },
   {
    name: "Utgifter",
    path: "/admin/okonomi/utgifter",
   },
   {
    name: "Rapporter",
    path: "/admin/okonomi/rapporter",
   },
   {
    name: "Innstillinger",
    path: "/admin/okonomi/settings",
   },
  ],
 },
];
