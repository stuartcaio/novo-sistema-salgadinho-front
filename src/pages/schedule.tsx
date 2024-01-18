import "../styles/pages/schedule.sass"

import Calendar from "react-calendar"

import TitleHeader from "../components/titleheader"
import AppointmentCard from "../components/appointmentcard"

const Schedule = () => {
    return (
        <section id="schedule-page">

            <TitleHeader title="Agenda" titleBTN="Agendar" />

            <main className="schedules">

                <section className="schedule__schedule">
                    <h2> Agenda </h2>
                    <Calendar />
                </section>

                <section className="schedule__items">
                    <h2> Agendamentos: </h2>
                    <AppointmentCard />
                </section>

            </main>

        </section>
    )
}

export default Schedule