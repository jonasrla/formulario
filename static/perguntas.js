// Não meche aqui pelo amor de Deus!

convert = function(meta, values){
	result = "";
	for (var i = 0; i < meta.length; i++){
		filt_v = values[i].replace(/\s/, '+');
		result += meta[i] + "=" + filt_v;
		
		if (i != meta.length-1){
			result+="&";
		}
	}
	return result;
}

//

// Entre aqui as perguntas

var values = [];
values.push(prompt("pergunta", "dica"));
values.push(prompt("outra pergunta", "outra dica"));

//



// Entre aqui o nome de cada variável		OBS:. Não bote espaço nos nomes

var meta = ["mamao", "banana"];

//

params = convert(meta, values);

var http = new XMLHttpRequest();

http.open("POST", "sucesso", true);


http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

http.onreadystatechange = function() {//Call a function when the state changes.
	if(http.readyState == 4 && http.status == 200) {
		document.getElementsByTagName("h1")[0].innerHTML = http.responseText;
	}
}

http.send(params);