import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-foodapp/",
  server: {
    port: 3002,
    watch: {
      usePolling: true,
    },
  },
});