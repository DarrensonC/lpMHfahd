import { redirect } from 'next/navigation'

export default function Home() {
  // Redireciona automaticamente para /valencia
  // Se quiser criar uma página índice com lista de imóveis, edite este arquivo
  redirect('/valencia')
}

