import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../../components/Header';
import { mockDataTeam } from '../../data/mockData';
import GridColumn from '../../utility/GridColumn';
import { tokens } from '../../theme';

const Team = () => {
    const { columns } = GridColumn();

    const { palette } = useTheme();
    const colors = tokens(palette.mode);


    return (
        <>
            <Box m="20px">
                <Header title="TEAM" subtitle="Managing the Team Members" />
                <Box
                    m="40px 0 0 0"
                    height="75vh"
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                        },
                        "& .name-column--cell": {
                            color: colors.greenAccent[300],
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: colors.blueAccent[700],
                            borderBottom: "none",
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: colors.primary[400],
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: colors.blueAccent[700],
                        },
                        "& .MuiCheckbox-root": {
                            color: `${colors.greenAccent[200]} !important`,
                        },
                    }}
                >
                    <DataGrid
                        checkboxSelection
                        rows={mockDataTeam}
                        columns={columns}
                    />
                </Box>
            </Box>
        </>
    )
}

export default Team