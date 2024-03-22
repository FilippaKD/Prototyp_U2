


function init() {


    let searchBox = document.querySelector("#searchbutton");

    searchBox.addEventListener("click", noInfo);

    //let submitButton = document.querySelector("#submitButton");

    //submitButton.addEventListener("click", validateForm);


   
}

window.addEventListener("load", init);


function noInfo() {

    let errorbox9 = document.querySelector("#errorbox9");

    errorbox9.innerText = "Sökfunktionen fungerar inte just nu";
    errorbox9.style.display = "block";


}


/*
function validateForm() {

    console.log("dfghj")
  
    let nameInput = document.getElementById("nameInput");
    let personalNumberInput = document.getElementById("personalNumberInput");
    let emailInput = document.getElementById("emailInput");
    let phoneInput = document.getElementById("phoneInput");

    // Hämta referenser till felmeddelandena
    let errorbox10 = document.getElementById("errorbox10");
    let errorbox11 = document.getElementById("errorbox11");
    let errorbox12 = document.getElementById("errorbox12");
    let errorbox13 = document.getElementById("errorbox13");

    // Kontrollera om något av fälten är tomt
    if (nameInput.value === "") {
        errorbox10.innerText = "Namn måste fyllas i";
        return;
    } else {
        errorbox10.innerText = "";
    }

    if (personalNumberInput.value === "") {
        errorbox11.innerText = "Personnummer måste fyllas i";
        return;
    } else {
        errorbox11.innerText = "";
    }

    if (emailInput.value === "") {
        errorbox12.innerText = "E-post måste fyllas i";
        return;
    } else {
        errorbox12.innerText = "";
    }

    if (phoneInput.value === "") {
        errorbox13.innerText = "Telefon måste fyllas i";
        return;
    } else {
        errorbox13.innerText = "";
    }

    // Om alla fält är ifyllda, gör omdirigeringen
    window.location.href = 'endPage.html';

}

*/



