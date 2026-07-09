// Typing Animation

const text = "Java Full Stack Developer";
let index = 0;

function typing(){

    if(index < text.length){

        document.querySelector(".hero h2").innerHTML += text.charAt(index);
        index++;

        setTimeout(typing,100);

    }

}

document.querySelector(".hero h2").innerHTML = "";
typing();



// Navbar shadow on scroll

window.addEventListener("scroll",()=>{

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.4)";

    }
    else{

        header.style.boxShadow="none";

    }

});



// Reveal animation while scrolling

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        entry.target.style.opacity="1";
        entry.target.style.transform="translateY(0)";

    }

});

});


cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s";

    observer.observe(card);

});



// Current year automatically

const year = new Date().getFullYear();

console.log("Portfolio Updated : "+year);