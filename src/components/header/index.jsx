import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export function AppHeader() {
    return (
        <header>
      
        <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button variant="contained" 
        onClick={() => {alert('clicked');}}>
        Добавить пост</Button> 
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
        
      
            
      </header> 
    )
}