import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete} from "../"
import {getMessagesES, localizer} from '../../helpers'
import {useEffect, useState} from 'react'
import {useAuthStore, useUiStore} from '../../hooks'
import {useCalendarStore} from '../../hooks/useCalendarStore'

export const CalendarPage = () => {


  const { user } = useAuthStore();
  const { openDateModal  } = useUiStore();
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore();

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');
  const eventStyleGetter = ( event, start, end, isSelected ) => { 
	const isMyEvent = ( user.uid === event.user._id ) || (user.uid === event.user.uid) ;

	const style = {
	  backgroundColor: isMyEvent ? '#347cf7' : '#465660',
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

  useEffect(() => {
	startLoadingEvents();
  }, [] )

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

