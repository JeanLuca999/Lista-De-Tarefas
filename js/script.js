const $adicionar = document.getElementById('adicionar')
let itens = 0

$adicionar.addEventListener('click', ()=>{
    const $h2 = document.querySelector('h2')
    const $textoTarefa = document.getElementById('nova-tarefa')
    const $listaTarefasItens = document.getElementById('lista-tarefas-itens')

    if($textoTarefa.value != ''){
        $listaTarefasItens.innerHTML += gerarItem($textoTarefa.value)
        $h2.innerText = `${++itens} tarefa(s)`
    }
})


function gerarItem(texto){
    return (
        `<li>
            <div>${texto}</div>
            <div>
                <button class="completo" onclick="marcarCompleto(this)">✔️</button>
                <button class="retirar" onclick="retirarElemento(this)">❌</button>
            </div>
        </li>`
    )
}


function marcarCompleto(that){
    let $elementoPai = that.parentNode
    $elementoPai = $elementoPai.parentNode

    let conteudoDoLI = $elementoPai.querySelector('div')
    conteudoDoLI.style.cssText = 'color: green'
}

function retirarElemento(that){
    let $elementoPai = that.parentNode
    $elementoPai = $elementoPai.parentNode
    
    let $li = $elementoPai
    let $ul = $elementoPai.parentNode
    $ul.removeChild($li)

    const $h2 = document.querySelector('h2')
    $h2.innerText = (itens-1 == 0) ? 'Lista Vazia...' : `${--itens} tarefa(s)`
}