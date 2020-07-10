import React from 'react';

import { TextField } from '@material-ui/core';

/**
 * @author Palmurugan C
 * 
 * Dynamic Number component
 * 
 * Stateless component
 */
const Number = (props) => {
    return (
        <TextField type="number" fullWidth label={props.label}
            margin="dense" name={props.name} value={props.value} variant="outlined" onChange={props.changeHandler(props.keyIndex)} />
    );
}

export default Number;