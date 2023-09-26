module.exports = {
  name: "ksvblog",
  description: "K's V/Blog Personal Websites",
  skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
  options: {
    frequency: 60 * 23, // 23 hours
    freshChrome: "site",
  },
  urls: [
    "https://ksvblog.site/",
    "https://ksvblog.github.io/",
    "https://ksvblog.netlify.app/",
    "https://ksvblog.pages.dev/",
    // Website Uptime.
    "https://stats.ksvblog.site/",
    // Benchmark K's V/Blog Personal Websites over time.
    "https://speedlify.ksvblog.site/",
    "https://ksvspeedlify.netlify.app",
  ],
};
