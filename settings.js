// Driver for loading and saving settings on the Settings page.

import { saveSettings, loadSettings, test } from './modules/settingsModule.js'


window._settingsMod = { saveSettings, loadSettings, test }
//window._settings = { updateHealth, damage, heal, saveSession, loadSession }

window._settingsMod.test();
window._settingsMod.loadSettings();