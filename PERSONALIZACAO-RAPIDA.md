# ⚡ Guia de Personalização Rápida

Este documento lista TODAS as substituições que você precisa fazer para personalizar a Landing Page.

## 🔥 PRIORIDADE MÁXIMA (Faça Primeiro)

### 1. Número do WhatsApp (3 arquivos)

**⚠️ SUBSTITUA `5541999999999` pelo seu número real:**

```typescript
// components/Hero.tsx (linha 8)
const phoneNumber = '5541999999999' // ← MUDE AQUI

// components/WhatsAppButton.tsx (linha 5)
const phoneNumber = '5541999999999' // ← MUDE AQUI

// components/ContactForm.tsx (linha 38)
const phoneNumber = '5541999999999' // ← MUDE AQUI
```

**Formato:** código país + DDD + número (sem espaços)
**Exemplo:** `5541987654321`

---

### 2. Vídeo do YouTube/Vimeo

```typescript
// components/VideoTour.tsx (linha 26)
src="https://www.youtube.com/embed/SEU_VIDEO_ID_AQUI"
//                                   ^^^^^^^^^^^^^^^^
//                                   SUBSTITUA AQUI
```

**Como obter o ID:**
- YouTube: `youtube.com/watch?v=ABC123` → Use `ABC123`
- Vimeo: `vimeo.com/123456789` → Use `123456789` (URL completa)

---

### 3. Google Maps Embed

```typescript
// components/Location.tsx (linha 64)
src="https://www.google.com/maps/embed?pb=..."
//   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//   SUBSTITUA PELO SEU EMBED DO GOOGLE MAPS
```

**Como obter:**
1. Acesse [Google Maps](https://maps.google.com)
2. Pesquise: **Rua Íris Antônio Campos, 233 - Campo Comprido - Curitiba/PR**
3. Clique em **Compartilhar**
4. Selecione **Incorporar mapa**
5. Copie o código
6. Cole o `src="..."` no lugar

---

### 4. Imagens (18 arquivos)

Veja o arquivo **INSTRUCOES-IMAGENS.md** para lista completa.

**Estrutura mínima:**
```
public/images/
├── logo-mhfahd.png              ← Logo colorida
├── logo-mhfahd-white.png        ← Logo branca
├── hero-background.jpg          ← Foto principal
├── about-mhfahd.jpg             ← Foto institucional
├── gallery/
│   ├── 01.jpg até 12.jpg        ← 12 fotos do imóvel
└── testimonials/
    ├── client1.jpg              ← Foto cliente 1
    └── client2.jpg              ← Foto cliente 2
```

---

## 📧 DADOS DE CONTATO

### Footer - Links e Informações

```typescript
// components/Footer.tsx

// Telefone (linha 46)
<a href="tel:+5541999999999">
  (41) 99999-9999  // ← MUDE AQUI
</a>

// Email (linha 53)
<a href="mailto:contato@mhfahd.com.br">
  contato@mhfahd.com.br  // ← MUDE AQUI
</a>

// Endereço (linha 60)
<span>
  Curitiba - PR  // ← ADICIONE ENDEREÇO COMPLETO SE DESEJAR
</span>
```

---

## 📱 REDES SOCIAIS

### Footer - Links das Redes

```typescript
// components/Footer.tsx (linhas 71-91)

// Instagram
<a href="#" target="_blank">  // ← Substitua # pela URL do Instagram

// Facebook
<a href="#" target="_blank">  // ← Substitua # pela URL do Facebook

// LinkedIn
<a href="#" target="_blank">  // ← Substitua # pela URL do LinkedIn
```

**Formato:**
- Instagram: `https://instagram.com/mhfahd`
- Facebook: `https://facebook.com/mhfahd`
- LinkedIn: `https://linkedin.com/company/mhfahd`

---

## 👥 DEPOIMENTOS (Opcional)

Se quiser mudar os nomes e textos dos clientes:

```typescript
// components/Testimonials.tsx (linha 6)

const testimonials = [
  {
    name: 'Maria Silva',  // ← MUDE O NOME
    image: '/images/testimonials/client1.jpg',  // ← FOTO
    text: 'A M.H.FAHD me ajudou...',  // ← MUDE O TEXTO
    role: 'Cliente'
  },
  {
    name: 'João Santos',  // ← MUDE O NOME
    image: '/images/testimonials/client2.jpg',  // ← FOTO
    text: 'Equipe excepcional...',  // ← MUDE O TEXTO
    role: 'Cliente'
  }
]
```

---

## 🎨 PERSONALIZAÇÃO DE CORES (Avançado)

Se precisar ajustar levemente as cores:

```typescript
// tailwind.config.ts (linhas 12-22)

colors: {
  primary: {
    DEFAULT: '#0F2744',  // Azul marinho principal
    dark: '#0A1B2E',     // Azul mais escuro
    light: '#1A3A5C',    // Azul mais claro
  },
  // ...
}
```

**⚠️ NÃO RECOMENDADO:** Apenas se a logo tiver cores diferentes.

---

## 📊 SEO - Meta Tags

```typescript
// app/layout.tsx (linhas 6-16)

export const metadata: Metadata = {
  title: 'Casa de Alto Padrão - Condomínio Valencia | M.H.FAHD',
  description: 'Casa de alto padrão com 4 suítes...',
  keywords: 'casa alto padrão curitiba, imóvel de luxo...',
  // Você pode adicionar mais palavras-chave aqui
}
```

---

## 🔄 FORMULÁRIO - Destino dos Dados

Atualmente o formulário envia para o WhatsApp. Se quiser integrar com:

### Opção 1: Email (EmailJS)
```typescript
// components/ContactForm.tsx (linha 28)

// Instale: npm install @emailjs/browser
import emailjs from '@emailjs/browser'

emailjs.send('SERVICE_ID', 'TEMPLATE_ID', formData, 'PUBLIC_KEY')
```

### Opção 2: Google Sheets
Use ferramentas como **SheetDB** ou **Google Apps Script**

### Opção 3: Backend próprio
Crie uma API e faça POST para ela

---

## ✅ CHECKLIST DE PERSONALIZAÇÃO

Marque conforme for personalizando:

### Obrigatório:
- [ ] Número do WhatsApp (3 locais)
- [ ] Logo colorida e branca
- [ ] Imagem de fundo do Hero
- [ ] 12 fotos da galeria
- [ ] Vídeo do YouTube/Vimeo
- [ ] Mapa do Google

### Importante:
- [ ] Email de contato
- [ ] Telefone no footer
- [ ] Links das redes sociais
- [ ] Imagem institucional (Sobre)
- [ ] Fotos dos depoimentos

### Opcional:
- [ ] Nomes dos clientes nos depoimentos
- [ ] Textos dos depoimentos
- [ ] Endereço completo no footer
- [ ] Meta description (SEO)

---

## 🚀 APÓS PERSONALIZAR

1. **Teste localmente:**
```bash
npm run dev
```

2. **Verifique:**
   - Todas as imagens carregam
   - WhatsApp abre corretamente
   - Vídeo reproduz
   - Mapa aparece
   - Formulário envia

3. **Faça o build:**
```bash
npm run build
```

4. **Deploy:**
   - Vercel: `vercel`
   - Netlify: Conecte o repositório
   - Hostinger/cPanel: Faça upload da pasta `.next`

---

## 📞 RESUMO RÁPIDO

| O que mudar | Onde | Linha aproximada |
|-------------|------|------------------|
| WhatsApp | Hero.tsx | 8 |
| WhatsApp | WhatsAppButton.tsx | 5 |
| WhatsApp | ContactForm.tsx | 38 |
| Vídeo ID | VideoTour.tsx | 26 |
| Google Maps | Location.tsx | 64 |
| Email | Footer.tsx | 53 |
| Telefone | Footer.tsx | 46 |
| Instagram | Footer.tsx | 71 |
| Facebook | Footer.tsx | 77 |
| LinkedIn | Footer.tsx | 83 |

---

**Pronto! Com essas alterações sua Landing Page estará 100% personalizada.**

Se tiver dúvidas, todos os arquivos têm comentários com `// SUBSTITUA...` indicando onde fazer mudanças.

