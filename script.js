const toggles = document.querySelectorAll('.faq-toggle')
const faq = document.querySelectorAll('.faq')

console.log(toggles);
console.log(faq);

toggles.forEach(toggle => {      
        toggle.addEventListener('click', () =>{
          toggle.parentNode.classList.toggle('active')
    })
})