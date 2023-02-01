class Unit{
    constructor(){
        this._global_var = {}
    }
    Global(name){
        return this._global_var[name]
    }
    setGlobal(name, data){
        this._global_var[name] = data
    }
    setTimeTable(file){querytimeTable(file, new Date)}
}

un = new Unit();

const response = fetch('https://opolonix.github.io/journal/sourses/timeTable.json', {method: 'GET'});
response.then(resp => {return resp.json()}).then(resBody => {un.setTimeTable(resBody)})


var homework_win = document.querySelector(".slide_container")
document.addEventListener("click", (event)=>{
    if (un.Global("open_homework_win") == false){
        card = document.querySelector(".card.main")
        if(event.y >= card.offsetTop - card.offsetHeight/2 && event.y <= card.offsetTop + card.offsetHeight/2){
            open_homework()
        }
    }
    else{close_homework()}
})
document.querySelector('.navigation_bar .btns button').addEventListener("click", (event)=>{
    if (un.Global("open_homework_win") == false){
        
    }
})

function open_homework(){homework_win.classList.remove("close"); un.setGlobal("open_homework_win", true)}
function close_homework(){homework_win.classList.add("close"); un.setGlobal("open_homework_win", false)}

function querytimeTable(data, time){
    day_num = time.getDay()-1
    day_name = data[day_num]['name']
    day_date = formatDate(time)
    week = Math.round((time - new Date(time.getFullYear(), time.getMonth(), 0).getTime()) / (1000 * 60 * 60 * 24 * 7));
    if(week % 2){week = 'blue'}
    else{week = 'red'}
    // console.log(day_name, day_date, week);

    card = document.createElement('div')
    card.classList.add('card')
    card.classList.add('main')

    week_color = document.createElement('div')
    week_color.classList.add('weak_color')
    week_color.classList.add(week)
    card.append(week_color)

    cards_container = document.querySelector('.cards_container')
    //cards_container.append(card)

    console.log(card);
}

function formatDate(date) {
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    var yy = date.getFullYear()
    return dd + '.' + mm + '.' + yy;
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

