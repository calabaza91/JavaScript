// //Create your function below this line.
// function bmiCalculator(weight, height){
//     var bmi = Math.round(weight/(Math.pow(height, 2)));
//     return bmi;
// }

// bmiCalculator(65, 1.8); 

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal around 20 in this case.

*/

function bmiCalculator (weight, height) {
    var bmi = Math.round(weight/Math.pow(height, 2));
    var interpretation;
    if(bmi > 24.9){
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }else if (18.5 <= bmi && bmi <= 24.9){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }else{
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    return interpretation;
}

bmiCalculator(6, 2);