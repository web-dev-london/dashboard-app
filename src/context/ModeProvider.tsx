import { modeContext } from "./modeContext";
import { themeSettings } from "../theme";
import useMode from "../hooks/useMode";


interface ModeProviderProps {
    children: React.ReactNode
}


const ModeProvider = ({ children }: ModeProviderProps) => {
    const [theme, colorMode] = useMode(themeSettings);

    return (
        <modeContext.Provider value={{ theme, colorMode }}>
            {children}
        </modeContext.Provider>
    )
}

export default ModeProvider;