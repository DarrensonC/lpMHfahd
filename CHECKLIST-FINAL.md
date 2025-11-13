# ✅ Checklist Final - Landing Page M.H.FAHD

Use este checklist para garantir que tudo está configurado corretamente.

---

## 🚀 PASSO 1: Instalação (5 minutos)

### Dependências
- [ ] Executei `npm install`
- [ ] Sem erros na instalação
- [ ] Executei `npm run dev`
- [ ] Página abriu em http://localhost:3000

**Status:** ⬜ Não iniciado | ⏳ Em progresso | ✅ Completo

---

## 📸 PASSO 2: Imagens (15 minutos)

### Estrutura de Pastas
- [ ] Executei `criar-pastas.bat` (Windows) ou `criar-pastas.sh` (Mac/Linux)
- [ ] Pasta `public/images` existe
- [ ] Pasta `public/images/gallery` existe
- [ ] Pasta `public/images/testimonials` existe

### Logos (2 imagens)
- [ ] `public/images/logo-mhfahd.png` (colorida, 180x60px)
- [ ] `public/images/logo-mhfahd-white.png` (branca, 160x50px)

### Hero
- [ ] `public/images/hero-background.jpg` (1920x1080px)

### Galeria (12 imagens)
- [ ] `public/images/gallery/01.jpg` - Fachada
- [ ] `public/images/gallery/02.jpg` - Sala de estar
- [ ] `public/images/gallery/03.jpg` - Cozinha
- [ ] `public/images/gallery/04.jpg` - Suíte master
- [ ] `public/images/gallery/05.jpg` - Banheiro
- [ ] `public/images/gallery/06.jpg` - Área gourmet
- [ ] `public/images/gallery/07.jpg` - Piscina
- [ ] `public/images/gallery/08.jpg` - Mezanino
- [ ] `public/images/gallery/09.jpg` - Closet
- [ ] `public/images/gallery/10.jpg` - Vista externa
- [ ] `public/images/gallery/11.jpg` - Área de lazer
- [ ] `public/images/gallery/12.jpg` - Varanda

### Institucionais
- [ ] `public/images/about-mhfahd.jpg` (1200x1200px)
- [ ] `public/images/testimonials/client1.jpg` (300x300px)
- [ ] `public/images/testimonials/client2.jpg` (300x300px)

**Total:** 18 imagens | Adicionadas: ____ / 18

**Status:** ⬜ Não iniciado | ⏳ Em progresso | ✅ Completo

---

## 📱 PASSO 3: WhatsApp (2 minutos)

Substituir `5541999999999` pelo número real:

- [ ] `components/Hero.tsx` (linha 8)
  ```typescript
  const phoneNumber = 'SEU_NUMERO_AQUI'
  ```

- [ ] `components/WhatsAppButton.tsx` (linha 5)
  ```typescript
  const phoneNumber = 'SEU_NUMERO_AQUI'
  ```

- [ ] `components/ContactForm.tsx` (linha 38)
  ```typescript
  const phoneNumber = 'SEU_NUMERO_AQUI'
  ```

**Formato correto:** 5541999887766 (código país + DDD + número)

**Status:** ⬜ Não iniciado | ⏳ Em progresso | ✅ Completo

---

## 🎬 PASSO 4: Vídeo Tour (3 minutos)

- [ ] Gravei vídeo tour do imóvel
- [ ] Fiz upload no YouTube ou Vimeo
- [ ] Copiei o ID do vídeo
- [ ] Colei em `components/VideoTour.tsx` (linha 26)

**YouTube:** ID = ABC123 de `youtube.com/watch?v=ABC123`  
**Vimeo:** ID = 123456789 de `vimeo.com/123456789`

**Status:** ⬜ Não iniciado | ⏳ Em progresso | ✅ Completo

---

## 🗺️ PASSO 5: Google Maps (2 minutos)

- [ ] Acessei Google Maps
- [ ] Pesquisei: "Rua Íris Antônio Campos, 233 - Campo Comprido - Curitiba/PR"
- [ ] Cliquei em Compartilhar → Incorporar mapa
- [ ] Copiei o código do embed
- [ ] Colei o `src` em `components/Location.tsx` (linha 64)

**Status:** ⬜ Não iniciado | ⏳ Em progresso | ✅ Completo

---

## 📧 PASSO 6: Dados de Contato (5 minutos)

### Footer

**Telefone:**
- [ ] Alterei telefone em `components/Footer.tsx` (linha 46)
  - Atual: `(41) 99999-9999`
  - Novo: `________________`

**Email:**
- [ ] Alterei email em `components/Footer.tsx` (linha 53)
  - Atual: `contato@mhfahd.com.br`
  - Novo: `________________`

**Endereço:**
- [ ] Revisei endereço em `components/Footer.tsx` (linha 60)

**Status:** ⬜ Não iniciado | ⏳ Em progresso | ✅ Completo

---

## 🌐 PASSO 7: Redes Sociais (3 minutos)

Em `components/Footer.tsx`:

- [ ] Link do Instagram (linha 71)
  - Atual: `#`
  - Novo: `________________`

- [ ] Link do Facebook (linha 77)
  - Atual: `#`
  - Novo: `________________`

- [ ] Link do LinkedIn (linha 83)
  - Atual: `#`
  - Novo: `________________`

**Status:** ⬜ Não iniciado | ⏳ Em progresso | ✅ Completo

---

## 🧪 PASSO 8: Testes (10 minutos)

### Funcionalidades
- [ ] Logo aparece no header
- [ ] Hero background carrega
- [ ] Botão "Agendar Visita" rola até formulário
- [ ] Botão "Falar no WhatsApp" abre WhatsApp
- [ ] Galeria mostra 12 fotos
- [ ] Clique na foto abre lightbox
- [ ] Vídeo reproduz
- [ ] Mapa carrega
- [ ] Formulário valida campos
- [ ] Formulário envia para WhatsApp
- [ ] Botão flutuante WhatsApp funciona
- [ ] Footer mostra todos os dados

### Responsividade
- [ ] Testei no mobile (Chrome DevTools ou celular real)
- [ ] Testei no tablet
- [ ] Testei no desktop
- [ ] Todos os elementos estão alinhados
- [ ] Textos são legíveis em todos dispositivos

### Navegadores
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

**Status:** ⬜ Não iniciado | ⏳ Em progresso | ✅ Completo

---

## 🎨 PASSO 9: Revisão de Conteúdo (5 minutos)

### Textos
- [ ] Revisei todos os textos (erros de português)
- [ ] Verifiquei dados do imóvel (4 suítes, 707m², etc)
- [ ] Conferi endereço completo
- [ ] Revisei comodidades listadas

### Imagens
- [ ] Todas as imagens carregam
- [ ] Imagens têm boa qualidade
- [ ] Não há imagens cortadas ou distorcidas
- [ ] Fotos estão bem iluminadas

### Depoimentos (se aplicável)
- [ ] Nomes dos clientes estão corretos
- [ ] Fotos dos clientes estão corretas
- [ ] Textos dos depoimentos fazem sentido

**Status:** ⬜ Não iniciado | ⏳ Em progresso | ✅ Completo

---

## 🚀 PASSO 10: Deploy (5 minutos)

### Preparação
- [ ] Executei `npm run build`
- [ ] Build completou sem erros
- [ ] Testei com `npm start`

### Deploy (escolha uma opção)

**Opção A: Vercel (Recomendado)**
- [ ] Instalei Vercel CLI: `npm install -g vercel`
- [ ] Executei `vercel`
- [ ] Deploy concluído
- [ ] Testei URL de produção: `________________`

**Opção B: Netlify**
- [ ] Criei conta no Netlify
- [ ] Conectei repositório GitHub
- [ ] Configurei build
- [ ] Deploy concluído
- [ ] Testei URL de produção: `________________`

**Opção C: Servidor Próprio**
- [ ] Fiz upload dos arquivos
- [ ] Configurei servidor
- [ ] Testei URL de produção: `________________`

**Status:** ⬜ Não iniciado | ⏳ Em progresso | ✅ Completo

---

## ⚙️ PASSO 11: Otimizações (Opcional - 10 minutos)

### Performance
- [ ] Otimizei todas as imagens com TinyPNG
- [ ] Testei velocidade no PageSpeed Insights
- [ ] Score mobile: _____ (meta: 85+)
- [ ] Score desktop: _____ (meta: 95+)

### Analytics
- [ ] Criei conta Google Analytics
- [ ] Adicionei código de rastreamento
- [ ] Criei conta Meta Pixel (Facebook/Instagram)
- [ ] Adicionei Meta Pixel

### SEO
- [ ] Revisei meta description
- [ ] Adicionei palavras-chave relevantes
- [ ] Testei compartilhamento no WhatsApp
- [ ] Testei compartilhamento no Facebook

**Status:** ⬜ Não iniciado | ⏳ Em progresso | ✅ Completo

---

## 📊 RESUMO GERAL

| Etapa | Status |
|-------|--------|
| 1. Instalação | ⬜ |
| 2. Imagens (18) | ⬜ |
| 3. WhatsApp (3 locais) | ⬜ |
| 4. Vídeo Tour | ⬜ |
| 5. Google Maps | ⬜ |
| 6. Dados de Contato | ⬜ |
| 7. Redes Sociais | ⬜ |
| 8. Testes | ⬜ |
| 9. Revisão | ⬜ |
| 10. Deploy | ⬜ |
| 11. Otimizações (opcional) | ⬜ |

**Progresso:** ____ / 11 etapas completas

---

## ✅ CHECKLIST FINAL

Antes de considerar o projeto concluído:

- [ ] Landing Page abre sem erros
- [ ] Todas as 18 imagens estão carregando
- [ ] WhatsApp funciona em todos os 3 lugares
- [ ] Vídeo tour reproduz
- [ ] Mapa do Google aparece
- [ ] Formulário envia dados
- [ ] Testei no mobile e desktop
- [ ] Fiz deploy e está no ar
- [ ] URL de produção: `_______________________________`

---

## 🎉 PARABÉNS!

Se marcou todos os itens acima, sua Landing Page está:

✅ **Funcional** - Todos os recursos operando  
✅ **Completa** - Todas as imagens e conteúdos  
✅ **Testada** - Funcionando em todos dispositivos  
✅ **Online** - Publicada e acessível  

**Está pronta para converter visitantes em clientes!**

---

## 📞 Precisa de Ajuda?

Consulte a documentação:

- **Dúvida sobre instalação?** → INICIO-RAPIDO.md
- **Dúvida sobre imagens?** → INSTRUCOES-IMAGENS.md
- **Dúvida sobre customização?** → PERSONALIZACAO-RAPIDA.md
- **Dúvida técnica?** → ESTRUTURA-DO-PROJETO.md
- **Visão geral?** → README.md

Todos os arquivos têm comentários detalhados no código!

---

**Data de conclusão:** ____/____/______

**Desenvolvido para:** M.H.FAHD Imobiliária  
**Projeto:** Casa de Alto Padrão - Condomínio Valencia, Curitiba/PR

**Sucesso nas vendas! 🏠✨**

