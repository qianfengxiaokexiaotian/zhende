$("#ul1>li").eq(1).each(function(index,value){
		$(this).click(function(event){
			
		   if ($("#ul2").css("display") == "none"){
		   	
	             $("#ul2").css("display","block")
	           
		   }else{
		   	     $("#ul2").css("display","none")
		   	
		   }
			  event.stopPropagation();
		})
	})



$("#ul2>li").eq(1).click(function(){
	
	
	$("#main_e").css({"display":"block"})
	
	$("#main_y").css({"display":"none"})
	
	
})


$("#ul2>li").eq(0).click(function(){
	
	
	$("#main_e").css({"display":"none"})
	
	$("#main_y").css({"display":"block"})
	
	
	
})

$("#btn39").click(function(){
	
	if( txt1.value=="" ){
		alert("输入不能为空")
	}

})

$("#main_z>ul>li>span").click(function(){
	
$(this).parent("ul>li").parent("ul").remove();
	
})



function fn(){
	$.ajax({
		type:"get",
		url:"",
		async:true,
		data:{
			pageIndex :pageIndex
		},
		
		success : function(res){
			 res_index = parseInt(res.pageindex)
			 oTotalRecords.innerHTML = res_index 
			 oTotalPages.innerHTML = Math.ceil(res_index/5)
			 res = res.items
			var resLength = res.lentg;
			for(let i = 0;i<resLength;i++){
				var goodname = res[i].goodname
				var cargo = res[i].cargo 
				var brand = res[i].brand 
				var myprice = res[i].myprice
				var waiprice = res[i].wriprice
				var goodsimg = res[i].goodsimg
				var inventory = res[i].inventory
				var sales = res[i].sales 
				var oBr = `
				            <ul>
				                <li><input type="checkboxs[]" value="111">${index++}</li>
				                <li>${goodname}</li>
				                <li>${crgo}</li>
				                <li>${myprice}<li>
				                <li><img src="images/canvas0023_03.png"></li>
				                <li><img src="images/canvas0023_03.png"></li> 
				                <li><img src="images/canvas0023_03.png"></li> 
				                <li><img src="images/canvas0023_03.png"></li>
				                <li>2</li>
				                <li>${inventory}</li>
				                <li>${sales}</li>
				                <li><a><img src="images/2018_03.png"></a><span><img src="images/2018-01-18_123049_05.png"></span></li>
				            </ul>
			              `
			    }
			$(oBr).appendTo($("#main_z"))
		}
	});
	
}






































