import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { useModeContext } from "../context/modeContext";
import { Routes, Route } from "react-router-dom";
import Topbar from "../pages/global/Topbar";
import Sidebar from "../pages/global/Sidebar";
import Dashboard from "../pages/dashboard";
import Team from "../pages/team";
import Faq from "../pages/faq";
import Invoices from "../pages/invoices";
import Contacts from "../pages/contacts";
import Bar from "../pages/bar";
import Form from "../pages/form";
import Line from "../pages/line";
import Pie from "../pages/pie";
import Geography from "../pages/geography";
import Calendar from "../pages/calendar";

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