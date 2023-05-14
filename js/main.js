import construirTela from "./criartags.js";
//pegando dados

let listaTags = construirTela()

//console.log(listaTags[4])


listaTags[32].addEventListener('click', function(event){
    event.preventDefault()
    let inputs = document.querySelectorAll('input')

    let inputname       = inputs[0].value
    let inputidade      = inputs[1].value
    let inputemail      = inputs[2].value
    let inputcid        = inputs[3].value
    let inputphone      = inputs[4].value
    let inputling       = inputs[5].value
    let inputframe      = inputs[6].value
    let inputbd         = inputs[7].value
    let inputso         = inputs[8].value
    let inputferr       = inputs[9].value
    let inputidi        = inputs[10].value
    let inputlink       = inputs[11].value
    let inputnomecurso  = inputs[12].value
    let inputgrau       = inputs[13].value
    let inputnomeuniver = inputs[14].value
    let inputdataconclu = inputs[15].value
    let inputnomeempres = inputs[16].value
    let inputcargo      = inputs[17].value
    let inputcidadeempr = inputs[18].value
    let inputdatatermin = inputs[19].value
    let inputatv        = inputs[20].value
    let inputnomecur    = inputs[21].value
    let inputnomeinsti  = inputs[22].value
    let inputanoconclu  = inputs[23].value

    let ps = document.querySelectorAll('p')
    

    window.location.href = `http://127.0.0.1:5500/curriculo.html?In-cab-01=${inputname}&In-cab-02=${inputidade}&In-cab-03=${inputemail}&In-cab-04=${inputcid}&In-cab-05=${inputphone}&In-comp-01=${inputling}&In-comp-02=${inputframe}&In-comp-03=${inputbd}&In-comp-04=${inputso}&In-comp-05=${inputferr}&In-comp-06=${inputidi}&In-link=${inputlink}&In-esc-01=${inputnomecurso}&In-esc-02=${inputgrau}&In-esc-03=${inputnomeuniver}&In-esc-04=${inputdataconclu}&In-exp-01=${inputnomeempres}&In-exp-02=${inputcargo}&In-exp-03=${inputcidadeempr}&In-exp-04=${inputdatatermin}&In-exp-05=${inputatv}&In-qua-01=${inputnomecur}&In-qua-02=${inputnomeinsti}&In-qua-03=${inputanoconclu}`

    //event.target.parentElement.reset()

})
    