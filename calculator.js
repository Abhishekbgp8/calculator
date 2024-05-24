document.getElementById("btn0").onclick = function changeExpression(){
    document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn0").innerHTML
     }
document.getElementById("btn1").onclick = function changeExpression(){
document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn1").innerHTML
 }
 document.getElementById("btn2").onclick = function changeExpression(){
    document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn2").innerHTML
     }

     document.getElementById("btn3").onclick = function changeExpression(){
        document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn3").innerHTML
         }

         document.getElementById("btn4").onclick = function changeExpression(){
            document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn4").innerHTML
             }

             document.getElementById("btn5").onclick = function changeExpression(){
                document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn5").innerHTML
                 }

                 document.getElementById("btn6").onclick = function changeExpression(){
                    document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn6").innerHTML
                     }

                     document.getElementById("btn7").onclick = function changeExpression(){
                        document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn7").innerHTML
                         }

                         document.getElementById("btn8").onclick = function changeExpression(){
                            document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn8").innerHTML
                             }

                             document.getElementById("btn9").onclick = function changeExpression(){
                                document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn9").innerHTML
                                 }

                                 document.getElementById("btnAC").onclick = function changeExpression(){
                                    document.getElementById("Expression").innerHTML = null
                                     }

                                     document.getElementById("btn%").onclick = function changeExpression(){
                                        document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn%").innerHTML
                                         }

                                         document.getElementById("btn/").onclick = function changeExpression(){
                                            document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn/").innerHTML
                                             }

                                             document.getElementById("btn-").onclick = function changeExpression(){
                                                document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn-").innerHTML
                                                 }
                                                 document.getElementById("btn+").onclick = function changeExpression(){
                                                    document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn+").innerHTML
                                                     }
                                                     document.getElementById("btn*").onclick = function changeExpression(){
                                                        document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn*").innerHTML
                                                         }

                                                         document.getElementById("btn=").onclick = function changeExpression(){
                                                            document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn=").innerHTML
                                                             }
                                                             document.getElementById("btn.").onclick = function changeExpression(){
                                                                document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn.").innerHTML
                                                                 }

                                                                 document.getElementById("btn.").onclick = function clearDisplay(){
                                                                  document.getElementById("Expression").innerHTML = document.getElementById("Expression").innerHTML + document.getElementById("btn.").innerHTML
                                                                   }


                                                                   document.getElementById("btnc").onclick = function clearDisplay(){
                                                                     document.getElementById("Expression").innerHTML = " "
                                                                      }
    
                        
    
 document.getElementById("btn=").onclick = function(){document.getElementById("result")
    
 var exp=document.getElementById("Expression").innerHTML;
 document.getElementById("result").innerHTML=eval(exp)
 }
    



 let time = document.getElementById("time");

 setInterval(() =>{
let d = new Date();
time.innerHTML = d.toLocaleTimeString();

 },1000)


 