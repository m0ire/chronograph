import styles from './AlarmClock.module.css';
import React, { useState, useEffect } from 'react';
import * as moment from 'moment';
import { TimePicker } from '@material-ui/pickers';

let interval;

const AlarmClock = ({ visible }) => {
    const [isOn, setIsOn] = useState(false);
    const [alarmTime, setAlarmTime] = useState(moment());
    const [isTimePickerOpen, setTimePickerOpen] = useState(false);

    useEffect(() => {
        if (isOn) {
            clearInterval(interval);
            setTimeout(() => {
                interval = setInterval(() => {
                    console.log(moment().milliseconds())
                    if (alarmTime.isSame(moment(), 's')) {
                        new Notification(alarmTime.format('HH:mm:ss'));
                        setIsOn(false);
                        clearInterval(interval);
                    }
                }, 1000);
            }, moment().endOf('s').diff(moment()));
        }
    }, [alarmTime, isOn]);

    return (
        <>
            {visible &&
                <div>
                    <div className={styles.display} onClick={() => setTimePickerOpen(true)}>
                        <div className={styles.alarmTime}>
                            {alarmTime.format('HH:mm:ss')}
                        </div>
                    </div>
                    <TimePicker
                        ampm={false}
                        open={isTimePickerOpen}
                        openTo="hours"
                        views={["hours", "minutes", "seconds"]}
                        format="HH:mm:ss"
                        value={alarmTime}
                        InputProps={{
                            inputComponent: () => null
                        }}
                        onChange={(date) => {
                            setIsOn(true);
                            setAlarmTime(date);
                        }}
                        onClose={() => setTimePickerOpen(false)}
                    />
                </div>
            }
        </>
    )
};

export default AlarmClock;
