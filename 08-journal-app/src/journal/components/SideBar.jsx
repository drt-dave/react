import {TurnedInNot} from "@mui/icons-material"
import {Box, Divider, Drawer, List, ListItemButton, ListItem, Toolbar, Typography, ListItemIcon, ListItemText, Grid } from "@mui/material"

export const SideBar = ({ drawerWidth }) => {

  return (
	<Box
	  component='nav'
	  sx={ { width: { sm: drawerWidth }, flexShrink: { sm: 0 } } }
	>
	  <Drawer
		variant="permanent"// temporary
		open
		sx={{
		  display: { xs: 'block' },
		'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
		}}
	  >
		<Toolbar>
		  <Typography variant="h6" noWrap component='div'>
			David Duarte
		  </Typography>
		</Toolbar>
		<Divider/>

		<List>
		  {
			['Enero','Febrero','Marzo','Abril'].map( text => (
			  <ListItem key={ text } disablePadding >
		  <ListItemButton>
			<ListItemIcon>
			  <TurnedInNot/>
			</ListItemIcon>
			<Grid container>
			  <ListItemText primary={ text }/>
			  <ListItemText secondary={ ' lorem5Ipsum vero laborum totam magni'}/>
			</Grid>
		  </ListItemButton>
		</ListItem>
		  ) )
		  }
	  </List>
	</Drawer>

	</Box>
  )
}




