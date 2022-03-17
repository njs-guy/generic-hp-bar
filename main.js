// Code for updating the HP bar and label in index

import { saveSettings, loadSettings, test } from './modules/settingsModule.js'

function updateHealth() {
    // HTML Elements
    const healthLabel = document.getElementById("health-text");
    const healthNum = document.getElementById("health-num");

    const healthDesc = document.getElementById("health-desc");
    const maxHealth = document.getElementById("max-health");
    const currentHealth = document.getElementById("current-health");

    const hpBar = document.getElementById("hp");
    const damageBar = document.getElementById("damage");

    // Update label
    let healthText = healthDesc.value;
    let maxHP = maxHealth.value;
    let currentHP = currentHealth.value;
    let label = currentHP.concat(" / ", maxHP);

    // Change text contents of labels
    healthLabel.textContent = healthText;
    healthNum.textContent = label;

    // Update bar
    // hpPercent is the percentage that is health (red by default)
    // damagePercent is the percentage that is damaged
    let hpPercent = (currentHP / maxHP) * 100;

    if (hpPercent > 100){
        hpPercent = 100;
    }

    if (hpPercent < 0){
        hpPercent = 0;
    }

    let damagePercent = 100 - hpPercent;

    if (damagePercent > 100){
        damagePercent = 100;
    }

    if (damagePercent < 0){
        damagePercent = 0;
    }

    // Change CSS width percentages for hp and damage
    hpBar.style.width = String(hpPercent).concat("%");
    damageBar.style.width = String(damagePercent).concat("%");

    if(hpPercent == 100) {

        hpBar.style.borderRadius = "10px";

    } else {
        
        hpBar.style.borderRadius = "10px 0px 0px 10px";

    }

    if(damagePercent == 100) {

        damageBar.style.borderRadius = "10px";

    } else {
        
        damageBar.style.borderRadius = "0px 10px 10px 0px";

    }

    saveSession();
}

// Damage by the amount currently in damage-number
function damage() {
    let amount = document.getElementById("damage-number").value;
    let currentHealth = document.getElementById("current-health");

    currentHealth.value = parseInt(currentHealth.value) - parseInt(amount);

    updateHealth()
}

// Heal by the amount currently in damage-number
function heal() {
    let amount = document.getElementById("damage-number").value;
    let currentHealth = document.getElementById("current-health");

    currentHealth.value = parseInt(currentHealth.value) + parseInt(amount);

    updateHealth()
}

// Save the current session to local storage
function saveSession() {
    const healthT = document.getElementById("health-desc");
    const maxH = document.getElementById("max-health");
    const currentH = document.getElementById("current-health");

    localStorage.healthText = healthT.value;
    localStorage.maxHealth = maxH.value;
    localStorage.currentHealth = currentH.value;
}

// Save the previous session from local storage
function loadSession() {
    const healthT = document.getElementById("health-desc");
    const maxH = document.getElementById("max-health");
    const currentH = document.getElementById("current-health");

    // Check if session data exists
    if(localStorage.getItem("healthText") === null) {
        healthT.value = "Health"; // Default value
    } else {
        healthT.value = localStorage.healthText;
    }

    if(localStorage.getItem("maxHealth") === null) {
        maxH.value = 100; // Default value
    } else {
        maxH.value = localStorage.maxHealth;
    }

    if(localStorage.getItem("currentHealth") === null) {
        currentH.value = 100; // Default value
    } else {
        currentH.value = localStorage.currentHealth;
    }

}

// Windows to allow functions to still work though onclick in HTML
window._settingsMod = { saveSettings, loadSettings, test }
window._main = { updateHealth, damage, heal, saveSession, loadSession }

window._settingsMod.loadSettings();
window._main.loadSession();
window._main.updateHealth();