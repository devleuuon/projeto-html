$(document).ready(function(){
    $("#email").val("Lennon Fonseca")
});

// $("button").click(function(){
// alert("botão clicado")
// });

$("#signin").click( function(){
// let email= document.getElementById("email").value;
// let senha= document.getElementById("password").value;
let email = $("#email").val();
let senha = $("#password").val();

// console.log("email", email);
// console.log("senha", senha);

console.log( validarlogin(email, senha));

if (validarlogin(email, senha) ){
    alert ("preenchido corretamente")
} else {
    alert ("preencha todos os campos")
}

});

function validarlogin(e, s) {
    if(e !== "" && s !== "" ){
        return true;
    } else {
        return false;
    }
}