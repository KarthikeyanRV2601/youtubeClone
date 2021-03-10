import React from 'react';
import {Grid} from '@material-ui/core';
import youtube from './api/youtube';
import {SearchBar,VideoList,VideoDetail} from './components'


class App extends React.Component{
    state={
        videos:[],
        selectedVideo:null,
    }
    handleSubmit=async(SearchTerm)=>{
        const response=await youtube.get('search',{
            params:{
            part:'snippet',
            maxResults:5,
            key:'AIzaSyCpVdJ3TkQcL_l9_oC19llGIbt6l5v07sM',
            q:SearchTerm,
        }});

        console.log(response.data.items);
        this.setState({videos:response.data.items,selectedVideo:response.data.items[0]});
    }
    onVideoSelect=(video)=>{
        this.setState({selectedVideo:video})
    }
    componentDidMount(){
        this.handleSubmit('reddit memes');
    }
    render(){
        const{selectedVideo,videos}=this.state
        return(
            <Grid 
            justify="center" 
            container 
            spacing={10}>
                <Grid
                item
                xs={12}
                >
                    <Grid 
                    container
                    spacing={2}>
                        <Grid
                        item
                        xs={12}
                        >
                            {
                                <SearchBar onFormSubmit={this.handleSubmit}></SearchBar>
                            }
                        </Grid>
                        <Grid
                        item
                        xs={9}>
                            {
                                <VideoDetail video={selectedVideo}></VideoDetail>
                            }
                        </Grid>
                        <Grid
                        item
                        xs={3}>
                            {
                                <VideoList videos={videos} onVideoSelect={this.onVideoSelect}></VideoList>
                            }
                        </Grid>
                        

                    </Grid>
                </Grid>
            </Grid>
        )
    }
}


export default App;