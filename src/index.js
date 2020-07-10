import React from 'react'
import {
  Grid, Table, TableBody, TableContainer,
  TableHead, TableRow, TableCell, Button, Tooltip, IconButton
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import { InputText, Lov, Number } from './components';

/**
 * @author Palmurugan C
 * 
 * The main class for Editable Grid
 */
export const EditableGrid = (props) => {
  return (
    <div><Grid>
      <TableContainer>
        <Table aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              {props.formData.map((item, index) => (
                <TableCell key={index}>{item.label}</TableCell>
              ))}
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <DynamicEditableForm lineItems={props.lineItems} formData={props.formData}
            deleteHandler={props.deleteHandler} changeHandler={props.changeHandler} />
        </Table>
      </TableContainer>
    </Grid>
      <Grid justify="flex-end" container spacing={24}>
        <Button variant="contained" color="primary" onClick={props.addHandler}> Add </Button>
      </Grid>
    </div >
  );
}

/**
 * Dynamic form generation component
 * 
 * @param {lineItems, formData} props 
 */
const DynamicEditableForm = (props) => {
  return (
    <TableBody>
      {props.lineItems.map((item, mainIndex) => (
        <TableRow>
          {props.formData.map((data, index) => (
            <TableCell>
              {data.component === 'inputText' ? <InputText keyIndex={mainIndex} name={data.name} value={item[data.name]} label={data.label}
                changeHandler={props.changeHandler} /> : null}
              {data.component === 'lov' ? <Lov keyIndex={mainIndex} name={data.name} value={item[data.name]} label={data.label}
                changeHandler={props.changeHandler} lovData={data.lovData} /> : null}
              {data.component === 'number' ? <Number keyIndex={mainIndex} name={data.name} value={item[data.name]} label={data.label}
                changeHandler={props.changeHandler} lovData={data.lovData} /> : null}
            </TableCell>
          ))}
          <DeleteAction deleteHandler={props.deleteHandler(mainIndex)} />
        </TableRow>
      ))}
    </TableBody>
  );
}

/**
 * Stateless component for delete action
 */
const DeleteAction = (props) => {
  return (
    <TableCell>
      <Tooltip title="Delete">
        <IconButton size="small" aria-label="Delete">
          <DeleteIcon onClick={props.deleteHandler} />
        </IconButton>
      </Tooltip>
    </TableCell>
  );
}