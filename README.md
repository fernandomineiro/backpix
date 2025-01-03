
![Logo](https://validapix.tech/assets/images/logo/logo.png)

---

# Teste Técnico - API Bancária
Bem-vindo ao teste técnico! O objetivo é avaliar suas habilidades no desenvolvimento de uma API e um front-end básico com as tecnologias especificadas. Sinta-se à vontade para demonstrar sua criatividade e adicionar funcionalidades extras que julgar relevantes.


## Descrição do Projeto
Você deve criar uma API bancária que gerencie clientes e transações PIX. A aplicação deve ser composta por:

**1. Back-end:**

- Desenvolvido em Node.js com Express.
- Uso de qualquer banco de dados e ORM de sua escolha.
- Deve implementar as seguintes funcionalidades:
    - Criar clientes com os campos name, cpf e uma lista inicial de PIX vazia para cada cliente.
    - Listar todos os PIX de um cliente específico.
    - Permitir que um cliente pague um PIX (adicionando o PIX na lista de PIX dele, não precisa implementar sistema de saldo).
- Implementar rota para login é um bônus, se não quiser pode criar algo simples para identificar o cliente.

**2. Front-end:**

- Desenvolvido em React com Typescript.
- Estilizado com TailwindCSS.
- Criar um cliente.
- Adicionar um PIX à lista de um cliente.
- Listar os PIX que entraram da conta do cliente.

## Requisitos

**Back-end:**

- Linguagem: Node.js
- Framework: Express
- Banco de dados: De sua escolha
- ORM: De sua escolha
- Rotas obrigatórias:
    - `POST /clients` - Criar um cliente.
    - `GET /clients/pix` - Listar PIX que entraram na conta do cliente.
    - `POST /clients/pix` - Adicionar um PIX à lista de um cliente.

**Front-end:**

- Framework: React com Typescript
- Estilização: TailwindCSS
- Funcionalidade mínima:
    - Criar um cliente.
    - Adicionar um PIX à lista de um cliente.
    - Listar os PIX que entraram da conta do cliente.


## Bônus (não obrigatório)

- No front-end:
    - Melhorar a usabilidade ou layout da interface.

- No back-end:
    - Usar autenticação com JWT ou outra forma.
- Implementar Docker para facilitar a inicialização do projeto.


## Entrega

- Suba o código em um repositório público no GitHub.
- Inclua no README do repositório:
    - Instruções claras para executar o back-end e o front-end.
    - Descrição das tecnologias utilizadas.
    - Quaisquer decisões técnicas ou extras implementados no projeto.
- Compartilhe o link do repositório conosco.
