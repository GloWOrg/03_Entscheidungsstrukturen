"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assignment//

// const ageJohn = 30;
// const ageMark = 30;

// //Deklaration

// let isJohnOlder, isJohnEqual; //CamelCase fängt mit "is" an weist auf einen Wahrheitswert hin// 

// //Test Logische Aussage

// isJohnOlder = (ageJohn > ageMark); 
// isJohnEqual = (ageJohn == ageMark); //bei equal Vergleichen immer mit == vergleichen//

// //Ausgabe//

// console.log("ageJohn : " + ageJohn);
// console.log("ageMark : " + ageMark);
// console.log("isJohnOlder : " + isJohnOlder);
// console.log("isjohnEqual : " + isJohnEqual);
// console.log("_______________"); //als Trennzeichen//

// //      IF         //
// //TINA There is no alternative//
// //entweder Ja oder nix... alternativlos//

// // if(true)
// // if(false) //bei TRUE wird Codeblock ausgeführt, bei False übersprungen
// // if(isJohnOlder); //Variable wird als boolescher Wert auf den Codeblock angewendet//
// if(ageJohn > ageMark) //direkter Vergleich (spart Code)//
// { 
//     console.log("John ist älter.")
//     console.log("____________IF___________")
// }


// // IF Else          //

// //mit Alternative
// //entweder Ja oder Nein

// if (isJohnOlder) {
//     //True Codeblock
//     console.log("John ist älter");
    
// } else {
//     //False Codeblock
//     console.log("John ist jünger");
    
// }

// console.log("______________IF - ELSE_______________");


// // ----------IF - ELSE - IF -------------//
// // mit alternativen Fällen (älter, jünger, gleich alt)

// if (isJohnOlder) {
//     //True Codeblock
//     console.log("John ist älter");
    
// }
// else if(isJohnEqual)  
// /*wenn IF zweig nicht TRUE ist wird
//  noch eine (oder n Bedingungen) geprüft bevor ELSE greift */
// {
//         console.log("John ist gleich alt");
// }

// else {
//     //False Codeblock
//     console.log("John ist jünger");

// }    
//     console.log("________________IF -ELSE - IF_________________");


 //FALLUNTERSCHEIDUNG / CASE / SWITCH 1 //
 
 const firstName = "Jane";
 let job;

job = "driver"; // Jane fährt Taxi
job  = "diver";  // taucht im Rhein
job = "artist"; // malt ein Bild
job = "teacher"; // unterrichtet
job = "instructor"; // unterrichtet
 switch (job) {
    case "driver": //test ob in der Variable job "driver" steht (Test auf ==)
        console.log(firstName + " fährt Taxi");
        break;
    case "diver": //test ob in der Variable job "diver" steht (Test auf ==)
        console.log(firstName + " taucht im Rhein");
        break;
    case "artist": //test ob in der Variable job "artist" steht (Test auf ==)
        console.log(firstName + " malt ein Bild");
        break;
    case "teacher": //test ob in der Variable job "teacher" steht (Test auf ==)
    case "instructor": //man kann auch mehrere == Werte für einen Case angeben vgl. OR funktion
        console.log(firstName + " unterrichtet");
        break;

     default: // Case der in keinem anderen Case abgedeckt ist z.B. job = pilot
         console.log("Jane ist arbeitslos");
         break;
 }













