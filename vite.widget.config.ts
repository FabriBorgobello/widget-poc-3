import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist/widget", // Output directory
    lib: {
      entry: "src/main.ts", // Your script entry file
      name: "MyWidget", // Name of the global variable
      fileName: "my-widget",
      formats: ["iife"], // Use IIFE for browser compatibility
    },
    minify: true, // Minify for production
  },
  define: {
    "process.env": {},
  },
});
