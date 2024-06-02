const output=document.querySelector('.div2');
const btn=document.querySelectorAll('.btn');

var values="";
for(let idx=0;idx<btn.length;idx++){
    // console.log(btn[idx]);
    btn[idx].addEventListener('click',()=> {
        if(btn[idx].innerHTML==='='){
            const result=eval(output.innerHTML);
            output.innerHTML=result;
            values=result;
        }
        else if(btn[idx].innerHTML==="AC"){
            output.innerHTML='';
            values='';
        }
        else if(btn[idx].innerHTML==="C"){
            values=values.slice(0,-1);
            output.innerHTML=values;
        }
        else{
            values+=btn[idx].innerHTML;
            output.innerHTML=values;

        }
    })
}
