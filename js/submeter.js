/*$(document).ready(function () {
	var currentGfgStep, nextGfgStep, previousGfgStep;
	var opacity;
	var current = 1;
	var steps = $("fieldset").length;

	setProgressBar(current);

	$(".next-step").click(function () {

		currentGfgStep = $(this).parent();
		nextGfgStep = $(this).parent().next();

		$("#progressbar li").eq($("fieldset")
			.index(nextGfgStep)).addClass("active");

		nextGfgStep.show();
		currentGfgStep.animate({ opacity: 0 }, {
			step: function (now) {
				opacity = 1 - now;

				currentGfgStep.css({
					'display': 'none',
					'position': 'relative'
				});
				nextGfgStep.css({ 'opacity': opacity });
			},
			duration: 500
		});
		setProgressBar(++current);
	});

	$(".previous-step").click(function () {

		currentGfgStep = $(this).parent();
		previousGfgStep = $(this).parent().prev();

		$("#progressbar li").eq($("fieldset")
			.index(currentGfgStep)).removeClass("active");

		previousGfgStep.show();

		currentGfgStep.animate({ opacity: 0 }, {
			step: function (now) {
				opacity = 1 - now;

				currentGfgStep.css({
					'display': 'none',
					'position': 'relative'
				});
				previousGfgStep.css({ 'opacity': opacity });
			},
			duration: 500
		});
		setProgressBar(--current);
	});

	function setProgressBar(currentStep) {
		var percent = parseFloat(100 / steps) * current;
		percent = percent.toFixed();
		$(".progress-bar")
			.css("width", percent + "%")
	}

	$(".submit").click(function () {
		return false;
	})
});

/*Submited files Handling*/ 
next_12.addEventListener('click', (e) => {
    console.log('Botão foi precionado')
    
    /*filesList => ficheiros a fazer upload*/ 
    const filesList = document.querySelector('#files_upload');
    const arrayFiles = Array.from(filesList.files)

    console.log(arrayFiles) //convert filesList to array
    arrayFiles.forEach(function(documento){
        detalhes(documento);
    })

});   


function detalhes(documentos) {
    //Detalhes do documento
    const nome =  documentos.name;
    const size = documentos.size;
    const ultimaAlteracao = documentos.lastModified;
    console.log(`Nome: ${nome}; Espaço:${size}; Alteração:${ultimaAlteracao}`);

    //Create html div
    const detalhesDiv = document.querySelector('#detalhes') //aonde adicionar os Childs
    const elemento = document.createElement('div');
    elemento.appendChild(document.createTextNode(`Nome: ${nome}`)); //nome doc
	

    const childNome = document.createElement('div');
    childNome.appendChild(document.createTextNode(`Mudar nome:`))
    childNome.appendChild(document.createElement('input'))

    const childFaculdade = document.createElement('div');
    childFaculdade.appendChild(document.createTextNode(`Faculdade/Escola:`))
    childFaculdade.appendChild(document.createElement('input'))
	
	const childAtributos = document.createElement('div')
	childAtributos.appendChild(document.createTextNode(`Atributos: `))
	childAtributos.appendChild(document.createElement("input"))
    
    const childDisciplina = document.createElement('div');
    childDisciplina.appendChild(document.createTextNode(`Disciplina:`))
    
    let disciplinaInput = document.createElement('input')
    disciplinaInput.setAttribute("list","select")
    disciplinaInput.setAttribute("name","select ")
    
    let datalistDisciplina = document.createElement('datalist')
    datalistDisciplina.setAttribute("id","select")
    const wb = document.createElement('option');
    wb.value = "Faculdade de ciencias";
    datalistDisciplina.appendChild(wb)

	//opcao secundario ou faculdade
	const secunda = document.createElement('input');
	secunda.setAttribute('type','radio');
	secunda.setAttribute('value','Secunario');
	elemento.appendChild(secunda);

	const Univer = document.createElement('input');
	Univer.setAttribute('type','radio');
	Univer.setAttribute('value','Universidade');
	elemento.appendChild(Univer);

    childDisciplina.appendChild(disciplinaInput)

    elemento.className += 'files-case'; //add class
    elemento.appendChild(childNome).appendChild(childFaculdade).appendChild(childDisciplina).appendChild(childAtributos);
    detalhesDiv.appendChild(elemento); //add div criada ao html
};



Uploadfiles.addEventListener('click', (e) => {
    console.log('Submeter Ficheiros')
    
    /*filesList => ficheiros a fazer upload*/
    const filesList = document.querySelector('#files_upload');
    const arrayFiles = Array.from(filesList.files)

    console.log(arrayFiles) //convert filesList to array
    arrayFiles.forEach(async function(documento){
        let format64 = to_base64(documento); //converter para string

		let response = await fetch('/estudoteca/formdata/post/', { //URL
			method: 'POST',
			body: new FormData('#form') //Transforma toda a data do form num obj
		  });
		  console.log(response)
		  let result = await response.json();
	  ;
	})
});   

function to_base64(file) { //Converte Ficheiros para X64
	var reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = function () {
		console.log(reader.result);
	};
	reader.onerror = function (error) {
		console.log('Error: ', error);
	};
};
/**function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
      if ((encoded.length % 4) > 0) {
        encoded += '='.repeat(4 - (encoded.length % 4));
      }
      resolve(encoded);
    };
    reader.onerror = error => reject(error);
  });
} 
document.getElementById('button').addEventListener('click', function(e) {
	var files = document.getElementById('file').files;
	if (files.length > 0) {
	  getBase64(files[0]);
	}
  });
  
  function getBase64(file) {
	 var reader = new FileReader();
	 reader.readAsDataURL(file);
	 reader.onload = function () {
	   console.log(reader.result);
	 };
	 reader.onerror = function (error) {
	   console.log('Error: ', error);
	 };
};

document.querySelectorAll('fieldset').forEach( function(fields) {
    fields.querySelector('button').addEventListener('click', (e) => {
        console.log(e.target)
    });

});*/
//Progressao da Submissao
document.querySelectorAll('input[type="button"]').forEach(function(button) {
    button.addEventListener('click', (e) => {
        let buttao = e.target.id
        //Avaliar o tipo de butao
        if(e.target.id.search('next') != -1){ //Quando Precionam "Next"
            //Muda o Field
            document.querySelector(`#step_${e.target.id.slice(-2,-1)}`).setAttribute("style","visibility: hidden;"); //Oculta o field atual
            document.querySelector(`#step_${e.target.id.slice(-1)}`).setAttribute("style","visibility: visible;");   //Revela o proximo field
            //Avança o ProgressBar
            document.querySelector(`#step${e.target.id.slice(-1)}`).setAttribute("class","active")//Ativa proximo passo
        } else if(buttao.search('back') != -1){//Quando Precionam "Back"
            //Recua Field
            document.querySelector(`#step_${e.target.id.slice(-2,-1)}`).setAttribute("style","visibility: hidden;"); //Oculta o field atual
            document.querySelector(`#step_${e.target.id.slice(-1)}`).setAttribute("style","visibility: visible;");   //Revela o proximo field
            //Recua ProgressBar
            document.querySelector(`#step${e.target.id.slice(-2,-1)}`).setAttribute("class","")
        }else if(buttao.search(0,5)=='submit'){
            ficheiros
        }
    })
})