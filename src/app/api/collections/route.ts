import { getAllCollections } from '@/supabase/api/collections'

export async function GET() {
  const result = await getAllCollections()

  return Response.json(result)
}
