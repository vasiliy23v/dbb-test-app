import { Box, MenuItem, Typography } from "@mui/material"
import { CogIcon, Folder2Icon, MultiFolderIcon, PlusIcon, ScreenRecordIcon, SetNameIcon, SharedFolderIcon } from "../Icons/Icons"
import { MouseEvent } from 'react'
import { MenuStyled } from "./MenuStyledMUI"
import styles from '../ButtonModul/ButtonModul.module.scss'


interface MenuMoreProps {
    handleOpenOrganiseMenu: (event: React.MouseEvent<HTMLElement>) => void
    anchorElOrganise: HTMLElement | null
    handleCloseOrganiseMenu: () => void
    alertOrganiseMenu: (e: any) => void
}

interface MenuItemData {
    icon: React.ReactNode
    label: string
    onClick: (event: MouseEvent<HTMLLIElement>) => void
}

export const MenuSort = ({ handleOpenOrganiseMenu, anchorElOrganise, handleCloseOrganiseMenu, alertOrganiseMenu }: MenuMoreProps) => {


    const menuItems: MenuItemData[] = [
        {
            icon: <MultiFolderIcon />,
            label: 'Multi-file organise',
            onClick: (e) => alertOrganiseMenu(e)
        },
        {
            icon: <SetNameIcon />,
            label: 'Set naming convention',
            onClick: (e) => alertOrganiseMenu(e)
        },
        {
            icon: <CogIcon />,
            label: 'Add automatio',
            onClick: (e) => alertOrganiseMenu(e)
        },
    ]


    return (
        <>
            <Box sx={{ flexGrow: 0 }}>
                <label onClick={handleOpenOrganiseMenu} className={styles.creater}><MultiFolderIcon fill="#000" />Sort</label>
                <MenuStyled
                    sx={{ mt: '35px' }}
                    id="menu-appbar"
                    anchorEl={anchorElOrganise}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElOrganise)}
                    onClose={handleCloseOrganiseMenu}
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