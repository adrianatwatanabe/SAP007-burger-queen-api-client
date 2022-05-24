<div align="center">
   <img alt="Logo BURGUER Queen" src="/src/img/logo-burger-queen.png" height=200>

## 
  
**Status do Projeto:** _Em andamento_
 
<div style="display: inline_block">
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" target="_blank"> <img alt="HTML" height="45" width="45" src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-plain-wordmark.svg"></a>
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSSL" target="_blank"><img alt="CSS" height="45" width="45" src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-plain-wordmark.svg"></a>
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" target="_blank"><img alt="JavaScript" height="35" width="35" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"></a>
  <a hred="https://beta.reactjs.org/"><img alt="React" width="45" height="45" src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" /></a>
</div>
   
</div>

---
  
# ÍNDICE

- [1. SOBRE O BURGER QUEEN](#1-sobre-o-burger-queen)
- [2. REQUISITOS DO PROJETO](#2-requisitos-do-projeto)
  - [2.1. HISTÓRIAS DE USUÁRIOS](#21-histórias-de-usuários)
- [3. DESIGN DO SITE BURGER QUEEN](#3-design-do-site-burger-queen)
  - [3.1. FLUXOGRAMA DO SITE](#31-fluxograma-do-site)
  - [3.2. CORES DO SITE](#32-cores-do-site)
- [4. PROTÓTIPOS](#4-protótipos)
  - [4.1. PROTÓTIPO DE BAIXA FIDELIDADE](#41-protótipo-de-baixa-fidelidade)
  - [4.2. PROTÓTIPO DE ALTA FIDELIDADE](#42-protótipo-de-alta-fidelidade)
- [5. DESENVOLVEDORA DO APLICATIVO](#5-desenvolvedora-do-aplicativo)

---

# 1. SOBRE O BURGER QUEEN

  * **BURGER QUEEN** é uma empresa de fast food 24hrs que necessita de um sistema que os ajudem a receber pedidos de seus clientes. Nesse sistema deve existir dois cardápios, um para o café da manhã e outro para o restante do dia, podendo ter algumas opções adicionais. O sistema sempre deve ser atulizado, para caso algum cliente mude o seu pedido antes de finalizar a compra. Além do usuário poder escolher que produtos adicionar, possibilitando que a interface mostre o resumo do pedido com o custo total.

  * O aplicativo será usado em um dispositivo TABLET, porém, caso não haja um tablet, devido por diversos motivos, inclusive um tablet reserva, será usado em um smartphone.


# 2. REQUISITOS DO PROJETO

## 2.1 HISTÓRIAS DE USUÁRIOS

## 2.1.1 Garçom/Garçonete deve poder entrar no sistema

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

## 2.1.2 Garçom/Garçonete deve ser capaz de anotar o pedido do cliente

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

## 2.1.3 Chefe de cozinha deve ver os pedidos

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

## 2.1.4 Garçom/Garçonete deve ver os pedidos prontos para servir

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

# 3. DESIGN DO SITE BURGER QUEEN

   * No site BURGER Queen será usado dois estilos de design, o primeiro é o estilo outline que estará presente na maior parte do site, como áreas formadas por caixas que separarão o conteúdo e nos estilos dos botões, apresentando um visual voltado aos contornos das formas. Já o segundo, é o filled, que será aplicado em planos de fundo que separam um conteúdo do outro. 

## 3.1. FLUXOGRAMA DO SITE

   * Abaixo encontra-se o fluxograma de como funciona o site BURGER Queen, conforme descrito nos requisitos do sistema, haverá dois tipos de usuários: o(a) atendente e o(a) cozinheiro(a). Ambos terão acesso a parte interna do site, porém, somente consiguirão visualizar as páginas conforme o seu setor.

   * Para o usuário atendente, existirá duas páginas específicas que são: PEDIDOS e PEDIDOS ENTREGUES. A página PEDIDOS são para anotar a mesa, o nome do cliente que está escolhendo o cardápio e seus pedidos, podendo conter adição de queijo e ovos conforme especificado no cardápio. É possível marcar e desmarcar qualquer pedido, desde que seja feito antes de clicar sobre o botão de FINALIZAR. A outra página visualizada pelo(a) atendente, é a página de PEDIDOS ENTREGUES, nele é possível verificar quais pedidos finalizados na cozinha, estão aguardando para serem entregues para os seus respectivos clientes. 

   * Já para o usuário cozinheiro(a), só é possível visualizar uma página específica que é a de PEDIDOS EM ANDAMENTO. Nele pode-se verificar quais são os pedidos que deve serem preparados, além de visualizar o cronômetro de cada pedido, sendo contado desde que o pedido foi enviado para a cozinha. Para cada card (pedido) existe o botão de INICIAR PEDIDO e ENTREGAR, o primeiro refere-se quando o lanche/bebida começou a ser preparado na cozinha. Já o segundo é o botão de confirmar, que sinalizará e mostrará o pedido como ENTREGAR na página PEDIDOS ENTREGUES.

     <div>
       <img alt="Fluxograma de funcionamento do site BURGER Queen" src="/src/img/to-readme/flowchart.png">
     </div>

## 3.2. CORES DO SITE

   * As cores utilizadas são referentes ao logo existente do BURGER Queen, que são em tons quentes, como: vermelho, amarelo e laranja, além do verde puxado para o amarelo. Para o site são utilizados duas cartelas, a primeira com cores mais vivas, semelhantes a do logo e a segunda são tons mais opacos. As cores preta e branco são usadas para textos.

### 3.2.1. Cores Principais

   <div>
    <img alt="Cartela de cores principais do site BURGER Queen" src="/src/img/to-readme/main-colors.png">
   </div>

### 3.2.2. Cores Secundárias

   <div>
     <img alt="Cartela de cores secundárias do site BURGER Queen" src="/src/img/to-readme/secondary-colors.png">
   </div>
   
# 4. PROTÓTIPOS

## 4.1. PROTÓTIPO DE BAIXA FIDELIDADE

   * O protótipo de baixa fidelidade serve para demonstrar e organizar as ideias de como os elementos estarão na página em um projeto inicial. É possíve identificar alguns problemas de usabilidade, testando conceitos e descobrindo o valor que o produto final pode gerar aos seus clientes. A seguir, estará o protótipo de baixa fidelidade do site BURGER Queen feito para a menor tela, no caso, um smartphone com 320px de largura de área visível.   
   
   
      <table>
         <tr>
            <td>
               <h4>Páginas acessadas por atendentes:</h4>
            </td>
            <td>
               <div>
                  <img alt="Protótipo de baixa fidelidade dos Atendentes" src="/src/img/to-readme/attendant-paper-prototype.gif">
               </div>
            </td>
         </tr>
         <tr>
            <td>
               <h4>Páginas acessadas por cozinheiros(as):</h4>
            </td>
            <td>
               <div>
                  <img alt="Protótipo de baixa fidelidade do Cozinheiro" src="/src/img/to-readme/cooker-paper-prototype.gif">
               </div>
            </td>
         </tr>
      </table>

   
## 4.2. PROTÓTIPO DE ALTA FIDELIDADE  

   * Já o protótipo de alta fidelidade é uma representação final do produto, se assemelhando em termos de detalhes e funcionalidades. Podemos visualizar melhor a paleta de cores, as formas e o conteúdo em si. 

   * Conforme apresentado nos requisitos do projeto, o site BURGER Queen será usado em tablets que poderão ter os seguintes tamanhos, conforme consultado no site _**[STATCOUNTER]**_(https://gs.statcounter.com/screen-resolution-stats/tablet/worldwide) sobre os tamanhos de telas de tablet em modo retrato mais utilizados:

           600px x  962px
           600px x 1024px
           768px x 1024px                          Portanto, a largura mínima será de 600px e a máxima de 1366px.
           800px x 1280px                          
           810px x 1080px                          Porém, caso não haja um tablet, a menor largura será de 320px
           834px x 1112px                          (medida referente a um smartphone).
          1024px x 1366px


### 4.2.1. Tablet

   <table>
         <tr>
            <td>
               <h4>Páginas acessadas por atendentes:</h4>
            </td>
            <td>
               <div>
                  <img alt="Protótipo tablet de alta fidelidade dos Atendentes" src="/src/img/to-readme/attendant-tablet-prototype.gif">
               </div>
            </td>
         </tr>
         <tr>
            <td>
               <h4>Páginas acessadas por cozinheiros(as):</h4>
            </td>
            <td>
               <div>
                  <img alt="Protótipo tablet de alta fidelidade do Cozinheiro" src="/src/img/to-readme/cooker-tablet-prototype.gif">
               </div>
            </td>
         </tr>
   </table>
   

# 5. DESENVOLVEDORA DO APLICATIVO

<table>
   <td>
      <div align= "center">
         <img alt="Adriana Tiemi Watanabe" height="150" src="https://avatars.githubusercontent.com/u/97361694?v=4"> 
      </div>
      <h3 align="center"><a href="https://github.com/adrianatwatanabe">Adriana Tiemi Watanabe</a></h3>
      <h4 align="center">Projeto do Bootcamp da <em><a href="https://hub.laboratoria.la/br">Laboratoria</a></em></h4>
      <div align="center">
         <a href = "mailto:adriana.t.watanabe@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
         <a href="https://www.linkedin.com/in/adrianatwatanabe" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
      </div>
   </td>
</table>
