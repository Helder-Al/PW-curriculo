
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
    listaTags[29].name = 'In-qua-01'
    listaTags[30].name = 'In-qua-02'
    listaTags[31].name = 'In-qua-03'
    listaTags[32].textContent='Enviar'
    

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

    //css dos buxinhos
    listaTags[1].classList.add ("txt")
    listaTags[2].classList.add ("input")
    listaTags[3].classList.add ("input")
    listaTags[4].classList.add ("input")
    listaTags[5].classList.add ("input")
    listaTags[6].classList.add ("input")
    listaTags[2].classList.add ("is-success")
    listaTags[3].classList.add ("is-success")
    listaTags[4].classList.add ("is-success")
    listaTags[5].classList.add ("is-success")
    listaTags[6].classList.add ("is-success")
    
    listaTags[7].classList.add ("txt")
    listaTags[8] .classList.add ("input")
    listaTags[9] .classList.add ("input")
    listaTags[10].classList.add ("input")
    listaTags[11].classList.add ("input")
    listaTags[12].classList.add ("input")
    listaTags[13].classList.add ("input")
    listaTags[8] .classList.add ("is-success")
    listaTags[9] .classList.add ("is-success")
    listaTags[10].classList.add ("is-success")
    listaTags[11].classList.add ("is-success")
    listaTags[12].classList.add ("is-success")
    listaTags[13].classList.add ("is-success")
    listaTags[14].classList.add("txt")
    listaTags[15].classList.add ("input")
    listaTags[15].classList.add ("is-success")
    listaTags[17].classList.add("txt")
    listaTags[18].classList.add ("input")
    listaTags[19].classList.add ("input")
    listaTags[20].classList.add ("input")
    listaTags[21].classList.add ("input")
    listaTags[18].classList.add ("is-success")
    listaTags[19].classList.add ("is-success")
    listaTags[20].classList.add ("is-success")
    listaTags[21].classList.add ("is-success")
    listaTags[22].classList.add("txt")
    listaTags[23].classList.add ("input")
    listaTags[24].classList.add ("input")
    listaTags[25].classList.add ("input")
    listaTags[26].classList.add ("input")
    listaTags[27].classList.add ("input")
    listaTags[23].classList.add ("is-success")
    listaTags[24].classList.add ("is-success")
    listaTags[25].classList.add ("is-success")
    listaTags[26].classList.add ("is-success")
    listaTags[27].classList.add ("is-success")
    listaTags[28].classList.add("txt")
    listaTags[29].classList.add ("input")
    listaTags[30].classList.add ("input")
    listaTags[31].classList.add ("input")
    listaTags[29].classList.add ("is-success")
    listaTags[30].classList.add ("is-success")
    listaTags[31].classList.add ("is-success")
    listaTags[32].classList.add ("button")

    //listaTags[2].classList.add ("")
    //listaTags[3].classList.add ("")
    //listaTags[4].classList.add ("")
    //listaTags[5].classList.add ("")
    //listaTags[6].classList.add ("")
//
    //listaTags[8].classList.add ("")
    //listaTags[9].classList.add ("")
    //listaTags[10].classList.add("")
    //listaTags[11].classList.add("")
    //listaTags[12].classList.add("")
    //listaTags[13].classList.add("")
    //
    //listaTags[15].classList.add("")
    //
    //listaTags[18].classList.add("")
    //listaTags[19].classList.add("")
    //listaTags[21].classList.add("")
    //
    //listaTags[23].classList.add("")
    //listaTags[24].classList.add("")
    //listaTags[25].classList.add("")
    //listaTags[26].classList.add("")
    //listaTags[27].classList.add("")
    //
    //listaTags[29].classList.add("")
    //listaTags[30].classList.add("")
    //listaTags[31].classList.add("")
    
    
    return listaTags
}

function incluirNaTela(){
   
    
    let tag = ['div', 'label', 'input', 'input', 'input', 'input', 'input', 'label', 'input', 'input', 'input', 'input',
     'input', 'input','label', 'input', 'div', 'label', 'input', 'input', 'input', 'input', 'label', 'input', 'input',
      'input', 'input', 'input', 'label','input', 'input', 'input', 'button']
   
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