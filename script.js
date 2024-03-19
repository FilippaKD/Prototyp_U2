



let correctInfomation;



function init() {

    let hotelBoxes = document.querySelectorAll("#hotellBoxes");
    for (let i = 0; i < hotelBoxes.length; i++) {
        hotelBoxes[i].style.display = "none";
    }

    let searchBox = document.querySelector("#searchbutton");

    searchBox.addEventListener("click", noInfo);


    

    let dropButtons = document.querySelectorAll(".dropbuttons");

    for (let i = 0; i < dropButtons.length; i++) {
        dropButtons[i].addEventListener("click", function () {
            let dialogId = this.getAttribute("data-dialog-id");

            let dialog = document.getElementById(dialogId);
            if (dialog) {
                dialog.showModal();
            }
        });
    }

    let xbuttons = document.querySelectorAll(".x");
    for (let i = 0; i < xbuttons.length; i++) {
        xbuttons[i].addEventListener("click", closeModal);
    }

   
    let numberInputs = document.querySelectorAll("input[type='number']");
    for (let i = 0; i < numberInputs.length; i++) {
        numberInputs[i].value = 0; 
        numberInputs[i].addEventListener("input", function () {
            let value = parseInt(this.value);
            if (isNaN(value) || value < 0) {
                this.value = 0;
            }

        });
        
    }


    let adultInput = document.querySelector("#adultInput");
    let childInput = document.querySelector("#childInput");
    let roomInput = document.querySelector("#roomInput");


    validateAdults(adultInput, 3, "Vuxna");
    validateChildren(childInput, 3, "Barn");
    validateRooms(roomInput, 3);
    

    let button2 = document.querySelector("#button2");
button2.addEventListener("click", function () {

    validateRoom();

    correctInfomation = true;
        validateDates();
        validateAdults(adultInput, 3, "Vuxna");
        validateChildren(childInput, 3, "Barn");
        validateRooms(roomInput, 3);
        validateRoom()
        validateNight();
        updatePrice();
        noDate();

        if (correctInfomation) {
            showHotelBoxes();
        } else {
            hideHotelBoxes();
        }


});




}

window.addEventListener("load", init);

function closeModal() {
    let optionsDialog = this.closest('dialog');
    if (optionsDialog) {
        optionsDialog.close();
    }
}

function validateDates() {
    let checkInDateInput = document.querySelector("#box3 input[type='date']");
    let checkOutDateInput = document.querySelectorAll("#box3 input[type='date']")[1];

    let checkInDate = new Date(checkInDateInput.value);
    let checkOutDate = new Date(checkOutDateInput.value);

    let errorbox1 = document.querySelector("#errorbox1");

    
    if (checkOutDate < checkInDate) {
        errorbox1.innerText = "Utcheckningsdatumet kan inte vara före incheckningsdatumet!";
        errorbox1.style.display = "block";
        checkOutDateInput.value = checkInDateInput.value;
        correctInfomation = false;
    } else {
        errorbox1.innerText = "";
        errorbox1.style.display = "none";
    }

}

function validateAdults(input, max, label) {
    let value = parseInt(input.value);
    let errorbox2 = document.querySelector("#errorbox2");

    if (value > max) {
        errorbox2.innerText = label + " kan inte vara mer än " + max + ".";
        input.value = max;
        errorbox2.style.display = "block";
        correctInfomation = false;
    } else {
        errorbox2.innerText = "";
        errorbox2.style.display = "none";
    }
}

function validateChildren(input, max, label) {
    let value = parseInt(input.value);
    let errorbox3 = document.querySelector("#errorbox3");

    if (value > max) {
        errorbox3.innerText = label + " kan inte vara mer än " + max + ".";
        input.value = max;
        errorbox3.style.display = "block";
        correctInfomation = false;
    } else {
        errorbox3.innerText = "";
        errorbox3.style.display = "none";
    }
}

function validateRooms(input, max) {
    let value = parseInt(input.value);
    let errorbox4 = document.querySelector("#errorbox4");

    if (value > max) {
        errorbox4.innerText = "Antal rum kan inte vara mer än " + max + ".";
        input.value = max;
        errorbox4.style.display = "block";
        correctInfomation = false;
    } else {
        errorbox4.innerText = "";
        errorbox4.style.display = "none";
    }


}

function calculatePrice(adults, children, rooms, days) {

    let errorbox5 = document.querySelector("#errorbox5");
    if (adults === 0 && children === 0) {
        errorbox5.innerText = "Välj minst en person.";
        errorbox5.style.display = "block";
        correctInfomation = false;
    } else {
        errorbox5.innerText = ""; 
        errorbox5.style.display = "none";
    }

    // Pris per rum per natt
    const baseRoomPrice = 1000;

    // Pris per vuxen och per barn per natt
    const pricePerAdult = 1000;
    const pricePerChild = 300;

    // Beräkna totalpriset baserat på antal rum, antal gäster och antal dagar
    const totalPrice = (baseRoomPrice * rooms * days) + (pricePerAdult * adults * days) + (pricePerChild * children * days);

    return totalPrice;
}

function updatePrice() {
    const adultInput = parseInt(document.querySelector("#adultInput").value);
    const childInput = parseInt(document.querySelector("#childInput").value);
    const roomInput = parseInt(document.querySelector("#roomInput").value);

    const checkInDateInput = document.querySelector("#box3 input[type='date']");
    const checkOutDateInput = document.querySelectorAll("#box3 input[type='date']")[1];
    const checkInDate = new Date(checkInDateInput.value);
    const checkOutDate = new Date(checkOutDateInput.value);
    const days = Math.floor((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

    let adult = document.querySelectorAll(".adult");
    for (let i = 0; i < adult.length; i++) {
        adult[i].innerText = adultInput;
    } 

    let child = document.querySelectorAll(".child");
    for (let i = 0; i < child.length; i++) {
        child[i].innerText = childInput;
    } 

    let room2 = document.querySelectorAll(".room2");
    for (let i = 0; i < adult.length; i++) {
        room2[i].innerText = roomInput;
    } 



    // Beräkna det totala priset
    const totalPrice = calculatePrice(adultInput, childInput, roomInput, days);

    const priceElement = document.getElementById("price");

    const priceElement2 = document.getElementById("price2");

    priceElement.innerHTML = "<b>Totalpris " + days + " nätter: </b><br>" + totalPrice + "kr";

    priceElement2.innerHTML = "<b>Totalpris " + days + " nätter: </b><br>" + totalPrice + "kr"; 
}


function validateRoom() {
    let roomInput = document.querySelector("#roomInput").value;
    let errorbox6 = document.querySelector("#errorbox6");
    if (roomInput < 1) {
        errorbox6.innerText = "Välj minst ett rum";
        errorbox6.style.display = "block";
        correctInfomation = false;
    } else {
        errorbox6.innerText = "";
        errorbox6.style.display = "none";
    }
}

function validateNight() {
    const checkInDateInput = document.querySelector("#box3 input[type='date']");
    const checkOutDateInput = document.querySelectorAll("#box3 input[type='date']")[1];
    const checkInDate = new Date(checkInDateInput.value);
    const checkOutDate = new Date(checkOutDateInput.value);
    const days = Math.floor((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));

    let errorbox7 = document.querySelector("#errorbox7");

    if (days <= 0) {
        errorbox7.innerText = "Välj minst en natt.";
        errorbox7.style.display = "block";
        correctInfomation = false;
    } else {
        errorbox7.innerText = "";
        errorbox7.style.display = "none";
    }
}

function noDate() {
    const checkInDateInput = document.querySelector("#box3 input[type='date']");
    const checkOutDateInput = document.querySelectorAll("#box3 input[type='date']")[1];
    const checkInDate = checkInDateInput.value;
    const checkOutDate = checkOutDateInput.value;

    let errorbox8 = document.querySelector("#errorbox8");

    if (checkInDate === "" || checkOutDate === "") {
        errorbox8.innerText = "Ange både in- och utcheckningsdatum.";
        errorbox8.style.display = "block";
        correctInfomation = false;
    } else {
        errorbox8.innerText = "";
        errorbox8.style.display = "none";
    }
}

function showHotelBoxes() {
    

    let hotelBoxes = document.querySelector("#hotellBoxes");
    
        hotelBoxes.style.display = "block";
}

function hideHotelBoxes() {
    let hotelBoxes = document.querySelector("#hotellBoxes");
    hotelBoxes.style.display = "none";
}

function noInfo() {

    let errorbox9 = document.querySelector("#errorbox9");

    errorbox9.innerText = "Sökfunktionen fungerar inte just nu";
    errorbox9.style.display = "block";

}













