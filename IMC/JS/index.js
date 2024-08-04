function IMC(){
    let peso = parseFloat(document.getElementById('peso').value)
    let altura = parseFloat(document.getElementById('altura').value)
    //calculo do IMC
    let Imc = peso / (altura * altura)
    Imc = Imc.toFixed(2)
    //mostrando o IMC
        document.getElementById("simples").innerHTML= Imc 

    //comparação
    if (Imc < 18.5){
        document.getElementById("resultado").innerHTML = 'Magreza'
         document.getElementById("simples").style.color = 'orange';
    }
    else if(Imc >= 18.5 && Imc <= 24.9){
        document.getElementById("resultado").innerHTML = 'Normal'
         document.getElementById("simples").style.color = 'green';
    }
    else if(Imc >= 25 && Imc <= 29.9){
        document.getElementById("resultado").innerHTML = 'Sobrepeso'
         document.getElementById("simples").style.color = 'yellow';

    }
    else if(Imc >= 30 && Imc <= 34.9){
        document.getElementById("resultado").innerHTML = 'Obesidade grau 1'
        document.getElementById("simples").style.color = '#8B4000';
    }
    else if(Imc >= 35 && Imc <= 39.9){
        document.getElementById("resultado").innerHTML = 'Obesidade grau 2'
            document.getElementById("simples").style.color = '#DC143C';
    }
    else{
        document.getElementById("resultado").innerHTML = 'Obesidade grau 3'
         document.getElementById("simples").style.color = '#A52A2A	';

    }


    
}