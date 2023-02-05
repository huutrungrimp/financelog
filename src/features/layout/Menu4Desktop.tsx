import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box, Link } from '@mui/material';
import { User } from '../../interface';
import { dataContext } from '../assets/data/dataProvider';

export default function Menu4Desktop() {
    const username = useContext(dataContext )

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Desktop
            </Button>
            {(username?.username === '') ? (
                ''
            ) : (
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}><Link href={'/' + username + '/finance'}>Dashboard</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href={'/' + username + '/finance/customers'}>Customers</Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link href={'/signout'}>Sign Out</Link></MenuItem>
                </Menu>
            )}
        </Box>
    )
}
