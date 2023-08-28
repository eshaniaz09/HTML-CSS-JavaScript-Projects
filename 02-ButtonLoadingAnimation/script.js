const btn = document.querySelector('.button'),
spinIcon = document.querySelector('.spinner'),
btntext = document.querySelector('.btn-text');


btn.addEventListener('click' , ()=>{
    btn.style.cursor = "wait";
    //classList is used to deal with the class of the id given
    btn.classList.add('checked');
    // to change the text of button
    btntext.textContent = "loading";
    spinIcon.classList.add('spin');

    // to stop the loading and change the textContent
    setTimeout(()=>{
        btn.style.pointerEvents = "none";
        spinIcon.classList.replace("spinner", "check");
        spinIcon.classList.replace("fa-circle-notch", "fa-check");
        btntext.textContent = "Done";
    }, 3000) //1s = 1000ms
})