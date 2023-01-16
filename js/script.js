/*Info escolas opção*/
const escolas = [];

const faculdades = ['fct',
'fcul',
'Técnico',
];

const cursos = [];

const uni_disciplinas = [];


function optionsLoader() {
    //loop para addicionar opcoes da faculdade
    faculdades.forEach(function(Faculdade){
        options(Faculdade,"#faculdade");
    });

    //loop para opcoes de cursos
    cursos.forEach(function(Curso) {
        options(Curso,'#cursos')
    });

    //loop para opcoes das disciplinas
    uni_disciplinas.forEach(function(Disciplina){
        options(Disciplina,'#disciplinas')
    });

};

function options(opcao,id) {
    //Select by id
    const selectIput = document.querySelector(`${id}`); 
    //cria opção
    const option = document.createElement('option');
    option.setAttribute('value', `${opcao}`);
    option.setAttribute('id', `${opcao}`);
    //adiciona opcao
    selectIput.appendChild(option);
};

//GET files from database
const url = "";
const key = "";
const filtros = document.querySelectorAll('.uni_form')


filtros.forEach(function(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        let filtrosInputs = {listas:[], caracteristicas:[], nome:""}; //Objecto com a data importante
        
        let inputsArr = Array.from(filtros[1]); //Array so com o filtro(uniform)

        inputsArr.forEach(function(input) { //Obtem os valores de cada input dos filtros
            console.log(input)
            if(input.name.search('_input') !=  -1){ //para as listas
                filtrosInputs.listas.push(`${input.value}`)
            } else if(input.type === 'radio'){  //para as checkboxes
                filtrosInputs.caracteristicas.push(input.checked)
            }
            })  
        
        filtrosInputs.nome = filtros[0][0].value //adiciona o texto da pesquisa
     
        //Request de pesquisa 
        fetch(`${url}`, { method: 'GET', headers: {'x-api-key': `${key}` }, 
        body: {"faculdade":`${filtrosInputs.listas[0]}`,"curso":`${filtrosInputs.listas[1]}`,"disciplinas":`${filtrosInputs.listas[2]}`,
        "tipo":`${filtrosInputs.caracteristicas}`}}) //body, objecto com os valores dos inputs

        .then(response => response.json())
        .then(data => console.log(data));
    })
});



//NAO IMPORTANTE
//CODIGO DE INSPIRACAO
// document.addEventListener('DOMContentLoaded', () => {

//   document.querySelector('form').addEventListener('submit', event => {
//     event.preventDefault()
//     console.log('submit')
//   })
  
//   const inputField = document.querySelector('input[type="text"]')
  
//   inputField.addEventListener('input', event => {
//     console.log(`The value entered is ${inputField.value}`)
//   })
  
//   inputField.addEventListener('cut', event => {
//     console.log('cut')
//   })
  
//   inputField.addEventListener('copy', event => {
//     console.log('copy')
//   })
  
//   inputField.addEventListener('paste', event => {
//     console.log('paste')
//   })
// })