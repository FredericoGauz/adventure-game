import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
});

// If you want bundle splitting
// // https://github.com/KrishGarg/vite-react-vendor-split-template/blob/main/vite.config.ts

// import { dependencies } from './package.json';

// // Packages we want in the vendor aka the deps needed in the entire app.
// const globalVendorPackages = ['react', 'react-dom', 'react-router-dom'];

// function renderChunks(deps: Record<string, string>) {
//     let chunks = {};
//     Object.keys(deps).forEach((key) => {
//         if (globalVendorPackages.includes(key)) return;
//         chunks[key] = [key];
//     });
//     return chunks;
// }

// export default defineConfig({
//     plugins: [react()],
//     build: {
//         sourcemap: false,
//         rollupOptions: {
//             output: {
//                 manualChunks: {
//                     vendor: globalVendorPackages,
//                     ...renderChunks(dependencies),
//                 },
//             },
//         },
//     },
// });
