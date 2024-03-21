import { Box, MenuItem, Typography } from "@mui/material"
import { CogIcon, Folder2Icon, PlusIcon, ScreenRecordIcon, SharedFolderIcon } from "../Icons/Icons"
import { MouseEvent } from 'react'
import { MenuStyled } from "./MenuStyledMUI"
import styles from '../ButtonModul/ButtonModul.module.scss'


interface MenuMoreProps {
    handleOpenCreateMenu: (event: React.MouseEvent<HTMLElement>) => void
    anchorElCreate: HTMLElement | null
    handleCloseCreateMenu: () => void
    clickFolder: (e: any) => void
    alertCreateMenu: (e: any) => void
}

interface MenuItemData {
    icon: React.ReactNode
    label: string
    onClick: (event: MouseEvent<HTMLLIElement>) => void
}

export const MenuCreate = ({ handleOpenCreateMenu, anchorElCreate, handleCloseCreateMenu, clickFolder, alertCreateMenu }: MenuMoreProps) => {


    const menuItems: MenuItemData[] = [
        {
            icon: <Folder2Icon />,
            label: 'Folder',
            onClick: (e: any) => clickFolder(e)
        },
        {
            icon: <SharedFolderIcon />,
            label: 'Shared folder',
            onClick: (e) => alertCreateMenu(e)
        },
        {
            icon: <CogIcon />,
            label: 'Automated folder',
            onClick: (e) => alertCreateMenu(e)
        },
        {
            icon: <ScreenRecordIcon fill="#000" />,
            label: 'Screen recording',
            onClick: (e) => alertCreateMenu(e)
        },
    ]


    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <label onClick={handleOpenCreateMenu} className={styles.creater}><PlusIcon />Create</label>
                <MenuStyled
                    sx={{ mt: '35px' }}
                    id="menu-appbar"
                    anchorEl={anchorElCreate}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElCreate)}
                    onClose={handleCloseCreateMenu}
                >
                    {menuItems.map((menuItem, index) => (
                        <MenuItem key={index} onClick={menuItem.onClick} sx={{ display: 'flex', gap: '10px' }}>
                            {menuItem.icon}
                            <Typography textAlign="center">{menuItem.label}</Typography>
                        </MenuItem>
                    ))}
                </MenuStyled>
            </Box>
        </>
    )
}