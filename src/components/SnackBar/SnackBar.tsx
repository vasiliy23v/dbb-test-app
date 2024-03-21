import React, { FC, ReactNode } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { SnackbarOrigin } from '@mui/material/Snackbar/Snackbar'
import { AlertTitle, Slide } from '@mui/material'

interface CustomSnackbarProps {
    open: boolean
    handleClose: () => void
    message: string
    severity: AlertProps['severity']
    autoHideDuration?: number
    anchorOrigin?: SnackbarOrigin
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const CustomSnackbar: FC<CustomSnackbarProps> = ({
    open,
    handleClose,
    message,
    severity,
    autoHideDuration = 2000,
    anchorOrigin = {
        vertical: 'bottom',
        horizontal: 'left',
    },
}) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={autoHideDuration}
            onClose={handleClose}
            anchorOrigin={anchorOrigin}
        >
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                <AlertTitle sx={{ textTransform: "uppercase" }}>{severity}</AlertTitle>
                {message}
            </Alert>
        </Snackbar>
    )
}
