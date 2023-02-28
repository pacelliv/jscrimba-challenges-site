import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

const root = resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig({
    root,
    plugins: [react()],
    build: {
        outDir,
        rollupOptions: {
            input: {
                main: resolve(root, "index.html"),
                home: resolve(root, "pages", "home", "home.html"),
                page1: resolve(root, "pages", "page1", "page1.html"),
                page2: resolve(root, "pages", "page2", "page2.html"),
                page3: resolve(root, "pages", "page3", "page3.html"),
                page4: resolve(root, "pages", "page4", "page4.html"),
                page5: resolve(root, "pages", "page5", "page5.html"),
            },
        },
    },
})
