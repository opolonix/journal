class Unit{
    constructor(){
        this.__global_var = {}
    }
    Global(name){
        return this.__global_var[name]
    }
    setGlobal(name, data){
        this.__global_var[name] = data
    }
}
un = new Unit();

un.setGlobal("open_homework_win", false)
var homework_win = document.querySelector(".slide_container")


document.addEventListener("click", (event)=>{
    if (un.Global("open_homework_win") == false){
        if(event.target.offsetParent.classList.value == 'card main'){
            open_homework()
        }
    }
    else{close_homework()}
})



function open_homework(){
    homework_win.classList.remove("close")
    un.setGlobal("open_homework_win", true)
}
function close_homework(){
    homework_win.classList.add("close")
    un.setGlobal("open_homework_win", false)
}

// var lastY = 1;
// document.addEventListener("touchmove", function (event) 
//     {
//         if((lastY-event.touches[0].clientY) < 0 && event.cancelable){event.preventDefault(); event.stopPropagation();};
//         lastY = event.touches[0].clientY;
//     },
//     {passive: false}
// );


// var x, y = 0
// main_card = document.querySelector(".card.main")
// main_card = main_card.getBoundingClientRect()
// document.addEventListener("touchstart", function (event) 
//     {   
//         console.log(event.touches[0].clientX, event.touches[0].clientY);
//     },
//     {passive: false}
// );

