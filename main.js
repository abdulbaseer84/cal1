const display1E1=document.querySelector('.display1');
const display2E1=document.querySelector('.display2');
const numbersE1=document.querySelectorAll('.number');
const operationE1=document.querySelectorAll('.operation');
const equalE1=document.querySelector('.equal');
const clearE1=document.querySelector('.allclear');
const clearLastE1=document.querySelector('.lastentity_clear');
let dis1Num ='';
let dis2Num ='';
let result=null;
let lastOperation='';
let haveDot= false;

numbersE1.forEach(number => {
    number.addEventListener('click',(e)=> {
        if(e.target.innerText ==='.'&& !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dis2Num+=e.target.innerText;
        display2E1.innerText=dis2Num;
    })
});
operationE1.forEach(operation =>{
    operation.addEventListener('click',(e)=>{
        if(!dis2Num)result;
        haveDot=false;
        const operationName=e.target.innerText;
        if(dis1Num && dis2Num && lastOperation){
            mathOperation();
        }else{
            result=parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation=operationName;
         console.log(result);    
    })
});
function clearVar(name=''){
    dis1Num+=dis2Num+ ' '+ name + ' ';
    display1E1.innerText=dis1Num;
    display2E1.innerText='';
    dis2Num='';
    display2E1.innerText=result;
}
function mathOperation(){
    if(lastOperation === 'x'){
        result=parseFloat(result)*parseFloat(dis2Num);
    }else if(lastOperation === '+'){
        result=parseFloat(result)+parseFloat(dis2Num);
    }else if(lastOperation === '-'){
        result=parseFloat(result)-parseFloat(dis2Num);
    }else if(lastOperation === '/'){
        result=parseFloat(result)/parseFloat(dis2Num);
    }else if(lastOperation === '%'){
        result=parseFloat(result)%parseFloat(dis2Num);
    }
}
equalE1.addEventListener('click',(e)=>{
    if(!dis1Num||!dis2Num)return;
    haveDot=false;
    mathOperation();
    clearVar();
    display2E1.innerText=result;
    dis2Num=result;
    dis1Num='';
});
clearE1.addEventListener('click',(e)=>{
    display1E1.innerText='0';
    display2E1.innerText='0';
    dis1Num='';
    dis2Num='';
    result='';
});
clearLastE1.addEventListener('click',(e)=>{
    display2E1.innerText='';
    dis2Num='';
})
window.addEventListener('keydown',(e)=>{
    if(
        e.key==='0'||
        e.key==='1'||
        e.key==='2'||
        e.key==='3'||
        e.key==='4'||
        e.key==='5'||
        e.key==='6'||
        e.key==='7'||
        e.key==='8'||
        e.key==='9'||
        e.key==='.'
    ){
        clickbuttonE1(e.key);
    }else if(
        e.key==='+'||
        e.key==='-'||
        e.key==='/'||
        e.key==='%'
    ){
        clickOperation(e.key);
    }else if(e.key==="*"){
        clickOperation('x');
    }else if(e.key=='Enter'||e.key==="x"){
        clickEqual();
    }else if(e.key=='Backspace'){
        clickBackspace();
    }else if(e.key=='Delete'){
        clickDelete();
    }
});
function clickbuttonE1(key){
    numbersE1.forEach(button=>{
        if(button.innerText===key){
            button.click();
        }
    })
}
function clickOperation(key){
    operationE1.forEach(button=>{
        if(button.innerText===key);{
        button.click();
    }
    })
}
function clickEqual(){
    equalE1.click();
}
function clickBackspace(key){
    clearLastE1.click();
}
function clickDelete(key){
    clearE1.click();
}