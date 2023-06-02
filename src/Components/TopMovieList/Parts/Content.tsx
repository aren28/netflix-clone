import React,{useState} from "react";
import IconCross from "./Icons/IconCross";
import "./Scss/Content.scss";
import { Box,Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ButtonProps } from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import Modal from "./Modal/Modal";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: "15vw",
  height: "85px",
  backgroundColor: "white",
  color: "black",
  fontSize: 20,
  marginLeft: "2.5vw",
  "&:hover": {
    backgroundColor: "transparent",
    color: "white",
    border: "1px solid white"
  },
}));

const Content = ({ movie, onClose }) => {
  
  const [ modalOpen,setModalOpen ] = useState(false);

  const handleModal = (e:any) => {
    setModalOpen(!modalOpen);
  } 

  return (
  <>
    <div className="content">
    <div className="content__background">
      <div className="content__background__shadow" />
      <div
        className="content__background__image"
        style={{ "background-image": `url(${movie.imageBg})` }}
      />
    </div>
    <div className="content__area">
      <div className="content__area__container">
        <div className="content__title">{movie.title}</div>
        <div className="content__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          et euismod ligula. Morbi mattis pretium eros, ut mollis leo tempus
          eget. Sed in dui ac ipsum feugiat ultricies. Phasellus vestibulum enim
          quis quam congue, non fringilla orci placerat. Praesent sollicitudin
        </div>
      </div>
      <button className="content__close" onClick={onClose}>
        <IconCross />
      </button>

      {/* modal */}
      <Box component="div">
        <ColorButton variant="contained" startIcon={<PlayArrowIcon />} onClick={handleModal}>プレイ</ColorButton>
        {modalOpen && <Modal movie={movie} handleModal={handleModal}/>}
      </Box>
    </div>
  </div>
  </>
  )
};

export default Content;
