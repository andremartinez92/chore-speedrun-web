/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // https://github.com/mui/material-ui/blob/master/examples/material-ui-nextjs-ts/next.config.js
    modularizeImports: {
        '@mui/icons-material': {
            transform: '@mui/icons-material/{{member}}',
        },
    },
};

module.exports = nextConfig;
