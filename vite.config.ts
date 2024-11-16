import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.ts", // Your script entry file
      name: "MyScript", // Name of the global variable (optional)
      fileName: "my-script", // Output file name
      formats: ["iife"], // Use IIFE for browser compatibility
    },
    minify: true, // Minify for production
  },
});
