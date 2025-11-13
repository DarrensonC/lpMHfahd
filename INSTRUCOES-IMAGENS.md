# 📸 Guia Completo de Imagens

## ⚠️ IMPORTANTE: Crie a estrutura de pastas primeiro

Execute os comandos abaixo para criar as pastas necessárias:

### Windows (PowerShell)
```powershell
mkdir public\images
mkdir public\images\gallery
mkdir public\images\testimonials
```

### Linux/Mac
```bash
mkdir -p public/images/gallery
mkdir -p public/images/testimonials
```

---

## 📋 Lista Completa de Imagens Necessárias

### 1️⃣ LOGOS (2 imagens)

| Arquivo | Localização | Dimensões | Formato |
|---------|-------------|-----------|---------|
| Logo colorida | `public/images/logo-mhfahd.png` | 180x60px | PNG (com transparência) |
| Logo branca | `public/images/logo-mhfahd-white.png` | 160x50px | PNG (com transparência) |

**Como obter:**
- Exporte a logo da M.H.FAHD em alta resolução
- Use fundo transparente
- Logo branca: inverta as cores para uso no footer escuro

---

### 2️⃣ HERO / FUNDO (1 imagem)

| Arquivo | Localização | Dimensões | Formato |
|---------|-------------|-----------|---------|
| Fachada principal | `public/images/hero-background.jpg` | 1920x1080px (Full HD) | JPG/JPEG |

**Dicas:**
- Foto da fachada da casa ao entardecer (luz dourada)
- Ângulo frontal ou 3/4
- Alta qualidade, bem iluminada
- Será o primeiro impacto visual da página

---

### 3️⃣ GALERIA (12 imagens)

Todas em `public/images/gallery/`

| Arquivo | Descrição | Dimensões Recomendadas |
|---------|-----------|------------------------|
| `01.jpg` | Fachada da casa (principal) | 1200x800px |
| `02.jpg` | Sala de estar | 1200x800px |
| `03.jpg` | Cozinha gourmet | 1200x800px |
| `04.jpg` | Suíte master | 1200x800px |
| `05.jpg` | Banheiro | 1200x800px |
| `06.jpg` | Área gourmet | 1200x800px |
| `07.jpg` | Piscina | 1200x800px |
| `08.jpg` | Mezanino | 1200x800px |
| `09.jpg` | Closet | 1200x800px |
| `10.jpg` | Vista externa | 1200x800px |
| `11.jpg` | Área de lazer | 1200x800px |
| `12.jpg` | Varanda | 1200x800px |

**Dicas importantes:**
- Fotos profissionais, bem iluminadas
- Tire em dias ensolarados ou com boa luz natural
- Use lentes grande angular para ambientes internos
- Mantenha os ambientes organizados e limpos
- Evite fotos com pessoas (foco no imóvel)

**Sugestão de distribuição:**
- 3-4 fotos externas (fachada, piscina, área externa)
- 8-9 fotos internas (salas, quartos, cozinha, banheiros)

---

### 4️⃣ SOBRE A M.H.FAHD (1 imagem)

| Arquivo | Localização | Dimensões | Formato |
|---------|-------------|-----------|---------|
| Imagem institucional | `public/images/about-mhfahd.jpg` | 1200x1200px | JPG/JPEG |

**Opções:**
- Foto do escritório da M.H.FAHD
- Foto da equipe
- Fachada do escritório
- Imagem conceitual de arquitetura/construção
- Portfolio de imóveis

---

### 5️⃣ DEPOIMENTOS (2 imagens)

Todas em `public/images/testimonials/`

| Arquivo | Descrição | Dimensões |
|---------|-----------|-----------|
| `client1.jpg` | Foto do cliente 1 (Maria Silva) | 300x300px (quadrada) |
| `client2.jpg` | Foto do cliente 2 (João Santos) | 300x300px (quadrada) |

**Opções se não tiver fotos reais:**
1. Use fotos de banco de imagens:
   - [Unsplash](https://unsplash.com) (gratuito)
   - [Pexels](https://pexels.com) (gratuito)
   - Busque: "professional person", "business person"

2. Use avatares/ilustrações:
   - [UI Faces](https://uifaces.co)
   - [This Person Does Not Exist](https://thispersondoesnotexist.com)

3. Remova a seção temporariamente (edite `app/page.tsx`)

---

## 🎬 VÍDEO TOUR

Não é uma imagem, mas você precisa:

1. Grave um vídeo tour do imóvel (2-3 minutos)
2. Faça upload no YouTube ou Vimeo
3. Copie o ID do vídeo
4. Cole em `components/VideoTour.tsx`

**YouTube:**
- URL: `youtube.com/watch?v=ABC123`
- ID: `ABC123`

**Vimeo:**
- URL: `vimeo.com/123456789`
- ID: `123456789`

---

## 📏 Dicas de Fotografia Profissional

### Para fotos externas:
- ✅ Horário: Golden hour (pôr do sol) ou manhã cedo
- ✅ Clima: Dias ensolarados
- ✅ Ângulo: Ligeiramente de baixo para cima (valoriza)

### Para fotos internas:
- ✅ Iluminação: Todas as luzes acesas + luz natural
- ✅ Lente: Grande angular (16-35mm)
- ✅ Altura: Na altura dos olhos
- ✅ Organização: Remova objetos pessoais, arrume almofadas

### Edição básica:
- Aumente levemente o brilho
- Realce as cores (saturação suave)
- Corrija a perspectiva (linhas retas)
- Use filtros de "imóveis" se disponível

---

## ⚡ Otimização de Imagens

Antes de fazer upload, otimize as imagens:

### Ferramentas online (gratuitas):
- [TinyPNG](https://tinypng.com) - Reduz 70% do tamanho
- [Squoosh](https://squoosh.app) - Google, com controle fino
- [Compressor.io](https://compressor.io)

### Formatos recomendados:
- **JPG/JPEG:** Fotos (galeria, hero)
- **PNG:** Logos (com transparência)
- **WebP:** Melhor compressão (Next.js converte automaticamente)

---

## 🆘 Não Tenho as Fotos Ainda?

### Solução temporária:

Use fotos de placeholder enquanto não tem as reais:

1. **Unsplash** (casas de luxo):
   - https://unsplash.com/s/photos/luxury-house
   - https://unsplash.com/s/photos/modern-house-interior

2. **Pexels**:
   - https://www.pexels.com/search/luxury%20house/

3. **Lorem Picsum** (placeholders automáticos):
   - `https://picsum.photos/1200/800` (gera imagem aleatória)

**⚠️ IMPORTANTE:** Use apenas como placeholder, substitua por fotos reais antes do lançamento.

---

## ✅ Checklist Final

Antes de lançar, verifique:

- [ ] Logo colorida no header
- [ ] Logo branca no footer
- [ ] Imagem de fundo no Hero (primeira dobra)
- [ ] 12 fotos na galeria
- [ ] Imagem institucional na seção "Sobre"
- [ ] 2 fotos de clientes nos depoimentos
- [ ] Vídeo tour funcionando
- [ ] Todas as imagens otimizadas (< 500KB cada)
- [ ] Imagens carregando corretamente no navegador

---

## 📞 Estrutura Final de Pastas

```
public/
└── images/
    ├── logo-mhfahd.png
    ├── logo-mhfahd-white.png
    ├── hero-background.jpg
    ├── about-mhfahd.jpg
    ├── gallery/
    │   ├── 01.jpg
    │   ├── 02.jpg
    │   ├── 03.jpg
    │   ├── 04.jpg
    │   ├── 05.jpg
    │   ├── 06.jpg
    │   ├── 07.jpg
    │   ├── 08.jpg
    │   ├── 09.jpg
    │   ├── 10.jpg
    │   ├── 11.jpg
    │   └── 12.jpg
    └── testimonials/
        ├── client1.jpg
        └── client2.jpg
```

**Total:** 18 imagens + 1 vídeo

---

**Qualquer dúvida, consulte os comentários no código!**
Cada componente tem comentários indicando onde substituir as imagens.

