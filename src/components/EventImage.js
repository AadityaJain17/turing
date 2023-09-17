import { useState } from "react"
import { Box } from "@mui/material"

const EventImage = ({img , title}) =>{
    const[isHovered,setIsHovered] = useState(false)

    const handleMouseEnter = () =>{
        setIsHovered(true)
        
    }
    const handleMouseLeave = () =>{
        setIsHovered(false)
    }

    return(
        <Box sx={{m:2,p:2}}>
        <img style={isHovered ? {transition: 'transform .2s',transform: 'scale(1.1)'} : {transition: 'transform .2s'}}
            src={`${img}?w=248&fit=crop&auto=format`}
            srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={title}
            loading="lazy"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </Box>
    )
}

export default EventImage;