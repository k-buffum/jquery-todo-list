// Commented out functions are what the TA's helped me with.

$('document').ready(function() {
	var listArr = [];
	// if(JSON.parse(localStorage.getItem('List'))){
	// 	listArr = JSON.parse(localStorage.getItem('List'));
	// };
	// for (var i = 0; i < listArr.length; i++) {
	// 	$("<li>" + listArr[i] + "        <button type='button' id='deleteButton'>Delete</button>" + "</li>").appendTo('#todoList');
	// }
	console.log(JSON.parse(localStorage.getItem('List')));
	$('#todoInput').on('submit', function(e) {
		e.preventDefault();
		var $todoItem = $('#todoInput input').val();
		// listArr.push($todoItem);
		// localStorage.setItem('List', JSON.stringify(listArr));
		$('#todoInput input').val('');

		var newThing = $("<li>"  + $todoItem + "        <button type='button' id='deleteButton'>Delete</button>" + "</li>");

		newThing.appendTo('#todoList');
		console.log(localStorage.getItem('List'));
	});

	$('ul').on("click", "li button", function() {
		$(this).parent().remove();
	});

	$('#todoList').sortable();

});