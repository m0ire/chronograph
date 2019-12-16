import styles from './Stopwatch.module.css';
import React, { useState, useEffect } from 'react';
import { START_OF_DAY } from '../../helplers';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';

let interval;

const Stopwatch = ({ visible }) => {
    const [time, setTime] = useState(START_OF_DAY);
    const [isStarted, setStarted] = useState(false);
    const [splitList, setSplitList] = useState([]);

    useEffect(() => {
        if (isStarted)
            interval = setInterval(() => {
                setTime(prevTimer => {
                    const newTime = prevTimer.clone().add(76, 'ms');
                    return newTime;
                });
            }, 76);
        else {
            clearInterval(interval);
            setTime(START_OF_DAY);
            setSplitList([]);
        }
    }, [isStarted]);

    if (!visible)
        return null;

    return (
        <div>
            <div className={styles.display}>
                <div className={styles.time}>
                    {time.format('HH:mm:ss:SSS')}
                </div>
            </div>
            <div
                className={styles.controlPanel}
            >
                {isStarted ?
                    <div>
                        <button
                            className={styles.splitButton}
                            onClick={() => {
                                setSplitList([...splitList, {key: moment(), value: time.clone()}]);
                            }}
                        >
                            Split
                        </button>
                        <button
                            className={styles.resetButton}
                            style={{ marginLeft: '150px' }}
                            onClick={() => {
                                setStarted(false);
                            }}
                        >
                            Reset
                        </button>
                    </div>
                    :
                    <button
                        className={styles.startButton}
                        onClick={() => {
                            setStarted(true);
                        }}
                    >
                        Start
                    </button>
                }
            </div>
            <div className={styles.splitList}>
                {splitList.map(splitItem => (
                    <div className={styles.splitItem} key={splitItem.key}>
                        <div className={styles.splitTime}>
                            {splitItem.value.format('HH:mm:ss:SSS')}
                        </div>
                        <div className={styles.splitRemove}>
                            <DeleteIcon
                                onClick={() => {
                                    setSplitList(splitList.filter(elem => elem != splitItem));                             
                                }} 
                                style={{ fontSize: '20px', cursor: 'pointer' }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Stopwatch;
