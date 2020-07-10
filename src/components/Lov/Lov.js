import React from 'react';

import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

/**
 * @author Palmurugan C
 *
 * Dynamic LOV component - Accepting static values
 *
 * Stateless component
 */
const Lov = (props) => {
    return (
        <FormControl fullWidth margin="dense" variant="outlined">
            <InputLabel id={props.name}>{props.label}</InputLabel>
            <Select id={props.name} name={props.name} value={props.value} label={props.label} variant="outlined" onChange={props.changeHandler(props.keyIndex)}>
                {props.lovData.map((item) => (
                    <MenuItem key={item.id} value={item.key}>{item.value}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
export default Lov;