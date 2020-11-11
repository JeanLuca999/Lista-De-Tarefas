const $adicionar = document.getElementById('adicionar')
let itens = 0

$adicionar.addEventListener('click', ()=>{
    const $h2 = document.querySelector('h2')
   const $textoTarefa = document.getElementById('nova-tarefa')
   const $listaTarefasItens = document.getElementById('lista-tarefas-itens')

    $h2.innerText = `${++itens} items`
   $listaTarefasItens.innerHTML += gerarItem($textoTarefa.value)
})


function gerarItem(texto){
    return (
    `<li>
        <div>${texto}</div>
        <div>
            <button class="completo">✔️</button>
            <button class="retirar">❌</button>
        </div>
    </li>`
    )
}