class Unit{
    constructor(){
        this._global_var = {}
        var slideCard = false
        this._file = null
    }
    Global(name){
        return this._global_var[name]
    }
    setGlobal(name, data){
        this._global_var[name] = data
    }
    setTimeTable(file){querytimeTable(file)}
    setFile(fil){this._file = fil}
    getFile(){return this._file}

}

un = new Unit();
un.setGlobal("dealy", 0)
alert('version 1.12')
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

function querytimeTable(data){
    console.log(data);
    time = new Date
    time.setDate(time.getDate() + un.Global("dealy"))
    un.setFile(data)
    day_num = time.getDay()-1
    if (day_num == -1){day_num = 6}
    day_name = data[day_num]['name']
    day_date = formatDate(time)
    time.setDate(time.getDate()-1)
    week = Math.round((time.getTime()) / (7*24*60*60*1000));
    if(week % 2){week = 'blue'}
    else{week = 'red'}

    card = `
    <div class="card main" style="transform: translate(-50%, -50%) scale(0.95);">
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
            if (i['week_color'].indexOf(week[0]) != -1) {
                html = `<div class="subject"><p class="name">${i['name']}</p><p class="fromto">${i['time']}</p><p class="adress">${i['cabinet']}</p></div>`;
                html = new DOMParser().parseFromString(html, "text/html").querySelector('div.subject');
                subjects.append(html);
            }
        }
        if (i['type'] == 'repose'){
            html = `<div class="break">Большая перемена</div>`;
            html = new DOMParser().parseFromString(html, "text/html").querySelector('div.break');
            subjects.append(html);
        }
    }
    document.addEventListener('touchstart', (event) => {
        parent_class = event.target.offsetParent.classList[0]
        if ((Math.abs(event.touches[0].clientY-window.innerHeight) <= window.innerHeight/2) || (parent_class == 'card_wrapper' || parent_class == 'card')){
            un.slideCard = true
        }
    })
    document.querySelector('.cards_container').append(card)
    setTimeout(
        () => {card.style = "transform: translate(-50%, -50%) scale(1.0); transition: 100ms;"},
        10
    )
}

function formatDate(date) {
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    var yy = date.getFullYear()
    return dd + '.' + mm + '.' + yy;
}
var position = {
    "start":{},
    "move":{},
    "part": 0
};
function card_slide_state(part){
    translate_card = document.querySelector('div.card.main > div.card_wrapper');
    translate_card.style.transition = `0ms`;
    translate_card.style.transform = `translateX(${part*window.innerWidth}px) rotate(${part*7}deg)`;
    translate_card.style.opacity = 1/Math.abs(part)*30/100;
    position['part'] = part;
};
document.addEventListener("touchstart", function (event) {
    position['start']['x'] = event.touches[0].clientX;
    position['start']['y'] = event.touches[0].clientY;
    position['start']['time'] = event.timeStamp;
});
document.addEventListener("touchmove", function (event) {
    position['move']['x'] = event.touches[0].clientX;
    position['move']['y'] = event.touches[0].clientY;
    part = (position['move']['x']-position['start']['x'])/(window.innerWidth);
    if (un.slideCard == true){card_slide_state(part)};
});
document.addEventListener("touchend", function (event) {
    if (un.slideCard == true){
        un.slideCard = false;
        translate_card = document.querySelector('div.card.main > div.card_wrapper');
        translate_card.style['transition-timing-function'] = `cubic-bezier(0, 0, 1, 1)`;
        
        time = event.timeStamp - position['start']['time'];
        abs_part = Math.abs(position['part']);
        if ((time < 300 && abs_part > 0.15) || (time > 90 && abs_part > 0.4)){
            interval = setInterval(
                () => {
                    if (Math.abs(position['part']) > 1.5){
                        document.querySelector('div.card.main').remove()
                        clearInterval(interval)
                        un.setGlobal("dealy", un.Global("dealy") + (Math.sign(position['part'])*-1))
                        position = {
                            "start":{},
                            "move":{},
                            "part": 0
                        };
                        querytimeTable(un.getFile())
                    };
                    position['part'] = (Math.abs(position['part']) + 0.03) * Math.sign(position['part']);
                    translate_card.style.transition = `0ms`;
                    translate_card.style.transform = `translateX(${position['part']*window.innerWidth}px) rotate(${position['part']*7}deg)`;
                    translate_card.style.opacity = 1/Math.abs(position['part'])*30/100;
                },
                5
            );
        }
        else{
            translate_card.style.transform = `translateX(0px) rotate(0deg)`
            translate_card.style.opacity = `1`
            translate_card.style.transition = `200ms`
        };
    }
});