import fs from 'fs'
import path from 'path'

export interface PropertyData {
  slug: string
  meta: {
    title: string
    description: string
    ogImage: string
  }
  hero: any
  highlights: any[]
  description: any
  gallery: any
  location: any
  amenities: any
  video: any
  testimonials: any
  about: any
  contact: any
}

export function getPropertyData(slug: string): PropertyData {
  const filePath = path.join(process.cwd(), 'data', 'imoveis', `${slug}.json`)
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Property data not found for slug: ${slug}`)
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const data = JSON.parse(fileContents)
  
  return data
}

export function getAllPropertySlugs(): string[] {
  const dataDir = path.join(process.cwd(), 'data', 'imoveis')
  
  if (!fs.existsSync(dataDir)) {
    return []
  }
  
  const files = fs.readdirSync(dataDir)
  return files
    .filter(file => file.endsWith('.json'))
    .map(file => file.replace('.json', ''))
}

