export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Collection = {
  id: number
  created_at: string // timestamptz - Example value: "2024-05-20T15:30:00+00:00"
  collection_name: string
  locale: string
  title: string
  content: Json
  updated_at: string // timestamptz - Example value: "2024-05-20T15:30:00+00:00"
}

export type CollectionInsertOptions = Omit<
  Collection,
  'id' | 'created_at' | 'updated_at'
>

export type CollectionUpdateOptions = Partial<Collection> &
  Pick<Collection, 'id' | 'title' | 'content'>

export type CollectionResult<T = never> =
  | { success: false; error: string }
  | ([T] extends [never] ? { success: true } : { success: true; data: T })

export type CmsRole = 'admin' | 'moderator' | 'editor'

export type CmsUser = {
  id: number
  created_at: string // timestamptz - Example value: "2024-05-20T15:30:00+00:00"
  user_id: number
  role: CmsRole
}
