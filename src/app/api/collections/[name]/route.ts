import { getCollection } from '@/supabase/services/collections'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params
  const result = await getCollection(name)

  return Response.json(result)
}
