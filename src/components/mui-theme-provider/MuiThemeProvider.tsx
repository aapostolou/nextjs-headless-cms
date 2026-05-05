import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'

import { theme } from './theme'

export type MuiThemeProviderProps = {
  children: React.ReactNode
}

const MuiThemeProvider: React.FC<MuiThemeProviderProps> = ({ children }) => {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default MuiThemeProvider
