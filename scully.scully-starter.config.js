exports.config = {
  projectRoot: "./src",
  projectName: "scully-starter",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};