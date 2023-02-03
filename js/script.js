class Unit{
    constructor(){
        this._global_var = {}
        var slideCard = false
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
    if(week % 2){week = 'red'}
    else{week = 'blue'}

    card = `
    <div class="card main">
        <div class="card_wrapper">
            <div class="week_color ${week}"></div>
            <div class="headers">
                <p class="name">${day_name}</p>
                <p class="card_date">${day_date}</p>
            </div>
            <div class="subjects"></div>
        </div>
    </div>`
    card = new DOMParser().parseFromString(card, "text/html").querySelector('div.card.main')

    subjects = card.querySelector('.subjects')
    for (let i of data[day_num]['table']){
        if (i['type'] == 'subj'){
            html = `<div class="subject"><p class="name">${i['name']}</p><p class="fromto">${i['time']}</p><p class="adress">${i['cabinet']}</p></div>`;
            html = new DOMParser().parseFromString(html, "text/html").querySelector('div.subject');
            subjects.append(html);
        }
        if (i['type'] == 'repose'){
            html = `<div class="break">Большая перемена</div>`;
            html = new DOMParser().parseFromString(html, "text/html").querySelector('div.break');
            subjects.append(html);
        }
    }
    card.addEventListener('touchstart', (event) => {
        un.slideCard = true
    })
    document.querySelector('.cards_container').append(card)
}

function formatDate(date) {
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    var yy = date.getFullYear()
    return dd + '.' + mm + '.' + yy;
}
function card_slide_state(part){
    translate_card = document.querySelector('div.card.main > div.card_wrapper')
    translate_card.style.transition = `0ms`
    translate_card.style.transform = `translateX(${part*window.innerWidth}px) rotate(${part*7}deg)`
    translate_card.style.opacity = 1/Math.abs(part)*30/100
}
var position = {
    "start":{},
    "move":{}
}
document.addEventListener("touchstart", function (event) {
    position['start']['x'] = event.touches[0].clientX
    position['start']['y'] = event.touches[0].clientY
});
document.addEventListener("touchmove", function (event) {
    position['move']['x'] = event.touches[0].clientX,
    position['move']['y'] = event.touches[0].clientY
    part = (position['move']['x']-position['start']['x'])/(window.innerWidth)
    if (un.slideCard == true){card_slide_state(part)}
});
document.addEventListener("touchend", function (event) {
    if (un.slideCard == true){
        un.slideCard = false
        translate_card = document.querySelector('div.card.main > div.card_wrapper')
        translate_card.style.transition = `200ms`
        translate_card.style['transition-timing-function'] = `cubic-bezier(0, 0, 1, 1)`
        setTimeout(
            () => {
                translate_card.style.transform = `translateX(0px) rotate(0deg)`
                translate_card.style.opacity = `1`
            },
            100
        )
        

    }
    
});

// setTimeout(
//     () => {
//         main_card = document.querySelector('.card.main')
//         console.log(main_card);
//         main_card.addEventListener('touchstart', (event) => {
//             console.log();
//         })
//     },
//     100
// )
// var lastY = 1;
// document.addEventListener("touchmove", function (event) 
//     {
//         if((lastY-event.touches[0].clientY) < 0 && event.cancelable){event.preventDefault(); event.stopPropagation();};
//         lastY = event.touches[0].clientY;
//     },
//     {passive: false}
// );


// var x, y = 0
// main_card = main_card.getBoundingClientRect()
// document.addEventListener("touchstart", function (event) 
//     {   
//         console.log(event.touches[0].clientX, event.touches[0].clientY);
//     },
//     {passive: false}
// );
