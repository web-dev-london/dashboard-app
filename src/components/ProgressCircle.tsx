import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

interface ProgressCircleProps {
    progress: string
    size: string
}

const ProgressCircle = ({ progress = '0.75', size = '40' }: ProgressCircleProps) => {
    const { palette } = useTheme();
    const colors = tokens(palette.mode);
    const angle = parseInt(progress) * 360;

    return (
        <>
            <Box
                sx={{
                    background: `radial-gradient(${colors.primary[400]} 55%, transparent 56%),
                conic-gradient(transparent 0%, ${angle}deg ${colors.blueAccent[500]}
                ${angle}deg 360deg),
                ${colors.greenAccent[500]}`,
                    borderRadius: '50%',
                    width: `${size}px`,
                    height: `${size}px`,
                }}
            />

        </>
    )
}

export default ProgressCircle