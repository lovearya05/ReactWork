// import React from 'react'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

// import AdjustIcon from '@mui/icons-material/Adjust';

// import Rating from '@mui/material/Rating';
// // import Box from '@mui/material/Box';
// // import StarIcon from '@mui/icons-material/Star';


// function Material() {
//     return (
//         <div>

//             <AdjustIcon/>

//             <Rating name="size-medium" defaultValue={4} />

//             <Stack spacing={2} direction="row">
//                 <Button variant="text">Text</Button>
//                 <Button variant="contained">Contained</Button>
//                 <Button variant="outlined">Outlined</Button>
//             </Stack>


            

//         </div>
//     )
// }

// export default Material




import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select    from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={(event)=> handleChange(event)}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
