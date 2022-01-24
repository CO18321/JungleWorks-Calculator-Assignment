// Calculator Assignment
// Code By: Ganga Singh (Tech Intern)

function clearResult(id){
    target = document.getElementById(id);
    target.classList.add("d-none");
}

function showResult(target, p_id, result){
    outputTag = target.children['output' + p_id];
    outputTag.classList.remove("d-none");
    outputTag.children['res' + p_id].innerHTML = String(result);

}


function BasicArithmetic(){
    values = document.getElementById('BasicArithmetic');
    val1 = Number(values.children['inputBA'].children['opd1'].value);
    val2 = Number(values.children['inputBA'].children['opd2'].value);
    operation = values.children['inputBA'].children['operation'].value;
    
    var result;

    if (operation == '+'){
        result = val1 + val2;
    }
    else if (operation == '-'){
        result = val1 - val2;
    }
    else if (operation == '*'){
        result = val1 * val2;
    }
    else if (operation == '/'){
        result = val1 / val2;
    }
    else{
        result = val1 % val2;
    }

    showResult(values, 'BA', result);
}



function evalExpression(){
    target = document.getElementById('ExpEval');
    exp = target.children['inputEE'].children['exp'].value;

    var result = eval(exp);

    showResult(target, 'EE', result);

}


function findSquareArea(){
    target = document.getElementById('SquareArea');
    side = Number(target.children['inputSA'].children['side'].value);

    var result = side * side;
    showResult(target, 'SA', result);

}


function findCircleArea(){
    target = document.getElementById('CircleArea');
    radius = Number(target.children['inputCA'].children['radius'].value);

    var result = Math.PI * (radius ** 2 );
    showResult(target, 'CA', result);
 
}


function findNthPrime(){
    target = document.getElementById('NthPrime');
    n = parseInt(Number(target.children['inputNN'].children['n'].value));
    if (n <=0){
        showResult(target, 'NN', "Invalid Input");
    }
    else if (n >=10**6){
        showResult(target, 'NN', "Beyond Range");
    }
    else{
        // using Sieve of Eratosthenes
        var SIZE = 2*(10**7);
        var isPrime = new Array(SIZE).fill(true);
        isPrime[0] = false;
        isPrime[1] = false;

        for(let p = 2; p*p <SIZE; p +=1){
            if (isPrime[p]==true){
                for(let i = p*p; i <SIZE; i+=p){
                    isPrime[i] = false;
                }
            }
        }

        for( let val = 0; val<SIZE; val +=1){
            if (isPrime[val]){
                n-=1;
            }
            if (n==0){
                showResult(target, 'NN', val);
                return
            }
        }
    }
}