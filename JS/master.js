
//  start section landing 

const ALLdivs = document.querySelectorAll(".landing-pag .card-1");
const next_btn = document.querySelector(".landing-pag .left");
const prev_btn = document.querySelector(".landing-pag .right");


let startIndex = 0;

function updateClas(newIndex) {
    ALLdivs[startIndex].classList.remove("activ-1"); 
    startIndex = newIndex; 
    ALLdivs[startIndex].classList.add("activ-1"); 
}


setInterval(() => {
    const nextIndex = (startIndex + 1) % ALLdivs.length; 
    updateClas(nextIndex);
    
}, 7000);

    
next_btn.addEventListener("click", () => {
    const nextIndex = (startIndex + 1) % ALLdivs.length; 
    updateClas(nextIndex);

    
    });
    
    
    prev_btn.addEventListener("click", () => {
    const prevIndex = (startIndex - 1 + ALLdivs.length) % ALLdivs.length; 
    updateClas(prevIndex);

});


//  end section landing 


//  start supervisory models 

const divs = document.querySelectorAll(".supervisory-models .card");
const nextBtn = document.querySelector(".supervisory-models .left");
const prevBtn = document.querySelector(".supervisory-models .right");

let currentIndex = 0;


function updateClass(newIndex) {
    divs[currentIndex].classList.remove("activ"); 
    currentIndex = newIndex; 
    divs[currentIndex].classList.add("activ"); 
}


setInterval(() => {
    const nextIndex = (currentIndex + 1) % divs.length; 
    updateClass(nextIndex);
}, 5000);


nextBtn.addEventListener("click", () => {
    const nextIndex = (currentIndex + 1) % divs.length; 
    updateClass(nextIndex);
});


prevBtn.addEventListener("click", () => {
    const prevIndex = (currentIndex - 1 + divs.length) % divs.length; 
    updateClass(prevIndex);
});

//  end supervisory models 

//  start counter Ratios

let parentCount = document.querySelector(".Ratios");
let numStudent = document.querySelector(".cardes .numStudent");
    let numStudentGraduat = document.querySelector(".cardes .numStudentGraduat");
    let Members = document.querySelector(".cardes .Members");
    
    
    
    function onReachTarget() {
    
    
    function startCounters(duration) {
        const counters = document.querySelectorAll(".Ratios .cardes span"); 
        counters.forEach((counter) => {
            const target = +counter.getAttribute("data-target"); 
            const increment = target / (duration / 10); 
            let current = 0; 
    
            const interval = setInterval(() => {
                current += increment; 
                if (current >= target) {
                    counter.innerText = target;
                    clearInterval(interval); 
                } else {
                    counter.innerText = Math.ceil(current);
                }
            }, 10); 
        });
    }
    
    
    startCounters(3000);
        
    }
            
    
    function handlerScroll() {
        const numStudentPosition = parentCount.getBoundingClientRect().top; 
        const windowHeight = window.innerHeight; 
    
        if (numStudentPosition < windowHeight) {
            onReachTarget(); 
            window.removeEventListener('scroll', handlerScroll); 
        }
    }
    
    window.addEventListener('scroll', handlerScroll);
    
    //  end counter Ratios