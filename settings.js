// Driver for loading and saving settings on the Settings page.

import { saveSettings, loadSettings, test } from './modules/settingsModule.js'


window._settingsMod = { saveSettings, loadSettings, test }

window._settingsMod.test();
window._settingsMod.loadSettings();