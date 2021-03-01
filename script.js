document.getElementById("btn").addEventListener("click", displayDate);
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

document.getElementById("snanchor-link").addEventListener("click", goToSnake);
function goToSnake() {
    document.location.hash = "";
    document.location.hash = "#snanchor";
}

document.getElementById("c-shoot-anchor-link").addEventListener("click", goToShooter);
function goToShooter() {
    document.location.hash = "";
    document.location.hash = "#c-shoot-anchor";
}