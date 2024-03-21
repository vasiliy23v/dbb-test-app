import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material"
import { DownloadIcon, CopyIcon, SetNameIcon, MoveIcon, DeleteIcon, MoreIcon } from "../Icons/Icons"
import { MouseEvent } from 'react'
import { Files } from '../../redux/fetchFiles/reducer'

interface MenuMoreProps {
    handleOpenMoreMenu: (event: MouseEvent<HTMLElement>) => void
    anchorElMore: HTMLElement | null
    downloadFile: (path: string) => void
    handleCloseMoreMenu: () => void
    closeMenuWithMessage: (e: any) => void
    file: Files
    handleClickOpen: () => void
    deleteFile: (path: string) => void
}

export const MenuMore = ({ handleOpenMoreMenu, anchorElMore, downloadFile, handleCloseMoreMenu, closeMenuWithMessage, file, handleClickOpen, deleteFile }: MenuMoreProps) => {

    const menuItems = [
        {
            id: 'download',
            icon: <DownloadIcon />,
            text: 'Download',
            onClick: (e: React.MouseEvent<HTMLLIElement>) => downloadFile(file.path_lower),
        },
        {
            id: 'copy',
            icon: <CopyIcon fill='#000000' />,
            text: 'Copy',
            onClick: (e: any) => closeMenuWithMessage(e),
        },
        {
            id: 'rename',
            icon: <SetNameIcon />,
            text: 'Rename',
            onClick: () => handleClickOpen(),
        },
        {
            id: 'move',
            icon: <MoveIcon />,
            text: 'Move',
            onClick: (e: any) => closeMenuWithMessage(e),
        },
        {
            id: 'delete',
            icon: <DeleteIcon />,
            text: 'Delete',
            onClick: (e: React.MouseEvent<HTMLLIElement>) => deleteFile(file.path_lower),
        },
    ]

    return (
        <Box>
            <IconButton onClick={handleOpenMoreMenu} color="secondary" >
                <MoreIcon stroke="#000" fill="#000" />
            </IconButton>
            <Menu
                anchorEl={anchorElMore}
                open={Boolean(anchorElMore)}
                onClose={handleCloseMoreMenu}
            >
                {menuItems.map((menuItem) => (
                    <MenuItem key={menuItem.id} onClick={menuItem.onClick} data-path={menuItem.id} sx={{ display: 'flex', gap: '10px' }}>
                        {menuItem.icon}
                        <Typography textAlign="center">{menuItem.text}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

