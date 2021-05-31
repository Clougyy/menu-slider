const body = document.body
const menu = document.querySelector(".menu");
const menu_line = document.querySelector(".menu_line");
const menu_line2 = document.querySelector(".menu_line2");
const selected_title_body = document.querySelector(".selected_title_body");
const selected_title_menu = document.querySelector(".selected_title_menu");
const item_handler = document.querySelector(".item_handler");
const menu_items = document.querySelectorAll(".menu_item");


const home = document.querySelector(".home");
const projects = document.querySelector(".projects");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");

let menuWidth = 30; // vw

var timeout = setTimeout(function(){});

function switchTo(pageName){
        switch (pageName){
            case 'home':
                home.style.top = "0%";
                projects.style.top = "100%";
                about.style.top = "200%";
                contact.style.top = "300%";
                break;
            case 'projects':
                home.style.top = "-100%";
                projects.style.top = "0%";
                about.style.top = "100%";
                contact.style.top = "200%";
                break;
            case 'about':
                home.style.top = "-200%";
                projects.style.top = "-100%";
                about.style.top = "0%";
                contact.style.top = "100%";
                break;    
            case 'contact':
                home.style.top = "-300%";
                projects.style.top = "-200%";
                about.style.top = "-100%";
                contact.style.top = "0%";
                break;        
    }
}



menu_items.forEach(function(e) {
    
    e.addEventListener('click', elem =>{
        switchTo(e.innerHTML.toLowerCase().split(" ")[0])
    });

    e.addEventListener('mouseover', elem =>{
        selected_title_body.style.opacity = 0;
        selected_title_menu.style.opacity = 0;
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            selected_title_body.style.opacity = 1;
            selected_title_menu.style.opacity = 1;
            selected_title_body.innerHTML = e.innerHTML;
            selected_title_menu.innerHTML = e.innerHTML;
        }, 300);
    });
    e.addEventListener('mouseout', elem =>{
        selected_title_body.style.opacity = 0;
        selected_title_menu.style.opacity = 0;
        clearTimeout(timeout);
        timeout = setTimeout(function(){
            selected_title_body.innerHTML = " ";
            selected_title_menu.innerHTML = " ";
        }, 300);
    });
});


body.addEventListener('mousemove', e =>{
    let mouseX = e.clientX;
    let docWidth = document.documentElement.clientWidth;

    if (mouseX > (docWidth - docWidth*0.05)){
        menu.style.width = menuWidth + "vw";
        menu_line.style.right = "calc("+menuWidth + "vw + 0.5rem)";
        menu_line2.style.right = "calc("+menuWidth + "vw + 0.5rem)";
        selected_title_body.style.right = menuWidth + "vw";
        menu_line2.style.height = "50vh";
        menu_line.style.opacity = "0";
        menu_line2.style.opacity = "0";
        item_handler.style.opacity="1";
    }
    else if (mouseX < (docWidth - docWidth*menuWidth*0.01)){
        clearTimeout(timeout);
        menu.style.width = "0";
        menu_line.style.right = "0.5rem";
        menu_line2.style.right = "0.9rem";
        selected_title_body.style.right = "0rem";
        menu_line2.style.height = "40vh";
        menu_line.style.opacity = "1";
        menu_line2.style.opacity = "1";
        item_handler.style.opacity="0";
    }
})

