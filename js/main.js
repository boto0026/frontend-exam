"use strict"

let myObject;
let beersServed = 0;
let lastIdCounted = 0;


document.addEventListener("DOMContentLoaded", loadScript);

function loadScript() {
    let data = FooBar.getData();
    myObject = JSON.parse(data);
    console.log(myObject);

    myObject.serving.forEach(customer => {
        if (customer.id > lastIdCounted) {
            beersServed += customer.order.length;
            lastIdCounted = customer.id;
        }
    });

    //01 Project Name and Opening Hours
    document.querySelector('.project-name').textContent = `${myObject.bar.name}`;
    document.querySelector('.opening-hours').textContent = `Opening Hour: ${myObject.bar.closingTime}`;

    //03 Display PEOPLE IN LINE and PEOPLE GETTING SERVED
    document.querySelector('.waiting').textContent = `${myObject.queue.length}`;
    document.querySelector('.people-served').textContent = `People served: ${myObject.serving.length}`;

    //04 Display BEERS SERVED TODAY
    document.querySelector('.beers-served').textContent = `Served beers: ${beersServed}`;

    //05 Display TAP CAPACITY/LEVEL



};


// RELOAD all 3 sec for development, for presentation set to 10 sec
setInterval(function () {
    loadScript();
}, 2000);