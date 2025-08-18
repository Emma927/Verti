import { defineConfig } from "vite";
import path from 'path';
import { imagetools } from 'vite-imagetools'; // Wtyczka pozwala na automatyczną optymalizację obrazów, co może zmniejszyć ich rozmiar bez utraty jakości. Dzięki temu aplikacja ładuje się szybciej.

/**
 * Path to verti
 */
const vertiPath = "";

/**
 * Don't change those lines below
 */
export default defineConfig({
    root: vertiPath,
    server: {
        port: 3000,
        open: true,
    },
    plugins: [imagetools()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // Alias @ w resolve.alias pozwala używać skróconej ścieżki do katalogu src, co upraszcza importy.
        },
    },
});