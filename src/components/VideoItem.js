import React from 'react';

import {Grid,Paper,Typography} from '@material-ui/core';

const VideoItem=({video,onVideoSelect})=>{
    return(
        <Grid item xs={12} >
            <Paper style={{display:'flex',alignItems:'center',cursor:'pointer'}} onClick={()=>onVideoSelect(video)}>
                <img style={{marginRight:'20px'}} alt="thumbnail" src={video.snippet.thumbnails.medium.url} style={{width:'200px'}}/>
                <Typography variant="subtitle1" style={{marginLeft:'4px'}}><b>{video.snippet.title.slice(0,30)}</b>..</Typography>
            </Paper>
        </Grid>
    )
}


export default VideoItem;