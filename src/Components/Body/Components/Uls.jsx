import React, { useState } from 'react'

function Uls() {
    const [day, setDay] = useState(0)

    const days = ["MonDay", "TuesDay", "WednesDay", "ThursDay", "FriDay", "SaturDay", "SunDay"]

    const handleDays = () => {
        const randomDayIndex = Math.floor(Math.random() * 1);
        setDay(randomDayIndex);
    }


    return (
        <>
            <ul className="list-group list-group-flush">
                {days.map((day, index) => (
                    <li key={index} className="list-group-item">{day}</li>
                ))}
            </ul>
        </>
    )
}

export default Uls