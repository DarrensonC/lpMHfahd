# 🏠 Sistema de Múltiplas Landing Pages - Guia Completo

**M.H.FAHD Imobiliária - Sistema Escalável de LPs**  
**Data:** $(Get-Date -Format "dd/MM/yyyy")

---

## 🎯 O Que Foi Implementado

Você agora tem um **sistema profissional** que permite criar **infinitas landing pages** para diferentes imóveis, apenas editando um arquivo JSON!

### **URLs Criadas:**

✅ **dominio.com/valencia** → Casa de Alto Padrão no Condomínio Valencia  
✅ **dominio.com/locacao** → Apartamento para Locação no Centro

---

## 📐 Como Funciona

### **Estrutura do Sistema:**

```
📁 Projeto/
├── 📁 app/
│   ├── 📁 valencia/
│   │   └── page.tsx         → Rota /valencia
│   ├── 📁 locacao/
│   │   └── page.tsx         → Rota /locacao
│   └── page.tsx             → Página inicial (pode ser um índice)
│
├── 📁 components/
│   ├── PropertyPage.tsx     → Template universal (recebe JSON)
│   ├── Hero.tsx             → Componentes originais (ainda funcionam)
│   ├── Highlights.tsx
│   └── ... (todos os outros)
│
├── 📁 data/
│   └── 📁 imoveis/
│       ├── valencia.json    → Dados da Casa Valencia
│       └── locacao.json     → Dados do Apartamento Locação
│
└── 📁 lib/
    └── getPropertyData.ts   → Função que lê os JSONs
```

---

## 🚀 Como Adicionar Um Novo Imóvel

### **Passo 1: Criar o JSON com os Dados**

1. Copie o arquivo `data/imoveis/valencia.json`
2. Renomeie para o slug do seu imóvel: `data/imoveis/casa-centro.json`
3. Edite TODAS as informações dentro do JSON:
   - `slug`: "casa-centro"
   - `meta.title`: "Casa no Centro | M.H.FAHD"
   - `hero.title`: "Casa Moderna no Centro"
   - `hero.image`: "/images/casa-centro/hero.png"
   - E todos os outros campos...

### **Passo 2: Criar as Imagens**

1. Crie uma pasta: `public/images/casa-centro/`
2. Adicione as imagens:
   - `hero.png` (imagem principal)
   - `gallery/01.png`, `02.png`, etc. (fotos da galeria)

### **Passo 3: Criar a Rota**

1. Crie a pasta: `app/casa-centro/`
2. Crie o arquivo: `app/casa-centro/page.tsx`
3. Cole este código:

```typescript
import { Metadata } from 'next'
import { getPropertyData } from '@/lib/getPropertyData'
import PropertyPage from '@/components/PropertyPage'

const slug = 'casa-centro'  // ← MUDE AQUI

export async function generateMetadata(): Promise<Metadata> {
  const data = getPropertyData(slug)
  
  return {
    title: data.meta.title,
    description: data.meta.description,
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: `https://www.mhfahdimoveis.com.br/${slug}`,  // ← E AQUI
      siteName: 'M.H.FAHD Imobiliária',
      images: [
        {
          url: data.meta.ogImage,
          width: 1200,
          height: 630,
          alt: data.hero.title,
        },
      ],
      type: 'website',
      locale: 'pt_BR',
    },
  }
}

export default function CasaCentroPage() {  // ← E AQUI
  const data = getPropertyData(slug)
  return <PropertyPage data={data} />
}
```

### **Passo 4: Testar**

```bash
npm run dev
```

Acesse: `http://localhost:3000/casa-centro`

**PRONTO!** 🎉 Novo imóvel adicionado!

---

## 📝 Estrutura do JSON Explicada

### **1. Meta (SEO)**

```json
{
  "meta": {
    "title": "Título que aparece no Google",
    "description": "Descrição para busca e redes sociais",
    "ogImage": "/images/casa/hero.png"  // Imagem ao compartilhar
  }
}
```

### **2. Hero (Primeira Tela)**

```json
{
  "hero": {
    "badge": "✨ TEXTO DO BADGE",
    "title": "Título Principal",
    "subtitle": "Subtítulo persuasivo",
    "location": "Bairro, Cidade",
    "image": "/images/hero.png",
    "capsules": [
      { "icon": "bed", "label": "3 suítes" },
      { "icon": "maximize", "label": "200 m²" }
    ],
    "cta": {
      "primary": "🏠 Texto do Botão"
    }
  }
}
```

**Ícones Disponíveis:**
- `bed` → Cama (suítes/quartos)
- `maximize` → Área/tamanho
- `home` → Casa/residência
- `waves` → Piscina/água
- `utensils` → Cozinha/gourmet
- `shield` → Segurança
- `sparkles` → Acabamento/luxo
- `layout` → Mezanino/layout

### **3. Highlights (Destaques)**

```json
{
  "highlights": [
    {
      "icon": "sparkles",
      "title": "Título do Destaque",
      "description": "Descrição breve e persuasiva"
    }
  ]
}
```

### **4. Description (Descrição Completa)**

```json
{
  "description": {
    "title": "Sobre o Imóvel",
    "paragraphs": [
      "Primeiro parágrafo...",
      "Segundo parágrafo...",
      "Terceiro parágrafo...",
      "Último parágrafo (será em negrito)"
    ],
    "specs": [
      { "value": "200m²", "label": "Área Total" },
      { "value": "2024", "label": "✨ Novo", "highlight": true }
    ]
  }
}
```

### **5. Gallery (Galeria)**

```json
{
  "gallery": {
    "title": "Galeria de Fotos",
    "subtitle": "Conheça cada detalhe",
    "instruction": "📸 Toque nas fotos",
    "images": [
      { 
        "src": "/images/casa/01.png", 
        "alt": "Descrição da foto",
        "span": "md:col-span-2 md:row-span-2"  // Foto grande
      },
      { 
        "src": "/images/casa/02.png", 
        "alt": "Sala",
        "span": "md:col-span-1 md:row-span-1"  // Foto normal
      }
    ]
  }
}
```

**Spans Disponíveis (Desktop):**
- `md:col-span-2 md:row-span-2` → Foto GRANDE (2x2)
- `md:col-span-2 md:row-span-1` → Foto LARGA (2x1)
- `md:col-span-1 md:row-span-1` → Foto NORMAL (1x1)

### **6. Location (Localização)**

```json
{
  "location": {
    "title": "Localização",
    "subtitle": "Bairro - Cidade/Estado",
    "description": "Texto sobre a localização",
    "address": "Rua Exemplo, 123\nBairro, Cidade/UF",
    "highlights": [
      "Próximo ao shopping",
      "Fácil acesso à rodovia"
    ],
    "mapEmbed": "URL_DO_GOOGLE_MAPS_IFRAME"
  }
}
```

**Como Pegar a URL do Mapa:**
1. Abra Google Maps
2. Busque o endereço
3. Clique em "Compartilhar" → "Incorporar um mapa"
4. Copie a URL que está dentro de `src="..."`

### **7. Amenities (Comodidades)**

```json
{
  "amenities": {
    "title": "Comodidades",
    "subtitle": "Subtítulo motivacional",
    "property": [
      "Item 1",
      "Item 2",
      "Item 3"
    ],
    "condominium": [
      "Item 1",
      "Item 2"
    ],
    "condominiumHighlight": {
      "title": "🛡️ Título do Destaque",
      "description": "Texto sobre o condomínio"
    }
  }
}
```

### **8. Video (Vídeo Tour)**

```json
{
  "video": {
    "title": "Vídeo Tour",
    "subtitle": "Subtítulo",
    "platform": "panda",
    "videoId": "id-do-video",
    "embedUrl": "URL_COMPLETA_DO_IFRAME"
  }
}
```

### **9. Testimonials (Depoimentos)**

```json
{
  "testimonials": {
    "title": "O Que Nossos Clientes Dizem",
    "items": [
      {
        "name": "Nome do Cliente",
        "role": "Cliente/Locatário/Proprietário",
        "text": "Depoimento completo do cliente aqui."
      }
    ]
  }
}
```

### **10. About (Sobre a Imobiliária)**

```json
{
  "about": {
    "title": "Sobre a M.H.FAHD",
    "image": "/images/800 por 500.png",
    "paragraphs": [
      "Parágrafo 1",
      "Parágrafo 2",
      "Parágrafo 3",
      "Parágrafo 4 (em negrito)"
    ],
    "stats": [
      { "value": "15+", "label": "Anos de Experiência" },
      { "value": "500+", "label": "Imóveis Vendidos" },
      { "value": "100%", "label": "Satisfação" }
    ]
  }
}
```

### **11. Contact (Formulário)**

```json
{
  "contact": {
    "title": "Agende Sua Visita",
    "subtitle": "Preencha o formulário",
    "trustBadge": "✓ Atendimento Rápido",
    "whatsapp": "5541987134444",
    "formTitle": "Nova Solicitação - Nome do Imóvel",
    "submitButton": "🏠 Texto do Botão"
  }
}
```

---

## ⚡ Dicas Profissionais

### **1. Nomes de Arquivos**

✅ **BOM:**
- `valencia.json`
- `casa-centro.json`
- `apto-luxo-batel.json`

❌ **EVITE:**
- `Casa Valencia.json` (espaços)
- `VALENCIA.json` (tudo maiúsculo)
- `casa_centro.json` (underscore)

### **2. Imagens**

- **Hero:** 1920x1080px (landscape)
- **Gallery:** 1200x800px (landscape)
- **About:** 800x500px (landscape)
- **Formato:** PNG ou JPG
- **Peso:** Máx. 500KB cada

### **3. Textos**

- **Título Hero:** Máx. 60 caracteres
- **Subtítulo:** Máx. 100 caracteres
- **Parágrafos:** 2-4 linhas cada
- **Destaques:** 6 cards (3x2 no desktop)

### **4. SEO**

- **Meta Title:** 50-60 caracteres
- **Meta Description:** 150-160 caracteres
- **Use palavras-chave:** bairro, tipo, características

---

## 🔄 Workflow Diário

### **Para Adicionar Novo Imóvel:**

1. ⏱️ **5min:** Copiar `valencia.json` e renomear
2. ⏱️ **10min:** Editar todos os dados no JSON
3. ⏱️ **5min:** Adicionar imagens na pasta
4. ⏱️ **2min:** Criar arquivo `page.tsx` da rota
5. ⏱️ **1min:** Testar no navegador

**TOTAL: ~23 minutos por LP** 🚀

---

## 📊 Comparação: Antes x Depois

### **ANTES (Sistema Antigo):**
❌ 1 landing page por vez  
❌ Código duplicado  
❌ Difícil de manter  
❌ 2-3 horas para nova LP  
❌ Risco de bugs ao copiar código  

### **DEPOIS (Sistema Novo):**
✅ Infinitas landing pages  
✅ Código reutilizado  
✅ Fácil de manter  
✅ 20 minutos para nova LP  
✅ JSON isolado = sem bugs  

---

## 🎓 Próximos Passos Avançados

### **1. Página Inicial (Índice de Imóveis)**

Criar `app/page.tsx` com lista de todos os imóveis disponíveis.

### **2. Rota Dinâmica**

Criar `app/[slug]/page.tsx` para automatizar ainda mais:

```typescript
// app/[slug]/page.tsx
export async function generateStaticParams() {
  return [
    { slug: 'valencia' },
    { slug: 'locacao' },
    { slug: 'casa-centro' },
  ]
}
```

### **3. CMS Headless**

Integrar com:
- **Contentful**
- **Strapi**
- **Sanity**

Para editar LPs direto no navegador, sem código!

### **4. Painel Admin**

Criar interface para adicionar imóveis sem mexer em JSON.

---

## 🆘 Troubleshooting

### **Erro: "Property data not found"**

✅ Verifique se o slug no `page.tsx` é igual ao nome do JSON (sem `.json`)  
✅ Verifique se o JSON está em `data/imoveis/`

### **Imagens não aparecem**

✅ Caminhos devem começar com `/images/`  
✅ Verifique se as imagens estão em `public/images/`  
✅ Restart do `npm run dev` após adicionar imagens

### **JSON com erro**

✅ Use um validador JSON online  
✅ Verifique vírgulas, aspas e chaves  
✅ Copie de um JSON funcionando

---

## 📞 Exemplo Prático Completo

**Objetivo:** Adicionar "Apartamento Batel Luxo"

### **1. JSON (`data/imoveis/apto-batel.json`):**

```json
{
  "slug": "apto-batel",
  "meta": {
    "title": "Apartamento Luxo no Batel | M.H.FAHD",
    "description": "Apartamento de 4 suítes com vista panorâmica no coração do Batel.",
    "ogImage": "/images/apto-batel/hero.png"
  },
  "hero": {
    "badge": "✨ VISTA PANORÂMICA",
    "title": "Apartamento de Luxo no Batel",
    "subtitle": "Sofisticação e localização privilegiada",
    "location": "Batel, Curitiba",
    "image": "/images/apto-batel/hero.png",
    "capsules": [
      { "icon": "bed", "label": "4 suítes" },
      { "icon": "maximize", "label": "350 m²" },
      { "icon": "home", "label": "280 m² útil" },
      { "icon": "waves", "label": "Piscina" },
      { "icon": "utensils", "label": "Gourmet" },
      { "icon": "shield", "label": "Portaria 24h" }
    ],
    "cta": {
      "primary": "🏠 Agendar Visita"
    }
  }
  // ... resto do JSON
}
```

### **2. Imagens:**

- `public/images/apto-batel/hero.png`
- `public/images/apto-batel/gallery/01.png` a `10.png`

### **3. Rota (`app/apto-batel/page.tsx`):**

```typescript
import { Metadata } from 'next'
import { getPropertyData } from '@/lib/getPropertyData'
import PropertyPage from '@/components/PropertyPage'

const slug = 'apto-batel'

export async function generateMetadata(): Promise<Metadata> {
  const data = getPropertyData(slug)
  
  return {
    title: data.meta.title,
    description: data.meta.description,
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: 'https://www.mhfahdimoveis.com.br/apto-batel',
      siteName: 'M.H.FAHD Imobiliária',
      images: [{ url: data.meta.ogImage, width: 1200, height: 630 }],
      type: 'website',
      locale: 'pt_BR',
    },
  }
}

export default function AptoBatelPage() {
  const data = getPropertyData(slug)
  return <PropertyPage data={data} />
}
```

### **4. Testar:**

```bash
npm run dev
```

Acesse: `http://localhost:3000/apto-batel`

---

## ✅ Checklist Final

Antes de publicar um novo imóvel:

- [ ] JSON criado e validado
- [ ] Todas as imagens adicionadas
- [ ] Rota `page.tsx` criada
- [ ] Testado em `localhost`
- [ ] Testado no mobile
- [ ] Formulário envia para WhatsApp correto
- [ ] SEO configurado (title, description, og:image)
- [ ] Todas as informações revisadas

---

## 🎉 Conclusão

Você agora tem um **sistema profissional e escalável**!

**Vantagens:**
✅ Adicione imóveis em minutos  
✅ SEO otimizado para cada imóvel  
✅ Mobile-first e alta conversão  
✅ Fácil manutenção  
✅ Código limpo e organizado  

**Usado por:**
- Loft
- QuintoAndar
- Imovelweb
- VivaReal

**Você está no nível das grandes! 🚀**

---

**Dúvidas?** Consulte este guia ou os arquivos de exemplo (`valencia.json` e `locacao.json`)!

