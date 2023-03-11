import {useState} from 'react'
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Checkbox,
  Select,
  MenuItem

} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Material() {

    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const [value, setValue] = useState('');

    const handleChanges=(e)=>{
        setValue(e.target.value)
    }

  return (
    <div  className='container p-5' >
      <h2 className="text-center">Material-ui/core testing file</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>30</TableCell>
              <TableCell>New York</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>25</TableCell>
              <TableCell>Los Angeles</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer><br/>
      <TextField id="outlined-basic" label="Enter your name" variant="inlined" /><br/>
      <Button variant="contained">Hello World</Button><br/>
      
    <Select
      value={value}
      onChange={handleChanges}
      displayEmpty
     
    >
      <MenuItem value="">Select an option</MenuItem>
      <MenuItem value="option1">Option 1</MenuItem>
      <MenuItem value="option2">Option 2</MenuItem>
      <MenuItem value="option3">Option 3</MenuItem>
    </Select>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">My App</Typography>
      </Toolbar>
    </AppBar>
    </div>
  );
}
