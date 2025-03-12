import { QueryProvider } from "./providers/QueryProvider.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { AuthProvider } from "./providers/AuthProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App.tsx";
import "./style/index.css";

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
