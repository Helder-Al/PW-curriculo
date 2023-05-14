import construirTela from "./criartags.js";
//pegando dados
const urlParams = new URLSearchParams(window.location.search);
export default function  catar_dados(){
    var nome                      = urlParams.get("In-cab-01");
    var data_nasc                 = urlParams.get("In-cab-02");
    var email                     = urlParams.get("In-cab-03");
    var cid_uf                    = urlParams.get("In-cab-04");
    var telefone                  = urlParams.get("In-cab-05");
    var ling                      = urlParams.get("In-comp-01");
    var fram                      = urlParams.get("In-comp-02");
    var bd                        = urlParams.get("In-comp-03");
    var so                        = urlParams.get("In-comp-04");
    var ferramen                  = urlParams.get("In-comp-05");
    var idiomas                   = urlParams.get("In-comp-06");
    var links                     = urlParams.get("In-link");
    var nome_de_curso             = urlParams.get("In-esc-01");
    var grau                      = urlParams.get("In-esc-02");
    var nome_univer               = urlParams.get("In-esc-03");
    var data_conclusao_previsao   = urlParams.get("In-esc-04");
    var nome_empresa              = urlParams.get("In-exp-01");
    var cargo                     = urlParams.get("In-exp-02");
    var cid_emp                   = urlParams.get("In-exp-03");
    var data_termino              = urlParams.get("In-exp-04");
    var atv_realizada             = urlParams.get("In-exp-05");
    var nome_curso                = urlParams.get("In-qua-01");
    var nome_inst                 = urlParams.get("In-qua-02");
    var ano_conclu                = urlParams.get("In-qua-03");
    

}
let listaTags = construirTela()

//console.log(listaTags[4])


listaTags[4].addEventListener('click', function(event){
    event.preventDefault()
    let inputs = document.querySelectorAll('input')

    let inputName = inputs[0].value
    let inputIdade = inputs[1].value

    let ps = document.querySelectorAll('p')
    

    window.location.href = `http://127.0.0.1:5501/resposta.html?nome=${inputName}&idade=${inputIdade}`

    //event.target.parentElement.reset()

})
    