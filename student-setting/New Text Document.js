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












    
    


    









