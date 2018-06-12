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



    //02 Bartenders Name
    showBartenders();

    function showBartenders() {

        //cleaning the the place of the clone
        document.querySelector(".bartenders").innerHTML = "";

        let bartenders = myObject.bartenders;

        bartenders.forEach(bartender => {

            //define the bartenders template
            let bartendersTemplate = document.querySelector(".bartendersTemplate").content;

            //define the bartendersClone
            let bartendersClone = bartendersTemplate.cloneNode(true);

            //getting the names of the bartenders
            bartendersClone.querySelector(".bartender_name").textContent = `Bartender\´s name: ${bartender.name}`;

            //bartender's status of work
            if (bartender.status == "WORKING") {
                bartendersClone.querySelector(".bartender_status").textContent = "Working";
                bartendersClone.querySelector(".bartender_status").style.color = "green";
            } else {
                bartendersClone.querySelector(".bartender_status").textContent = "Getting ready";
                bartendersClone.querySelector(".bartender_status").style.color = "red";
            }

            //append clone in the div .bartenders
            document.querySelector(".bartenders").appendChild(bartendersClone);

        })
    }



    //03 PEOPLE IN LINE and PEOPLE GETTING SERVED
    document.querySelector('.waiting').textContent = `${myObject.queue.length}`;
    document.querySelector('.people-served').textContent = `People served: ${myObject.serving.length}`;

    //04 BEERS SERVED TODAY
    document.querySelector('.beers-served').textContent = `Served beers: ${beersServed}`;

    //05 TAP CAPACITY/LEVEL



};


// RELOAD all 3 sec for development, for presentation set to 10 sec
setInterval(function () {
    loadScript();
}, 2000);