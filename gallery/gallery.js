/*Global variables*/
var active_gallery=document.getElementsByClassName("active-gallery");
var lightbox=document.getElementById("lightbox");
var monthg=document.getElementById("monthly-g");
var mnth=["january","february","march","april","may","june","july","august","september","october","november","december"];
var gallery_items=document.getElementById("gallery-items");
var d=new Date;

/* variable for dynamin monthly gallery grid thumbnail laying* use i<mn>
var mn=d.getMonth(); */


/*function to lay the monthly grid along with thumbnails*/
function monthlyg(){
        active_gallery[0].classList.remove("active-gallery");
        monthg.classList.add("active-gallery");
        monthg.innerHTML="Monthly Gallery (2021)"
        gallery_items.innerHTML="";
        let i=0;
        while(i<1){
            var div=document.createElement("div");
            var image=document.createElement("img");
            var txt=document.createElement("h3");
            txt.innerHTML=mnth[i];
            image.src=`gallery/${mnth[i]}.jpg`;
            image.setAttribute("onclick",`monthly("gallery/monthlyg/${mnth[i]}")`);
            gallery_items.appendChild(div);
            div.appendChild(image);
            div.appendChild(txt);
            i++;
        }
}

/*function to show monthly gallery according to month*/

function monthly(a){
    gallery_items.innerHTML=""
    var monthg=document.getElementById("monthly-g");
    monthg.innerHTML="<== Monthly Gallery";
    let i=1;
    while(i<=22){
        var image=document.createElement("img");
        image.src=`${a}/ (${i}).jpg`;
        image.setAttribute("onclick",`view_image("${a}/ (${i}).jpg")`);
        gallery_items.appendChild(image);
        i++;
    }
}


/*function to show the food gallery*/

function foodg(){
    active_gallery[0].classList.remove("active-gallery");
    var food_g=document.getElementById("food-g");
    food_g.classList.add("active-gallery");
    gallery_items.innerHTML="";
    let i=1;
    while(i<=68){
        var image=document.createElement("img");
        image.src=`gallery/foodg/sweets (${i}).jpg`;
        image.setAttribute("onclick",`view_image("gallery/foodg/sweets (${i}).jpg")`);
        gallery_items.appendChild(image);
        i++;
    }
}

/*function to show the celebrations gallery*/

function celebrationg(){
    active_gallery[0].classList.remove("active-gallery");
    var celebration_g=document.getElementById("Celebration-g");
    celebration_g.classList.add("active-gallery");
    gallery_items.innerHTML="";
    let i=1;
    while(i<=7){
        var image=document.createElement("img");
        image.src=`gallery/celebrationg/celebrations (${i}).jpg`;
        image.setAttribute("onclick",`view_image("gallery/celebrationg/celebrations (${i}).jpg")`);
        gallery_items.appendChild(image);
        i++;
    }
}

/*function to show the images in bigger size */
function view_image(sr){
    lightbox.classList.add("active");
    lightbox.innerHTML="";
    var image=document.createElement("img");
    image.src=sr;
    lightbox.appendChild(image);

}

/*Function to exit the zoomed image window*/
lightbox.addEventListener("click", e => {
    if ( e.target!== e.currentTarget) return
    lightbox.classList.remove("active")
})