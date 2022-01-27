let nextButton = document.querySelector(".butty.next");
let prevButton = document.querySelector(".butty.prev");
let slideItem = document.querySelectorAll(".item");
let butt = document.querySelectorAll(".circly");




nextButton.addEventListener("click", function(){
    let activeItem = document.querySelector(".item.active");
    activeItem.classList.remove('active');
    activeItem.classList.add('slow');

    if (activeItem.nextElementSibling != null) {
        activeItem.nextElementSibling.classList.add('active');
    }else{
        slideItem[0].classList.add('active');
    }

   setTimeout(()=>{
     document.querySelector('.item.slow').classList.remove('slow');
   }, 700)
})



prevButton.addEventListener("click", function(){
    let activeItem = document.querySelector(".item.active");
    activeItem.classList.remove("active");
    activeItem.classList.add('preslow');

    if (activeItem.previousElementSibling !=null) {
        activeItem.previousElementSibling.classList.add("active");
    }else{
        slideItem[slideItem.length - 1].classList.add("active");
    }

    setTimeout(()=>{
        document.querySelector('.item.preslow').classList.remove('preslow');
      }, 700)
      

})


let sliders =document.querySelectorAll('.circly');
sliders.forEach((pokemon)=>{
 pokemon.addEventListener('click',()=>{

    let activeItem = document.querySelector(".circly.activated");
    activeItem.classList.remove('activated');
    // activeItem.classList.add('slow');

    if (activeItem.nextElementSibling != null) {
        activeItem.nextElementSibling.classList.add('activated');
    }else{
        sliders[0].classList.add('activated');
    }

    // setTimeout(()=>{
    //     document.querySelector('.item.preslow').classList.remove('preslow');
    //   }, 700)

  });
});

