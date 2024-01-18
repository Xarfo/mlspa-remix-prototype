/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
  build: {
    // ... other build configurations

    // Add this line to include styles as side effects
    sideEffects: true,
  }
};
