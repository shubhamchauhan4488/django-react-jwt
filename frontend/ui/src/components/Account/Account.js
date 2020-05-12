import React from 'react';

import {
   Box
} from 'rebass'

export const Account = (props) => {
   console.log('props children', props.children);
   return (
      <Box
         sx={{
            backgroundImage: 'url(https://source.unsplash.com/1024x768?sky)',
            backgroundSize: 'cover',
            minHeight: "100%",
            minWidth: "100%",

            /* Set up proportionate scaling */
            width: "100%",
            height: "auto",

            /* Set up positioning */
            position: "fixed",
            top: "0",
            left: "0",
            color: 'white',
            bg: 'gray',
         }}>
         {props.children}
      </Box>
   )
}
