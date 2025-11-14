/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
        '**/*.md',
        '**/*.txt',
        'AJUSTAR-*',
        'ANALISE-*',
        'ARQUIVOS-*',
        'ATUALIZACAO-*',
        'CHECKLIST-*',
        'COMANDOS-*',
        'COMO-*',
        'COPY-*',
        'DEPLOY-*',
        'ESTRUTURA-*',
        'FOTOS-*',
        'GUIA-*',
        'IMAGENS-*',
        'INICIO-*',
        'INSTRUCOES-*',
        'LEIA-*',
        'MOBILE-*',
        'ONDE-*',
        'OTIMIZACOES-*',
        'PERSONALIZACAO-*',
        'PROXIMOS-*',
        'RELATORIO-*',
        'RESUMO-*',
        'SISTEMA-*',
      ],
    },
  },
}

module.exports = nextConfig

