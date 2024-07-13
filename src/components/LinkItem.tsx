import { useTheme } from "@mui/material";
import { Typography } from "@mui/material";
import Clink from "clink-react";
import { MenuItem } from "react-pro-sidebar";
import { tokens } from "../theme";


const LinkItem = (props: {
    title: string,
    to: string,
    icon: React.ReactNode,
    selected: string,
    setSelected: React.Dispatch<React.SetStateAction<string>>
}) => {
    const { title, to, icon, selected, setSelected } = props;
    const { palette } = useTheme();
    const colors = tokens(palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Clink to={to} style={{ textDecoration: "none" }}>
                <Typography>{title}</Typography>
            </Clink>
        </MenuItem>
    )
}

export default LinkItem;