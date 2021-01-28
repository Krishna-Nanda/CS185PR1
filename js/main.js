document.addEventListener("scroll", function () {
    var currentlocation = window.scrollY;
    showbacktotopbutton(currentlocation)
    console.log(currentlocation);
})
function showbacktotopbutton(currentlocation) {
    var pageHeight = document.body.scrollHeight;
    console.log(pageHeight);
    var quarterofpage = .25 * pageHeight;
    if (currentlocation > quarterofpage) {
        document.querySelector(".scrolltotopbtn").style.opacity = 1;
    }
    else {
        document.querySelector(".scrolltotopbtn").style.opacity = 0;
    }
}
function scrolltotop() {
    window.scrollTo(0, 0);
}
document.querySelector(".scrolltotopbtn").addEventListener("click", scrolltotop)

var images = document.querySelectorAll(".gallery-image");
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        pictureClicked(images[i]);
        console.log("clicked");

    });
}

function pictureClicked(image) {
    document.querySelector(".overlay").style.display = "block";
    image.classList.add("overlay-picture");
    document.querySelector(".overlay").addEventListener("click", hideOverlay);
}

function hideOverlay() {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".overlay-picture").classList.remove("overlay-picture");

}







var videos = document.querySelectorAll(".video-overlay");
for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("click", function () {
        var video = videos[i];
        var parentNode = video.parentNode;
        var iframe = parentNode.firstChild.nextSibling;

        console.log(iframe);
        videoClicked(iframe);
        console.log("clicked");

    });
}

function videoClicked(iframe) {
    document.querySelector(".overlay").style.display = "block";
    var clone = iframe.cloneNode(true);
    document.getElementById('overlay-video-container').appendChild(clone);
    document.getElementById('overlay-video-container').style.display = 'block';
    // video.classList.add("fullscreen-video");
    document.querySelector(".overlay").addEventListener("click", hideVideoOverlay);
}

function hideVideoOverlay() {
    console.log('clicked?');
    document.querySelector(".overlay").style.display = "none";
    document.getElementById('overlay-video-container').innerHTML = '';
    // Query selector is more generic
    document.querySelector("#overlay-video-container").style.display = "none";
}
