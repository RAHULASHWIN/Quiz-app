function submitAnswers(){
    var total =5;
    var score=0;

    //Getting user values
    var q1=document.forms["quizForm"]["q1"].value;
    var q2=document.forms["quizForm"]["q2"].value;
    var q3=document.forms["quizForm"]["q3"].value;
    var q4=document.forms["quizForm"]["q4"].value;
    var q5=document.forms["quizForm"]["q5"].value;
    
    //Validation of which question is not been written
    for(var i=1;i<total;i++){
        if(eval('q'+i)==null || eval('q'+i)==""){//this eval function adds string and evaluates with i variable u can't use
                                                //array in this one because q is not an array and valuse is been stored in each value in it
            alert("you missed question "+i);
            return false;
        }
    }

    var answers=["a","b","c","a","a"];
    //Check answers
    for(var j=1;j<total;j++){
        if(eval('q'+j)==answers[j-1]){
            score++;
        }
    }
    
    alert("your score is "+score+"out of"+total);

    document.getElementById("results").innerHTML="<h3>your score is <b>"+score+"</b> out of <b>"+total+"</b></h3>"; 

}