$(document).ready(function() {
    $('#form-tarefa').submit(function(e) {
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();

    if (novaTarefa.trim() !== '') { // Verifica se o input não está vazio
        // Seleciona o elemento com o id lista (uma lista <ul> ou <ol>) e adiciona um novo item de lista (<li>) contendo o texto da nova tarefa.
            $('#lista').append('<li>' + novaTarefa + '</li>'); // Adiciona um novo item à lista
            $('#nome-tarefa').val(''); // Limpa o campo de input
        }
    });


    // Riscar Tarefa: Quando um item da lista é clicado, a classe riscado é adicionada a ele, o que aplica o estilo riscado. 
    //Se o item já estiver riscado, clicar nele novamente não terá efeito (ele permanecerá riscado).
    // Riscar a tarefa ao clicar
    $('#lista').on('click', 'li', function() {
        $(this).addClass('riscado');
    });
});

// Em jQuery, $(this) refere-se ao elemento DOM que disparou o evento atual. No contexto do evento de clique, $(this) é o item da lista (<li>) que foi clicado.
// e.preventDefault() permite que possamos processar a submissão do formulário com JavaScript sem recarregar a página.

