let random=document.querySelectorAll(".random")
let number=document.querySelectorAll(".number")
let myb=document.querySelector(".b")
let myr=document.querySelector(".r")
let myh1=document.querySelector(".myh1")
let count=0;
let count1=0;
let x=[]
let y=[]
let w=[]

for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function () {
        let clickedNumber = number[i].innerText;
        if (!y.includes(clickedNumber)) {
            if (count < 6) {
                y.push(clickedNumber);
                count++;
                number[i].style.border = "aqua solid 5px";
            }
        }
        else{
            myindex=y.indexOf(clickedNumber)
            count--;
            y.splice(myindex,1)
            number[i].style.border=""
        }
    });
}


myb.addEventListener("click", function(){
    
if (count == 6)  {


   
    while(x.length<6){
        let randomNumber=Math.floor(Math.random()*36);
        if (!x.includes(randomNumber)){
            x.push(randomNumber)
        }
    }
    for (let i=0; i<random.length; i++){
        random[i].innerText=x[i]
    }
    let resalt=y.map((y)=>{
     
        return y*1
        
    })
    for(let i=0; i<resalt.length; i++)
    {
        if(x.includes(resalt[i])){
            count1++;
            w.push(number[resalt[i]-1].innerText)
            console.log(w);
            number[resalt[i]-1].style.border="5px solid yellow" 

        }
       
    }
   
    for (n of number ) {
        n.style.pointerEvents="none"

    }
    myb.style.pointerEvents="none"

 if(count1==6){
    myh1.innerText=`matches  number:${w}`;
    myh1.style.color="red"
 }
 else if(count1==5){
    myh1.innerText=`matches  number:${w}`;
    myh1.style.color="red"

 }
 else if(count1==4){
    myh1.innerText=`matches  number:${w}`;
    myh1.style.color="red"
    
 }
 else if(count1==2){
    myh1.innerText=`matches  number:${w}`;
    myh1.style.color="red"
    
 }
 else if(count1==1){
    myh1.innerText= `match  number:${w}`;

    myh1.style.color="red"
    
 }




}
})
myr.addEventListener("click", function(){
for(i=0; i<number.length; i++)
{
    number[i].style.border=""
}
for (let i = 0; i < random.length; i++) {
    random[i].innerText=""
    
}
for(let n of number){
    n.style.pointerEvents="auto"
}
myh1.innerText=""
myb.style.pointerEvents="auto"
count=0
count1=0
x=[]
y=[]
w=[]

})

