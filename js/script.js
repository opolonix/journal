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
    if (un.Global("open_homework_win") == false){open_homework()}
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

var lastY = 1;
document.addEventListener("touchmove", function (event) {
    var lastS = document.documentElement.scrollTop;
    if(lastS == 0 && (lastY-event.touches[0].clientY)<0 && event.cancelable){
        event.preventDefault(); 
        event.stopPropagation();
    }
    lastY = event.touches[0].clientY;
},{passive: false});
