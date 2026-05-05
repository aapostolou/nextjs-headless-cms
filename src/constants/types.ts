import { CmsRole } from '@/supabase/constants/types'
import { User } from '@supabase/supabase-js'

export type AuthProviderUser = User & Partial<{ cms_role: CmsRole }>
