import { AppHeader } from "../header";
import { Container, CssBaseline } from "@mui/material";
import { PostList } from "../postlist";
import { postData } from "../postData";



export function AppMui() {
    return (
      <div className="App">
        <CssBaseline/>
        <Container>
        <AppHeader/>
        <PostList posts = {postData}/>
        </Container>
      </div>
    );
  }
  
