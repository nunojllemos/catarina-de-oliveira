/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx', './src/app/**/*.tsx'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                rouge: '#995759',
                gray: '#3E3B3A',
                'light-gray': '#DEDEDE',
            },
        },
    },
    plugins: [],
}
