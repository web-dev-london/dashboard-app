import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useModeContext } from "../../context/modeContext";
import SearchIcon from '@mui/icons-material/Search';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';


const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { colorMode } = useModeContext()
    return (
        <>

            <Box display="flex" justifyContent="space-between" p={2}>
                {/* search bar */}

                <Box
                    component='div'
                    display="flex"
                    sx={{
                        backgroundColor: colors.primary[400],
                        borderRadius: '3px'
                    }}
                    borderRadius="3px"
                >
                    <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
                    <IconButton type="button" sx={{ p: 1 }}>
                        <SearchIcon />
                    </IconButton>
                </Box>

                {/* icons */}

                <Box display="flex">
                    <IconButton onClick={colorMode.toggleColorMode}>
                        {theme.palette.mode === 'dark' ? (
                            <DarkModeOutlinedIcon />
                        ) : (
                            <LightModeOutlinedIcon />
                        )}
                    </IconButton>
                    <IconButton>
                        <NotificationsOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <PersonOutlinedIcon />
                    </IconButton>
                </Box>
            </Box>
        </>
    );
}

export default Topbar;