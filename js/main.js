let tags = ['div', 'div', 'h1', 'h2', 'h2','h2'
,'h2','h3','p','h3','p','h3','p','h3'
,'p','p','h3','p','p', 'p']
let listTag = []
let body = document.querySelector('body')

tags.forEach(tag =>{
    let tagNova = fazedor_de_Tags(tag)
    listTag.push(tagNova)
});

//pegando dados
function catar_dados(){
var nome                      = document.getElementById("In-cab-01");
var data_nasc                 = document.getElementById("In-cab-02");
var email                     = document.getElementById("In-cab-03");
var cid_uf                    = document.getElementById("In-cab-04");
var telefone                  = document.getElementById("In-cab-05");
var ling                      = document.getElementById("In-comp-01");
var fram                      = document.getElementById("In-comp-02");
var bd                        = document.getElementById("In-comp-03");
var so                        = document.getElementById("In-comp-04");
var ferramen                  = document.getElementById("In-comp-05");
var idiomas                   = document.getElementById("In-comp-06");
var links                     = document.getElementById("In-link");
var nome_de_curso             = document.getElementById("In-esc-01");
var grau                      = document.getElementById("In-esc-02");
var nome_univer               = document.getElementById("In-esc-03");
var data_conclusao_previsao   = documetn.getElemnetByid("In-esc-04");
var nome_empresa              = documetn.getElemnetByid("In-exp-01");
var cargo                     = documetn.getElemnetByid("In-exp-02");
var cid_emp                   = documetn.getElemnetByid("In-exp-03");
var data_termino              = documetn.getElemnetByid("In-exp-04");
var atv_realizada             = documetn.getElemnetByid("In-exp-05");
var nome_curso                = documetn.getElemnetByid("In-qua-01");
var nome_inst                 = documetn.getElemnetByid("In-qua-02");
var ano_conclu                = documetn.getElemnetByid("In-qua-03");

//formatacao
var cabecalho = "nome" + nome +"data de nasc" + data_nasc + email + cid_uf + telefone ;
var competencias =ling + fram + bd + so + ferramen + idiomas  ;
var escolaridade = nome_de_curso + grau + nome_univer + data_conclusao_previsao;
var experiencias = nome_empresa + cargo + cid_emp + data_termino + atv_realizada;
var qualificacoes = nome_curso + nome_inst + ano_conclu;

return true;
}

