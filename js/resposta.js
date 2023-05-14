const urlParams = new URLSearchParams(window.location.search);

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
            
console.log(nome)
let tags = ['div', 'p','p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p']
let conteudo = []
let body = document.querySelector('body')

// criei as 3 tags: div, img e p
tags.forEach(tag => {
    let tagNova = criarTags(tag)
    conteudo.push(tagNova)
});

conteudo[1].textContent  =(nome)
conteudo[2].textContent  =(data_nasc)
conteudo[3].textContent  =(email)
conteudo[4].textContent  =(cid_uf)
conteudo[5].textContent  =(telefone)
conteudo[6].textContent  =(ling)
conteudo[7].textContent  =(fram)
conteudo[8].textContent  =(bd)
conteudo[9].textContent  =(so)
conteudo[10].textContent =(ferramen)
conteudo[11].textContent =(idiomas)
conteudo[12].textContent =(links)
conteudo[13].textContent =(nome_de_curso)
conteudo[14].textContent =(grau)
conteudo[15].textContent =(nome_univer)
conteudo[16].textContent =(data_conclusao_previsao)
conteudo[17].textContent =(nome_empresa)
conteudo[18].textContent =(cargo)
conteudo[19].textContent =(cid_emp)
conteudo[20].textContent =(data_termino)
conteudo[21].textContent =(atv_realizada)
conteudo[22].textContent =(nome_curso)
conteudo[23].textContent =(nome_inst)
conteudo[24].textContent =(ano_conclu)


// adicionei a div no DOM
body.appendChild(conteudo[0])
conteudo[0].classList.add('container')

// incluindo na div a tag img e a p
conteudo[0].appendChild(conteudo[1])
conteudo[0].appendChild(conteudo[2])
conteudo[0].appendChild(conteudo[3])
conteudo[0].appendChild(conteudo[4])
conteudo[0].appendChild(conteudo[5])
conteudo[0].appendChild(conteudo[6])
conteudo[0].appendChild(conteudo[7])
conteudo[0].appendChild(conteudo[8])
conteudo[0].appendChild(conteudo[9])
conteudo[0].appendChild(conteudo[10])
conteudo[0].appendChild(conteudo[11])
conteudo[0].appendChild(conteudo[12])
conteudo[0].appendChild(conteudo[13])
conteudo[0].appendChild(conteudo[14])
conteudo[0].appendChild(conteudo[15])
conteudo[0].appendChild(conteudo[16])
conteudo[0].appendChild(conteudo[17])
conteudo[0].appendChild(conteudo[18])
conteudo[0].appendChild(conteudo[19])
conteudo[0].appendChild(conteudo[20])
conteudo[0].appendChild(conteudo[21])
conteudo[0].appendChild(conteudo[23])
conteudo[0].appendChild(conteudo[24])

conteudo[1].classList.add('texto')
conteudo[2].classList.add('texto')
conteudo[3].classList.add('texto')
conteudo[4].classList.add('texto')
conteudo[5].classList.add('texto')
conteudo[6].classList.add('texto')
conteudo[7].classList.add('texto')
conteudo[8].classList.add('texto')
conteudo[9].classList.add('texto')
conteudo[10].classList.add('texto')
conteudo[11].classList.add('texto')
conteudo[12].classList.add('texto')
conteudo[13].classList.add('texto')
conteudo[14].classList.add('texto')
conteudo[15].classList.add('texto')
conteudo[16].classList.add('texto')
conteudo[17].classList.add('texto')
conteudo[18].classList.add('texto')
conteudo[19].classList.add('texto')
conteudo[20].classList.add('texto')
conteudo[21].classList.add('texto')
conteudo[22].classList.add('texto')
conteudo[23].classList.add('texto')
conteudo[24].classList.add('texto')



/*
let body = document.querySelector('body')
let p = 
p.textContent = "Everson Bacelli"
body.appendChild(p)
*/


// método fabrica
function criarTags(tag){
    let novaTag = document.createElement(tag)
    return novaTag
}