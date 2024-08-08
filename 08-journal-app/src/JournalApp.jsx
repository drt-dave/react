import {AppRouter} from "./auth/AppRouter"
import { AppTheme } from "./theme"

export const JournalApp = () => {
  return (
	<>
	  <AppTheme>
		<AppRouter/>
	  </AppTheme>
	</>
  )
}

