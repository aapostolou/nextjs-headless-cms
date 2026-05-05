import 'server-only'

import { createCmsUsersDatabase } from './createCmsUsersTable'
import { createCollectionsDatabase } from './createCollectionsTable'

export async function initializeSupabase() {
  console.log('\nSupabase Migration :: Start\n')

  await createCollectionsDatabase()
  await createCmsUsersDatabase()

  console.log('\nSupabase Migration :: End\n')
}
