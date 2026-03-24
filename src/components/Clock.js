import React, { useEffect, useState } from 'react';

const Clock = () => {
    const [time, setTime] = useState({});

    const timeZones = ['UTC', 'America/New_York', 'Europe/London', 'Asia/Tokyo'];

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeObject = {};
            timeZones.forEach(zone => {
                timeObject[zone] = now.toLocaleString('en-US', { timeZone: zone });
            });
            setTime(timeObject);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            {timeZones.map(zone => (
                <div key={zone}>
                    <strong>{zone}:</strong> {time[zone]}
                </div>
            ))}
        </div>
    );
};

export default Clock;