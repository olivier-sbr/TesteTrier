## Instruções de instalação e execução

URL DO REPOSITÓRIO: https://github.com/olivier-sbr/TesteTrier

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (versão 16 ou superior recomendada)
- npm

---

### Instalação

Clone o repositório e instale as dependências:

```bash
git clone git@github.com:olivier-sbr/TesteTrier.git
cd TesteTrier
npm install
```

## Execução dos testes

```bash
npx cypress run # Modo headless (execução via terminal)
# ou
npx cypress open # Modo interativo (interface do cypress)
```

## Arquitetura escolhida

A estrutura do projeto foi organizada usando as features a serem testadas como critérios, separando os testes em diretórios como `auth`, `cart`, `checkout` e `inventory`.

Para os commits, foi optado por não criar novas branchs, mantendo numa na mesma, apesar de ser comum uma branch para cada o desenvolvimento dos testes de cada feature, apenas por questão de simplicidade, o histórico de commits se manteve simples e legível, apenas precisei rebasear uma vez para editar um comentário errado.

Foi adotado o padrão Page Object para encapsular interações com a interface, centralizando seletores e ações em classes específicas.

Os testes foram mantidos focados em validar comportamento, enquanto a lógica de interação com a interface foi abstraída para os Page Objects.

Assim fica mais fácil ler os testes, e caso mudanças significativas fossem feitas na implementação, o arquivo de teste ainda se manteria fiel a regra de negócio, e as correções necessárias geralmente seriam referentes ao PageObjects.

Constantes foram utilizadas para representar produtos e evitar hardcoding de valores, tornando os testes mais reutilizáveis e menos frágeis a mudanças, visto que caso houvesse alguma mudança, a alteração seria centralizada, por questão de esse não ser exato o contexto de um "fixture", foi usando constantes no typescript mesmo.

## Estratégia de testes adotada

A estratégia adotada foi priorizar os fluxos mais críticos da aplicação, focando em autenticação, navegação principal, manipulação do carrinho e finalização da compra.

Apesar de não ter marcado com comentários, os testes seguem no geral uma estrutura de `Given`, `When`, `Then`. Acontece que em boa parte, o trecho `Given` está no beforeEach.
Mas tentei separar com linhas vazias, pra melhor visibilidade.

Os testes foram organizados por feature, o que ajudou a separar melhor as responsabilidades e evitar cenários muito acoplados entre si. Sempre que possível, cada teste parte de um estado inicial controlado, para que ele possa ser executado de forma independente.

A prioridade foi validar o comportamento observado pelo usuário, como navegação entre páginas, alteração de estado do carrinho, bloqueio de ações inválidas e conclusão do fluxo de checkout, evitando depender de detalhes frágeis da implementação.

Também foi buscado o uso de seletores mais estáveis, principalmente com `data-test`, e cenários foram escolhidos com critério para cobrir o essencial sem inflar artificialmente a suíte com testes muito redundantes.

### Critérios de validação

### Critérios de validação

As validações foram definidas com foco no comportamento observável da aplicação após cada ação do usuário.

Nos fluxos de autenticação, carrinho e checkout, a navegação foi validada principalmente por meio da mudança de URL, garantindo que cada ação realmente levasse o usuário para a etapa esperada do fluxo.

Além da rota, também foram utilizados elementos visíveis que representam o estado correto da página, como a lista de produtos após o login, o overview do checkout, a tela de compra concluída e o título da página de detalhe do produto.

Nos cenários de carrinho, o critério adotado foi validar alteração real de estado da aplicação, como a badge com quantidade de itens e o número de produtos renderizados no carrinho após adicionar ou remover um item.

Nos cenários negativos, como login inválido e tentativa de continuar o checkout sem preencher os campos obrigatórios, a validação foi feita pela permanência no fluxo atual e pela exibição de um erro, sem depender do texto exato da mensagem, reduzindo fragilidade.

No teste de ordenação, a validação foi feita comparando a lista final de preços com uma cópia ordenada em memória, garantindo que o comportamento validado fosse a regra de negócio da ordenação, e não apenas a interação com o seletor.

De forma geral, buscou-se evitar validações superficiais, garantindo que cada ação relevante tivesse uma verificação associada que comprovasse seu efeito esperado na interface.

## Justificativa das decisões técnicas

A organização dos testes foi feita por domínio (auth, cart, checkout e inventory) para refletir diretamente os fluxos da aplicação e evitar acoplamento entre cenários diferentes.

Foi adotado o padrão Page Object para centralizar seletores e interações. Isso permite que mudanças na interface sejam tratadas em um único lugar, sem impactar diretamente os testes, além de melhorar a legibilidade dos cenários.

Optou-se por não utilizar fixtures para os dados de teste, pois o escopo do projeto não exigia grande volume de dados.

Assumi alguns produtos que seriam "mais comuns" e que possuiriam mais estoque, assim o teste não falharia por um produto que pode sair de catálogo.

Também evitei ao máximo possivel especificidades como validar elementos de interface que poderiam mudar de nome, me reestringi aqueles que consideraro mais estáveis, como um login, ou apenas um aviso de erro sem validar todo o texto.

A ideia, como dito antes, é que os testes sejam legíveis, e que sigam uma estrutura "Given, When, Then".

BaseURL já está no cypress.config, para facilitar a escrita dos testes.

## O que você faria com mais tempo.

Tentaria otimizar os setups de todos os testes que possuem um BeforeEach de login ou de compra.

Passaria um pente fino pra deixar ainda mais independente da implementação, para garantir que não teriamos problemas como testes quebrando mesmo com features funcionais.

Talvez implementar commandos custom para que novos cenários fossem menos repetitivos, mas não conhecia a fundo o recurso.

Cogitaria algum jeito de gerar relatórios caso erros fossem encontrados, pra facilitação de diagnóstico.

No geral tentaria extrair mais das funcionalidades do cypress que ainda não conheço.
