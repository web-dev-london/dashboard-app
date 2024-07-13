import { createTheme, ThemeOptions, Theme } from '@mui/material/styles';
import { useMemo, useState } from "react";
import { PaletteMode } from "@mui/material";
import { ColorMode } from '../context/modeContext';




const useMode = (themeSettings: (mode: PaletteMode) => ThemeOptions) => {
    const [mode, setMode] = useState<PaletteMode>("dark");


    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light"))
        }),
        []
    );
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode, themeSettings]);
    const result: [Theme, ColorMode] = [theme, colorMode]; // Anotation!
    return result
}

export default useMode;
