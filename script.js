const lista = document.querySelector('ul')
const input = document.querySelector('input')
const botao = document.querySelector('button')

const tarefas = []

function mostraTarefas(){

    lista.innerHTML = ''

    for(tarefa of tarefas){
        const ele_tarefa = document.createElement('li')
        const textotarefa = document.createTextNode(tarefa)

        const link = document.createElement('a')
        const pos = tarefas.indexOf(tarefa)

        const linktext = document.createTextNode('Excluir')
        link.appendChild(linktext)

        link.setAttribute('onclick', `deletaTarefa(${pos})`)

        ele_tarefa.appendChild(textotarefa)
        lista.appendChild(ele_tarefa)
        ele_tarefa.appendChild(link)

    }
}

function addTarefa() {
    const textotarefa = input.value
    tarefas.push(textotarefa)
    input.value = ''

    mostraTarefas()
}

botao.setAttribute('onclick', 'addTarefa()')

function deletaTarefa(pos){
    tarefas.splice(pos, 1)
    mostraTarefas()
}