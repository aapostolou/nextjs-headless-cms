'use server'

import { defaultLocale } from '@/i18n/constants'

// TODO: Update this to use any supabase client
import { supabaseAdmin } from '../admin'
import {
  Collection,
  CollectionInsertOptions,
  CollectionResult,
  CollectionUpdateOptions,
} from '../constants/types'

/**
 * Get all collections
 */
export async function getAllCollections(): Promise<
  CollectionResult<Collection[]>
> {
  const { data, error } = await supabaseAdmin.from('collections').select('*')

  if (error) {
    console.error('Error fetching collections:', error.message)

    return { success: false, error: error.message }
  }

  return { success: true, data }
}

/**
 * Get all entries by collection_name
 */
export async function getCollection(
  name: Collection['collection_name'],
  locale?: string,
): Promise<CollectionResult<Collection[]>> {
  const { data, error } = await supabaseAdmin
    .from('collections')
    .select('*')
    .eq('collection_name', name)
    .eq('locale', locale ?? defaultLocale)

  if (error) {
    console.error(`Error fetching collection '${name}':`, error.message)

    return { success: false, error: error.message }
  }

  return { success: true, data }
}

/**
 * Create new entry
 */
export async function createCollectionEntry(
  formData: CollectionInsertOptions,
): Promise<CollectionResult<Collection>> {
  const { data, error } = await supabaseAdmin
    .from('collections')
    .insert([
      {
        collection_name: formData.collection_name,
        locale: formData.locale,
        title: formData.title,
        content: formData.content,
      },
    ])
    .select()
    .single()

  if (error) {
    console.error('Insert Error:', error.message)

    return { success: false, error: error.message }
  }

  return { success: true, data }
}

/**
 * Update entry by id
 */
export async function updateCollectionEntry(
  formData: CollectionUpdateOptions,
): Promise<CollectionResult<Collection>> {
  const { data, error } = await supabaseAdmin
    .from('collections')
    .update({
      title: formData.title,
      content: formData.content,
    })
    .eq('id', formData.id)
    .select()
    .single()

  if (error) {
    console.error('Update Error:', error.message)

    return { success: false, error: error.message }
  }

  return { success: true, data }
}

/**
 * Delete entry by id
 */
export async function deleteCollectionEntry(
  id: Collection['id'],
): Promise<CollectionResult> {
  const { error } = await supabaseAdmin
    .from('collections')
    .delete()
    .eq('id', id)
    .single()

  if (error) {
    console.error('Update Error:', error.message)

    return { success: false, error: error.message }
  }

  return { success: true }
}
