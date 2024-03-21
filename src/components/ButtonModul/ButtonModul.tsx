import styles from './ButtonModul.module.scss'
import { useState, forwardRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { handleFileUpload } from '../../redux/uploadFile/action'
import { createFolder } from '../../redux/createFolder/action'
import { updateFiles } from '../../redux/updateFiles/reducer'
import { UploadIcon, PlusIcon, MoreIcon, MultiFolderIcon, CogIcon, Folder2Icon, SharedFolderIcon, ScreenRecordIcon, SetNameIcon, ShowIcon, RequestFileIcon, RewindIcon } from '../Icons/Icons'
import { Box, MenuItem, Menu, Typography, Dialog, DialogActions, DialogContent, Snackbar, Alert as MuiAlert, DialogTitle, Button, TextField, AlertProps, styled } from '@mui/material'
import { CustomSnackbar } from '../SnackBar/SnackBar'
import { MenuCreate } from '../Menus/MenuCreate'
import { MenuStyled } from '../Menus/MenuStyledMUI'
import { MenuSort } from '../Menus/MenuSort'

const ButtonModul = () => {

  const path = useAppSelector(state => state.setPathReducer.path)
  const [folderName, setFolderName] = useState('')
  const dispatch = useAppDispatch()
  const [anchorElCreate, setAnchorElCreate] = useState<null | HTMLElement>(null)
  const [anchorElOrganise, setAnchorElOrganise] = useState<null | HTMLElement>(null)
  const [anchorElMore, setAnchorElMore] = useState<null | HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  })


  const handleClickAlert = () => {
    setOpenAlert(true)
  }
  const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenAlert(false)
  }

  const [openError, setOpenError] = useState(false)
  const handleClickError = () => {
    setOpenError(true)
  }
  const handleCloseError = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenError(false)
  }

  const handleOpenCreateMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElCreate(event.currentTarget)
  }
  const handleCloseCreateMenu = () => {
    setAnchorElCreate(null)
  }

  const handleOpenOrganiseMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElOrganise(event.currentTarget)
  }
  const handleCloseOrganiseMenu = () => {
    setAnchorElOrganise(null)
  }

  const handleOpenMoreMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElMore(event.currentTarget)
  }
  const handleCloseMoreMenu = () => {
    setAnchorElMore(null)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const clickFolder = (e: any) => {
    handleCloseCreateMenu()
    handleClickOpen()
  }

  const alertCreateMenu = (e: any) => {
    handleCloseCreateMenu()
    handleClickAlert()
  }

  const alertOrganiseMenu = (e: any) => {
    handleCloseOrganiseMenu()
    handleClickAlert()
  }

  function alertMoreMenu(e: any) {
    handleCloseMoreMenu()
    handleClickAlert()
  }
  function rewindFromMoreMenu(e: any) {
    handleCloseMoreMenu()
    dispatch(updateFiles())
  }



  async function handleSubmit(e: any) {
    if (folderName === '') {
      handleClickError()
    } else {
      handleClose()
      await dispatch(createFolder(folderName, path))
      dispatch(updateFiles())
    }
  }

  async function createFiles(files: any) {
    await dispatch(handleFileUpload(files, path))
    dispatch(updateFiles())
  }




  return (
    <>
      <div className={styles.forbttn}>
        <label htmlFor="filePicker" className={styles.creater}><UploadIcon fill='#000' />Upload</label>
        <input id="filePicker" className={styles.filepicker_input} type='file' multiple onChange={(e) => e.target.files && createFiles(e.target.files)} />
        <MenuCreate
          handleOpenCreateMenu={handleOpenCreateMenu}
          anchorElCreate={anchorElCreate}
          handleCloseCreateMenu={handleCloseCreateMenu}
          clickFolder={clickFolder}
          alertCreateMenu={alertCreateMenu}
        />
        <MenuSort
          handleOpenOrganiseMenu={handleOpenOrganiseMenu}
          anchorElOrganise={anchorElOrganise}
          handleCloseOrganiseMenu={handleCloseOrganiseMenu}
          alertOrganiseMenu={alertOrganiseMenu}
        />
        {/* handleSubmit */}
        <Box sx={{ flexGrow: 0 }}>
          <label onClick={handleOpenMoreMenu} className={styles.creater}><MoreIcon />Edit</label>
          <MenuStyled
            sx={{ mt: '35px' }}
            id="menu-appbar"
            anchorEl={anchorElMore}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElMore)}
            onClose={handleCloseMoreMenu}
          >
            <MenuItem className={styles.menuitem} onClick={alertMoreMenu}>
              <ShowIcon />
              <Typography textAlign="center">Show deleted files</Typography>
            </MenuItem>
            <MenuItem className={styles.menuitem} onClick={alertMoreMenu}>
              <RequestFileIcon />
              <Typography textAlign="center">Request files</Typography>
            </MenuItem>
            <MenuItem className={styles.menuitem} onClick={rewindFromMoreMenu}>
              <RewindIcon />
              <Typography textAlign="center">Rewind this folder</Typography>
            </MenuItem>
          </MenuStyled>
        </Box>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Folder</DialogTitle>
        <DialogContent>
          <TextField
            id="text"
            label="Name Folder"
            variant="filled"
            value={folderName}
            onChange={e => setFolderName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button sx={{ color: 'black' }} onClick={handleClose}>Cancel</Button>
          <Button sx={{ color: 'black' }} onClick={handleSubmit}>Create Folder</Button>
        </DialogActions>
      </Dialog>

      <CustomSnackbar
        open={openAlert}
        handleClose={handleCloseAlert}
        severity="info"
        message="This feature will be added soon!"
      />
      <CustomSnackbar
        open={openError}
        handleClose={handleCloseError}
        severity="error"
        message="Error! Name of folder is empty!"
      />
    </>
  )
}

export default ButtonModul
