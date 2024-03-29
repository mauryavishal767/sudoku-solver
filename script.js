document.getElementById("play").addEventListener("click", function() {
    var blue = document.getElementById("blue");
    var white = document.getElementById("white");
    white.innerHTML = "";
    blue.innerHTML = "";
    
    var center = document.createElement("div");
    center.id = "center";
    center.innerHTML = `
        <div id ="heading">
            <h1>heading</h1>
            <p>DIFFICULTY</p>
        </div>
        <div id ="borad"></div>
        <div id ="button">
            <button id="new" >New</button>
            <button id="solve" >Solve</button>
        </div>
    `;
    
    var existingDiv = document.getElementById("bg");
    existingDiv.appendChild(center);

    var cStyle = document.getElementById("center").style;
    cStyle.zIndex = "1";
    cStyle.background = "red";
    cStyle.position = "absolute";
    cStyle.top = "0";
    cStyle.left = "10vw";
    cStyle.width = "80vw";


    document.getElementById("button").style.display = "flex";
    document.getElementById("button").style.flexDirection = "row";
    document.getElementById("button").style.justifyContent = "center";

    document.getElementById("new").style.margin = "10px";
    document.getElementById("solve").style.margin = "10px";
});