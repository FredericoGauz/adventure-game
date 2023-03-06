/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                trajan: ['trajan-pro-3', 'serif'],
            },
        },
    },
    plugins: [],
};
