# 📸 GUIA: ONDE COLOCAR AS IMAGENS - LP LOCAÇÃO

## 🎯 Estrutura de Pastas

```
public/
└── images/
    └── locacao/
        ├── hero.png          ← IMAGEM PRINCIPAL (FACHADA)
        └── gallery/
            ├── 01.png        ← Foto 1 da galeria
            ├── 02.png        ← Foto 2 da galeria
            ├── 03.png        ← Foto 3 da galeria
            ├── 04.png        ← Foto 4 da galeria
            └── 05.png        ← Foto 5 da galeria
```

---

## 📁 PASSO A PASSO

### **1. Criar as Pastas (se ainda não existirem)**

#### No Windows PowerShell:
```powershell
cd "I:\Lp MH Fahd"
mkdir "public\images\locacao\gallery" -Force
```

---

## 🖼️ IMAGENS NECESSÁRIAS

### **📌 1. HERO (Imagem Principal)**

**Arquivo:** `hero.png`  
**Local:** `public/images/locacao/hero.png`

**O que fotografar:**
- ✅ Fachada completa do ponto comercial
- ✅ Visão externa mostrando a localização
- ✅ Letreiro/placa (se houver)
- ✅ Vista da rua mostrando o movimento
- ✅ Foto durante o dia com boa iluminação

**Tamanho recomendado:**
- **Largura:** 1920px
- **Altura:** 1080px
- **Proporção:** 16:9 (paisagem/horizontal)
- **Formato:** PNG ou JPG

**💡 DICA:** Esta é a primeira imagem que o visitante verá. Escolha a foto mais impactante da fachada!

---

### **📌 2. GALERIA (5 fotos)**

**Local:** `public/images/locacao/gallery/`

#### **01.png** - Fachada Externa Completa
- Vista ampla da fachada
- Mostre a localização e visibilidade
- Durante o dia

#### **02.png** - Interior/Espaço Interno 1
- Área principal do salão
- Mostre a amplitude (680m²)
- Pé-direito
- Iluminação natural

#### **03.png** - Interior/Espaço Interno 2
- Outro ângulo do espaço
- Versatilidade do layout
- Diferentes áreas

#### **04.png** - Banheiros/Instalações
- Um dos 6 banheiros
- Infraestrutura
- Instalações hidráulicas

#### **05.png** - Detalhe/Vista Geral
- Pode ser:
  - Entrada principal
  - Vista da rua (movimento)
  - Outro detalhe relevante
  - Visão lateral

**Tamanho recomendado (cada foto):**
- **Largura:** 800px a 1200px
- **Altura:** 600px a 900px
- **Proporção:** 4:3 ou livre
- **Formato:** PNG ou JPG

---

## 📋 CHECKLIST DE FOTOS

### ✅ Checklist do que fotografar:

- [ ] **Fachada completa** (hero.png)
- [ ] **Vista da rua** mostrando localização
- [ ] **Interior amplo** (salão principal)
- [ ] **Diferentes ângulos internos**
- [ ] **Banheiros** (pelo menos 1)
- [ ] **Entrada principal**
- [ ] **Detalhes da infraestrutura**
- [ ] **Iluminação natural** (janelas/claridade)
- [ ] **Pé-direito alto** (se houver)
- [ ] **Vista externa** do movimento

---

## 🎨 DICAS DE FOTOGRAFIA

### ✅ FAÇA:
- ✅ Fotografe durante o dia com luz natural
- ✅ Use modo paisagem (horizontal) para hero
- ✅ Limpe o espaço antes de fotografar
- ✅ Use ângulos que mostrem amplitude
- ✅ Destaque a fachada e visibilidade
- ✅ Mostre o fluxo de pessoas (rua movimentada)
- ✅ Fotos nítidas e bem iluminadas

### ❌ EVITE:
- ❌ Fotos escuras ou à noite
- ❌ Ângulos que "espremem" o espaço
- ❌ Espaço bagunçado/sujo
- ❌ Fotos tremidas ou desfocadas
- ❌ Filtros exagerados
- ❌ Fotos com pessoas aleatórias

---

## 🚀 COMO ADICIONAR AS FOTOS

### **Opção 1: Arrastar e Soltar (Recomendado)**

1. Abra o Explorer do Windows
2. Navegue até: `I:\Lp MH Fahd\public\images\locacao\`
3. Arraste suas fotos para as pastas corretas:
   - `hero.png` → direto em `/locacao/`
   - `01.png, 02.png, etc.` → dentro de `/locacao/gallery/`

### **Opção 2: Copiar via PowerShell**

```powershell
# Se suas fotos estão em C:\Fotos\
Copy-Item "C:\Fotos\fachada.jpg" "public\images\locacao\hero.png"
Copy-Item "C:\Fotos\foto1.jpg" "public\images\locacao\gallery\01.png"
Copy-Item "C:\Fotos\foto2.jpg" "public\images\locacao\gallery\02.png"
# ... etc
```

---

## 📸 EXEMPLO DE ORGANIZAÇÃO

```
📁 public/images/locacao/
│
├── 📷 hero.png                 (1920x1080) - FACHADA PRINCIPAL
│
└── 📁 gallery/
    ├── 📷 01.png              (1200x900) - Fachada externa completa
    ├── 📷 02.png              (1200x900) - Interior/Salão 1
    ├── 📷 03.png              (1200x900) - Interior/Salão 2
    ├── 📷 04.png              (1200x900) - Banheiros
    └── 📷 05.png              (1200x900) - Vista geral/detalhe
```

---

## 🎯 RESUMO RÁPIDO

| Imagem | Local | Tamanho | O Que Fotografar |
|--------|-------|---------|------------------|
| **hero.png** | `locacao/` | 1920x1080 | Fachada completa |
| **01.png** | `locacao/gallery/` | 1200x900 | Fachada/Externa |
| **02.png** | `locacao/gallery/` | 1200x900 | Interior/Salão 1 |
| **03.png** | `locacao/gallery/` | 1200x900 | Interior/Salão 2 |
| **04.png** | `locacao/gallery/` | 1200x900 | Banheiros |
| **05.png** | `locacao/gallery/` | 1200x900 | Detalhe/Vista |

---

## ✅ VALIDAÇÃO

Após adicionar as fotos, verifique se a estrutura está assim:

```bash
# No PowerShell, na pasta do projeto:
tree public\images\locacao /F
```

**Resultado esperado:**
```
locacao
│   hero.png
│
└───gallery
        01.png
        02.png
        03.png
        04.png
        05.png
```

---

## 🔄 TESTAR AS FOTOS

Depois de adicionar as imagens:

```bash
npm run dev
```

Acesse: http://localhost:3000/locacao

**Verifique:**
- ✅ Hero carrega a fachada
- ✅ Galeria mostra todas as 5 fotos
- ✅ Fotos estão nítidas e bem posicionadas
- ✅ Responsividade mobile OK

---

## 💡 DICA PROFISSIONAL

**Para máxima conversão:**
1. **Hero:** Escolha a foto mais impactante da fachada
2. **Galeria:** Mostre versatilidade do espaço
3. **Qualidade:** Fotos profissionais convertem mais
4. **Iluminação:** Luz natural é essencial
5. **Limpeza:** Espaço organizado vende melhor

---

## 📞 SUPORTE

Caso as imagens não apareçam:
1. Verifique os nomes dos arquivos (exatamente como especificado)
2. Confirme que estão nas pastas corretas
3. Reinicie o servidor (`npm run dev`)
4. Limpe o cache do navegador (Ctrl + Shift + R)

---

**✅ Siga este guia e suas fotos estarão perfeitas!** 📸✨

