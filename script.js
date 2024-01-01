// --------------------------------------- Slider -----------------------------------------------------------
let btn = document.querySelectorAll('.btn');
let img = document.querySelectorAll('.slider ul li');

for (let i = 0; i < btn.length; i++) {
    
    btn[i].addEventListener('click', (e)=>{
        
        console.log([...img]);
        const imgActive = document.querySelector('.active');
        const curentIndex = [...img].indexOf(imgActive);

         if(btn[i].id == 'next'){
            calc = 1
         }else{ 
            calc = -1
        }
    
         let index = curentIndex + calc;

         if(curentIndex == 0 && btn[i].id == 'prev'){
             index = img.length - 1
         }
         if(curentIndex == img.length - 1 && btn[i].id == 'next'){
             index = 0
            }
             console.log(index);
        console.log(img[index]);

         img[index].classList.add('active');
         imgActive.classList.remove('active');

    })

}

//  --------------------------------Menu burger-----------------------------------------------------------------

const burgerIcon = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

burgerIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');

  if (navbar.classList.contains('active')) {
    burgerIcon.innerHTML = "&#x2715;";
  } else {
    burgerIcon.innerHTML = "&#x2630;";
  }
});