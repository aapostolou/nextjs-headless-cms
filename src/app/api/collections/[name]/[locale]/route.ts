import { getCollection } from '@/supabase/services/collections'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ name: string; locale: string }> },
) {
  const { name, locale } = await params
  const result = await getCollection(name, locale)

  return Response.json(result)
}
