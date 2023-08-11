import React from 'react'
import { Typography } from '@mui/material';
import {Button, Stack, IconButton, ButtonGroup} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

function App() {
  return (
    <>
    <div>
    <Typography variant="h1" gutterBottom>H1 heading</Typography>
    <Typography variant="h2">H2 heading</Typography>
    <Typography variant="h3">H3 heading</Typography>
    <Typography variant="h4">H4 heading</Typography>
    <Typography variant="h5">H5 heading</Typography>
    <Typography variant="h6">H6 heading</Typography>

    <Typography variant="subtitle1">Subtitle1</Typography>
    <Typography variant="subtitle2">Subtitle2</Typography>

    <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, doloribus.</Typography>
    <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, minus.</Typography>
    </div>
    <Stack spacing={2} direction='column'>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>

    </Stack>
    <Stack spacing={2} direction='row'>
      <Button variant="text" color="warning">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    <stack>
    <Button variant="contained" size="small">Contained</Button>
    <Button variant="contained" size="medium">Contained</Button>
    <Button variant="contained" size="large">Contained</Button>
    </stack>
    <stack>
    <Button variant="contained" size="small" startIcon={<SendIcon/>}disableRipple>Send</Button>
    <Button variant="contained" size="medium" endIcon={<SendIcon/> }disableElevation>Send</Button>
    <IconButton aria-label='send'> <SendIcon /></IconButton>
    </stack>
    <stack>
      <ButtonGroup variant='contained' orientation="vertical" size='large' disableRipple>
    <Button>Left</Button>
    <Button>Right</Button>
    <Button>Center</Button>
    </ButtonGroup>
    </stack>
    
    </>
  );
}

export default App;
