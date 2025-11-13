# 🚀 Guia de Início Rápido

Comece a usar sua Landing Page em **5 minutos**!

## ⚡ Instalação Expressa

### 1. Instale as dependências

Abra o terminal nesta pasta e execute:

```bash
npm install
```

⏱️ **Tempo estimado:** 2-3 minutos

---

### 2. Execute o projeto

```bash
npm run dev
```

Abra no navegador: **http://localhost:3000**

✅ **Pronto!** A Landing Page já está funcionando!

---

## 🔧 Próximos Passos (Essencial)

### Passo 1: Adicione as imagens

Crie a estrutura de pastas:

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

Adicione suas fotos em:
- `public/images/logo-mhfahd.png`
- `public/images/hero-background.jpg`
- `public/images/gallery/01.jpg` até `12.jpg`

📖 **Guia completo:** Veja `INSTRUCOES-IMAGENS.md`

---

### Passo 2: Configure o WhatsApp

Edite **3 arquivos** e substitua `5541999999999`:

1. `components/Hero.tsx` (linha 8)
2. `components/WhatsAppButton.tsx` (linha 5)
3. `components/ContactForm.tsx` (linha 38)

**Formato:** código país + DDD + número (ex: `5541987654321`)

---

### Passo 3: Adicione o vídeo

1. Faça upload do vídeo tour no YouTube
2. Copie o ID do vídeo (exemplo: `ABC123` de `youtube.com/watch?v=ABC123`)
3. Cole em `components/VideoTour.tsx` (linha 26)

---

### Passo 4: Configure o Google Maps

1. Acesse [Google Maps](https://maps.google.com)
2. Pesquise o endereço do imóvel
3. Clique em **Compartilhar** > **Incorporar mapa**
4. Copie o código
5. Cole em `components/Location.tsx` (linha 64)

---

## 📋 Checklist de 5 Minutos

- [ ] Instalou dependências (`npm install`)
- [ ] Rodou o projeto (`npm run dev`)
- [ ] Criou pasta `public/images/gallery`
- [ ] Adicionou logo da M.H.FAHD
- [ ] Adicionou foto principal (hero)
- [ ] Configurou WhatsApp (3 locais)

---

## 🎯 Documentação Completa

- **README.md** - Visão geral do projeto
- **INSTRUCOES-IMAGENS.md** - Todas as imagens necessárias
- **PERSONALIZACAO-RAPIDA.md** - Todas as personalizações

---

## ❓ Problemas Comuns

### Erro: "Cannot find module 'next'"
**Solução:** Execute `npm install` novamente

### Erro: "Port 3000 is already in use"
**Solução:** Use outra porta:
```bash
npm run dev -- -p 3001
```

### Imagens não aparecem
**Solução:** Verifique se:
1. Pasta `public/images` existe
2. Nomes dos arquivos estão corretos (maiúsculas/minúsculas)
3. Formato é JPG ou PNG

### WhatsApp não abre
**Solução:** Verifique o número (formato: 5541999999999)

---

## 🚀 Deploy Rápido

### Vercel (Mais Fácil - 2 minutos)

1. Instale o Vercel CLI:
```bash
npm install -g vercel
```

2. Faça deploy:
```bash
vercel
```

3. Siga as instruções na tela

✅ **Pronto!** Sua Landing Page está online!

---

### Netlify (Alternativa)

1. Crie conta em [Netlify](https://netlify.com)
2. Conecte seu repositório GitHub
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Clique em **Deploy**

---

## 📱 Teste em Dispositivos Móveis

Enquanto o servidor estiver rodando (`npm run dev`):

1. Encontre o IP da sua máquina:
   - Windows: `ipconfig` (procure IPv4)
   - Mac/Linux: `ifconfig` (procure inet)

2. No celular, acesse:
   `http://SEU_IP:3000`

**Exemplo:** `http://192.168.1.100:3000`

---

## 📊 Performance

Para melhor performance:

1. **Otimize as imagens:**
   - Use [TinyPNG](https://tinypng.com)
   - Máximo 500KB por imagem

2. **Antes de fazer deploy:**
```bash
npm run build
npm start
```

3. **Teste a velocidade:**
   - [PageSpeed Insights](https://pagespeed.web.dev)
   - Meta: 90+ no mobile e desktop

---

## 💡 Dicas de Ouro

### 1. Backup
Antes de fazer alterações grandes, faça backup:
```bash
git init
git add .
git commit -m "Versão inicial"
```

### 2. Edição Visual
Use o VS Code com extensões:
- Tailwind CSS IntelliSense
- ES7+ React/Redux/React-Native snippets

### 3. Preview antes de Deploy
Sempre teste com:
```bash
npm run build
npm start
```

---

## 🎉 Está Pronto!

Sua Landing Page profissional está funcionando!

### Próximos passos:
1. ✅ Personalize conforme `PERSONALIZACAO-RAPIDA.md`
2. ✅ Adicione todas as imagens
3. ✅ Teste em mobile e desktop
4. ✅ Faça deploy

---

**Precisa de ajuda?** Revise os comentários no código - eles explicam tudo!

**Boa sorte com suas vendas! 🏠✨**

