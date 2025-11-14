import PropertyPageClient from './PropertyPageClient'
import { PropertyData } from '@/lib/getPropertyData'

interface PropertyPageProps {
  data: PropertyData
}

export default function PropertyPage({ data }: PropertyPageProps) {
  return <PropertyPageClient data={data} />
}
