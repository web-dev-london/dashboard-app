import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";


const Geography = () => {
    const { palette } = useTheme();
    const colors = tokens(palette.mode);

    return (
        <>
            <Box m="20px">
                <Header title="Geography" subtitle="Find where your users are located." />
                <Box
                    height="75vh"
                    border={`1px solid ${colors.grey[100]}`}
                    borderRadius="4px"
                    mt="10px"
                    p="10px"
                >
                    <GeographyChart />
                </Box>
            </Box>
        </>
    )
}

export default Geography