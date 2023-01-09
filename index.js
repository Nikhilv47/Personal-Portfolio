let menuBtn = document.querySelector('.menu-btn')
let hamBtn = document.getElementById('ham-btn')

menuBtn.addEventListener("click",()=>{

    hamBtn.classList.toggle('active')
   document.querySelector('.mobile-700').classList.toggle('menu-active')

})

document.querySelectorAll('.mobile-menu-links').forEach( links => links.addEventListener("click" , ()=> {
    hamBtn.classList.remove('active')
document.querySelector('.mobile-700').classList.remove('menu-active')

}))