# 🚀 GUIA COMPLETO: DEPLOY NA VERCEL

## 📋 PRÉ-REQUISITOS

Antes de começar, você precisa:
- ✅ Conta na Vercel (gratuita): https://vercel.com
- ✅ Conta no GitHub (gratuita): https://github.com
- ✅ Git instalado no seu computador

---

## 🎯 PASSO A PASSO COMPLETO

### **ETAPA 1: Criar Conta na Vercel (se ainda não tiver)**

1. Acesse: https://vercel.com
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"**
4. Autorize a Vercel a acessar sua conta GitHub
5. Pronto! Conta criada ✅

---

### **ETAPA 2: Criar Repositório no GitHub**

#### **Opção A: Pelo Site (MAIS FÁCIL)**

1. Acesse: https://github.com/new
2. **Nome do repositório:** `lp-mh-fahd` (ou outro nome)
3. **Visibilidade:** Private (recomendado) ou Public
4. **NÃO** marque "Add a README file"
5. Clique em **"Create repository"**
6. **Deixe a página aberta** - vamos precisar dos comandos!

---

### **ETAPA 3: Preparar o Projeto Localmente**

Abra o **PowerShell** na pasta do projeto e execute os comandos:

```powershell
# 1. Navegar até a pasta do projeto
cd "I:\Lp MH Fahd"

# 2. Inicializar o Git
git init

# 3. Adicionar todos os arquivos
git add .

# 4. Fazer o primeiro commit
git commit -m "feat: Landing Pages M.H.FAHD - Valencia e Locação"

# 5. Renomear branch para main
git branch -M main
```

---

### **ETAPA 4: Conectar com GitHub**

**⚠️ IMPORTANTE:** Substitua `SEU-USUARIO` pelo seu username do GitHub!

```powershell
# Exemplo: se seu GitHub é github.com/joaosilva
# Use: git remote add origin https://github.com/joaosilva/lp-mh-fahd.git

git remote add origin https://github.com/SEU-USUARIO/lp-mh-fahd.git
```

**Depois:**

```powershell
# Push para o GitHub
git push -u origin main
```

**📌 Se pedir credenciais:**
- **Username:** seu username do GitHub
- **Password:** use um **Personal Access Token** (não a senha)

**Como criar Token:**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Marque "repo" → Generate
3. Copie o token e use como senha

---

### **ETAPA 5: Fazer Deploy na Vercel**

#### **Método 1: Pelo Site da Vercel (RECOMENDADO)**

1. Acesse: https://vercel.com/new
2. Clique em **"Import Git Repository"**
3. Escolha o repositório **`lp-mh-fahd`**
4. Clique em **"Import"**
5. **Configurações do Projeto:**
   - **Framework Preset:** Next.js (já detecta automaticamente)
   - **Root Directory:** ./
   - **Build Command:** `npm run build` (padrão)
   - **Output Directory:** .next (padrão)
6. Clique em **"Deploy"**
7. Aguarde 2-3 minutos ⏳
8. ✅ **Deploy concluído!**

#### **Método 2: Pelo CLI da Vercel**

```powershell
# 1. Instalar Vercel CLI globalmente
npm i -g vercel

# 2. Fazer login
vercel login

# 3. Fazer deploy
vercel

# Responda as perguntas:
# - Set up and deploy? Y
# - Which scope? (escolha sua conta)
# - Link to existing project? N
# - What's your project's name? lp-mh-fahd
# - In which directory is your code located? ./
# - Want to override settings? N

# 4. Deploy para produção
vercel --prod
```

---

## 🌐 DEPOIS DO DEPLOY

### **Sua LP estará online em:**

```
https://lp-mh-fahd.vercel.app
```

**Rotas funcionando:**
- 🏠 `/valencia` → Casa de Alto Padrão
- 🏢 `/locacao` → Ponto Comercial

**Rota raiz:**
- 🔄 `/` → Redireciona automaticamente para `/valencia`

---

## 🎨 CONFIGURAR DOMÍNIO PRÓPRIO (OPCIONAL)

### **Se você já tem um domínio (ex: mhfahdimoveis.com.br):**

1. No painel da Vercel, clique no projeto
2. Vá em **"Settings"** → **"Domains"**
3. Clique em **"Add Domain"**
4. Digite seu domínio: `mhfahdimoveis.com.br`
5. Siga as instruções para configurar DNS:
   - **Tipo:** CNAME
   - **Nome:** www (ou @)
   - **Valor:** cname.vercel-dns.com

6. Aguarde propagação (até 48h, mas geralmente 10-30 min)

**Depois da configuração:**
- ✅ `https://mhfahdimoveis.com.br/valencia`
- ✅ `https://mhfahdimoveis.com.br/locacao`

---

## 🔄 ATUALIZAÇÕES FUTURAS

### **Quando você fizer alterações:**

```powershell
# 1. Navegar até a pasta
cd "I:\Lp MH Fahd"

# 2. Adicionar mudanças
git add .

# 3. Commit com mensagem descritiva
git commit -m "fix: corrige layout mobile da galeria"

# 4. Enviar para GitHub
git push

# 5. A Vercel faz deploy automaticamente! 🎉
```

**🚀 Deploy automático:** A cada push no GitHub, a Vercel atualiza automaticamente!

---

## 📊 MONITORAMENTO

### **No painel da Vercel você pode:**
- 📈 Ver analytics (visitantes, pageviews)
- 🐛 Ver logs de erro
- ⚡ Ver performance
- 🌍 Ver visitantes por país
- 📱 Ver dispositivos (desktop/mobile)

**Acesse:** https://vercel.com/dashboard

---

## 🔧 SOLUÇÃO DE PROBLEMAS

### **Problema: "Git push falhou"**
```powershell
# Verificar se está conectado ao repositório correto
git remote -v

# Deve mostrar:
# origin  https://github.com/SEU-USUARIO/lp-mh-fahd.git
```

### **Problema: "Build failed na Vercel"**
1. Verifique os logs no painel da Vercel
2. Teste localmente primeiro: `npm run build`
3. Se funcionar localmente, faça push novamente

### **Problema: "Imagens não aparecem no deploy"**
- ✅ Certifique-se de que as imagens estão em `public/images/`
- ✅ Verifique se os caminhos estão corretos no JSON
- ✅ Faça commit das imagens: `git add public/images/`

### **Problema: "404 ao acessar /locacao"**
- ✅ Verifique se existe `app/locacao/page.tsx`
- ✅ Teste localmente: `npm run dev`
- ✅ Limpe o cache da Vercel: Deployments → Menu → Redeploy

---

## 🎯 CHECKLIST FINAL ANTES DO DEPLOY

- [ ] ✅ Testei localmente (`npm run dev`)
- [ ] ✅ `/valencia` funciona
- [ ] ✅ `/locacao` funciona
- [ ] ✅ Imagens carregam corretamente
- [ ] ✅ Vídeos funcionam
- [ ] ✅ Formulários enviam para WhatsApp
- [ ] ✅ Mobile está responsivo
- [ ] ✅ Sem erros no console do navegador
- [ ] ✅ Git inicializado
- [ ] ✅ Repositório GitHub criado
- [ ] ✅ Código enviado para GitHub
- [ ] ✅ Deploy feito na Vercel

---

## 🚀 COMANDOS RESUMIDOS (COLA)

```powershell
# 1. Setup inicial
cd "I:\Lp MH Fahd"
git init
git add .
git commit -m "feat: Landing Pages M.H.FAHD"
git branch -M main

# 2. Conectar com GitHub (SUBSTITUA SEU-USUARIO!)
git remote add origin https://github.com/SEU-USUARIO/lp-mh-fahd.git
git push -u origin main

# 3. Deploy (escolha um método)

## Opção A: Pelo site
# Acesse: https://vercel.com/new
# Importe o repositório e clique em Deploy

## Opção B: Pelo CLI
npm i -g vercel
vercel login
vercel
vercel --prod
```

---

## 📞 SUPORTE

**Documentação oficial:**
- Vercel: https://vercel.com/docs
- Next.js: https://nextjs.org/docs
- GitHub: https://docs.github.com

**Comunidade:**
- Discord do Next.js: https://nextjs.org/discord
- Vercel Community: https://github.com/vercel/vercel/discussions

---

## 🎉 RESULTADO FINAL

Após seguir este guia, você terá:

✅ **2 Landing Pages profissionais online**
- 🏠 Casa Valencia (venda)
- 🏢 Ponto Comercial Portão (locação)

✅ **Sistema escalável**
- Adicione novos imóveis facilmente
- Deploy automático
- Performance otimizada

✅ **Analytics e monitoramento**
- Veja quantas pessoas visitam
- Analise comportamento
- Otimize conversões

✅ **Domínio customizado** (opcional)
- Use seu próprio domínio
- SSL/HTTPS automático
- CDN global

---

**🚀 BOA SORTE COM O DEPLOY!**

Qualquer dúvida, consulte este guia ou a documentação oficial! ✨

