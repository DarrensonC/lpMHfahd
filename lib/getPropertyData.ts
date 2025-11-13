import { promises as fs } from 'fs'
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

export async function getPropertyData(slug: string): Promise<PropertyData> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'imoveis', `${slug}.json`)
    const fileContents = await fs.readFile(filePath, 'utf8')
    const data = JSON.parse(fileContents)
    return data
  } catch (error) {
    console.error(`Error reading property data for slug: ${slug}`, error)
    throw new Error(`Property data not found for slug: ${slug}`)
  }
}

export async function getAllPropertySlugs(): Promise<string[]> {
  try {
    const dataDir = path.join(process.cwd(), 'data', 'imoveis')
    const files = await fs.readdir(dataDir)
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''))
  } catch (error) {
    console.error('Error reading property slugs:', error)
    return []
  }
}

