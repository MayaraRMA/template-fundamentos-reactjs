# template-fundamentos-reactjs

## Funcionalidades da aplicação

- **Listar as transações da API**: A página Dashboard exibe uma listagem através de uma tabela, com o campo title, value, type e category de todas as transações que estão cadastradas na sua API.

- **Exibir o balance da sua API**: A página Dashboard, exibe o balance que é retornado do seu backend, contendo o total geral, junto ao total de entradas e saídas.

- **Importar arquivos CSV**: A página Import, permiti o envio de um arquivo no formato csv para o seu backend, que irá fazer a importação das transações para o seu banco de dados. O arquivo csv deve seguir o seguinte modelo.

## Testes:

- **should be able to list the total balance inside the cards**: Para que esse teste passe, a aplicação deve permitir que seja exibido na sua Dashboard, cards contendo o total de income, outcome e o total da subtração de income - outcome que são retornados pelo balance do seu backend.

- **should be able to list the transactions**: Para que esse teste passe, a aplicação deve permitir que sejam listados dentro de uma tabela, toda as transações que são retornadas do seu backend.
Dica: Para a exibição dos valores na listagem de transações, as transações com tipo income devem exibir os valores no formado R$ 5.500,00. Transações do tipo outcome devem exibir os valores no formado - R$ 5.500,00.

- **should be able to navigate to the import page**: Para que esse teste passe, a troca de página deve acontecer através do Header, pelo botão que contém o nome Importar.

- **should be able to upload a file**: Para que esse teste passe, um arquivo deve ser enviado através do componente de drag-n-drop na página de import, e que seja possível exibir o nome do arquivo enviado para o input.
