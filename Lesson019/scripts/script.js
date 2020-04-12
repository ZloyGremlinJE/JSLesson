
 let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');
function myAnimation(){
    
    console.log('Скрипт работает!');

    let pos = 0;
    
    let id = setInterval(frame, 10);

    function frame(){
        if(pos == 300){
            clearInterval(id);
        }else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

let i = 1;

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event){
    if(event.target && event.target.matches('button.first')){

        console.log('Клик по кнопке!' + i);
        i++;
    }
});