import { getAllCollections } from '@/supabase/services/collections'

export async function GET() {
  const result = await getAllCollections()

  return Response.json(result)
}
