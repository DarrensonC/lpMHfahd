# 🏠 Landing Pages M.H.FAHD Imobiliária

Sistema de Landing Pages profissionais e de alta conversão para a M.H.FAHD Imobiliária, desenvolvido com Next.js 14, React e TailwindCSS.

## 🎯 Sobre o Projeto

Este projeto contém um sistema escalável de Landing Pages para divulgação de imóveis de alto padrão, com foco em conversão e experiência do usuário.

### **LPs Disponíveis:**

1. **🏠 `/valencia`** - Casa de Alto Padrão no Condomínio Valencia
   - Área: 707m²
   - Tipo: Venda
   - Localização: Campo Comprido, Curitiba

2. **🏢 `/locacao`** - Ponto Comercial no Portão
   - Área: 680m²
   - Tipo: Locação
   - Localização: Portão, Curitiba

---

## ✨ Características

### **🎨 Design e UX**
- ✅ Layout moderno e minimalista
- ✅ Identidade visual M.H.FAHD (azul marinho, branco, prata)
- ✅ Animações e micro-interações
- ✅ Galeria com lightbox
- ✅ 100% Responsivo (Mobile-First)

### **🚀 Performance**
- ✅ Next.js 14 (App Router)
- ✅ Otimização de imagens automática
- ✅ SEO completo (meta tags, Open Graph)
- ✅ Carregamento otimizado

### **📊 Conversão**
- ✅ Copy otimizada para cada público
- ✅ Múltiplos CTAs estratégicos
- ✅ Formulário integrado com WhatsApp
- ✅ Urgência e escassez aplicadas
- ✅ Prova social (depoimentos)

### **🔧 Tecnologia**
- ✅ Next.js 14 (App Router)
- ✅ React 18
- ✅ TypeScript
- ✅ TailwindCSS
- ✅ Sistema de dados em JSON
- ✅ Componentização reutilizável

---

## 🚀 Como Rodar Localmente

### **Pré-requisitos:**
- Node.js 18+ instalado
- npm ou yarn

### **Instalação:**

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/lp-mh-fahd.git

# 2. Entre na pasta
cd lp-mh-fahd

# 3. Instale as dependências
npm install

# 4. Rode o servidor de desenvolvimento
npm run dev

# 5. Acesse no navegador
# http://localhost:3000
```

---

## 📁 Estrutura do Projeto

```
lp-mh-fahd/
├── app/
│   ├── valencia/          # LP Casa Valencia
│   ├── locacao/           # LP Ponto Comercial
│   ├── layout.tsx         # Layout global
│   ├── page.tsx           # Redireciona para /valencia
│   └── globals.css        # Estilos globais
├── components/
│   ├── PropertyPage.tsx   # Template universal de LP
│   ├── ContactForm.tsx    # Formulário de contato
│   └── Footer.tsx         # Rodapé
├── data/
│   └── imoveis/
│       ├── valencia.json  # Dados Casa Valencia
│       └── locacao.json   # Dados Ponto Comercial
├── lib/
│   └── getPropertyData.ts # Função de leitura de dados
├── public/
│   └── images/
│       ├── valencia/      # Imagens Casa Valencia
│       └── locacao/       # Imagens Ponto Comercial
└── tailwind.config.ts     # Configuração Tailwind
```

---

## 🎨 Identidade Visual M.H.FAHD

### **Paleta de Cores:**
- **Primary:** `#0F2744` (Azul Marinho)
- **Accent Gold:** `#D4AF37` (Dourado)
- **Silver Light:** `#C0C5CE` (Prata)

### **Tipografia:**
- **Fonte:** Inter (Google Fonts)
- **Estilo:** Minimalista, clean, profissional

---

## 📝 Como Adicionar Novos Imóveis

### **1. Criar arquivo JSON:**

Crie um novo arquivo em `data/imoveis/nome-imovel.json` seguindo a estrutura dos existentes.

### **2. Adicionar imagens:**

```
public/images/nome-imovel/
├── hero.png              # Imagem principal
└── gallery/
    ├── 01.png
    ├── 02.png
    └── ...
```

### **3. Criar rota:**

Crie `app/nome-imovel/page.tsx`:

```tsx
import PropertyPage from '@/components/PropertyPage'

export default function NomeImovelPage() {
  return <PropertyPage slug='nome-imovel' />
}
```

**Pronto!** Nova LP disponível em `/nome-imovel` 🎉

---

## 🌐 Deploy

### **Vercel (Recomendado):**

1. Conecte seu repositório GitHub
2. Importe na Vercel: https://vercel.com/new
3. Deploy automático! ✅

**Guia completo:** Veja `DEPLOY-VERCEL.md`

---

## 📊 Funcionalidades

### **Hero Section**
- Badge de destaque
- Título e localização
- Preço (venda/locação + condomínio/IPTU)
- Cápsulas de destaques
- CTA principal

### **Highlights**
- 6 cards com ícones
- Títulos e descrições
- Hover effects

### **Descrição**
- Copy otimizada
- Especificações técnicas
- CTA intermediário

### **Galeria**
- Grid responsivo estilo masonry
- Lightbox para ampliar
- Alt text para SEO

### **Localização**
- Google Maps embed
- Endereço completo
- Highlights da região

### **Comodidades**
- Lista do imóvel
- Lista do condomínio/região
- Destaque especial

### **Vídeo Tour**
- Panda Video embed
- Responsivo
- Autoplay configurável

### **Depoimentos**
- Cards de clientes
- Avatars com iniciais
- 5 estrelas

### **Sobre M.H.FAHD**
- História da empresa
- Imagem institucional
- Números e conquistas

### **Formulário**
- Nome, Email, Telefone (com máscara)
- Horário de contato
- Checkbox LGPD
- Integração direta com WhatsApp

### **Footer**
- Informações de contato
- Redes sociais
- Links úteis
- Copyright

---

## 📱 Responsividade

✅ **Mobile First**
- Design otimizado para smartphones
- Touch-friendly
- Performance otimizada

✅ **Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🔧 Tecnologias Utilizadas

- **Next.js 14** - Framework React
- **React 18** - Biblioteca UI
- **TypeScript** - Type safety
- **TailwindCSS** - Estilização
- **React Input Mask** - Máscara de telefone
- **Lucide React** - Ícones
- **Panda Video** - Vídeo hosting

---

## 📈 SEO

✅ **Meta tags completas**
✅ **Open Graph configurado**
✅ **Alt text em todas as imagens**
✅ **URLs semânticas**
✅ **Sitemap automático**
✅ **Performance otimizada**

---

## 📞 Contato M.H.FAHD

- **Telefone:** (41) 98713-4444
- **Email:** atendimento@mhfahdimoveis.com.br
- **Instagram:** @m.h.fahd
- **Endereço:** Rua Francisco Ader, 106 - Novo Mundo, Curitiba/PR

---

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para a M.H.FAHD Imobiliária.

---

## 👨‍💻 Desenvolvimento

Desenvolvido com ❤️ para a M.H.FAHD Imobiliária

**Documentação adicional:**
- 📖 `DEPLOY-VERCEL.md` - Guia de deploy
- 📖 `COMANDOS-DEPLOY-RAPIDO.md` - Comandos rápidos
- 📖 `COPY-OTIMIZADA-CONVERSAO.md` - Análise de copywriting
- 📖 `ONDE-COLOCAR-IMAGENS-LOCACAO.md` - Guia de imagens

---

**🏠 M.H.FAHD Imobiliária - Transformando sonhos em realidade desde 2009** ✨
