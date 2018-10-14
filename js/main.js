$(document).ready(function(){
	
	$("#ok").click(function(){	
		var name=$("#name").val();
		var message="Hello "+name;
		$("#name").val(null)
		$("#container").text(message);
	});
	$("#name").focus(function(){
	});	

});