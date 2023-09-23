module.exports = {
  name: "Sample", // optional, falls back to object key
  description: "The default sites that get tested",
  options: {
    runs: 1,
    frequency: 1, // (in minutes)
  },
  urls: [
    "https://ksvblog.site/",
    "https://ksvblog.github.io/",
    "https://ksvblog.netlify.app/",
    "https://ksvblog.pages.dev/",
  ],
};
