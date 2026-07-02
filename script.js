document.getElementById("darkMode").addEventListener("change", darkMode());

function darkMode() {
    let checkbox = document.getElementById("darkModeBtn");

    if (checkbox.checked) {
        document.body.style.color = "white";
        document.body.style.backgroundColor = "black";
        document.body.style.backgroundImage = "none"
    } else {
        document.body.style.color = "";
        document.body.style.backgroundColor = "";
        document.body.style.backgroundImage = "";
    }
    document.body.classList.toggle("dark", checkbox.checked);
}

timeOfDay();

function timeOfDay() {
    const timeOfDay = new Date().getHours();
    let hello;
    if (timeOfDay < 12) {
        hello = "Good morning!";
    } else if (timeOfDay < 20) {
        hello = "Good afternoon!";
    } else {
        hello = "Good evening!";
    }
    document.getElementById("timeOfDay").innerHTML = hello;
}



function textSize(containerId, step) {
    const container = document.getElementById(containerId);
    
    if (container) {
        // Get the current computed font size (e.g., "16px")
        const currentSizeString = window.getComputedStyle(container).fontSize;
        
        // Convert "16px" into the number 16 so we can do math
        const currentSize = parseFloat(currentSizeString);
        
        // Set the new font size
        container.style.fontSize = (currentSize + step) + "px";
    }
}
