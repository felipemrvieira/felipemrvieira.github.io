---
title: "Olá Ruby"
excerpt: "Um post de base sobre conceitos iniciais de Ruby, reorganizado em formato legível para o novo site."
date: "2017-08-07"
tags:
  - Ruby
  - Fundamentos
---

Ruby continua sendo uma linguagem interessante para ensinar um ponto importante: clareza de leitura e expressividade não precisam brigar com produtividade.

Este texto preserva a ideia do conteúdo original do site, agora em um formato mais limpo.

## Variáveis

Variáveis podem usar diferentes notações, mas a convenção mais comum em Ruby é `snake_case`.

Ruby é uma linguagem dinamicamente tipada e fortemente tipada. Em termos práticos:

- o tipo de uma variável pode mudar em tempo de execução
- a linguagem não mistura tipos de forma tão permissiva quanto JavaScript

## Atribuição condicional

Uma forma muito comum de atribuição condicional em Ruby é:

```ruby
favorite_language ||= "ruby"
```

O valor só é atribuído se a variável ainda não tiver um valor útil.

## Entrada de dados

```ruby
print "What city are you from? "
city = gets.chomp
```

`gets` lê a entrada do usuário. Em geral, `chomp` ou `strip` são usados para remover a quebra de linha do final.

## Mutação com `!`

Ruby também usa métodos com `!` para indicar mutação no objeto:

```ruby
name = gets
name.capitalize!
```

Nem todo método com `!` significa exatamente a mesma coisa, mas a convenção normalmente aponta para uma operação mais "perigosa" ou mutável do que sua contraparte sem `!`.

## Saída de dados

Os comandos mais comuns são:

- `puts`: imprime e quebra linha
- `print`: imprime sem quebrar linha
- `p`: imprime em formato mais útil para inspeção

## Interpolação de strings

```ruby
first_name = "Kevin"
puts "Your name is #{first_name}!"
```

Interpolação é um dos recursos que tornam o código Ruby bastante legível.

