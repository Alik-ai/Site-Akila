let myForm = document.getElementById('myForm');
let myRegex = /^[a-zA-z\s]+$/;

myForm.addEventListener('submit', function(e){
    let myInput = document.getElementById('username');

    if(myInput.value.trim() == ""){
        let myError = document.getElementById('error');

        myError.innerHTML = "Le champ username est requis.";
        myError.style.color= 'red';
        e.preventDefault();
    }
    else if (myRegex.test(myInput.value) == false){
        let myError = document.getElementById('error');
        myError.innerHTML = "Le nom doit comporter des lettres et espace seulement.";
        myError.style.color= 'red';
        e.preventDefault();
    }

});                                         