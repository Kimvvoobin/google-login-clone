const modal = document.getElementById("modal")
const blur = document.getElementById("background-blur")

function openModal(){
    modal.style.display = "block";
    blur.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
    blur.style.display = "none";
}