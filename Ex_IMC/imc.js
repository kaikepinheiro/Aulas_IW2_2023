function calcula_imc(){
    var altura = document.imcForm.altura.value;
    var peso = document.imcForm.peso.value;

    var calculo = (peso/(altura*altura));

    if(calculo<18.5){
        alert("Você está abaixo do peso com um indice de: " + calculo);
    }
    else if(calculo>=18.5 && calculo<24.9){
        alert("Você está no peso ideal com um indice de: " + calculo);
    }
    else if(calculo>=25 && calculo<29.9){
        alert("Você está com sobrepeso com um indice de: " + calculo);
    }
    else if(calculo>=30 && calculo<39.9){
        alert("Você está com obesiedade com um indice de: " + calculo);
    }
    else if(calculo>40){
        alert("Você está com obesiedade grave com um indice de: " + calculo);
    }
}