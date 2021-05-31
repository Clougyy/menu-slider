const body = document.body
const menu = document.querySelector(".menu");
const menu_line = document.querySelector(".menu_line");
const menu_line2 = document.querySelector(".menu_line2");
const selected_title_body = document.querySelector(".selected_title_body");
const item_handler = document.querySelector(".item_handler");
const menu_items = document.querySelectorAll(".menu_item");

let menuWidth = 25; // vw
menu_items.forEach(function(e) {
    e.addEventListener('mouseover', elem =>{
        console.log("in")
        selected_title_body.innerHTML = e.innerHTML;
    });
    e.addEventListener('mouseout', elem =>{
        console.log("out")
        selected_title_body.innerHTML = " ";
    });
});


body.addEventListener('mousemove', e =>{
    let mouseX = e.clientX;
    let docWidth = document.documentElement.clientWidth;

    if (mouseX > (docWidth - docWidth*0.05)){
        menu.style.width = menuWidth + "vw";
        menu_line.style.right = "calc("+menuWidth + "vw + 0.5rem)";
        menu_line2.style.right = "calc("+menuWidth + "vw + 0.5rem)";
        menu_line2.style.height = "50vh";
        menu_line2.style.opacity = "0.5";
        item_handler.style.opacity="1";
    }
    else if (mouseX < (docWidth - docWidth*menuWidth*0.01)){
        menu.style.width = "0";
        menu_line.style.right = "0.5rem";
        menu_line2.style.right = "0.9rem";
        menu_line2.style.height = "40vh";
        menu_line2.style.opacity = "1";
        item_handler.style.opacity="0";
    }
})

