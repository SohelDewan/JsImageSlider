const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let slideNumber = 1;
const length = images.length;

for( let i = 0; i<length; i++){
    const div = document.createElement('div');
    div.className = 'btn';
    bottom.appendChild(div);
};
const buttons = document.querySelectorAll('.btn');
buttons[0].style.backgroundColor = 'white';

const resetBg = ()=>{
   buttons.forEach((btn)=>{
    btn.style.backgroundColor = 'transparent';
   });
}

buttons.forEach((btn,i)=>{
    btn.addEventListener('click', ()=>{
        resetBg();
        slider.style.transform = `translateX(-${i*800}px)`;
        slideNumber = i + 1;
        btn.style.backgroundColor = 'white';
    });
});

const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber* 800}px)`;
    slideNumber++;
}
const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber-2) * 800}px)`;
    slideNumber-- ;
};
const firstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};

const lastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*800}px)`;
    slideNumber = length;
};

const changeColor = ()=>{
    resetBg();
    buttons[slideNumber-1].style.backgroundColor = 'white';
}

right.addEventListener('click', ()=>{
    slideNumber < length ? nextSlide() : firstSlide();
        changeColor();
});

left.addEventListener('click', ()=>{
    slideNumber > 1 ? prevSlide() : lastSlide();
    changeColor();
});

