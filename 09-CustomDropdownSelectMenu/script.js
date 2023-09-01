const selectedMenu = document.querySelector('.select-menu'),
selectbtn = selectedMenu.querySelector('.select-btn'),
option = selectedMenu.querySelectorAll('.option'),
btnText = selectedMenu.querySelector('.sBtn-text');


selectbtn.addEventListener('click', ()=>{
    selectedMenu.classList.toggle('active');
})

option.forEach(option=>{
    option.addEventListener('click',()=>{
        let selectedOption = option.querySelector('.option-text').innerText;
       btnText.innerText = selectedOption;
       selectedMenu.classList.remove('active');
    })
})