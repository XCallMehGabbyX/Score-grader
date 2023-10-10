let btn = document.getElementById("get-score");

btn.addEventListener('click', function(){
    let noScore = "";
    let s = document.getElementById("score");
    let score_input = s.value;

    if(score_input == ""){
        noScore = "Required!";
        document.getElementById("score_error").innerHTML = noScore;
    } else {
        noScore = "";
        document.getElementById("score_error").innerHTML = noScore;
    }
 
    var grade;

    switch(true){
        case isNaN(score_input):
            alert("Invalid entry");
            grade = ""
            break;
        case (score_input < 0):
            alert("Negative score is not allowed!");
            grade = ""
            break;
        case ((score_input > 0) && (score_input < 40)):
            grade = "F9";
            alert(`Your score is ${score_input} and your grade is ${grade}`);
            break;
        case ((score_input >= 40) && (score_input <= 45)):
            grade = "E8";
            alert(`Your score is ${score_input} and your grade is ${grade}`);
            break;
        case ((score_input >= 50) && (score_input <= 55)):
            grade = "D7";
            alert(`Your score is ${score_input} and your grade is ${grade}`);
            break;
        case ((score_input >= 60) && (score_input <= 65)):
            grade = "C6";
            alert(`Your score is ${score_input} and your grade is ${grade}`);
            break;
        case ((score_input >= 70) && (score_input <= 100)):
            grade = "A1";
            alert(`Your score is ${score_input} and your grade is ${grade}`);
            break;
        case (score_input > 100):
            alert("Score cannot be greater than 100");
            grade = ""
            break;
        default:
            alert('Please enter a value');
            grade = ""
            break;
    }
    let output = (document.getElementById("output").innerHTML = grade);
});