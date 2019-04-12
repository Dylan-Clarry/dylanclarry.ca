var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

toggleModal = () => {
    modal.classList.toggle("show-modal");
}

windowOnClick = event => {
    if(event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);




// I don't have a good solution for this right now but I reeeaaalllly wanna get this up anyway so ya, I'll do it later


// toronto waste lookup

var toronto_modal = document.querySelector(".toronto-modal");
var trigger2 = document.querySelector(".trigger-2");
var closeButton2 = document.querySelector(".close-button-2");

toggleModal2 = () => {
    toronto_modal.classList.toggle("show-modal");
}

windowOnClick2 = event => {
    if(event.target === toronto_modal) {
        toggleModal2();
    }
}

trigger2.addEventListener("click", toggleModal2);
closeButton2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick2);



// post it board

var postit_modal = document.querySelector(".post-it-modal");
var trigger3 = document.querySelector(".trigger-3");
var closeButton3 = document.querySelector(".close-button-3");

toggleModal3 = () => {
    postit_modal.classList.toggle("show-modal");
}

windowOnClick3 = event => {
    if(event.target === postit_modal) {
        toggleModal3();
    }
}

trigger3.addEventListener("click", toggleModal3);
closeButton3.addEventListener("click", toggleModal3);
window.addEventListener("click", windowOnClick3);



// ez140

var ez140_modal = document.querySelector(".ez140-modal");
var trigger4 = document.querySelector(".trigger-4");
var closeButton4 = document.querySelector(".close-button-4");

toggleModal4 = () => {
    ez140_modal.classList.toggle("show-modal");
}

windowOnClick4 = event => {
    if(event.target === ez140_modal) {
        toggleModal4();
    }
}

trigger4.addEventListener("click", toggleModal4);
closeButton4.addEventListener("click", toggleModal4);
window.addEventListener("click", windowOnClick4);









