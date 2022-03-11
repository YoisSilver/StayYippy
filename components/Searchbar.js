import React from 'react'
import { Button, ButtonGroup, FormGroup, Input, TextField, InputAdornment } from '@mui/material';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import PeopleIcon from '@mui/icons-material/People';
import { borders } from '@mui/system';
import DateRangeIcon from '@mui/icons-material/DateRange';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { Fragment } from 'react';


export default function Searchbar() {
    return (
        <Fragment>
            {/* CHANGE THIS FONT TEXT */}
            <h3>Find your next dream destination now:</h3>
            <div className="searchbar-container" >
                <div className="container">
                    <FormGroup className='search-cnt' color="secondary">
                        <TextField id="outlined-search" label="Location" type="search" variant="outlined" color="secondary" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocalBarIcon />
                                </InputAdornment>
                            ),
                        }}
                        />
                        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" color="secondary" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DateRangeIcon />
                                </InputAdornment>
                            ),
                        }} />
                        <TextField id="outlined-search" label="Search field" type="search" variant="outlined" color="secondary" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <InsertInvitationIcon />
                                </InputAdornment>
                            ),
                        }} />
                        <TextField id="outlined-search" label="Guests" type="search" variant="outlined" color="secondary" InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" >
                                    <PeopleIcon />
                                </InputAdornment>
                            ),
                        }} />
                    </FormGroup >
                </div>
            </div >
        </Fragment>
    )
}
