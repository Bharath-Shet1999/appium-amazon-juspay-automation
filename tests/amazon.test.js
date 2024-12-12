const { remote } = require('webdriverio');
const path = require('path');
const apkPath = path.resolve(__dirname, 'amazon1.apk');

const capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'ZA222JCHJ4',
  'appium:app': apkPath,
  "appium:appPackage": "com.amazon.mShop.android.shopping",
  "appium:appActivity": "com.amazon.mShop.splashscreen.StartupActivity",  // Main Activity
//   "appium:noReset": false,
//   "appium:fullReset": false,
};

const wdOpts = {
  hostname: 'localhost',
  port: 4723,
  logLevel: 'info',
  capabilities,
};

async function runTest() {
  const driver = await remote(wdOpts);
  try {

    
  } catch (error) {
    console.error('Test Error:', error);
    throw error;
  } finally {
    await driver.pause(1000);
    await driver.deleteSession();
  }
}

runTest().catch(console.error);
