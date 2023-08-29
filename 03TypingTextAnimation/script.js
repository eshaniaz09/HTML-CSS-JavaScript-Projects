const text = document.querySelector('.sec-text');

const textLoad = ()=>{
    setTimeout(()=>{
          text.textContent = "LinkdIn 🤝😉"
    }, 0);
    setTimeout(()=>{
          text.textContent = "Twitter 🤝😃"
    }, 4000);
    setTimeout(()=>{
          text.textContent = "GitHub 🤝👩‍💻"
    }, 8000);
}

textLoad();

// for repeatation we use setInterval
setInterval( textLoad, 12000);