import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, createTheme, Link, ThemeProvider } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { dataContext } from '../assets/data/dataProvider';
import { Link as DomLink } from 'react-router-dom';


const NavPage = () => {
    const data = useContext(dataContext)
    const pages = ['About', 'Portfolio', 'Resume'];
    const settings = ['Profile', 'Dashboard', 'Customers'];
    const authPages = ['sign in', 'sign up']

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const theme = createTheme({
        components: {
            MuiLink: {
                styleOverrides: {
                    root: {
                        color: 'white'
                    }
                }
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: 'blue'
                    }
                }
            },
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <AppBar sx={{ backgroundColor: 'primary', width: '100%', position: 'fixed' }}>
                <Toolbar sx={{ width: { xs: '100%', md: '70%' }, margin: 'auto', paddingRight: '20px' }} disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem
                                key={'home'}
                                onClick={handleCloseNavMenu}
                            >
                                <Typography textAlign="center">
                                    <DomLink to='/home'>Home</DomLink>
                                </Typography>
                            </MenuItem>
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.toLowerCase().replace(/\s/g, '')}
                                    onClick={handleCloseNavMenu}
                                >
                                    <Typography textAlign="center">
                                        <Link href={'/#' + page.toLowerCase().replace(/\s/g, '')}>
                                            {page}
                                        </Link>
                                    </Typography>
                                </MenuItem>
                            ))}
                            <MenuItem
                                key={'user'}
                                onClick={handleCloseNavMenu}
                            >
                                <Typography textAlign="center">
                                    <DomLink to={`/${data?.username}`}>
                                        {data?.username}
                                    </DomLink>
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                key={'posts'}
                                onClick={handleCloseNavMenu}
                            >
                                <Typography textAlign="center">
                                    <DomLink to={`/${data?.username}/posts`}>
                                        Posts
                                    </DomLink>
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                key={'financelog'}
                                onClick={handleCloseNavMenu}
                            >
                                <Typography textAlign="center">
                                    <DomLink to={`/${data?.username}/finance`}>
                                        Finance
                                    </DomLink>
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                key={'covid19ON'}
                                onClick={handleCloseNavMenu}
                            >
                                <Typography textAlign="center">
                                    <DomLink to={`/${data?.username}/covid19`}>
                                        Covid 19
                                    </DomLink>
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                key={'testpage'}
                                onClick={handleCloseNavMenu}
                            >
                                <Typography textAlign="center">
                                    <DomLink to={`/${data?.username}/test`}>
                                        Test
                                    </DomLink>
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key={'home'}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <DomLink to={'/home'}>Home</DomLink>
                        </Button>
                        {pages.map((page) => (
                            <Button
                                key={page.toLowerCase().replace(/\s/g, '')}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link href={'/#' + page.toLowerCase().replace(/\s/g, '')}>
                                    {page}
                                </Link>
                            </Button>
                        ))}
                        <Button
                            key={'financelog'}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <DomLink to={`/${data?.username}/finance`}>Finance</DomLink>
                        </Button>
                        <Button
                            key={'posts'}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <DomLink to={`/${data?.username}/posts`}>Posts</DomLink>
                        </Button>
                        <Button
                            key={'covid19ON'}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <DomLink to={`/${data?.username}/covid19`}>
                                Covid 19
                            </DomLink>
                        </Button>
                        <Button
                            key={'testpage'}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <DomLink to={`/${data?.username}/test`}>
                                Test
                            </DomLink>
                        </Button>

                    </Box>

                    {(data?.username === undefined) ? (
                        <Box sx={{ flexGrow: 1, display: 'flex' }}>
                            {authPages.map(page => (
                                <Box key={page.toLowerCase().replace(/\s/g, '')}>
                                    <Button
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        <DomLink to={'/' + page.toLowerCase().replace(/\s/g, '')}>
                                            {page}
                                        </DomLink>
                                    </Button>
                                </Box>))}
                        </Box>
                    ) : (

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="https://www.fodors.com/assets/destinations/712582/canadian-parliament-building-ottawa-ontario-canada_980x650.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem
                                        key={setting.toLowerCase().replace(/\s/g, '')}
                                        onClick={handleCloseUserMenu}                                        
                                    >
                                        <Typography textAlign="center">
                                            <DomLink to={'/' + data?.username + '/' + setting.toLowerCase().replace(/\s/g, '')}>
                                                {setting}
                                            </DomLink>
                                        </Typography>
                                    </MenuItem>
                                ))}
                                <MenuItem
                                    key='signout'
                                    onClick={handleCloseUserMenu}
                                >
                                    <Typography textAlign="center">
                                        <DomLink to='/signout'>Signout</DomLink>
                                    </Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                    )}
                </Toolbar>
            </AppBar >
        </ThemeProvider>

    );
}

export default NavPage;