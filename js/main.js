document.addEventListener("scroll",function (){
    var currentlocation = window.scrollY;
    showbacktotopbutton(currentlocation)
    console.log(currentlocation);
})
function showbacktotopbutton(currentlocation){
    var pageHeight = document.body.scrollHeight;
    console.log(pageHeight);
    var quarterofpage = .25 * pageHeight;
    if(currentlocation > quarterofpage){
        document.querySelector(".scrolltotopbtn").style.opacity = 1;
    }
    else{
        document.querySelector(".scrolltotopbtn").style.opacity = 0;
    }
}
function scrolltotop(){
    window.scrollTo(0,0);
}
document.querySelector(".scrolltotopbtn").addEventListener("click", scrolltotop)

var images = document.querySelectorAll(".gallery-image");
for(let i = 0; i < images.length; i++){
    images[i].addEventListener("click", function() 
    {
        pictureClicked(images[i])
    
    });
}

function pictureClicked(image){
    document.querySelector(".overlay").style.display = "block";
    image.classList.add("overlay-picture");
    document.querySelector(".overlay").addEventListener("click", hideOverlay);
}

function hideOverlay(){
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".overlay-picture").classList.remove("overlay-picture");

}
