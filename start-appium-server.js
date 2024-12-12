const { exec } = require("child_process");

exec("appium", (err, stdout, stderr) => {
  if (err) {
    console.log(`Error starting Appium: ${err}`);
    return;
  }
  console.log(stdout);
});
