import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import { Box, Typography, useTheme } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { tokens } from '../theme';



const TeamColumnView = () => {
    const { palette } = useTheme();
    const colors = tokens(palette.mode);

    const columns: GridColDef[] = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "access",
            headerName: "Access Level",
            flex: 1,
            renderCell: ({ row: { access } }: { row: { access: string } }) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        borderRadius="4px"
                        sx={
                            access === "admin"
                                ? {
                                    backgroundColor: colors.greenAccent[600],
                                }
                                : access === "manager"
                                    ? {
                                        backgroundColor: colors.greenAccent[700],
                                    }
                                    : {
                                        backgroundColor: colors.greenAccent[700],
                                    }
                        }
                    >
                        {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {access === "user" && <SecurityOutlinedIcon />}
                        {access === "manager" && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            {access}
                        </Typography>
                    </Box>
                );
            }
        },
    ];

    return { columns: columns }
}

export default TeamColumnView;

