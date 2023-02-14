//Se....if
function se(n){
    if(n <= 10){
         console.log("Você é criança") 
    } else if(n > 11 && n < 18){
        console.log("Você é adolescente")
    } else if (n === 65){
        console.log("Você se aposentou!")
    } else if(n == 70 || n == 90){
        console.log("Você é idoso")
    } else{
         console.log("Você não atende nenhuma das condições")
    }
}

se(15)

//Para ....for

function para (n){
    for(let i=0;i<n;i++){
        if(i == 10){
            console.log("Você é criança")
            break         
        } else{
            console.log("Você não atende nenhuma das comndições")
        }
    }

}

//Enquanto...while
function Enquanto(n){
    let i=0
    while (i<n){
        i++
        if(i == 10){
            console.log("Você é criança")
            break         
        } else{
            console.log("Você não atende nenhuma das comndições")
        }
    }    
}

Enquanto(11)

//Faça enquanto...do while
function facaenq(n){
    let i=0

    do{
        i++
        if(i == 10){
            console.log("Você é criança")
            break         
        } else{
            console.log("Você não atende nenhuma das comndições")
        }
    } while(n==10)
}


//Repetição switch case
function caso(n){
    switch(n){
        case 1: console.log("Você escolheu 2")
        break
        case 2: console.log("Você escolheu 2")
        break
        default: console.log("Não atender as condições")
    }
}

caso(4)