import { Box } from '@mui/material'
import React from 'react'

const UserImage = ({image, size="60px"}) => {
  return (
      <Box width={size} height={size}>
          <img width={size} height={size} src={`http://localhost:3001/assets/${image}`} alt=""  style={{objectFit: "cover", borderRadius: "50%"}}/>    
      </Box>
  )
}

export default UserImage
