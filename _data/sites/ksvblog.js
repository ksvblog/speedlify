module.exports = {
  name: "ksvblog",
  description: "K's V/Blog Personal Websites",
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== "speedlify",
	options: {
		frequency: 60 * 23, // 23 hours
		freshChrome: "site"
	},
  urls: [
    "https://ksvblog.site/",
    "https://ksvblog.netlify.app/",
    "https://ksvblog.pages.dev/",
  ],
};
