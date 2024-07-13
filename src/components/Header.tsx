import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";


const Header = (props: {
    title: string,
    subtitle: string
}) => {
    const { title, subtitle } = props;
    const { palette } = useTheme();
    const colors = tokens(palette.mode);
    return (
        <>
            <Box mb="30px">
                <Typography
                    variant="h2"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ mb: "5px" }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="h5"
                    color={colors.greenAccent[500]}
                >
                    {subtitle}
                </Typography>
            </Box>
        </>
    )
}

export default Header