let bars=document.getElementById('bars');

let list =document.querySelector('ul')
let image_box=document.getElementById("image-box")

bars.addEventListener('click',function(){
 
    list.classList.toggle('active')
    bars.classList.toggle('fa-x')

})

let images=document.querySelectorAll(".image2 span img")
var X_images = Array.prototype.slice.call(images);

for(let i=0;i<X_images.length;i++){
    X_images[i].addEventListener("click",function(){
        image_box.src=X_images[i].src
    })
}
