document.querySelector(".btn").addEventListener("click", () => {
    if(!document.querySelector(".input").value.trim()) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error-icon").style.display = "block";
    }
});

document.querySelector(".input").addEventListener("input", () => {
     if(document.querySelector(".input").value.trim()) {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".error-icon").style.display = "none";
    }
});