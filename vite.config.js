import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config(); // Charge les variables d'environnement depuis .env

// Obtient la valeur de l'API_KEY depuis les variables d'environnement
const api_key = process.env.API_KEY || "";

// Configuration de Vite
export default defineConfig({
  plugins: [react()],
  include: ["axios"],
  define: {
    "process.env.API_KEY": JSON.stringify(api_key),
  },
});
