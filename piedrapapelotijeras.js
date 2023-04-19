
var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijeras";

/*
var resultado = function (usr, maq) {
    if (usr != maq){
        if (usr === op1 && maq === op3){
            console.log("Tu ganas!!");
        }
        else if(usr === op2 && maq === op1){
            console.log("Tu ganas!!");
        }
        else if(usr === op3 && maq === op2){
            console.log("Tu ganas!!");
        }
        else{
            console.log("La maquina gana!");
        }
    }
    else if (usr === maq) {
        console.log("Empataron");
    }
}

console.log(resultado(op1,op3)); **/


var resultado = function (usr,maq) {
    switch (true) {
        case usr === maq:
            console.log("Empates");
            break;
        case usr === op1 && maq === op3:
            console.log("Tu ganas!");
            break;
        case usr === op2 && maq === op1:
            console.log("Tu ganas!");
            break;
        case usr === op3 && maq === op2:
            console.log("Tu ganas!");
            break;
        default:
            console.log("Maquina gana!");
    }
}

console.log(resultado(op1,op3));
