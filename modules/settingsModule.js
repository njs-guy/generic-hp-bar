// Functions used to save and load settings on each page.

export function saveSettings() {
    // Light theme colors
    const lBodyText = "black";
    const lBgColor = "#F3F3F3";
    const lNavLinkTextColor = "white";
    const lDamageColor = "#202020";
    const lTextBoxBgColor = "white";

    const lRed = "#E3242B";
    const lRedHover = "#B90E0A";
    const lBlue = "#0492C2";
    const lBlueHover = "#3944BC";
    const lYellow = "#FCD12A";
    const lYellowHover = "FFC30B";
    const lGreen = "#3CB043";
    const lGreenHover = "354A21";
    const lPurple = "#A32CC4";
    const lPurpleHover = "#4B0081";
    const lOrange = "#FA8128";
    const lOrangeHover = "#D16002";
    const lPink = "#F699CD";
    const lPinkHover = "FD5DA8";

    // Dark theme colors
    const dBodyText = "#CECECE";
    const dBgColor = "#202020";
    const dNavLinkTextColor = "white";
    const dDamageColor = "black";
    const dTextBoxBgColor = "black";

    const dRed = "#B90E0A";
    const dRedHover = "#990F02";
    const dBlue = "#1338BE";
    const dBlueHover = "#241371";
    const dYellow = "#FFC30B";
    const dYellowHover = "#F9A602";
    const dGreen = "#028A0F";
    const dGreenHover = "#354A21";
    const dPurple = "#710193";
    const dPurpleHover = "#4B0081";
    const dOrange = "#ED7014";
    const dOrangeHover = "#D16002";
    const dPink = "#FD5DA8";
    const dPinkHover = "#FF1694";

    // Black theme colors
    const bBodyText = "#CECECE";
    const bBgColor = "black";
    const bNavLinkTextColor = "white";
    const bDamageColor = "#1B1B1B";
    const bTextBoxBgColor = "black";

    const bRed = "#710C04";
    const bRedHover = "#990F02";
    const bBlue = "#1338BE";
    const bBlueHover = "#241371";
    const bYellow = "#F9A602";
    const bYellowHover = "#FFC30B";
    const bGreen = "#354A21";
    const bGreenHover = "#597D35";
    const bPurple = "#4B0081";
    const bPurpleHover = "#710193";
    const bOrange = "#B2560D";
    const bOrangeHover = "#ED7014";
    const bPink = "#E11584";
    const bPinkHover = "#FD5DA8";

    // Selects from HTML
    let themeSel = document.getElementById("background-theme-select").value;
    let healthColSel = document.getElementById("health-color-select").value;
    let btnColSel = document.getElementById("button-color-select").value;

    checkTheme();
    currTheme = localStorage.currentTheme

    // Determine which colors to change based on current theme
    switch(currTheme)
    {
        case "light":

            // light colors
            localStorage.bodyText = lBodyText;
            localStorage.bgColor = lBgColor;
            localStorage.NavLinkTextColor = lNavLinkTextColor;
            localStorage.textBoxBgColor = lTextBoxBgColor;
            localStorage.damageColor = lDamageColor;

            // Change health color
            switch(healthColSel)
            {
                case "red":
                    localStorage.healthColor = lRed;
                    break;
                case "blue":
                    localStorage.healthColor = lBlue;
                    break;
                case "yellow":
                    localStorage.healthColor = lYellow;
                    break;
                case "green":
                    localStorage.healthColor = lGreen;
                    break;
                case "purple":
                    localStorage.healthColor = lPurple;
                    break;
                case "orange":
                    localStorage.healthColor = lOrange;
                    break;
                case "pink":
                    localStorage.healthColor = lPink;
                    break;
            } // End healthColSel
            
            // Change button color
            switch(btnColSel)
            {
                case "red":
                    localStorage.btnColor = lRed;
                    localStorage.btnHovColor = lRedHover;
                    break;
                case "blue":
                    localStorage.btnColor = lBlue;
                    localStorage.btnHovColor = lBlueHover;
                    break;
                case "yellow":
                    localStorage.btnColor = lYellow;
                    localStorage.btnHovColor = lYellowHover;
                    break;
                case "green":
                    localStorage.btnColor = lGreen;
                    localStorage.btnHovColor = lGreenHover;
                    break;
                case "purple":
                    localStorage.btnColor = lPurple;
                    localStorage.btnHovColor = lPurpleHover;
                    break;
                case "orange":
                    localStorage.btnColor = lOrange;
                    localStorage.btnHovColor = lOrangeHover;
                    break;
                case "pink":
                    localStorage.btnColor = lPink;
                    localStorage.btnHovColor = lPinkHover;
                    break;
            } // End btnColSel switch
            break;

        case "dark":

            //dark colors
            localStorage.bodyText = dBodyText;
            localStorage.bgColor = dBgColor;
            localStorage.NavLinkTextColor = dNavLinkTextColor;
            localStorage.textBoxBgColor = dTextBoxBgColor;
            localStorage.damageColor = dDamageColor;

            // Change health color
            switch(healthColSel)
            {
                case "red":
                    localStorage.healthColor = dRed;
                    break;
                case "blue":
                    localStorage.healthColor = dBlue;
                    break;
                case "yellow":
                    localStorage.healthColor = dYellow;
                    break;
                case "green":
                    localStorage.healthColor = dGreen;
                    break;
                case "purple":
                    localStorage.healthColor = dPurple;
                    break;
                case "orange":
                    localStorage.healthColor = dOrange;
                    break;
                case "pink":
                    localStorage.healthColor = dPink;
                    break;
            } // End healthColSel

            // Change button color
            switch(btnColSel)
            {
                case "red":
                    localStorage.btnColor = dRed;
                    localStorage.btnHovColor = dRedHover;
                    break;
                case "blue":
                    localStorage.btnColor = dBlue;
                    localStorage.btnHovColor = dBlueHover;
                    break;
                case "yellow":
                    localStorage.btnColor = dYellow;
                    localStorage.btnHovColor = dYellowHover;
                    break;
                case "green":
                    localStorage.btnColor = dGreen;
                    localStorage.btnHovColor = dGreenHover;
                    break;
                case "purple":
                    localStorage.btnColor = dPurple;
                    localStorage.btnHovColor = dPurpleHover;
                    break;
                case "orange":
                    localStorage.btnColor = dOrange;
                    localStorage.btnHovColor = dOrangeHover;
                    break;
                case "pink":
                    localStorage.btnColor = dPink;
                    localStorage.btnHovColor = dPinkHover;
                    break;
            } // End btnColSel switch

            break; // End case dark

        case "black":

            //black colors
            localStorage.bodyText = bBodyText;
            localStorage.bgColor = bBgColor;
            localStorage.NavLinkTextColor = bNavLinkTextColor;
            localStorage.textBoxBgColor = bTextBoxBgColor;
            localStorage.damageColor = bDamageColor;

            // Change health color
            switch(healthColSel)
            {
                case "red":
                    localStorage.healthColor = bRed;
                    break;
                case "blue":
                    localStorage.healthColor = bBlue;
                    break;
                case "yellow":
                    localStorage.healthColor = bYellow;
                    break;
                case "green":
                    localStorage.healthColor = bGreen;
                    break;
                case "purple":
                    localStorage.healthColor = bPurple;
                    break;
                case "orange":
                    localStorage.healthColor = bOrange;
                    break;
                case "pink":
                    localStorage.healthColor = bPink;
                    break;
            } // End healthColSel

            // Change button color
            switch(btnColSel)
            {
                case "red":
                    localStorage.btnColor = bRed;
                    localStorage.btnHovColor = bRedHover;
                    break;
                case "blue":
                    localStorage.btnColor = bBlue;
                    localStorage.btnHovColor = bBlueHover;
                    break;
                case "yellow":
                    localStorage.btnColor = bYellow;
                    localStorage.btnHovColor = bYellowHover;
                    break;
                case "green":
                    localStorage.btnColor = bGreen;
                    localStorage.btnHovColor = bGreenHover;
                    break;
                case "purple":
                    localStorage.btnColor = bPurple;
                    localStorage.btnHovColor = bPurpleHover;
                    break;
                case "orange":
                    localStorage.btnColor = bOrange;
                    localStorage.btnHovColor = bOrangeHover;
                    break;
                case "pink":
                    localStorage.btnColor = bPink;
                    localStorage.btnHovColor = bPinkHover;
                    break;
            } // End btnColSel switch
            break; // End case dark
    } // End themeSel switch

    loadSettings(); //apply changes
}

export function loadSettings() {

    checkTheme();

    // Read local storage values
    let bodyT = localStorage.bodyText;
    let bgC = localStorage.bgColor;
    let navLinkTC = localStorage.NavLinkTextColor;
    let txtBoxBC = localStorage.textBoxBgColor;
    let damC = localStorage.damageColor;
    let hpC = localStorage.healthColor;
    let btnC = localStorage.btnColor;
    let btnHovC = localStorage.btnHovColor;

    // Set values in CSS
    document.documentElement.style.setProperty("--bodyTextColor", bodyT);
    document.documentElement.style.setProperty("--bgColor", bgC);
    document.documentElement.style.setProperty("--navLinkTextColor", navLinkTC);
    document.documentElement.style.setProperty("--textBoxBgColor", txtBoxBC);
    document.documentElement.style.setProperty("--damageColor", damC);
    document.documentElement.style.setProperty("--healthColor", hpC);
    document.documentElement.style.setProperty("--btnColor", btnC);
    document.documentElement.style.setProperty("--btnHovColor", btnHovC);

    console.log("Theme: " + localStorage.currentTheme);
}

export function resetToDefault()
{
    //dark colors
    localStorage.currentTheme = "dark";
    localStorage.bodyText = "#CECECE";
    localStorage.bgColor = "#202020";
    localStorage.NavLinkTextColor = "white";
    localStorage.textBoxBgColor = "black";
    localStorage.damageColor = "black";
    localStorage.healthColor = "#B90E0A";
    localStorage.btnColor = "#028A0F";
    localStorage.btnHovColor = "#354A21";
}

// Check if currentTheme is undefined or not. Reset settings to default if it is.
function checkTheme() {
    if (localStorage.currentTheme === undefined)
    {
        resetToDefault();
    } else {
        return;
    }
}

export function test() {
    console.log("Test function wow");
}

//document.getElementById("hp").style.backgroundColor = "blue"