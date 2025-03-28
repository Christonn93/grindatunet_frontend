import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
 plugins: [react(), tailwindcss()],
 server: {
  proxy: {
   "/wp-json": {
    target: "http://localhost:8000",
    changeOrigin: true,
    secure: false,
   },
  },
 },
 resolve: {
  alias: {
   "@": path.resolve(__dirname, "./src"),
  },
 },
});
