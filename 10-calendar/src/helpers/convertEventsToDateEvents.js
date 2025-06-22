// This function converts a date string (like "2025-05-30T12:00:00Z")
// into a real JavaScript Date object.
import {parseISO} from "date-fns"

// This function takes an array of event objects.
// Each event should have 'start' and 'end' properties as ISO date strings.
// It returns a new array of events where 'start' and 'end' are real Date objects.
export const convertEventsToDateEvents = ( events = [] ) => {
  return events.map( event => {
	// Convert the 'end' and 'start' string to a Date object
	event.end = parseISO( event.end );
	event.start = parseISO( event.start );

	return event;

  })
} 
