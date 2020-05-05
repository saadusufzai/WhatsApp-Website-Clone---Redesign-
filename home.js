document.querySelector('.menu-icon').addEventListener('click', ()=>{
    document.querySelector('.menu-items').classList.toggle('show')
} )


document.querySelector('.close-btn').addEventListener('click',()=>{
    document.querySelector('.menu-items').classList.remove('show')
})