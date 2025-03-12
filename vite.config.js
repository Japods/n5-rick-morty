import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), federation({
    name: 'n5-remote-rm',
    filename: 'remoteEntry.js',
    exposes: {
      './CharacterListRM': './src/components/CharacterList.jsx'
    },
    remotes: {
      'n5-remote-commons': 'http://localhost:5005/assets/remoteEntry.js',
    },
    shared: ['react', 'react-dom'],
  })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js", // Archivo de configuración de pruebas
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
