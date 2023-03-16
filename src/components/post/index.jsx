import styled from "@emotion/styled";
import { Favorite, MoreVert} from "@mui/icons-material";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import './styles.css';

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';

dayjs.locale('ru');
dayjs.extend(relativeTime)




export function Post({image, title, text, created_at, author}) {
   
    return (
        <Grid2 sx={{display: 'flex'}} item xs={12} sm={6} md={4} lg={3}>          
        <Card className="card">
           <CardHeader
        avatar={
          <Avatar aria-label="recipe" src = {author.avatar}>
            {author.email.slice(0, 1).toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader={dayjs(created_at).fromNow()}
      /> 
        <CardMedia
            component="img"
            height="194"
            image={image}
            alt="Paella dish"
      />
        <CardContent>
        <Typography variant="body2" color="text.secondary">
            {text}
        </Typography>
        </CardContent>
        <CardActions disableSpacing sx = {{marginTop: 'auto'}}>
            <IconButton aria-label="add to favorites">
            <Favorite />
            </IconButton>
            </CardActions>
      
        </Card>
        </Grid2>
    )
}