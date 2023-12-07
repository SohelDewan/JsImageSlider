const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const bottom = document.querySelector('.bottom');

let slideNumber = 1;
const length = images.length;

const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber*800}px)`;
    slideNumber++;
};
// I made a mistake in spelling (translat) that is why my whole code fail to run
const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};
const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber-2)*800}px)`;
    slideNumber--;
};

const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*800}px)`;
    slideNumber = length;
};

right.addEventListener('click', ()=>{
    slideNumber < length ? nextSlide() : getFirstSlide();
    colorChange();
});
left.addEventListener('click', ()=>{
    slideNumber >1 ? prevSlide() : getLastSlide() ;
    colorChange()
});

for( let i =0; i<length; i++){
    const btn =  document.createElement('div');
    btn.className = 'button';
    bottom.appendChild(btn);
}// i is related with length, btn is a variable which create a div for className button and these div will be shown in bottom div as an appendChild(btn)

const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor = 'white';
// buttons is a variable contains all button class and its initial backgroundColor will be white.
const resetBg = ()=>{
    buttons.forEach((e)=>{
        e.style.backgroundColor = 'transparent';
    });
}

const colorChange = ()=>{
    resetBg()
    buttons[slideNumber-1].style.backgroundColor = 'white';
}

buttons.forEach((e, i)=>{
    e.addEventListener('click', ()=>{
        resetBg()
        slider.style.transform = `translateX(-${i*800}px)`;
        slideNumber = i + 1;
        e.style.backgroundColor = 'white';
    });
});