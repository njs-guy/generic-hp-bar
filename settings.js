// Driver for loading and saving settings on the Settings page.

import { saveSettings, loadSettings, loadDropDowns } from './modules/settingsModule.js'


window._settingsMod = { saveSettings, loadSettings, loadDropDowns}

window._settingsMod.loadSettings();
window._settingsMod.loadDropDowns();