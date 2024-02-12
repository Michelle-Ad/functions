function checkage (){
    let age = prompt ("What is your age?")
    if (age == 16) {
        alert("You're good to go");
    }else {alert ("Oops");}
};

function sayHello(){

     alert("hello  everyone");
}

//let button = document.querySelector (". button"); // selecting  an element
// button.addEventListener ("click", checkAge);

document.querySelector(".button").addEventListener("click" , checkage);


// checkage();
// checkage();
// checkage();

// function checkName (){
//     let name = prompt ("What is your name?")
//     if (name == Adwoa) {
//         alert("Then you're a chic");
//     }
//     else {alert ("Woow!")}
// };

// checkname();
// checkname();
// checkname();

