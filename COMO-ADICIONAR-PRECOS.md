# 💰 Como Adicionar Preços aos Imóveis

## ✅ Implementado com Sucesso!

O sistema de preços foi adicionado e está **funcionando perfeitamente** em `/valencia` e `/locacao`!

---

## 🎯 O Que Foi Adicionado

### **Visual:**

No **Hero** (primeira tela), agora aparece:

```
┌─────────────────────────────────────┐
│   Venda                Condomínio   │
│   R$ 3.969.000        R$ 1.200/mês  │
└─────────────────────────────────────┘
```

- ✅ **Box destacado** com borda dourada
- ✅ **Responsivo:** 2 colunas no desktop, empilhado no mobile
- ✅ **Backdrop blur** com efeito premium
- ✅ **Condicional:** Só aparece se o preço existir no JSON

---

## 📝 Como Adicionar Preço em Qualquer Imóvel

### **Passo 1: Editar o JSON**

Abra o arquivo do imóvel: `data/imoveis/seu-imovel.json`

Adicione o campo `price` dentro de `hero`:

```json
{
  "hero": {
    "badge": "✨ SEU BADGE",
    "title": "Título do Imóvel",
    "subtitle": "Subtítulo...",
    "location": "Bairro, Cidade",
    "image": "/images/seu-imovel/hero.png",
    
    "price": {
      "sale": "R$ 3.969.000",
      "condominium": "R$ 1.200",
      "type": "Venda"
    },
    
    "capsules": [
      // ... suas cápsulas
    ]
  }
}
```

### **Passo 2: Ajustar os Valores**

**Para Venda:**
```json
"price": {
  "sale": "R$ 3.969.000",      ← Preço de venda
  "condominium": "R$ 1.200",   ← Valor do condomínio
  "type": "Venda"              ← Tipo da transação
}
```

**Para Locação:**
```json
"price": {
  "sale": "R$ 5.500",          ← Valor do aluguel
  "condominium": "R$ 800",     ← Valor do condomínio
  "type": "Locação"            ← Tipo da transação
}
```

**Para Venda SEM Condomínio:**
```json
"price": {
  "sale": "R$ 850.000",
  "condominium": "Sem condomínio",
  "type": "Venda"
}
```

### **Passo 3: Salvar e Testar**

```bash
npm run dev
```

Acesse: `http://localhost:3000/seu-imovel`

**PRONTO!** O preço aparecerá automaticamente! ✅

---

## 🎨 Exemplos Prontos

### **Exemplo 1: Casa para Venda**

```json
"price": {
  "sale": "R$ 2.500.000",
  "condominium": "R$ 950",
  "type": "Venda"
}
```

**Resultado:**
```
Venda                    Condomínio
R$ 2.500.000            R$ 950/mês
```

---

### **Exemplo 2: Apartamento para Locação**

```json
"price": {
  "sale": "R$ 4.800",
  "condominium": "R$ 600",
  "type": "Locação"
}
```

**Resultado:**
```
Locação                  Condomínio
R$ 4.800                R$ 600/mês
```

---

### **Exemplo 3: Casa SEM Condomínio**

```json
"price": {
  "sale": "R$ 1.200.000",
  "condominium": "Isento",
  "type": "Venda"
}
```

**Resultado:**
```
Venda                    Condomínio
R$ 1.200.000            Isento
```

---

### **Exemplo 4: Imóvel SEM Preço (Sob Consulta)**

Se você **NÃO quer mostrar o preço**, simplesmente **remova** ou **comente** o campo `price`:

```json
{
  "hero": {
    "badge": "✨ OPORTUNIDADE ÚNICA",
    "title": "Casa Exclusiva",
    "subtitle": "...",
    "location": "Batel, Curitiba",
    "image": "/images/casa/hero.png",
    
    // "price": {
    //   "sale": "Sob consulta",
    //   "condominium": "R$ 800",
    //   "type": "Venda"
    // },
    
    "capsules": [...]
  }
}
```

**Resultado:** O box de preço **não aparecerá**.

---

## 📐 Design Responsivo

### **Desktop (Tela Grande):**

```
┌──────────────────────────────────────────────┐
│                                              │
│   Venda              │   Condomínio         │
│   R$ 3.969.000      │   R$ 1.200           │
│                      │   /mês               │
└──────────────────────────────────────────────┘
```

**2 colunas lado a lado** com divisor vertical

### **Mobile (Celular):**

```
┌─────────────────────┐
│                     │
│   Venda             │
│   R$ 3.969.000     │
│   ─────────────────│  ← Linha horizontal
│   Condomínio        │
│   R$ 1.200         │
│   /mês              │
└─────────────────────┘
```

**Empilhado verticalmente** com divisor horizontal

---

## 🎯 Personalizações Possíveis

### **1. Preço "Sob Consulta":**

```json
"price": {
  "sale": "Sob consulta",
  "condominium": "R$ 1.500",
  "type": "Venda"
}
```

### **2. Preço com Desconto:**

```json
"price": {
  "sale": "R$ 2.800.000",
  "condominium": "R$ 1.000",
  "type": "Venda • Aceita Proposta"
}
```

### **3. Apenas Locação:**

```json
"price": {
  "sale": "R$ 6.500",
  "condominium": "R$ 900",
  "type": "Somente Locação"
}
```

### **4. Venda ou Locação:**

```json
"price": {
  "sale": "R$ 1.500.000 (Venda) ou R$ 5.000 (Locação)",
  "condominium": "R$ 800",
  "type": "Venda ou Locação"
}
```

---

## 🔧 Customizar o Visual

Se quiser alterar cores, tamanhos, ou posição, edite:

**Arquivo:** `components/PropertyPage.tsx`

**Busque por:** `{/* Preço - Se existir */}`

**Linha:** ~159

**Exemplo de customização:**

```typescript
{/* Preço - Se existir */}
{data.hero.price && (
  <div className="bg-white/10 backdrop-blur-md border-2 border-accent-gold rounded-2xl p-4 md:p-6 mb-6 md:mb-8">
    {/* Seu código customizado aqui */}
  </div>
)}
```

**Classes Tailwind que você pode alterar:**

- `bg-white/10` → Fundo (opacidade)
- `border-accent-gold` → Cor da borda
- `rounded-2xl` → Arredondamento dos cantos
- `text-3xl md:text-4xl lg:text-5xl` → Tamanho da fonte do preço
- `text-2xl md:text-3xl` → Tamanho da fonte do condomínio

---

## 📊 Status dos Imóveis

### **✅ Com Preço:**

| Imóvel | Status | Preço |
|--------|--------|-------|
| Valencia | ✅ Configurado | R$ 3.969.000 |
| Locação | ✅ Configurado | R$ 5.500 |

### **➕ Novos Imóveis:**

Quando adicionar novo imóvel, copie o bloco `price` de um dos exemplos acima!

---

## 🎯 Checklist Rápido

Ao adicionar um novo imóvel COM preço:

- [ ] Copiar JSON de exemplo
- [ ] Editar campo `price.sale`
- [ ] Editar campo `price.condominium`
- [ ] Editar campo `price.type`
- [ ] Salvar JSON
- [ ] Testar no navegador
- [ ] Verificar mobile

---

## 💡 Dicas

### **1. Formatação de Valores:**

✅ **BOM:**
- `R$ 3.969.000`
- `R$ 5.500`
- `R$ 1.200`

❌ **EVITE:**
- `3969000` (sem formatação)
- `R$3.969.000` (sem espaço)
- `3.969.000,00` (vírgula causa confusão)

### **2. Valores do Condomínio:**

- Sempre coloque "/mês" será adicionado automaticamente
- Se não tiver condomínio: `"Isento"` ou `"Sem condomínio"`
- Se for incluso: `"Incluso no valor"`

### **3. Tipo da Transação:**

Seja claro e objetivo:
- `"Venda"`
- `"Locação"`
- `"Venda ou Locação"`
- `"Somente Locação"`
- `"Venda • Aceita Permuta"`

---

## 🆘 Problemas Comuns

### **"Preço não aparece"**

1. ✅ Verifica se o campo `price` está dentro de `hero`
2. ✅ Verifica se tem vírgula após o bloco `price`
3. ✅ Valida o JSON: https://jsonlint.com
4. ✅ Restart: `npm run dev`

### **"Layout quebrado no mobile"**

1. ✅ Testa no Chrome DevTools (F12 → Toggle Device)
2. ✅ Verifica se os valores não são muito longos
3. ✅ Tenta valores menores para testar

### **"Quero remover o preço"**

1. ✅ Comente ou remova o bloco `price` do JSON
2. ✅ O box sumirá automaticamente (condicional)

---

## 📞 Resumo

**Para Adicionar Preço:**

1. Edite o JSON do imóvel
2. Adicione o bloco `price` dentro de `hero`
3. Preencha: `sale`, `condominium`, `type`
4. Salve e teste

**Tempo:** ⏱️ 2-3 minutos

**Dificuldade:** ⭐ Muito Fácil

**Resultado:** 💰 Preço em destaque no Hero!

---

## ✅ Exemplos Testados

**Valencia:**
```json
"price": {
  "sale": "R$ 3.969.000",
  "condominium": "R$ 1.200",
  "type": "Venda"
}
```
✅ **Funcionando perfeitamente!**

**Locação:**
```json
"price": {
  "sale": "R$ 5.500",
  "condominium": "R$ 800",
  "type": "Locação"
}
```
✅ **Funcionando perfeitamente!**

---

**🎉 Sistema de Preços 100% Funcional!**

Adicione preços em todos os seus imóveis agora! 💰✨

