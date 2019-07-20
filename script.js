$.getJSON('https://api.myjson.com/bins/jcmhn', function(data){
	let text = transform(data.text);
	console.log(text);
	write(text);	
});


//Обработка нажатия:
	
$('.btn').click(function(){
	$.getJSON('https://api.myjson.com/bins/jcmhn').done(function(data){
		reWrite(data.text);
	});
	event.preventDefault();		//отключение перезагрузки страницы
});



//функция замены элементов в тексте
function reWrite(story){
	let array = readInput();
	let text = transform(story);
	for(let i = 1; i<7; i++){
		text = text.replace(new RegExp("{var" + i +"}", 'g'), array[i]);
	}
	text = text.replace('{speach}', array[7]);
	write(text);
}

//Запись в result :
function write(data){
	$('.result').html(data);
}


//функция чтения из текстовых полейЖ
function readInput(){
	let array = [];
	for(let i = 1; i<7; i++){
		array[i] = $(`#var${i}`).val();
	}
	array[7] = $('#speach').val();
	return array;
}

//преобразование массива в тип string с добавлением переноса по строкам.
	function transform(story){
	let text = "";
	
	story.forEach(function(key){
		text+=key + "<br>";
	});
	
	return text;
}
