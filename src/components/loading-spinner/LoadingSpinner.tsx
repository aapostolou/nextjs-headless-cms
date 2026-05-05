import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'

export type LoadingSpinnerProps = {
  isLoading?: boolean
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ isLoading }) => {
  return (
    <Backdrop
      sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
      open={!!isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default LoadingSpinner
