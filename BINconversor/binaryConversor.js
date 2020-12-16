var botao = document.getElementById('botao');

botao.addEventListener('click', (event)=>{
    var binary = document.getElementById('binaryNumber').value;
    if(binary === ''){
        return alert('Please enter a binary number!');
    }
    binary.split('').map((charactere)=>{
        if(charactere !== "0" && charactere !== "1"){
            return alert('Please enter a binary number!');
        }else{
            var decimal = parseInt(binary, 2);  
            document.getElementById('decimalNumber').value = decimal 
        }
    });
});


