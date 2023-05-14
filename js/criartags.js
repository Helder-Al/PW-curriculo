
var listaTags = []
var form = document.querySelector('form')
 let body = document.querySelector('body')

export default function construirTela(){

    

    incluirNaTela()
    listaTags[1].textContent = 'Currículo'
    listaTags[2].name = 'In-cab-01'
    listaTags[3].name = 'In-cab-02'
    listaTags[4].name = 'In-cab-03'
    listaTags[5].name = 'In-cab-04'
    listaTags[6].name = 'In-cab-05'
    listaTags[7].textContent = 'Competencias'
    listaTags[8].name = 'In-comp-01'
    listaTags[9].name = 'In-comp-02'
    listaTags[10].name = 'In-comp-03'
    listaTags[11].name = 'In-comp-04'
    listaTags[12].name = 'In-comp-05'
    listaTags[13].name = 'In-comp-06'
    listaTags[14].textContent = 'Links'
    listaTags[15].name = 'In-link'
    //form left
    body.appendChild(listaTags[0])
    listaTags[0].classList.add("formleft")
    listaTags[0].appendChild(listaTags[1])
    listaTags[0].appendChild(listaTags[2])
    listaTags[0].appendChild(listaTags[3])
    listaTags[0].appendChild(listaTags[4])
    listaTags[0].appendChild(listaTags[5])
    listaTags[0].appendChild(listaTags[6])
    listaTags[0].appendChild(listaTags[7])
    listaTags[0].appendChild(listaTags[8])
    listaTags[0].appendChild(listaTags[9])
    listaTags[0].appendChild(listaTags[10])
    listaTags[0].appendChild(listaTags[11])
    listaTags[0].appendChild(listaTags[12])
    listaTags[0].appendChild(listaTags[13])
    listaTags[0].appendChild(listaTags[14])
    listaTags[0].appendChild(listaTags[15])
    //formleft end
    
    listaTags[17].textContent = 'Escolaridade'
    listaTags[18].name = 'In-esc-01'
    listaTags[19].name = 'In-esc-02'
    listaTags[20].name = 'In-esc-03'
    listaTags[21].name = 'In-esc-04'
    listaTags[22].textContent= 'Experiência'
    listaTags[23].name = 'In-exp-01'
    listaTags[24].name = 'In-exp-02'
    listaTags[25].name = 'In-exp-03'
    listaTags[26].name = 'In-exp-04'
    listaTags[27].name = 'In-exp-05'
    listaTags[28].textContent = 'Qualificações'
    listaTags[29].name = 'Links'
    listaTags[30].name = 'Links'
    listaTags[31].name = 'Links'
    

    //formright
    body.appendChild(listaTags[16])
    listaTags[16].classList.add("formright")
    listaTags[16].appendChild(listaTags[17])
    listaTags[16].appendChild(listaTags[18])
    listaTags[16].appendChild(listaTags[19])
    listaTags[16].appendChild(listaTags[20])
    listaTags[16].appendChild(listaTags[21])
    listaTags[16].appendChild(listaTags[22])
    listaTags[16].appendChild(listaTags[23])
    listaTags[16].appendChild(listaTags[24])
    listaTags[16].appendChild(listaTags[25])
    listaTags[16].appendChild(listaTags[26])
    listaTags[16].appendChild(listaTags[27])
    listaTags[16].appendChild(listaTags[28])
    listaTags[16].appendChild(listaTags[29])
    listaTags[16].appendChild(listaTags[30])
    listaTags[16].appendChild(listaTags[31])
    //formright end
    return listaTags
}

function incluirNaTela(){
   
    
    let tag = ['div', 'label', 'input', 'input', 'input', 'input', 'input', 'label', 'input', 'input', 'input', 'input',
     'input', 'input','label', 'input', 'div', 'label', 'input', 'input', 'input', 'input', 'label', 'input', 'input',
      'input', 'input', 'input', 'label','input', 'input', 'input']
   
    tag.forEach(t => {
        listaTags = criarTags(t)
        
    });
    console.log(listaTags)

}


function criarTags(tag){
    //criando uma tag
    let novaTag = document.createElement(tag)
    
    // inclui na lista
    listaTags.push(novaTag)
    form.appendChild(novaTag)
    return listaTags
}

//body.appendChild(listaTags[3])
//    listaTags[3].classList.add("input")
//    listaTags[3].classList.add("is-success")