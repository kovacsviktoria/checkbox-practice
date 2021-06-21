function inputEvent (event) {
    console.log(event.target.value);
    console.log(event.target.checked);

    if (event.target.checked) {
        event.target.classList.add("piped");
    }
    else {
        event.target.classList.remove("piped");
    }
};

function loadEvent() {
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", `
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
    `);

    const ourSweetCheckbox = document.getElementById("vehicle1");

    ourSweetCheckbox.addEventListener("input", inputEvent);

}

window.addEventListener("load", loadEvent);