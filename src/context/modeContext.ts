import { Theme } from "@mui/material";
import { createContext, useContext } from "react";


export interface ColorMode {
    toggleColorMode: () => void
}

export interface ModeContextValue {
    theme: Theme
    colorMode: ColorMode
}

// context for color mode
export const modeContext = createContext<ModeContextValue | null>(null)

export const useModeContext = () => {
    const value = useContext(modeContext);
    if (!value) {
        throw new Error("useModeContext must be used within a ColorModeContextProvider");
    }
    return value
}