let car_q = [];

function commence(){
    qUp();
    changeDisplay();
    parkCars();
}

function qUp(){
    let i = 0;
    while (i < 100){
        var car = new Car(); //activates car constructor
        car_q.push(car);
        i++
    }
}

//does all the action





//changes display from greeting to the program visual
function changeDisplay(){
    document.getElementById('greeting').style.display = "none";
    document.getElementById('parking-spots').style.display = "flex";
    displayQ();
}

//shows the queue below the spot visual
function displayQ(){
    for (let i = 0; i < car_q.length; i++){
        var iDiv = document.createElement('div');
        iDiv.className = 'q-car';
        iDiv.style.display = "inline-block";
        iDiv.style.border = `2px solid ${car_q[i].color}`;
        iDiv.innerHTML = car_q[i].year + ' ' + car_q[i].make + ' ' + car_q[i].model + '<br>' + 'License Plate Number: ' + car_q[i].plate;
        document.getElementById('q').appendChild(iDiv);
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
    
    // this.timer = function(){

    // }
}

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

//selects random plate
function randoPlate(){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let plate = '';
    for (let i = 0;i < 7;i++){
        var one_two = Math.floor(Math.random() * 2);
        if (one_two === 0){
            plate += Math.floor(Math.random() * 10);
        } else {
            plate += alphabet[Math.floor(Math.random() * 26)];
        }
    }
    return plate;
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
    return Math.floor(Math.random() * 8 + 1) * 1000; 
}



//===Messin==//

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