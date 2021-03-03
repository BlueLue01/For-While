var wrapper = document.body.querySelector(".wrapper");
var x = 0
var y = 0
while(x<10||y<5){
  var input = Number(prompt("How many hits do you want to attempt to land on the dragon?"));
  var userdamage =  Math.floor(Math.random() * input) + 1;
  var dragondamage =  Math.floor(Math.random() * 2) + 1;
  
   if(y>=5){
  wrapper.innerHTML=("The user has been killed and took " + y + " damage! The dragon took " + x + " damage!");
 }
  
  if(x>=10){
  wrapper.innerHTML=("The dragon has been killed and took " + x + " damage! The user took " + y + " damage!");
  }
  
  if(input<5){
    x=x+userdamage;  
  }else{
    x++; 
  }
  if(y<5){
    var dragondamage =  Math.floor(Math.random() * 2) + 1;
    y=y+dragondamage;
  }
   
}