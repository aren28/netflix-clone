import React,{ useState, useEffect,useCallback } from "react";
import { motion } from "framer-motion";
import { List, ListItem , ListItemIcon , Box , Paper, CardContent, CardActions, Button , IconButton } from "@mui/material";
import { PlayCircle, Add, ThumbUpOffAlt, NavigateNext, ArrowBackIos } from '@mui/icons-material/';
import { TopMovieDetails, TopMovieVideo } from "../../Database/TopMovieDetails/TopMovieDetails";  

import MoviePlayer from "../MoviePlayer/MoviePlayer";
import "./css/topmovie.css";

interface HoverState {
  [key: string]:boolean,
}

interface newHoverState {
  [key: string]: boolean,
}

function TopMovie() {

  const [ newElement, setNewElement ] = useState(false);
  const [ openVideo, setOpenVideo ] = useState(false);
  const [ video, setVideo ] = useState();
  const [ hoverId, setHoverId ] = useState(0);
  const [ hoverIdArray, setHoverIdArray ] = useState<HoverState>( {1:false,2:false} );

  // const handleOpenVideo = (e:any) => {
  //   console.log(e.target.id);
  //   console.log(TopMovieVideo[e.target.id].videoUrl);
  // };

  const handleOpenVideo = (e:any) => {
    setOpenVideo(true);
    setVideo(TopMovieVideo[e.target.id].videoUrl);
    console.log(e.target.id);
  };
  const handleCloseVideo = () => ( setOpenVideo(false) );

  const Card = (MovieHoverStatusImg:any, id:any) => (
    <React.Fragment>
      <Paper id={id} component={motion.div} initial={{ scale: 0 , opacity: 0, translateX: 0 }}  animate={{ scale: 1.25 , opacity:1}} transition={{ duration: .3}} style={{ width: "400px" , height: "400px", borderRadius:"30px" , position: "absolute", zIndex: 4,background: "black", color:"white", cursor:"pointer"}}
      onClick={ e => {handleOpenVideo(e)} }
      >
        <CardContent sx={{ padding: 0}}>
          <Box component="img" id={id} src={MovieHoverStatusImg} sx={{ width: "100%" , borderTopLeftRadius: "35px",borderTopRightRadius: "35px"}}></Box>
          <ListItemIcon sx={{ mt: 2, ml: 1}}>
            <PlayCircle color="primary"/>
            <Add color="primary"/>
            <ThumbUpOffAlt color="primary"/>
          </ListItemIcon>
        </CardContent>
        <CardActions>
          <Button size="small">種類：ドラマー、恋愛、Slice of Life</Button>
        </CardActions>
      </Paper>
    </React.Fragment>
  );
  const Initial = (rankingNumber:any, rankingBackground:any) => (
    <React.Fragment>
      {rankingNumber}
      <Box
        component="img"
        src={rankingBackground}
        sx={{ borderRadius: "30px" , width:"210px"}}
      />
    </React.Fragment>
  );

  const setId = (e:any) => {
    e.preventDefault;
    const newList: newHoverState = hoverIdArray;
    newList[`${e.target.id}`] = true;
    setHoverId(e.target.id);
    setHoverIdArray(newList);
  }

  const removeId = (e:any) => {
    e.preventDefault;
    const newList: newHoverState = hoverIdArray;
    newList[`${hoverId}`] = false;
    setHoverId(0);
    setHoverIdArray(newList);
  }

  const handleHover = () => {
    return (
      TopMovieDetails.map((data, index) => (
        <ListItem id={index + 1} sx={ newElement ? containerMovieItemHover : containerMovieItem } component={motion.div} onMouseEnter={setId} onMouseLeave={removeId} className="movieHover">
          {hoverIdArray[index + 1] == true ? Card(TopMovieDetails[index].MovieHoverStatusImg,index) : Initial(TopMovieDetails[index].rankingImg, TopMovieDetails[index].rankingBackground)}
        </ListItem>
      ))
    )
  }

  const [ currentViewX, setCurrentViewX ] = useState(0);
  const currentViewMovieCount = Math.floor(window.innerWidth / 500);
  const currentWidth = 500 * 10;

  const [ nextView, setNextView ] = useState(true);
  const [ prevView, setPrevView ] = useState(false);

  useEffect(() => {
    if (currentViewX != 0) {
      setPrevView(true);
    } else {
      setPrevView(false);
    }

    if(currentViewX == 0) {
      setNextView(true);
    } else {
      setNextView(false);
    }
  }, [currentViewX]) 

  const handlePrevView = () => {
    if (currentViewX != 0) {
      setCurrentViewX(0);
    }
  }

  const handleNextView = () => {

    if (currentViewX == 0) {
      setCurrentViewX( -((currentViewMovieCount * 500) - 100) );
    } else {
      setCurrentViewX( -(currentViewX + (currentWidth - currentViewX)) );
    }

  }

  return (
    <div>
      <Box component={motion.div} className="container" sx={containerMovie}>
        {
          prevView && 
          <IconButton sx={{ position:"absolute" , zIndex: 4, top:"85px", left:"0px", width:"5rem", height:"20rem" , borderRadius: "0px" , background:"black" }} color="primary" onClick={handlePrevView}>
            <ArrowBackIos fontSize="large"/>
          </IconButton>
        }
        <List
          component={motion.div}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: "5000px",
            height: "500px",
            marginLeft: 5,
            overflowX: "visible",
            position: "relative",
            zIndex: 3
          }}
          animate={{ x: currentViewX }}
          transition={{ duration: 0.8 }}
        >

          {handleHover()}

        </List>
        {
          nextView && 
          <IconButton sx={{ position:"absolute" , zIndex: 4, top:"85px", right:"0px",  width:"5rem", height:"20rem" , borderRadius: "0px" , background:"black"}} color="primary" onClick={handleNextView}>
            <NavigateNext fontSize="large"/>
          </IconButton>
        }
        <MoviePlayer onOpen={openVideo} onClose={handleCloseVideo} video={video}/>
      </Box>
    </div>
  );
}

const containerMovie = {
  overflow: "hidden",
  position: "relative",
  top: "-150px",
  marginLeft: 2,
};

const containerMovieItem = {
  position: "relative",
  zIndex: "3",
  width: "450px",
  justifyContent: "flex-end",
  paddingLeft: "70px",
  marginRight: "35px"
};


const containerMovieItemHover = {
  position: "relative",
  zIndex: "4",
  width: "450px",
  justifyContent: "flex-end",
  paddingLeft: "70px",
};

export default TopMovie;
