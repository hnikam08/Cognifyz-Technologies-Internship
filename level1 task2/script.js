//change button color
function changeColor() {
    const mybutton = document.getElementById("mybutton");
    mybutton.style.backgroundColor = "red";
}

//Alert box
var welcome;  
    var date = new Date();  
    var hour = date.getHours();   
    if (hour < 12) {  
      welcome ="Good Morning";  
    }  
    else if (hour < 17) {  
      welcome = "good Afternoon";  
    }  
    else {  
      welcome = "good evening";  
    }  
    const currentTime= hour ;
    const message = welcome + "\nCurrent Time:" + currentTime;
    alert(message);

//calculater
function calculate()
         {
           var num1, num2, Result;
           num1 = parseInt(document.getElementById("firstnumber").value);
           num2 = parseInt(document.getElementById("secondnumber").value);
           Result = num1 + num2;
           document.getElementById("answer").value = Result;
         }

