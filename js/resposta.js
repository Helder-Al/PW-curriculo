import dados from "./main.js"

console.log(dados.nome)
//vai ser usado dps
//nome                   
//data_nasc              
//email                  
//cid_uf                 
//telefone               
//ling                   
//fram                   
//bd                     
//so                     
//ferramen               
//idiomas                
//links                  
//nome_de_curso          
//grau                   
//nome_univer            
//data_conclusao_previsao
//nome_empresa           
//cargo                  
//cid_emp                
//data_termino           
//atv_realizada          
//nome_curso             
//nome_inst              
//ano_conclu             

let tags = ['div', 'img', 'p']
let listaTags = []
let body = document.querySelector('body')

// criei as 3 tags: div, img e p
tags.forEach(tag => {
    let tagNova = criarTags(tag)
    listaTags.push(tagNova)
});

listaTags[2].textContent = dados.nome
listaTags[2].textContent = dados.data_nasc

// adicionei a div no DOM
body.appendChild(listaTags[0])
listaTags[0].classList.add('container')

// incluindo na div a tag img e a p
listaTags[0].appendChild(listaTags[1])


listaTags[0].appendChild(listaTags[2])
listaTags[2].classList.add('texto')




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