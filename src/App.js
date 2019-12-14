import styles from './App.module.css';
import Clock from './components/Clock/Clock';
import AlarmClock from './components/AlarmClock/AlarmClock';
import Stopwatch from './components/Stopwatch/Stopwatch';
import Timer from './components/Timer/Timer';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import React, {useState} from 'react';


function App() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Tabs
          value={activeTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
      >
        <Tab label="Clock" />
        <Tab label="Alarm-clock" />
        <Tab label="Stopwatch" />
        <Tab label="Timer" />
      </Tabs>
      <div className={styles["tab-panel"]}>
        <Clock visible={activeTab == 0}/>
        <AlarmClock visible={activeTab == 1}/>
        <Stopwatch visible={activeTab == 2}/>
        <Timer visible={activeTab == 3}/>
      </div> 
    </MuiPickersUtilsProvider>
  );
}

export default App;
