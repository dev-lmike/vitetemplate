import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
   // Archivos a los que se les aplicará la configuración
   {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},

   // Definir variables globales del navegador
   {languageOptions: {globals: globals.browser}},

   // Configuración de reglas recomendadas para JavaScript
   pluginJs.configs.recommended,

   // Configuración de reglas recomendadas para TypeScript
   ...tseslint.configs.recommended,

   // Configuración de reglas recomendadas para React
   pluginReact.configs.flat.recommended,

   // Configuración adicional para React 17 o superior
   {
      plugins: {
         react: pluginReact, // Plugin de React
      },
      settings: {
         react: {
            version: "detect", // Detecta la versión de React instalada
         },
      },
      rules: {
         "react/react-in-jsx-scope": "off", // Desactivar la regla react/react-in-jsx-scope
      },
   },
];
