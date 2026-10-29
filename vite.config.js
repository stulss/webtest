import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages(/webtest/) 하위 경로 배포를 위해 상대 경로 사용
export default defineConfig({
  base: "./",
  plugins: [react()],
});
