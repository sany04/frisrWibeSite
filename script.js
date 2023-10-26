const services=document.getElementById('services');
const dis=document.getElementById('servicesUl')
const menuBtn=document.getElementById('btn')
const nav=document.getElementById('nav')
let i=0,j=0;
menuBtn.addEventListener('click',function(){
    if(j==0){
       nav.style.display='flex';
       j=1; 
    }
    else{
        nav.style.display='none';
        j=0; 
    }
})
services.addEventListener('click',()=>{
    if(i==0){
       dis.style.display='block' ;
       i=1;
    }
    else{
        dis.style.display='none';
        i=0;
    }  
})