const fs = require('fs');
const exec = require('child_process').execSync
const rimraf = require('rimraf');

// ====
// Deployment Process
// ====
try {
  // Copy package.json and package-lock.json into ./src/ directory
  fs.copyFileSync('./package.json', './src/package.json');
  fs.copyFileSync('./package-lock.json', './src/package-lock.json');

  // Install dependencies into src folder
  console.log("[DEPLOY] Installing dependencies…");
  process.chdir('./src');
  console.log(exec('npm install --production').toString());
  process.chdir('../');
  console.log("[DEPLOY] Finished installing dependencies.");
  
  // Deploy
  const deployCommand = `ask deploy`;
  console.log("[DEPLOY] Running command `" + deployCommand + "`");
  console.log(exec(deployCommand).toString());
  console.log("[DEPLOY] Finished running deploy command.");
} catch (e) {
  console.error("[DEPLOY] ERROR!");
} finally {
  console.log("[DEPLOY] Cleaning up…");
  rimraf.sync('src/package.json');
  rimraf.sync('src/package-lock.json');
  rimraf.sync('src/node_modules');
  console.log("[DEPLOY] Finished cleaning up.");
}

console.log("[DEPLOY] Finished processing.");