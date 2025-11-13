# ⚡ COMANDOS RÁPIDOS - DEPLOY VERCEL

## 🎯 COPIE E COLE NO POWERSHELL

### **1. Preparar Projeto**

```powershell
cd "I:\Lp MH Fahd"
```

```powershell
git init
```

```powershell
git add .
```

```powershell
git commit -m "feat: Landing Pages M.H.FAHD - Valencia e Locação"
```

```powershell
git branch -M main
```

---

### **2. Criar Repositório no GitHub**

**⚠️ ANTES de executar os comandos abaixo:**

1. Acesse: https://github.com/new
2. Nome: `lp-mh-fahd`
3. Private ou Public
4. **NÃO** marque "Add README"
5. Clique em "Create repository"

**Copie o link que aparecerá** (algo como: `https://github.com/SEU-USUARIO/lp-mh-fahd.git`)

---

### **3. Conectar com GitHub**

**⚠️ SUBSTITUA o link abaixo pelo que você copiou!**

```powershell
git remote add origin https://github.com/SEU-USUARIO/lp-mh-fahd.git
```

**Exemplo real:**
```powershell
# Se seu GitHub for: github.com/joaosilva
git remote add origin https://github.com/joaosilva/lp-mh-fahd.git
```

```powershell
git push -u origin main
```

**Se pedir credenciais:**
- Username: seu username do GitHub
- Password: use um **Personal Access Token** (não a senha normal)

---

### **4. Deploy na Vercel**

#### **Opção A: Pelo Site (MAIS FÁCIL)** ⭐

1. Acesse: https://vercel.com/new
2. Faça login com GitHub
3. Escolha o repositório `lp-mh-fahd`
4. Clique em "Import"
5. Clique em "Deploy"
6. Aguarde 2-3 minutos
7. ✅ **PRONTO!**

**Sua LP estará em:** `https://lp-mh-fahd.vercel.app`

---

#### **Opção B: Pelo CLI (AVANÇADO)**

```powershell
npm i -g vercel
```

```powershell
vercel login
```

```powershell
vercel
```

**Responda:**
- Set up and deploy? `Y`
- Link to existing project? `N`
- Project name? `lp-mh-fahd`
- Directory? `./`
- Override settings? `N`

```powershell
vercel --prod
```

---

## 🔄 PARA ATUALIZAÇÕES FUTURAS

Quando fizer mudanças:

```powershell
cd "I:\Lp MH Fahd"
```

```powershell
git add .
```

```powershell
git commit -m "fix: descrição da mudança"
```

```powershell
git push
```

**🎉 Deploy automático na Vercel!**

---

## 🌐 SUAS LPs ESTARÃO EM:

- 🏠 `https://seu-projeto.vercel.app/valencia`
- 🏢 `https://seu-projeto.vercel.app/locacao`

---

## ✅ CHECKLIST

- [ ] Git inicializado
- [ ] Repositório GitHub criado
- [ ] Código enviado pro GitHub
- [ ] Deploy feito na Vercel
- [ ] Testado as 2 rotas (/valencia e /locacao)

---

**🚀 PRONTO! SUAS LPs ESTÃO NO AR!** ✨

