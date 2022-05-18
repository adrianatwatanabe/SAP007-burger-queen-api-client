
BURGER QUEEN


## 1. SOBRE O GALAXY BURGER QUEEN

  * **BURGER QUEEN** é um fast food 24hrs que necessita de um sistema que os ajudem a receber pedidos de seus clientes. Nesse sistema deve existir dois cardápios, um para o café da manhã e outro para o restante do dia, podendo ter algumas opções adicionais. O sistema sempre deve ser atulizado, para caso algum cliente mude o seu pedido antes de finalizar a compra. Além do usuário poder escolher que produtos adicionar, possibilitando que a interface mostre o resumo do pedido com o custo total.


## 2. CRITÉRIOS MÍNIMOS DE ACEITAÇÃO DO PROJETO

### 2.1 HISTÓRIAS DE USUÁRIOS

### 2.1.1 Garçom/Garçonete deve poder entrar no sistema

 * Eu, como garçom/garçonete quero entrar no sistema de pedidos.

_**Critérios de aceitação:**_

O que deve acontecer para satisfazer as necessidades do usuário?

* Acessar uma tela de login.
* Inserir email e senha.
* Receber mensagens de erros compreensíveis, conforme o erro e as informações inseridas.
* Entrar no sistema de pedidos caso as credenciais forem corretas.

_**Definição de pronto:**_

O acordado abaixo deve acontecer para dizer que a história está terminada:

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Fez _testes_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

### 2.1.2 Garçom/Garçonete deve ser capaz de anotar o pedido do cliente

Eu como garçom/garçonete quero poder anotar o pedido de um cliente para não depender da minha memória, saber quanto cobrar e poder enviar os pedidos para a
cozinha para serem preparados em ordem.

_**Critérios de aceitação:**_

O que deve acontecer para satisfazer as necessidades do usuário?

* Anotar o nome do cliente.
* Adicionar produtos aos pedidos.
* Excluir produtos.
* Ver resumo e o total da compra.
* Enviar o pedido para a cozinha (guardar em algum banco de dados).
* Funcionar bem em um _tablet_.

_**Definição de pronto:**_

O acordado abaixo deve acontecer para dizer que a história está terminada:

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Fez _testes_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

### 2.1.3 Chefe de cozinha deve ver os pedidos

 * Eu como chefe de cozinha quero ver os pedidos dos clientes em ordem, poder marcar que estão prontos e poder notificar os garçons/garçonetes que o pedido
está pronto para ser entregue ao cliente.

_**Critérios de aceitação:**_

* Ver os pedidos ordenados à medida em que são feitos.
* Marcar os pedidos que foram preparados e estão prontos para serem servidos.
* Ver o tempo que levou para preparar o pedido desde que chegou, até ser marcado como concluído.

_**Definição de pronto:**_

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Fez _testes_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).

***

### 2.1.4 Garçom/Garçonete deve ver os pedidos prontos para servir

 * Eu como garçom/garçonete quero ver os pedidos que estão prontos para entregá-los rapidamente aos clientes.

_**Critérios de aceitação:**_

* Ver a lista de pedidos prontos para servir.
* Marcar os pedidos que foram entregues.

_**Definição de pronto:**_

* Você deve ter recebido _code review_ de pelo menos uma parceira.
* Fez _testes_ unitários e, além disso, testou seu produto manualmente.
* Você fez _testes_ de usabilidade e incorporou o _feedback_ do usuário.
* Você deu deploy de seu aplicativo e marcou sua versão (tag git).
* Os dados devem ser mantidos intactos, mesmo depois que um pedido for finalizado. Tudo isso para poder ter estatísticas no futuro.

