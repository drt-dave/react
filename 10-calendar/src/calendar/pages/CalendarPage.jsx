import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete} from "../"
import {getMessagesES, localizer} from '../../helpers'
import {useState} from 'react'
import {useUiStore} from '../../hooks'
import {useCalendarStore} from '../../hooks/useCalendarStore'

export const CalendarPage = () => {

  const { openDateModal  } = useUiStore();

const { events, setActiveEvent } = useCalendarStore()
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const eventStyleGetter = ( event, start, end, isSelected ) => { 

	const style = {
	  backgroundColor: '#347cf7',
	  borderRadius: '0px',
	  color: 'white',
	  opacity: 0.8,
	}
	return {
	  style
	}
  } 

  const onDoubleClick = ( event ) => { 
	// console.log({ onDoubleClick: event });
	openDateModal();
  } 

  const onSelect = ( event ) => { 
	// console.log({ click: event });
	setActiveEvent( event );
  } 
  const onViewChanged = ( event ) => { 
	localStorage.setItem('lastView', event);
	setLastView(event)
  } 


  return (
	<>
	  <Navbar/>
	  <Calendar
		culture='es'
		localizer={localizer}
		events={events}
		startAccessor="start"
		endAccessor="end"
		style={{ height: 'calc( 100vh - 80px )' }}
		messages={ getMessagesES() }
		eventPropGetter={ eventStyleGetter }
		components={{
		  event: CalendarEvent
		}}
		onDoubleClickEvent={ onDoubleClick }
		onSelectEvent={ onSelect }
		onView={ onViewChanged }
	  />

	  <CalendarModal />
	  <FabAddNew />
	  <FabDelete />

	</>
  )
}

