function bmiCalculator (weight, height) {
    var bmi = weight / (height * height);
    var interpretation = "";
    if (bmi < 18.5){
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    else if(bmi > 18.4 && bmi <= 24.9){
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    else
    {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}