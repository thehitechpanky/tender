$( document ).ready(function() {
	//$('.e_ten_box').each(function(){
	//	var field = $('.etend_label').text();
	//	var value = $('.etend_data').text();
	//var i = 0;
	var label = [];
	$(".e_ten_box").each(function(){
		label = $(this).children('.etend_label');
		//console.log(label);
		//field[i++] =  text(); //$(this).attr("id"); //this.id
	});
	console.log(label);
	//$('#html').val(label);
	alert(JSON.stringify(JSON.parse(label)));
	$.ajax({
		type: "POST",
		data: {input: label},
		url: "db.php",
		success: function(data){
			alert('the server returned ' + data);
		}
	});
});
