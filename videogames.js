/*default values*/
let hunger=50;
let happiness=50;
let energy=76;

function displayValues(){
    document.getElementById("petHunger")
    innerHTML= `${hunger}`;
}
function feed(){
    hunger=hunger-10; //decrease the hunger
    document.getElementById("petHunger")
    innerHTML=`${hunger}`; //update the html
}
function pet(){

}
function play(){

}
displayValues();
