## Use Cases

Produto
✔️ Rastrear produto individualmente (ID único, tamanho, cor)
✔️ Definir quantidade mínima de estoque

Estoque
✔️ Atualizar número de itens no estoque para cada produto
✔️ Receber alerta de estoque baixo (notificação no sistema + e-mail)

Venda
✔️ Criar uma venda (registrar no sistema)
✔️ Criar histórico de vendas (armazenar dados de vendas passadas)
✔️ Visualizar histórico de vendas e estoque (relatórios e gráficos de tendências)

Ordem de Compra
✔️ Criar e gerenciar ordens de compra automaticamente
✔️ Integrar com fornecedores para atualizações de prazos

## Entidades

- Produto
- Estoque 
- Venda
- Ordem de compra
- Fornecedores

--- 

✅ Requisitos Funcionais (RF)
- [x] - Permitir cadastro de produtos.
- [ ] - Definir e monitorar quantidades mínimas de estoque.
- [x] - Rastrear produtos por identificação única.
- [x] - Atualizar e exibir quantidade de itens no estoque.
- [ ] - Enviar alertas de estoque baixo por e-mail e sistema.
- [ ] - Registrar e manter histórico de vendas.
- [ ] - Exibir relatórios de vendas, incluindo lucro e tendências.
- [ ] - Criar e gerenciar ordens de compra automaticamente.

🚀 Requisitos Não Funcionais (RNF)
- [ ] -Tempo de resposta inferior a 3 segundos.

📜 Regras de Negócio (RN)
- [x] - Cada produto deve ter um identificador único.
- [ ] - Alertas de estoque baixo são gerados ao atingir o mínimo definido.
- [ ] - Ordens de compra podem ser geradas automaticamente.
