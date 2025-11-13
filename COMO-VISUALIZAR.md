# 🖥️ Como Visualizar a Landing Page Localmente

## 📋 Passo a Passo Completo

### 1️⃣ Abrir o Terminal

**Windows:**
- Pressione `Win + R`
- Digite `powershell` e pressione Enter
- No PowerShell, navegue até a pasta do projeto:
```powershell
cd "I:\Lp MH Fahd"
```

**Mac/Linux:**
- Abra o Terminal
- Navegue até a pasta:
```bash
cd "/caminho/para/Lp MH Fahd"
```

---

### 2️⃣ Instalar Dependências (Primeira Vez)

Execute no terminal:

```bash
npm install
```

⏱️ **Tempo:** 2-3 minutos  
📦 **O que faz:** Baixa todas as bibliotecas necessárias (Next.js, React, Tailwind, etc)

**Aguarde até ver algo como:**
```
added 250 packages in 2m
```

---

### 3️⃣ Iniciar o Servidor

Execute:

```bash
npm run dev
```

**Você verá algo assim:**
```
  ▲ Next.js 14.0.4
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Ready in 2.5s
```

---

### 4️⃣ Abrir no Navegador

Abra seu navegador (Chrome, Firefox, Edge, etc) e acesse:

```
http://localhost:3000
```

🎉 **Pronto!** A Landing Page vai carregar!

---

## 📸 O Que Você Vai Ver

### ✅ Já Funcionando:
- ✅ Estrutura completa da página
- ✅ Todas as 10 seções
- ✅ Textos e descrições
- ✅ Layout responsivo
- ✅ Cores da M.H.FAHD
- ✅ Botões e animações
- ✅ Formulário

### ⚠️ Placeholders (normal):
- ⚠️ Imagens aparecerão como "quebradas" (você ainda não adicionou)
- ⚠️ Logo não vai aparecer (precisa adicionar)
- ⚠️ Galeria vai ter espaços vazios (precisa das 12 fotos)

**Isso é NORMAL!** Você precisa adicionar as imagens.

---

## 🖼️ Adicionar Imagens Agora (Opcional)

Se quiser ver com imagens de teste:

### 1. Criar pastas:

**Windows (PowerShell):**
```powershell
mkdir public\images\gallery
mkdir public\images\testimonials
```

**Mac/Linux:**
```bash
mkdir -p public/images/gallery
mkdir -p public/images/testimonials
```

### 2. Adicionar imagens temporárias:

Por enquanto, você pode:
- Baixar imagens de placeholder de sites como [Unsplash](https://unsplash.com)
- Ou simplesmente ver a estrutura sem imagens

**A estrutura visual estará perfeita, só faltarão as fotos reais!**

---

## 🔄 Fazer Alterações

Com o servidor rodando (`npm run dev`):

1. Edite qualquer arquivo `.tsx` nos componentes
2. Salve o arquivo (Ctrl+S)
3. A página **atualiza automaticamente** no navegador! 🎉

**Não precisa reiniciar o servidor!**

---

## 🛑 Parar o Servidor

No terminal, pressione:

```
Ctrl + C
```

Para iniciar novamente:
```bash
npm run dev
```

---

## 📱 Ver no Celular (Mesma Rede WiFi)

1. Com o servidor rodando, veja a linha "Network" no terminal:
   ```
   - Network: http://192.168.1.100:3000
   ```

2. No celular (conectado no mesmo WiFi), acesse essa URL

3. Pronto! Landing Page no celular!

---

## ❓ Problemas Comuns

### "npm não é reconhecido"
**Causa:** Node.js não instalado  
**Solução:** Baixe e instale em [nodejs.org](https://nodejs.org)

### "Port 3000 is already in use"
**Causa:** Outra coisa usando a porta 3000  
**Solução:** Use outra porta:
```bash
npm run dev -- -p 3001
```
Acesse: `http://localhost:3001`

### Página em branco
**Causa:** Algum erro no terminal  
**Solução:** Olhe o terminal, geralmente mostra o erro

### Imagens não aparecem
**Causa:** Normal! Você ainda não adicionou  
**Solução:** Veja `INSTRUCOES-IMAGENS.md`

---

## ✅ Checklist Rápido

- [ ] Abri o terminal na pasta do projeto
- [ ] Executei `npm install` (só primeira vez)
- [ ] Executei `npm run dev`
- [ ] Abri `http://localhost:3000` no navegador
- [ ] A página carregou (mesmo sem imagens)

---

## 🎯 Próximo Passo

Agora que você visualizou localmente:

1. ✅ **Adicione as imagens** → Veja `INSTRUCOES-IMAGENS.md`
2. ✅ **Configure o WhatsApp** → Veja `PERSONALIZACAO-RAPIDA.md`
3. ✅ **Teste tudo** → Veja `CHECKLIST-FINAL.md`
4. ✅ **Faça deploy** → Veja `README.md`

---

**Pronto! Você já está visualizando sua Landing Page! 🎉**

