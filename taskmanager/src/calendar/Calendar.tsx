import "./calendar.css";
import React from 'react';
import {
  Inject,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  ScheduleComponent
} from "@syncfusion/ej2-react-schedule";


class Calendar extends React.Component {  
  public render() {
    return (
      <ScheduleComponent height='625px' width='1380px' currentView='Month'>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    );
  }
}

export default Calendar;
