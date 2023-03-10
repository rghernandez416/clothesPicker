// Gabriel Hernandez, February 2023, Outfit Genrator

// shirts, one array for cool weather, one arrat for warm weather, and an array that combines both
const shirtsWarmWeather = ["Rage Agaist the Machine", "RnM Teddy Fresh", "Marvel Logo", "Disneyland", "Ahsoka", "Ponyo Stipped", "Mikasa", "Scout Regiment"];

const shirtsCoolWeather = ["Grand Canyon", "Clone Wars", "Mandalorian", "Undor Armour", "Shwifty", "Teddy Fresh", "Plain Gray"];

let allShirts = shirtsWarmWeather.concat(shirtsCoolWeather);

// bottoms, one array for , one arrat for warm weather, and an array that combines both
const bottomsWarmWeather = ["Light Grey Shorts #1", "Tight Khakis", "Dark Grey", "Wide Khakis", "Light Grey Shorts #2", "Grey Sweat Shorts", "White Sweat Shorts"];

const bottomsCoolWeather = ["Dark Blue Jeans", "Light Blue Jeans", "Grey Pants", "Black Pants #1", "Black Pants #2", "Black Pants #3"];

let allBottoms = bottomsWarmWeather.concat(bottomsCoolWeather);

//shoes one array for all shoes, no special case for shoes cause they match together for the most part
const shoes = ["Coverse", "Vans", "White SB Nikes", "White Nike Walking Shoes", "Black Nike Walking Shoes", "Doc Boots", "Black Crocs"];

//hats that will be determined by check box, will also have beanies in case it is cold outside
const hats = ["Spider-Man Cap", "Purple Diamondbacks Cap", "Black Diamondbacks Cap", "Gray Cardinals Cap", "The Batman Cap"];
const beanies = ["Grand Canyon", "Blacked Knitted", "PLain Black", "Baby Yoda", "Deadpool"]

//initializes a startinf value for the last shirt to be tracked
let lastShirt = 0;
let lastPants = 0;
let lastHat = 0;
let lastShoe = 0;

//makes it easier to call thes frequently called html tags
let coldWeather = document.getElementById("cold");
let modWeather = document.getElementById("moderate");
let hotWeather = document.getElementById("hot");

let hatTag = document.getElementById("hat");;
let topsTag = document.getElementById("tops");
let bottomsTag = document.getElementById("bottoms");
let shoeTag = document.getElementById("shoes");

let i;

//picks shirt based on weather radio buttion
function pickShirt() {

    let numOfShirt;
    let shirtType;

    if (coldWeather.checked) {
        numOfShirt = shirtsCoolWeather.length;
        shirtType = shirtsCoolWeather;
    } else if (modWeather.checked) {
        numOfShirt = allShirts.length;
        shirtType = allShirts;
    } else if (hotWeather.checked) {
        numOfShirt = shirtsWarmWeather.length;
        shirtType = shirtsWarmWeather
    }

    do {
        i = Math.floor(Math.random() * numOfShirt);
        topsTag.innerHTML = shirtType[i];
    } while (i == lastShirt);

    lastShirt = i;
}

//same structure for bottoms as shirts
function pickBottoms() {
    let numOfBottoms;
    let bottomsType;

    if (coldWeather.checked) {
        numOfBottoms = bottomsCoolWeather.length;
        bottomsType = bottomsCoolWeather;
    } else if (modWeather.checked) {
        numOfBottoms = allBottoms.length;
        bottomsType = allBottoms;
    } else if (hotWeather.checked) {
        numOfBottoms = bottomsWarmWeather.length;
        bottomsType = bottomsWarmWeather
    }

    do {
        i = Math.floor(Math.random() * numOfBottoms);
        bottomsTag.innerHTML = bottomsType[i];
    } while (i == lastPants);

    lastPants = i;
}

//uses same weather determined structure but uses added condiction based on if user wants to weat a hat or not
function hatFinder() {
    let numOfHat;
    let hatPicked;

    if (document.getElementById("hatCheckBox").checked && coldWeather.checked) {
        numOfHat = beanies.length;
        hatPicked = beanies;

        do {
            i = Math.floor(Math.random() * numOfHat);
            hatTag.innerHTML = hatPicked[i];
        } while (i == lastHat);

        lastHat = i;

    } else if (document.getElementById("hatCheckBox").checked && (modWeather.checked || hotWeather.checked)) {
        numOfHat = hats.length;
        hatPicked = hats;

        do {
            i = Math.floor(Math.random() * numOfHat);
            pickHat = hatTag.innerHTML = hatPicked[i];
        } while (i == lastHat);

        lastHat = i;
    }


}

var shoe;

//picks any random shoes
function shoePicker() {
    do {
        let i = Math.floor(Math.random() * shoes.length);
        shoeTag.innerHTML = shoes[i];
    } while (i == lastShoe);

    lastShoe = i
}


//calls each function to display the randomized out fit
//also makes new buttons appear as well as updates styles
function generate() {
    pickShirt()
    pickBottoms()
    hatFinder()
    shoePicker()

    // document.getElementById("addItem").style.cssText = `
    //     display: block;
    //     margin: auto;
    //     width: 50%;
    // `;

    // document.getElementById("addFit").style.cssText = `
    //     display: block;
    //     margin: auto;
    //     width: 50%;
    // `;

    hatTag.style.cssText = `
        color: black;
    `;
    topsTag.style.cssText = `
        color: black;
    `;
    bottomsTag.style.cssText = `
        color: black;
    `;
    shoeTag.style.cssText = `
        color: black;
    `;


}

/*Furture feateure */

/* function addItem() {
    document.getElementById("inputItem").style.display = "block";
} */