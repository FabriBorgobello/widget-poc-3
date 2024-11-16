import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist/loader", // Output directory
    lib: {
      entry: "src/loader.ts", // Your script entry file
      name: "MyLoader", // Name of the global variable
      fileName: "my-loader",
      formats: ["iife"], // Use IIFE for browser compatibility
    },
    minify: true, // Minify for production
  },
  define: {
    "process.env": {},
  },
});
