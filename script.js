function updateHealth() {
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

    healthLabel.textContent = healthText;
    healthNum.textContent = label;

    // Update bar
    // hpPercent is the percentage that is health (green by default)
    // damagePercent is the percentage that is damaged (grey by default)
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
}

function damage() {
    let amount = document.getElementById("damage-number").value;
    let currentHealth = document.getElementById("current-health");

    currentHealth.value = parseInt(currentHealth.value) - parseInt(amount);

    updateHealth()
}

function heal() {
    let amount = document.getElementById("damage-number").value;
    let currentHealth = document.getElementById("current-health");

    currentHealth.value = parseInt(currentHealth.value) + parseInt(amount);

    updateHealth()
}

updateHealth()