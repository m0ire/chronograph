import styles from './Timer.module.css';
import React, { useState, useEffect } from 'react';
import { TimePicker } from '@material-ui/pickers';
import * as moment from 'moment';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import StopIcon from '@material-ui/icons/Stop';
import { FONT_SIZE_LG } from '../../helplers';

const START_OF_DAY = moment().startOf('day');
let interval;

const Timer = ({ visible }) => {
    const [startTime, setStartTime] = useState(START_OF_DAY);
    const [time, setTime] = useState(START_OF_DAY);
    const [isStarted, setStarted] = useState(false);
    const [isPaused, setPaused] = useState(false);
    const [isTimePickerOpen, setTimePickerOpen] = useState(false);

    useEffect(() => {
        if (isStarted)
            if (time.isSame(START_OF_DAY)) {
                clearInterval(interval);
                setStarted(false);
                new Notification('Timer end')
            }
    }, [time, isStarted]);

    useEffect(() => {
        if (!isStarted)
            setTime(startTime);
    }, [startTime, isStarted]);

    useEffect(() => {
        if (isStarted) {
            interval = setInterval(() => setTime(prevTimer => prevTimer.clone().subtract(1, 's')), 1000);
        } else {
            clearInterval(interval);
            setTime(startTime);
            setPaused(false);
        }
    }, [isStarted]);

    useEffect(() => {
        if (isStarted)
            if (isPaused) {
                clearInterval(interval);
            } else {
                interval = setInterval(() => setTime(prevTimer => prevTimer.clone().subtract(1, 's')), 1000);
            }
    }, [isPaused]);

    return (
        <>
            {visible &&
                <div>
                    <div className={styles.display} onClick={() => !isStarted && setTimePickerOpen(true)}>
                        <div className={styles.time}>
                            {time.format('HH:mm:ss')}
                        </div>
                    </div>
                    <div className={styles.controlPanel}>
                        {isStarted ?
                            <>
                                {isPaused ?
                                    <PlayCircleOutlineIcon
                                        style={{ fontSize: FONT_SIZE_LG, cursor: 'pointer' }}
                                        onClick={() => {
                                            setPaused(false);
                                        }}
                                    />
                                    :
                                    <PauseCircleOutlineIcon
                                        style={{ fontSize: FONT_SIZE_LG, cursor: 'pointer' }}
                                        onClick={() => {
                                            setPaused(true);
                                        }}
                                    />
                                }
                                <StopIcon
                                    style={{ fontSize: FONT_SIZE_LG, cursor: 'pointer' }}
                                    onClick={() => {
                                        setStarted(false);
                                    }}
                                />
                            </>
                            :
                            <PlayCircleOutlineIcon
                                style={{ fontSize: FONT_SIZE_LG, cursor: 'pointer' }}
                                onClick={() => {
                                    if(!time.isSame(START_OF_DAY))
                                        setStarted(true);
                                }}
                            />

                        }
                    </div>
                    <TimePicker
                        ampm={false}
                        open={isTimePickerOpen}
                        openTo="hours"
                        views={["hours", "minutes", "seconds"]}
                        format="HH:mm:ss"
                        value={time}
                        InputProps={{
                            inputComponent: () => null
                        }}
                        onChange={(date) => {
                            setStartTime(date);
                        }}
                        onClose={() => setTimePickerOpen(false)}
                    />
                </div>
            }
        </>
    )
};

export default Timer;
