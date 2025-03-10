import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
import { App } from "./App.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryProvider } from "./providers/QueryProvider.tsx";
import { AuthProvider } from "./providers/AuthProvider.tsx";

createRoot(document.getElementById("root")!).render(
 <StrictMode>
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
   <QueryProvider>
    <AuthProvider>
     <BrowserRouter>
      <App />
     </BrowserRouter>
    </AuthProvider>
   </QueryProvider>
  </ThemeProvider>
 </StrictMode>
);
