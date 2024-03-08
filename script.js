let coolness = document.getElementById('coolness');
let timer;
let cool;
let greet;
let wantedGreet;
let friend = document.getElementById('item');
let eventer = {
    coolItems: ['👍','😎','😍'],
    unCoolItems: ['👎','🤬','💀'],
    friends: [1,2,3],
}
document.getElementById('friend').src = ''



// item bilder, win/lose, fjerne debug button, rydde


function pluscool() {
    coolness.value += 5;
}

function minuscool() {
    coolness.value -= 5;
}

function startCar(){
    document.getElementById("car").src = 'img_3317.gif'
    startTime()
}

function stopCar(){
    document.getElementById("car").src = 'img_3319.jpg';
    clearInterval(timer);
}

function resetGame() {
    document.getElementById("car").src = 'img_3319.jpg'
    coolness.value = 50;
    document.getElementById('item').innerHTML = '';
    document.getElementById("choice").innerHTML = '';
    document.getElementById('friend').src = '';
}

function pickEvent() {
    stopCar();
    let math = Math.floor(Math.random()*3);
    let eventerMath = Math.floor(Math.random()*3)
    document.getElementById('response').innerHTML = '';
    document.getElementById('response').style.removeProperty("background-color")
    
    if(eventerMath == 0){
        document.getElementById('item').innerHTML = eventer.coolItems[math]
        buttons();
        cool = true
    } 
    else if(eventerMath == 1){
        document.getElementById('item').innerHTML = eventer.unCoolItems[math]
        buttons();
        cool = false
    } 
    else if(eventerMath == 2){
        document.getElementById('item').innerHTML = eventer.friends[math]
        document.getElementById("choice").innerHTML = /*HTML*/`
        <button id="hey" onclick="greet1()">Hey</button>
        <button id="sup" onclick="greet2()">Sup</button>
        <button id="yo" onclick="greet3()">Yo</button>
        `
        findFriend();
        ;
    }
}

function startTime() {
    timer = setInterval(pickEvent, 2000)

}

function buttons(){
    document.getElementById("choice").innerHTML = /*HTML*/`
    <button id="grab" onclick="grab()">Grab</button>
    <button id="pass" onclick="pass()">Pass</button>
    `;

}

function grab() {
    if(cool == true){
        coolness.value += 5;
    } else if (cool == false){
     coolness.value -=5;   
    }
    startCar()
    document.getElementById('item').innerHTML = '';
    document.getElementById("choice").innerHTML = '';
}

function pass() {
    startCar()
    document.getElementById('item').innerHTML = '';
    document.getElementById("choice").innerHTML = '';
}

function correctgreet() {
    if(coolness.value > 50){
        document.getElementById('response').innerHTML = 'cool car, bro';
        document.getElementById('response').style.backgroundColor = "white"
    } else if(coolness.value < 50) {
        document.getElementById('response').innerHTML = 'wtf ugly car, idiot'
        document.getElementById('response').style.backgroundColor = "white"
    } else {
        document.getElementById('response').innerHTML = 'you need to pimp your car, bro';
        document.getElementById('response').style.backgroundColor = "white"
    }
}

function greet1() {
    greet = 1;
    checkGreet();
}

function greet2() {
    greet = 2;
    checkGreet();
}

function greet3() {
    greet = 3;
    checkGreet();
}

function checkGreet() {
    if (wantedGreet == greet) {
        correctgreet();
        startCar()
        document.getElementById('item').innerHTML = '';
    document.getElementById("choice").innerHTML = '';
    document.getElementById('friend').src = ''
    } else {
        document.getElementById('response').innerHTML = 'what the fuck was that';
        document.getElementById('response').style.backgroundColor = "white"

    }

}

function findFriend() {
    if(friend.innerHTML == 1) {
        document.getElementById('item').innerHTML = '';
        wantedGreet = 1;
        document.getElementById('friend').src = 'shrek.png';
    } else if(friend.innerHTML == 2) {
        document.getElementById('item').innerHTML = '';
        wantedGreet = 2;
        document.getElementById('friend').src = 'oranguru.png';
    } else if(friend.innerHTML == 3) {
        document.getElementById('item').innerHTML = '';
        wantedGreet = 3;
        document.getElementById('friend').src = 'link-removebg-preview.png';
    }
}