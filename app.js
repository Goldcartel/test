let age = 32;
let userName = 'Max';
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = { 
    tittle: 'Developer', 
    place: 'New York', 
    salary : 50000
};
let totalAdultYears;

function calcultateAdultYears( ) {
    return age - 18;
}

totalAdultYears = calcultateAdultYears();
alert(totalAdultYears);

age = 45;
calcultateAdultYears();

alert(totalAdultYears);