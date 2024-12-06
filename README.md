# Contador de votos do Instagram

Este repositório contém um script em JavaScript para contar votos válidos nos comentários de uma postagem no Instagram. O script garante que cada usuário possa votar apenas uma vez e contabiliza votos para três opções diferentes.

## Funcionalidades

- **Carregar todos os comentários:** O script carrega todos os comentários de uma postagem, mesmo que haja muitos.
- **Filtrar votos válidos:** Apenas considera votos entre 1 e 3, e exclui votos duplicados do mesmo usuário.
- **Exibir estatísticas:** Mostra o total de votos válidos e a porcentagem de cada opção.

## Como usar

1. **Abra a postagem no Instagram no navegador**
   - Certifique-se de estar no **modo mobile** (pode usar as ferramentas de desenvolvedor para simular um dispositivo móvel).
   - Expanda os comentários até que todos estejam carregados ou utilize o script para carregá-los automaticamente.

2. **Execute o script**
   - Abra o console do navegador (geralmente pressionando `F12` ou `Ctrl+Shift+I`).
   - Cole o código fornecido no repositório e pressione `Enter`.

3. **Carregar todos os comentários**
   - O script `loadAllComments` irá carregar automaticamente todos os comentários da postagem.

4. **Contar os votos**
   - Uma vez que todos os comentários estejam carregados, o script executará a função `countValidVotes` para contar os votos.
   - Se necessário, você pode executar a função manualmente no console:
     ```javascript
     countValidVotes();
     ```

## Detalhes do código

O script funciona em duas etapas principais: carregar todos os comentários e processá-los para contar votos válidos. A seguir está uma explicação detalhada das principais funções:

- **loadAllComments()**
  - Esta função identifica o elemento de carregamento de comentários do Instagram. Caso o elemento esteja presente, ela rola a página para trazê-lo à vista, forçando o Instagram a carregar mais comentários.
  - A função utiliza um loop assíncrono para garantir que a rolagem ocorra com intervalos de tempo (1 segundo) até que todos os comentários estejam carregados e o elemento de carregamento desapareça.

- **countValidVotes()**
  - Primeiro, coleta todos os comentários visíveis através de uma classe CSS específica.
  - Em seguida, percorre cada comentário para:
    1. Extrair o nome do usuário e o conteúdo do comentário utilizando a função `getUserData`.
    2. Verificar se o comentário contém um voto válido (um número entre 1 e 3).
    3. Garantir que o usuário ainda não tenha votado antes (através de uma lista de exclusão chamada `banList`).
  - Se o comentário atender a todas essas condições, o voto é contado, e o nome do usuário é adicionado à lista de exclusão.
  - No final, calcula e exibe as estatísticas de votação no console, incluindo o total de votos e a porcentagem para cada opção.

- **getUserData(element)**
  - Processa o texto do comentário (armazenado no DOM) e separa as informações em duas partes: o nome de usuário e o conteúdo do comentário. Essas informações são retornadas como uma lista.

- **rank(votes)**
  - Converte o objeto de votos em uma lista de pares [chave, valor].
  - Ordena os pares com base na quantidade de votos.
  - Retorna apenas as chaves ordenadas, representando as opções de votação em ordem crescente de votos.

- **loadAllComments()**
  - Carrega todos os comentários da postagem rolando a página até que não haja mais elementos para carregar.

- **countValidVotes()**
  - Filtra comentários para identificar votos válidos (1, 2 ou 3).
  - Garante que cada perfil vote apenas uma vez.
  - Exibe os resultados no console, incluindo a porcentagem de cada opção.

- **getUserData(element)**
  - Extrai o nome de usuário e o conteúdo do comentário a partir do DOM.

- **rank(votes)**
  - Ordena as opções com base no número de votos.

## Exemplo de Saída

```plaintext
Total de votos validos: 150
Camiseta 1: 60 (40.00%)
Camiseta 2: 50 (33.33%)
Camiseta 3: 40 (26.67%)
```

## Requisitos

- Navegador com suporte ao console de desenvolvedor.
- Postagem com os comentários que seguem o padrão esperado: o nome do usuário na primeira linha e o voto (1, 2 ou 3) na segunda.

## Observações

- Este script é uma forma não oficial e não reconhecida pela Meta, e deve ser usado com cuidado para evitar que sua conta seja confundida com um robô e banida.

- O script foi projetado para ser usado no navegador, e deve ser colado diretamente no console.
- Ele é específico para o layout e estrutura atual do Instagram, podendo necessitar de ajustes caso a plataforma seja atualizada.
  
---
Sinta-se à vontade para contribuir ou relatar problemas na seção de issues do repositório.

