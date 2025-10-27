document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".sidebar-menu li a");

    menuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault(); 

            
            menuItems.forEach(el => el.parentElement.classList.remove("active"));

            
            this.parentElement.classList.add("active");

           
            let targetId = this.getAttribute("href").replace("#", ""); 
            showContent(targetId);
        });
    });
});

function showContent(id) {
    let contents = document.querySelectorAll('.content-item');
    
    
    contents.forEach(content => content.classList.add('hidden'));

   
    let targetContent = document.getElementById(id);
    if (targetContent) {
        targetContent.classList.remove('hidden');
    }
}
document.querySelectorAll('.sidebar-menu a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('.content-item').forEach(div => div.classList.add('hidden'));
        document.querySelector(link.getAttribute('href')).classList.remove('hidden');
    });
});

document.querySelectorAll('.course-content').forEach(section => {
    section.classList.add('hidden');
});

document.querySelectorAll('#courses ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('.course-content').forEach(div => div.classList.add('hidden'));
        document.querySelector(link.getAttribute('href')).classList.remove('hidden');
    });
});

function showYear(yearId) {
    document.querySelectorAll('.course-year').forEach(year => {
        year.style.display = 'none';
    });
    
    document.getElementById(yearId).style.display = 'block';
}
function showSchedule(scheduleId) {
    document.querySelectorAll('.schedule-year').forEach(schedule => {
        schedule.style.display = 'none';
    });

    document.getElementById(scheduleId).style.display = 'block';
}

const video = document.getElementById("myVideo");
const videoContainer = document.getElementById("headMessage");


const observer = new MutationObserver(() => {
    if (videoContainer.classList.contains("hidden")) { 
        video.pause(); 
        video.currentTime = 0; 
    }
});


observer.observe(videoContainer, { attributes: true, attributeFilter: ["class"] });

// بداية الهيكل التنظيمى

let branch1 = document.querySelector("#branch1")
let branch2 = document.querySelector("#branch2")
let branch3 = document.querySelector("#branch3")
let branch4 = document.querySelector("#branch4")
let branch5 = document.querySelector("#branch5")
let branch6 = document.querySelector("#branch6")

function show(x){
    x.classList.toggle("show")
}

// نهاية الهيكل التنظيمى