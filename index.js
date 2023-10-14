var trocatexto= window.document.getElementById('area')
trocatexto.addEventListener('click', Clicar)
trocatexto.addEventListener('mouseenter', Entrar)
trocatexto.addEventListener('mouseout', Sair)




function Entrar (){
    trocatexto.innerText = 'Entrou'
}

function Sair (){
    trocatexto.innerText= 'Saiu'
    trocatexto.style.background = 'Green'
}

function Clicar(){
    trocatexto.innerText = 'Clicou !'
    trocatexto.style.background = 'Red'
 }

/*  


*/