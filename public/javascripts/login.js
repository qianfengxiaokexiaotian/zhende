window.onload = function(){
	
	var arr = ['a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','n','m','q','w','e','r','t','y','u','i','o','p','1','2','3','4','5','6','7','8','9','0'];
	
	var oText = document.getElementById("text");
	
	oText.onclick = function(){
		var str = "";
		while(str.length < 4){
			
			var iNum  = parseInt(Math.random()*100)
			
			 while(iNum > 36){
			 	
			 	iNum =  parseInt(Math.random()*100)
			 	
			 }
			
			str += arr[iNum];
			
		}
		
		oText.value = str.toUpperCase()
		
		
	}
	
	
}































