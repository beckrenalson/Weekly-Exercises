import { DaysLeft } from "./DaysLeft";
import { HoursLeft } from "./HoursLeft";
import { MinutesLeft } from "./MinutesLeft";

export function Countdown(props) {

    // Utility function to calculate time left
    const calculateTimeLeft = (targetDate) => {
        const now = new Date();
        const target = new Date(targetDate);
        const timeDiff = target - now;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        return { days, hours, minutes };
    };

 
        const { days, hours, minutes } = calculateTimeLeft(props.eventDate);

        return (
            <div>
                <h2>{props.eventName}</h2>
                <DaysLeft days={days} />
                <HoursLeft hours={hours} />
                <MinutesLeft minutes={minutes} />
            </div>
        );
}
