export const CalendarEvent = ({ event }) => {

  const { title, user  } = event;
  //tener en cuenta memorizarlo mas adelante

	return (
	<>
	  <strong>{ title }</strong>
	  <span> - { user.name }</span>
		
	</>
	)
}

