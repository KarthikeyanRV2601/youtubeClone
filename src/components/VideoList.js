import React from 'react';
import VideoItem from './VideoItem';
import {Grid} from '@material-ui/core';
const VideoList=({videos,onVideoSelect})=>{
    const ListofVideos=videos.map((video,id)=><VideoItem key={id} video={video} onVideoSelect={onVideoSelect}/>)
    return(
        <Grid container spacing={2}>
            {ListofVideos}
        </Grid>
        
    )
}

export default VideoList;