function isLeap(year) {
    
    /**************Don't change the code above****************/    
        var leap = false;
        //Write your code here.    
        if(year%4===0){
            if(year%100===0){
                if(year%400===0){
                    leap = true;
                }
            }leap = true;
        }
        
        if (leap === true){
            return "Leap year."   
        }else{
            return "Not leap year."
        }
        
    
    /**************Don't change the code below****************/    
    
    }