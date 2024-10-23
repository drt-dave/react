
import {TurnedInNot} from "@mui/icons-material"
import {ListItemButton, ListItem, ListItemIcon, ListItemText, Grid } from "@mui/material"
import {useMemo} from "react"
import {useDispatch} from "react-redux"
import {setActiveNote} from "../../store/journal/journalSlice"

export const SideBarItem = ({ title='', body, id, date, imageUrls=[]}) => {

  const dispatch = useDispatch();
  const noteSelected = () => { 
	dispatch(setActiveNote({title, body, id, date, imageUrls}));
  } 

  const newTitle = useMemo(() => { 
	return title.length > 17
	  ? title.substring(0,17) + '...'
	  : title;
  } , [ title ])

  // Si la nota no tiene un título válido, no renderizarla
  if (!title) return null;

  return (
	<>
	  <ListItem 
		onClick={ noteSelected }
		key={ id } 
		disablePadding 
	  >
		<ListItemButton>
		  <ListItemIcon>
			<TurnedInNot/>
		  </ListItemIcon>
		  <Grid container>
			<ListItemText primary={ newTitle }/>
			<ListItemText secondary={ body }/>
		  </Grid>
		</ListItemButton>
	  </ListItem>	
	</>
  )
}


