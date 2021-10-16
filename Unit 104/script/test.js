//object (literal and object constructor)
//array []
//object {}
// function ()
let oscar = {
 //key:value
    name:"Oscar Rodriguez",
    hobbies:"Go to SB",
    age:26,
    student:true,
    units:["FSDI 101","FSDI 102","FSDI 103"],
    address:{
        state:"California",
        city: "San Diego",
        street: "K Street",
        zip: "23568"
    }
}
let zipCode=oscar.address.zip;//old way
let {name,hobbies,age,student,units,address:{state,city,street,zip}}=oscar;
console.log(name,hobbies,age,student,units[2],state,city,street,zip);

let kvon = {
    name: "Kvon Smith",
    hobbies: "Drink coffee",
    age: 29,
    student: true,
    units:["FSDI 101", "FSDI 102", "FSDI 103"],
    address:{
        state: "Georgia",
        city: "Atlanta",
        street: "Tijuana",
        zip: "56978"
    }
}
let students=[oscar,kvon];
console.log(kvon)