function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        var output = [];
        if (n === 1){
            output = [0];
        }else if(n === 2){
            output = [0,1];
        }
        else {
            output = [0,1];
            for (var i = 2; i < n; i++){
                output.push(output[output.length - 2] + output[output.length - 1]);
            }
        }
        return output;
        
        
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    