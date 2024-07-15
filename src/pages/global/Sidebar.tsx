import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, Typography, useTheme, IconButton } from "@mui/material";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import user from "../../assets/user.png";
import LinkItem from "../../components/LinkItem";


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [active, setActive] = useState("Dashboard");


    return (
        <>
            <Box
                sx={{
                    "& .pro-sidebar-inner": {
                        background: `${colors.primary[400]} !important`,
                    },
                    "& .pro-icon-wrapper": {
                        backgroundColor: "transparent !important",
                    },
                    "& .pro-inner-item": {
                        padding: "5px 35px 5px 20px !important",
                    },
                    "& .pro-inner-item:hover": {
                        color: "#868dfb !important",
                    },
                    "& .pro-menu-item.active": {
                        color: "#6870fa !important",
                    },
                }}
            >

                <ProSidebar collapsed={isCollapsed}>
                    <Menu iconShape="square">
                        {/* LOGO AND MENU ICON */}
                        <MenuItem
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                            style={{
                                margin: "10px 0 20px 0",
                                color: colors.grey[100],
                            }}
                        >
                            {!isCollapsed && (
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                // ml="15px"
                                >
                                    <Typography variant="h3" color={colors.grey[100]}>
                                        ADMINISTRATOR
                                    </Typography>
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </MenuItem>

                        {/* USER */}

                        {!isCollapsed && (
                            <Box mb="25px">
                                <Box display="flex" justifyContent="center" alignItems="center">
                                    <img
                                        alt="profile-user"
                                        width="100px"
                                        height="100px"
                                        src={user}
                                        style={{ cursor: "pointer", borderRadius: "50%" }}
                                    />
                                </Box>
                                <Box textAlign="center">
                                    <Typography
                                        variant="h2"
                                        color={colors.grey[100]}
                                        fontWeight="bold"
                                        sx={{ m: "10px 0 0 0" }}
                                    >
                                        John Doe
                                    </Typography>
                                    <Typography variant="h5" color={colors.greenAccent[500]}>
                                        Manager
                                    </Typography>
                                </Box>
                            </Box>
                        )}
                        {/* MENU ITEMS */}
                        <Box paddingLeft={isCollapsed ? undefined : "10%"}>

                            <LinkItem
                                title="Dashboard"
                                to="/"
                                icon={<HomeOutlinedIcon />}
                                selected={active}
                                setSelected={setActive}
                            />

                            <Typography
                                variant="h6"
                                color={colors.grey[300]}
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                Data
                            </Typography>

                            <LinkItem
                                title="Manage Team"
                                to="/team"
                                icon={<PeopleOutlinedIcon />}
                                selected={active}
                                setSelected={setActive}
                            />

                            <LinkItem
                                title="Contacts Information"
                                to="/contacts"
                                icon={<ContactsOutlinedIcon />}
                                selected={active}
                                setSelected={setActive}
                            />

                            <LinkItem
                                title="Invoices Balances"
                                to="/invoices"
                                icon={<ReceiptOutlinedIcon />}
                                selected={active}
                                setSelected={setActive}
                            />


                            <Typography
                                variant="h6"
                                color={colors.grey[300]}
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                Pages
                            </Typography>

                            <LinkItem
                                title={'Profile Form'}
                                to="/form"
                                icon={<PersonOutlinedIcon />}
                                selected={active}
                                setSelected={setActive}
                            />

                            <LinkItem
                                title="Calendar"
                                to="/calendar"
                                icon={<CalendarTodayOutlinedIcon />}
                                selected={active}
                                setSelected={setActive}
                            />

                            <Typography
                                variant="h6"
                                color={colors.grey[300]}
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                Charts
                            </Typography>

                            <LinkItem
                                title="Bar Chart"
                                to="/bar"
                                icon={<BarChartOutlinedIcon />}
                                selected={active}
                                setSelected={setActive}
                            />

                            <LinkItem
                                title="Pie Chart"
                                to="/pie"
                                icon={<PieChartOutlineOutlinedIcon />}
                                selected={active}
                                setSelected={setActive}
                            />

                            <LinkItem
                                title="Line Chart"
                                to="/line"
                                icon={<TimelineOutlinedIcon />}
                                selected={active}
                                setSelected={setActive}
                            />

                            <LinkItem
                                title="Geography Chart"
                                to="/geography"
                                icon={<MapOutlinedIcon />}
                                selected={active}
                                setSelected={setActive}
                            />

                            <LinkItem
                                title="FAQ Page"
                                to="/faq"
                                icon={<HelpOutlineOutlinedIcon />}
                                selected={active}
                                setSelected={setActive}
                            />
                        </Box>
                    </Menu>
                </ProSidebar>
            </Box>
        </>
    );
}

export default Sidebar;