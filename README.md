# Descrição

O repositório reune um compilado com soluções práticas em Google Script e Html 
que criei enquanto estagiava no financeiro de uma empresa de prestação de serviços
de pequeno porte.

# Utilização

A equipe utilizava majoritariamente o googledrive como um "banco de dados".
Sendo assim, os projetos deste repositório são voltados para uso em editor de Scripts 
dos produtos da google, tendo sua utilidade voltada a este ambiente, principalmente sheets.

# Conteúdo 

## chart-js.html, login.html e page-js.html
 Utilizado dentro do editor de scripts do googlesheets com o intuito de redirecionar 
 o usuário para uma tela com dashboards interativos. Os dashboards são feitos com biblioteca google.charts, que tornam
 os graficos mais interativos do que os charts do sheets, além de ser uma boa (e mais segura) alternativa para se visualizar, 
 em tempo real, somente os gráficos atualizados sem precisar expor as planilhas ao usuario.
 
## diferença_arrays.gs
 O codigo acessa 2 arrays multidimensionais na planilha, compara os elementos entre elas,
 e retorna somente os elementos novos considerando uma das arrays como referência.
 Esse código é útil quando utilizado como macro no momento em que queremos adicionar novos elementos
 a uma sheet à partir de outra, sem repetir os elementos já anteriormente adicionados.

## negativos.gs
 Esta funçao pode ser util quando combinada a um acionador(trigger) de tempo.
 A função acessa uma array multidimensional e torna negativo somente os elementos numéricos 
 maiores que zero (desconsidera os negativos para que não virem positivos). O script certifica
 de que uma coluna sempre será negativa, evitando assim erros de cálculo em planilhas de custos, por exemplo.
 








