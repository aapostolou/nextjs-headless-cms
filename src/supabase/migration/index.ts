import 'server-only'

import { createCollectionsDatabase } from './createCollectionsTable'

export async function initializeDatabase() {
  console.log('\nDatabase Migration :: Start\n')

  await createCollectionsDatabase()

  console.log('\nDatabase Migration :: End\n')
}
