

 


 const menu = document.querySelector('.menu');


/*Abre e fecha menu*/
 const nav = document.querySelector('#header nav');
 const toggle = document.querySelectorAll('nav .toggle');

 for (const element of toggle) {
     element.addEventListener('click', ()=>{
         nav.classList.toggle('show'); /* codigo para mostrar o nav */
     })
 }


 /* Quando clicar em icone do menu , esconder menu*/

 const links = document.querySelectorAll('nav ul li a ');

 for(const link of links) {
     link.addEventListener('click', ()=>{
         nav.classList.remove('show')
     })
 }

 /* Mudar o Header quando dar o scroll*/

 const header = document.querySelector('#header')
 const navHeight = header.offsetHeight // Essa funcionalidade pega a altura do Header

window.addEventListener('scroll', ()=>{
    if (window.scrollY >= navHeight) {
        document.querySelector('#header').classList.add('scroll')
    }else {
        header.classList.remove('scroll') /*As formas de escrever do if e else e diferente mas chama a mesma coisa*/
    }
})

/*Testimonials carousel*/

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
      el:'.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      767: {
        slidesPerView: 2,
        setWrapperSize: true,
        breakpoints: {
            767: {
                slidesPerView:2,
                setWrapperSize:true
            }
        }
      }
    }
  })



  /*Scrollreveal: Mostrar elementos quando der scroll na página*/

  const scrollReveal = ScrollReveal ({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
    
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #works  , 
    #contact .text, #contact .links 
    
    `, 
    { interval: 100}
)

