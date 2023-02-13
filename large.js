    //1 Any one larger
		var num=prompt("enter the number");
		var sum=prompt("enter the another number")
			if(num>sum){
				document.write("This num is largest number");
			}
			else if (sum>num) {
				document.write("sum value is larger")
			}
			else{
				document.write("this is small")
			}
			
	//2 positive value
		var num=prompt("enter value");
		if(num>0){
			console.log("this is positive")
		}
		else{
			console .log("nagative")
		}
	
	//3 larger&small
		var a=prompt("Enter First Value");
		var b=prompt("Enter Second Value");
		var c=prompt("Enter Third Value");
		if(a>b&&a>c){
			if(b>c){
				document.write("A is larger c is small")
			}
			else{
				document.write("A is larger B is small")
			}
		}
		else if((b>a)&&(b>c)){
			if(a>c){
				document.write("B is larger c is small")
			}
			else{
				document.write("B is larger a is small")
		}
		}
		else{
			if(b>c){
				document.write("Z is larger c is small")
			}
			else{
				document.write("Z is larger b is small")
			}
		}
		