import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    EventApi,
    DateSelectArg,
    EventClickArg,
    formatDate,
} from '@fullcalendar/core'
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import { createEventId } from '../../utility/EventUtils'
import Header from "../../components/Header";
import { tokens } from "../../theme";


const Calendar = () => {
    const { palette } = useTheme();
    const colors = tokens(palette.mode);
    const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

    const handleDateClick = (selectInfo: DateSelectArg) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: createEventId(),
                title,
                start: selectInfo.startStr,
                end: selectInfo.endStr,
                allDay: selectInfo.allDay
            })
        }
    }

    const handleEventClick = (clickInfo: EventClickArg) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${clickInfo.event.title}'`
            )
        ) {
            clickInfo.event.remove();
        }
    }

    const handleEvents = (events: EventApi[]) => {
        setCurrentEvents(events)
    }

    return (
        <>
            <Box m="20px">
                <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

                <Box display="flex" justifyContent="space-between">
                    {/* CALENDAR SIDEBAR */}
                    <Box
                        flex="1 1 20%"
                        sx={{
                            backgroundColor: colors.primary[400],
                        }}
                        p="15px"
                        borderRadius="4px"
                    >
                        <Typography variant="h5">Events</Typography>
                        <List>
                            {currentEvents.map((event) => (
                                <ListItem
                                    key={event.id}
                                    sx={{
                                        backgroundColor: colors.greenAccent[500],
                                        margin: "10px 0",
                                        borderRadius: "2px",
                                    }}
                                >
                                    <ListItemText
                                        primary={event.title}
                                        secondary={
                                            <Typography>
                                                {event.start && formatDate(event.start)} -  {event.end && formatDate(event.end)}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* CALENDAR */}
                    <Box flex="1 1 100%" ml="15px">
                        <FullCalendar
                            height="75vh"
                            plugins={[
                                dayGridPlugin,
                                timeGridPlugin,
                                interactionPlugin,
                                listPlugin,
                            ]}
                            headerToolbar={{
                                left: "prev,next today",
                                center: "title",
                                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                            }}
                            initialView="dayGridMonth"
                            editable={true}
                            selectable={true}
                            selectMirror={true}
                            dayMaxEvents={true}
                            select={handleDateClick}
                            eventClick={handleEventClick}
                            eventsSet={handleEvents}
                            initialEvents={[
                                {
                                    id: "12315",
                                    title: "All-day event",
                                    date: "2022-09-14",
                                },
                                {
                                    id: "5123",
                                    title: "Timed event",
                                    date: "2022-09-28",
                                },
                            ]}
                        />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Calendar;