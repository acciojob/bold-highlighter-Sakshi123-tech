let strongText = document.querySelectorAll("strong");

function highlight() {
    // Write your code here
    strongText.forEach(t => {
        t.style.color = "rgb(0, 128, 0)";
    });
}

function return_normal() {
    // Write your code here
    strongText.forEach(t => {
        t.style.color = "rgb(0, 0, 0)";
    });
}
