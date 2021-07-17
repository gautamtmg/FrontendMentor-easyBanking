const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')
const body = document.querySelector("body")
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    
    if(header.classList.contains('open')){// close hamburger menu
        body.classList.remove("no-scroll")
        
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.add('fade-out')
            element.classList.remove('fade-in')

        })

    }else{// open hamburger menu

        body.classList.add("no-scroll")

        header.classList.add('open');
        fadeElems.forEach(function(element){

            element.classList.add('fade-in')
            element.classList.remove('fade-out')
        })


    }
})