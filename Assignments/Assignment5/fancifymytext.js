const button = document.getElementById("bigger-btn");
const fancy_radio = document.getElementById("fancy");
const boring_radio = document.getElementById("boring");
const moo_button = document.getElementById("moo_button")

button.onclick = function() {
    document.getElementById("user-input").style.fontSize = "24pt";
}

moo_button.onclick = function() {
    const textArea = document.getElementById("user-input")
    textArea.value = textArea.value.toUpperCase();
    var str = textArea.value;
    var parts = str.split(" ");
    str = parts.join("-Moo");
    textArea.value = str;
}

document.querySelectorAll('input[name="style"]').forEach((radio) => {
    radio.onchange = function() {
        const textArea = document.getElementById("user-input");
        if(fancy_radio.checked) {
            textArea.style.fontWeight = "bold";
            textArea.style.color = "blue";
            textArea.style.textDecoration = "underline";
        } else if (boring_radio.checked) {
            textArea.style.fontWeight = "normal";
            textArea.style.color = "black";
            textArea.style.textDecoration = "none";
        }
    }
})

