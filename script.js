function validation() {
const red = document.getElementById("text_error");
const value = document.getElementById("text_input").value;
const input = document.getElementById("text_input");
const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

if ((value.match(regex))) {
    input.classList.add("valid");
    input.classList.remove("invalid");
    red.innerHTML= "";
}

    else {
        input.classList.add("invalid");
        input.classList.remove("valid");
        red.innerHTML= "Please provide a valid email address"
}
}