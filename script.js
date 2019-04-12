let car_q = [];
let parked_cars = [];

// let taken_spaces = [];
// let available_spaces = [];

// const MAX_NUMBER_OF_SPACES = 10;

function commence(){
    qUp();
    changeDisplay();
    parkCars();
}

//qUp
function qUp(){
    let i = 0;
    while (i < 100){
        var car = new Car(); //activates car constructor
        car_q.push(car);
        i++
    }
}



//car constructor function
function Car(){
    this.year = randoYear();
    this.make = randoMake();
    this.model = randoModel(this.make);
    this.plate = randoPlate();
    this.color = randoColor();
    this.time = randoTime();
    // this.new = this.time;
    // this.timer = function(){
    //     return --this.new
    // }
}

//changes display from greeting to the program visual
function changeDisplay(){
    document.getElementById('greeting').style.display = "none";
    document.getElementById('parking-spots').style.display = "flex";
    displayQ();
}

//shows the queue below the spot visual
function displayQ(){
    document.getElementById('q').innerHTML = '';
    for (let i = 0; i < car_q.length; i++){
        var iDiv = document.createElement('div');
        iDiv.className = 'q-car';
        iDiv.style.display = "inline-block";
        iDiv.style.border = `2px solid ${car_q[i].color}`;
        iDiv.innerHTML = car_q[i].year + ' ' + car_q[i].make + ' ' + car_q[i].model + '<br>' + 'License Plate Number: ' + car_q[i].plate;
        document.getElementById('q').appendChild(iDiv);
    }
}






//parks cars to open spots
function parkCars(){
    displayQ();
    console.log('?');
    // console.log('Cars waiting = ' + car_q);
    // console.log('Cars currently parked = ' + parked_cars);
    if (car_q.length !== 0){
        if (parked_cars.length < 10){
            var temp = car_q.shift();
            parked_cars.push(temp);
            displayParked(temp); //prints the car shifted out of the queue to the parking lot on the screen
            setTimeout(function(){leaveLot(temp)}, temp.time);
            parkCars();
        }
    }
}


//start timers
// function startTimer(e){
//     console.log(e);
//     setTimeout(leaveLot(e), e.time);
// }

//leave lot
function leaveLot(e){
    for (let i = 0; i < parked_cars.length;i++){
        if (parked_cars[i].plate === e.plate){
            removeDisplay(parked_cars[i]);
            parked_cars.splice(i, 1);
            parkCars();
        }
    }
}




// //updates spots visual after deleted car
// function displayParked(){//need value?
//     document.getElementById('parking-spots').innerHTML = '';
//     for (let i = 0; i < parked_cars.length; i++){
//         var jDiv = document.createElement('div');
//         jDiv.className = 'spot';
//         jDiv.style.color = `${parked_cars[i].color}`;
//         jDiv.innerHTML = parked_cars[i].year + ' ' + parked_cars[i].make + ' ' + parked_cars[i].model;
//         document.getElementById('parking-spots').appendChild(jDiv);
//     }
// }

function removeDisplay(car){
    var spots = document.getElementsByClassName('spot'); //gets the spots to iterate over
    for (let item of spots){ //this apparently can be used to iterate over the .spot divs
        if (item.innerHTML == car.year + ' ' + car.make + ' ' + car.model + '<br>' + car.plate){
            item.innerHTML = '';
            break
        }
    }
}

function displayParked(temp){
    var spots = document.getElementsByClassName('spot'); //gets the spots to iterate over
    for (let item of spots){ //this apparently can be used to iterate over the .spot divs
        if (item.innerHTML == ''){
            item.style.color = `${temp.color}`;
            item.innerHTML = temp.year + ' ' + temp.make + ' ' + temp.model + '<br>' + temp.plate;
            break
        }
    }
}

// function makeSpaces(){
//     for(var i = 0; i < MAX_NUMBER_OF_SPACES; i++){
//         var space = new Object({isTaken:});

//         available_spaces.push(space);
//     }
// }






//=== RANDOMIZERS BELOW ==/





//selects random year between 1969 and 2019
function randoYear(){
    return Math.floor(Math.random() * 50) + 1969;
}

//selects random car make
function randoMake(){
    let rando_make = ['Rolls Royce', 'Porsche', 'Toyota', 'Subaru', 'Jeep', 'Pontiac']
    let rando = Math.floor(Math.random() * 6);
    return rando_make[rando];
}

//selects random model
function randoModel(make){
    let rando = Math.floor(Math.random() * 2);
    switch (make){
        case 'Rolls Royce':
            return ['Phantom', 'Wraith'][rando];
        case 'Porsche':
            return ['Boxter', 'Cayenne'][rando];
        case 'Toyota':
            return ['4Runner', 'Rav4'][rando];
        case 'Subaru':
            return ['Forester', 'Crosstrek'][rando];
        case 'Jeep':
            return ['Wrangler', 'Compass'][rando];
        case 'Pontiac':
            return ['Grand Prix', 'Vibe'][rando];
    }
}

let plate_counter = 0;
let plate = '';

//selects random plate
function randoPlate(){
    plate_counter += 1;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    plate += plate_counter;
    for (let i = 0;i < 4;i++){
        var one_two = Math.floor(Math.random() * 2);
        if (one_two === 0){
            plate += Math.floor(Math.random() * 10);
        } else {
            plate += alphabet[Math.floor(Math.random() * 26)];
        }
    }
    let plate_sub = plate;
    plate = '';
    return plate_sub;
}

//selects random color
function randoColor(){
    let letters = "abcdef";
    let hex = '#';
    for (let i = 0; i < 6; i++){
        var one_two = Math.floor(Math.random() * 2);
        if (one_two === 0){
            hex += Math.floor(Math.random() * 10);
        } else {
            hex += letters[Math.floor(Math.random() * 6)];
        }
    }
    return hex;
}

//selects random amount of time
function randoTime(){
    return Math.floor(Math.random() * 5 + 1) * 1000; 
}








//===Not used==//

// let aasdf = [];

// function carFactory(){
//     for (let i = 0; i < 100; i++){
//         var car = new Object ();
//         car.make = "ford";
//         car.plate = "123";
//         car.color = "blue";
//         aasdf.push(car);
//     }
//     console.log(aasdf);
// }

// carFactory();

// function pushFunction(){
//     for (let i = 0; i < 100; i++){
//         var car = new Car();
//         aasdf.push(car);
//     }    
//     console.log(aasdf);
// }

// pushFunction();


// function makeFactory(){
//     let rando = Math.floor(Math.random() * 6);
//     let arrCar = ["Buick", "Ford", "Jeep", "Ferrari", "Toyota", "Honda"];
//     for (let i = 0; i < 6;i++){
//         if (i === rando){
//             return arrCar[i];
//         }
//     }
// }

// function Car(make){
//     this.yo = makeFactory();
// }