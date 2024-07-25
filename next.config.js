/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  async redirects() {
    return [
      // Groove Garden Tickets
      {
        source: "/groove-garden",
        destination: "https://posh.vip/f/f1c5?t=eleos",
        permanent: true,
      },
    ];
  },
};

export default config;
