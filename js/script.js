const $adicionar = document.getElementById('adicionar')
const $h2 = document.querySelector('h2')
const $textoTarefa = document.getElementById('nova-tarefa')
const $listaTarefasItens = document.getElementById('lista-tarefas-itens')
let itens = 0

$adicionar.addEventListener('click', ()=>{
    if($textoTarefa.value != ''){
        $listaTarefasItens.innerHTML += gerarTarefa($textoTarefa.value)
    }
})


function gerarTarefa(texto){
    $textoTarefa.value = ''
    $h2.innerText = `${++itens} tarefa(s)`

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

    $elementoPai.style.cssText = 'color:white; background-color: rgb(83, 197, 83);'
}


function retirarElemento(that){
    let $elementoPai = that.parentNode
    $elementoPai = $elementoPai.parentNode
    
    let $li = $elementoPai
    let $ul = $elementoPai.parentNode
    $ul.removeChild($li)

    $h2.innerText = `${--itens} tarefa(s)`

    if(itens == 0){
        $h2.innerText = 'Lista Vazia...'
    }
}