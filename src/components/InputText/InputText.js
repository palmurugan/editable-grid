import React from 'react';

import { TextField } from '@material-ui/core';

/**
 * @author Palmurugan C
 *
 * Dynamic Text component
 *
 * Stateless component
 */
const InputText = (props) => {
    return (
        <TextField type="text" fullWidth label={props.label}
            margin="dense" name={props.name} value={props.value} variant="outlined" onChange={props.changeHandler(props.keyIndex)} />
    );
}

export default InputText;