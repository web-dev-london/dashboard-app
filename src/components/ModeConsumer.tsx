import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useModeContext } from "../context/modeContext";
import { Routes, Route } from "react-router-dom";
import Topbar from "../platforms/global/Topbar";
import Sidebar from "../platforms/global/Sidebar";
import Dashboard from "../platforms/dashboard";
import Team from "../platforms/team";
import Faq from "../platforms/faq";
import Invoices from "../platforms/invoices";
import Contacts from "../platforms/contacts";
import Bar from "../platforms/bar";
import Form from "../platforms/form";
import Line from "../platforms/line";
import Pie from "../platforms/pie";
import Geography from "../platforms/geography";
import Calendar from "../platforms/calendar";

const ModeConsumer = () => {
    const { theme } = useModeContext();

    return (
        <>
            <ThemeProvider theme={theme} >
                <CssBaseline />
                <div className="app">
                    <Sidebar />
                    <main className="content">
                        <Topbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/faq" element={<Faq />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/geography" element={<Geography />} />
                            <Route path="/calendar" element={<Calendar />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </>
    )
}

export default ModeConsumer