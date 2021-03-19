/* global document variables*/
var active_menu=document.getElementsByClassName("active-menu");
var menu_items=document.getElementById("menu-items");



/*category variables*/

sweets_arr=[{"name":"Gulab Jamun","price":"@ 22Rs"},{"name":"Dilkhusar","price":"@ 15Rs"},{"name":"Rasmalai","price":"@ 40Rs"},{"name":"Kalakand","price":"@ 20Rs"},{"name":"Designer Tray","price":""}]

snacks_arr=[{"name":"Papdi Chaat","price":"@ 55Rs"},{"name":"Pav Bhaji" , "price":"@ 50Rs"},{"name":"Allu Tikki Chaat","price":"@ 55Rs"},{"name":"Dahi Bhalla","price":"@ 50Rs"},{"name":"Samosa Chaat","price":"@ 50Rs"},{"name":"Dahi Kachori","price":"@ 40Rs"}]

south_arr=[{"name":"Paneer Masala Dosa", "price":"@ 100Rs"},{"name":"Onion Butter Masala Dosa", "price":"@ 90Rs"},{"name":"Cheese Masala Dosa","price":"@ 90Rs"},{"name":"Onion Cheese Masala Dosa", "price":"@ 100Rs"},{"name":"Masala Dosa","price":"@ 70Rs"},{"name":"Plain Dosa","price":"@ 50Rs"},{"name":"Idali","price":"@ 50Rs"}]

food_arr=[{"name":"Veg Burger", "price":"@ 40Rs"},{"name":"Paneer Burger" , "price":"@ 50Rs"},{"name":"Paneer Roll" , "price":"@ 60Rs"},{"name":"Chole Bhature" , "price":"@ 60Rs"},{"name":"Dahi Puchka","price":"@ 50Rs"}]

function globe(name_of,arr){
    active_menu[0].classList.remove("active-menu");
    var sweet=document.getElementById(name_of);
    sweet.classList.add("active-menu");
    menu_items.innerHTML="";
    arr.forEach(element => {
                        var div_elem=document.createElement("div");
                        var image=document.createElement("img");
                        image.src="Menu/"+name_of+"/"+element.name+".jpg";
                        var txt=document.createElement("h3");
                        txt.innerHTML=element.name+"<br>"+element.price;
                        menu_items.appendChild(div_elem);
                        div_elem.appendChild(image);
                        div_elem.appendChild(txt);
             });
             }

/*Documents function call*/

function sweets(){
    globe("sweets",sweets_arr);
}

function snacks(){
    globe("snacks",snacks_arr);
}

function south(){
    globe("south-indian",south_arr);
}

function food(){
    globe("fast-food",food_arr);
}