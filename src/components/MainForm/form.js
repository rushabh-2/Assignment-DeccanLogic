import './form.css'
import { useState } from 'react'
import { Button, Divider, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
//import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import TextEditor from '../TextEditor/TextEditor'
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';





import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


const Form = () => {

  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };
  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };


  

    const TITLE_CHARACTER_LIMIT = 250;
    const [Title, setTitle] = useState('');
    const getTitle = (event) => {
        setTitle(event.target.value);
    }
    const SUMMARY_CHARACTER_LIMIT = 500;
    const [Summary, setSummary] = useState('');
    const getSummary = (event) => {
      setSummary(event.target.value);
    }
    const REGISTRATION_CHARACTER_LIMIT = 500;
    const [Registration, setRegistration] = useState('');
    const getRegistration = (event) => {
      setRegistration(event.target.value);
    }

    const onSubmit = (data) => {
        console.log(data);
        alert('Successful');
        setTitle('');
        setSummary('');
        setRegistration('');

    }
    const onCancel = () => {
        setTitle('');
        setSummary('');
        setRegistration('');
    }
   
    
    const { register, handleSubmit, errors } = useForm();

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));

      const classes = useStyles();
  const [category, setCategory] = React.useState('');

  const handleChange = (event) => {
    setCategory(event.target.value)
  };





  
  const style = {
    width:'700px',
    
  };
  const floatleft={
    float: 'left',
  }
  const padding={
    paddingTop: '0px',
  }
  








    return (
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
            <div className="top">
                <div className="left" style={padding}>
                    <h3 className="color">Create Event</h3>
                </div>
                <div className="right">
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                    >Create</Button>
                    &nbsp;
                    <Button
                        variant='contained'
                        onClick={onCancel}
                    >Cancel</Button>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <Divider style={padding} />
            <div>  
              
            <div>    
            <br/>                          
            <TextField
                className="textfield"
                label="Title"
                value={Title}
                onChange={getTitle}
                name='title'
                required
                inputProps={{
                    maxLength: TITLE_CHARACTER_LIMIT                        
                }}
                helperText={<h4 className="right">{Title.length}/{TITLE_CHARACTER_LIMIT}</h4>}                   
            >               
            </TextField>                             
          </div>  
               
            
                
                <FormControl className={classes.formControl}>

                       
                 <div>
                    
                      <InputLabel shrink id="demo-simple-select-placeholder-label-label">
                        Categories
                      </InputLabel>
                      <Select                 
                        style={style}
                        labelId="demo-simple-select-placeholder-label-label"
                        id="demo-simple-select-placeholder-label"
                        value={category}
                        name='category'
                        onChange={handleChange}
                        required
                        displayEmpty
                        className={classes.selectEmpty}  
                                            
                      >
                
                        <MenuItem value="">
                          <em style={floatleft} >Select</em>
                        </MenuItem>
                        <MenuItem value={10}>Birthday</MenuItem>
                        <MenuItem value={20}>Wedding</MenuItem>
                        <MenuItem value={30}>Receiption</MenuItem>
                      </Select>                                          
                  </div>
                  <div>
                              <TextField
                              className="textfield"
                              style={{marginRight:'7px'}}
                              label="Short Summary"
                              value={Summary}
                              onChange={getSummary}
                              name='summary'
                              required
                              inputProps={{
                                maxLength: SUMMARY_CHARACTER_LIMIT
                              }}
                              helperText={<h4 className="right">{Summary.length}/{SUMMARY_CHARACTER_LIMIT}</h4>}                              
                          >               
                            </TextField>
                                                           
                  </div>
                      <p style={{marginRight:'630px'}}>Type:Public</p>
                  <div>                              
                            <TextField
                                className="textfield"
                                label="Registration Site"
                                value={Registration}
                                onChange={getRegistration}
                                name='registartion'
                                inputProps={{
                                    maxLength: REGISTRATION_CHARACTER_LIMIT                        
                                }}
                                helperText={<h4 className="right">{Registration.length}/{REGISTRATION_CHARACTER_LIMIT}</h4>}                   
                            >               
                            </TextField>                             
                  </div>


                      <div>                      
                        <FormControlLabel
                            style={{marginRight:'60%'}}
                            value="start"
                            control={<Switch color="primary" />}
                            label="Is this a Virtual event?  Yes"
                            labelPlacement="start"                                                    
                        />      
                      </div>
                      

                      <div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">                       
                              <KeyboardDatePicker                                                                                       
                                margin="normal"
                                id="date-picker-dialog"
                                label="Start Date"
                                format="MM/dd/yyyy"
                                value={selectedStartDate}
                                onChange={handleStartDateChange}
                                required
                                KeyboardButtonProps={{
                                  'aria-label': 'change date',
                                }}
                              />
                              
                              <KeyboardTimePicker                              
                                margin="normal"
                                id="time-picker"
                                label="Start Time"
                                value={selectedStartDate}
                                onChange={handleStartDateChange}
                                required
                                KeyboardButtonProps={{
                                  'aria-label': 'change time',
                                }}
                              />
                              </Grid>
                              <Grid container justify="space-around">                       
                              <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="End Date"
                                format="MM/dd/yyyy"
                                value={selectedEndDate}
                                onChange={handleEndDateChange}
                                required
                                KeyboardButtonProps={{
                                  'aria-label': 'change date',
                                }}
                              />
                              <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="End Time"
                                value={selectedEndDate}
                                onChange={handleEndDateChange}
                                required
                                KeyboardButtonProps={{
                                  'aria-label': 'change time',
                                }}
                              />
                              </Grid>
                          </MuiPickersUtilsProvider>
                      </div>
                <div className="editor">
                    <TextEditor />
                </div>
                <p style={{marginRight:'630px', color:'#808080'}}>Attachments</p>
                  <div className="filepond"  style={{ marginLeft:'0%' }}>                        
                          <FilePond allowMultiple={true}/>                      
                  </div>

                  <div>
                              <p style={{ color:'#808080' }}>Use options on the top right of the sccren to save your changes</p>
                  </div>

              </FormControl>   
                
            </div>
            
        </form>

    )
}

export default Form;