import styles from './Clock.module.css';
import React, {useState, useEffect} from 'react';
import * as moment from 'moment';

const Clock = ({visible}) => {
    const [time, setTime] = useState(moment());

    useEffect(() => {
        setTimeout(() => {
            setTime(moment());
            setInterval(() => {
                setTime(moment())
            }, 1000);
        }, moment().endOf('s').diff(moment()));
    }, []);
    
    return (
        <>
            {visible &&
                <div>
                    <div className={styles.display}>
                        <div className={styles.timeRow}>
                            <div className={styles.time}>
                                {time.format('HH:mm:ss')}
                            </div>
                            <div className={styles.utcOffset}>
                                (GMT +{time.utcOffset() != 0 ? time.utcOffset() / 60 : 0})
                            </div>
                        </div>
                        <div className={styles.dateRow}>
                            {time.format('DD MMMM YYYY')}
                        </div>
                    </div>
                </div>      
            }
        </>
    );
};

export default Clock;
