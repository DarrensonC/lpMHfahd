# 📸 Imagens Necessárias - Sistema de Múltiplos Imóveis

## ✅ Imóvel: Valencia (JÁ CONFIGURADO)

**Pasta:** `public/images/`

- ✅ `hero.png` (imagem principal)
- ✅ `gallery/01.png` até `13.png` (galeria)
- ✅ `800 por 500.png` (sobre a imobiliária)
- ✅ `logo 540 x 180.png` (logo)
- ✅ `logo 480 x 150.png` (logo footer)

**Status:** ✅ Todas as imagens já estão no lugar!

---

## ⚠️ Imóvel: Locação (PRECISA ADICIONAR IMAGENS)

**Pasta:** `public/images/locacao/`

### **Imagens Necessárias:**

1. **Hero (Imagem Principal):**
   - `hero.png`
   - Tamanho: 1920x1080px
   - Esta imagem aparece na primeira tela do site

2. **Galeria:**
   - `gallery/01.png` (sala de estar)
   - `gallery/02.png` (cozinha)
   - `gallery/03.png` (suíte master)
   - `gallery/04.png` (banheiro)
   - `gallery/05.png` (sacada)
   - Tamanho: 1200x800px cada
   - Mínimo: 5 fotos / Máximo: 20 fotos

---

## 🎯 Como Adicionar as Imagens

### **Opção 1: Usar Imagens Temporárias (Para Teste)**

Para testar o sistema, você pode:

1. **Copiar as imagens do Valencia:**
   ```
   Copie: public/images/hero.png
   Cole em: public/images/locacao/hero.png
   
   Copie: public/images/gallery/01.png até 05.png
   Cole em: public/images/locacao/gallery/
   ```

2. Acessar: `http://localhost:3000/locacao`
3. Vai funcionar! (mas com as imagens do Valencia)

### **Opção 2: Adicionar Imagens Reais**

1. Tire fotos do apartamento para locação
2. Edite/redimensione conforme os tamanhos recomendados
3. Renomeie seguindo a estrutura:
   - `hero.png`
   - `gallery/01.png`, `02.png`, etc.
4. Cole na pasta `public/images/locacao/`

---

## 📐 Tamanhos Recomendados

| Tipo | Tamanho | Formato | Peso Máx |
|------|---------|---------|----------|
| Hero | 1920x1080px | PNG/JPG | 500KB |
| Gallery | 1200x800px | PNG/JPG | 300KB |
| About | 800x500px | PNG/JPG | 200KB |

---

## 🔧 Ferramentas para Editar Imagens

### **Online (Grátis):**
- **Canva:** https://canva.com
- **Photopea:** https://photopea.com (igual Photoshop)
- **Squoosh:** https://squoosh.app (comprimir imagens)

### **Desktop:**
- **GIMP:** Grátis (Windows/Mac/Linux)
- **Paint.NET:** Grátis (Windows)
- **Photoshop:** Pago

---

## ⚡ Comando Rápido para Criar Pastas

### **PowerShell (Windows):**

```powershell
# Criar estrutura para um novo imóvel
cd "I:\Lp MH Fahd"
mkdir "public\images\nome-do-imovel"
mkdir "public\images\nome-do-imovel\gallery"
```

### **Exemplo para "casa-centro":**

```powershell
cd "I:\Lp MH Fahd"
mkdir "public\images\casa-centro"
mkdir "public\images\casa-centro\gallery"
```

---

## 📝 Checklist de Imagens por Imóvel

### **Valencia:**
- [x] Hero
- [x] Gallery (13 fotos)
- [x] About (reutiliza a da imobiliária)

### **Locação:**
- [ ] Hero
- [ ] Gallery (5-10 fotos)
- [ ] About (reutiliza a da imobiliária)

### **Próximo Imóvel:**
- [ ] Hero
- [ ] Gallery
- [ ] About (reutiliza a da imobiliária)

---

## 🎨 Dicas de Fotografia de Imóveis

### **Hero (Imagem Principal):**
- ✅ Foto externa ou ambiente principal
- ✅ Boa iluminação (de preferência natural)
- ✅ Ângulo que mostre amplitude
- ❌ Evite fotos escuras ou desfocadas

### **Gallery:**
- ✅ 1-2 fotos da fachada/externa
- ✅ 2-3 fotos de salas (estar/jantar)
- ✅ 1-2 fotos de cozinha
- ✅ 2-3 fotos de suítes/quartos
- ✅ 1-2 fotos de banheiros
- ✅ 1-2 fotos de áreas de lazer (piscina, gourmet, etc.)
- ✅ Ângulos que mostrem amplitude
- ❌ Evite fotos de armários/closets fechados
- ❌ Evite fotos com objetos pessoais

### **Composição:**
- ✅ Câmera na altura do peito
- ✅ Linhas retas (não inclinadas)
- ✅ Ambiente limpo e organizado
- ✅ Cortinas/persianas abertas (luz natural)
- ❌ Evite flash direto (causa reflexos)

---

## 🚀 Exemplo de Workflow

### **Adicionar "Casa no Centro":**

1. **Criar Pastas:**
   ```powershell
   cd "I:\Lp MH Fahd"
   mkdir "public\images\casa-centro"
   mkdir "public\images\casa-centro\gallery"
   ```

2. **Adicionar Imagens:**
   - Copie `hero.png` para `public/images/casa-centro/`
   - Copie fotos da galeria para `public/images/casa-centro/gallery/01.png`, `02.png`, etc.

3. **Atualizar JSON:**
   - Edite `data/imoveis/casa-centro.json`
   - Altere caminhos das imagens:
     ```json
     "hero": {
       "image": "/images/casa-centro/hero.png"
     },
     "gallery": {
       "images": [
         { "src": "/images/casa-centro/gallery/01.png", "alt": "Fachada" }
       ]
     }
     ```

4. **Testar:**
   ```bash
   npm run dev
   ```
   Acesse: `http://localhost:3000/casa-centro`

---

## 🎯 Status Atual

### **✅ Pronto para Produção:**
- Valencia (todas as imagens OK)

### **⚠️ Precisa de Imagens:**
- Locação (usando placeholders)

### **➕ Próximos:**
- (aguardando novos imóveis)

---

## 🆘 Problemas Comuns

### **"Imagem não aparece"**

1. ✅ Verifica se o caminho no JSON está correto
2. ✅ Verifica se a imagem está na pasta `public/`
3. ✅ Restart: `npm run dev` após adicionar imagens
4. ✅ Limpa o cache do navegador (Ctrl+F5)

### **"Imagem muito pesada / site lento"**

1. ✅ Comprima as imagens: https://squoosh.app
2. ✅ Use formato WebP (menor tamanho)
3. ✅ Redimensione para os tamanhos recomendados

### **"Imagem distorcida"**

1. ✅ Use o aspect ratio correto:
   - Hero: 16:9 (1920x1080)
   - Gallery: 4:3 ou 3:2 (1200x800)
2. ✅ Não force dimensões diferentes das originais

---

## 📞 Contato para Dúvidas

Se tiver dúvidas sobre:
- Qual tamanho usar
- Como editar imagens
- Problemas com upload

Consulte este guia ou o `GUIA-SISTEMA-MULTIPLOS-IMOVEIS.md`!

---

**✅ Sistema pronto para receber infinitos imóveis!** 🚀

