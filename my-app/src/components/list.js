import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import Button from '@material-ui/core/Button';
import '../style.css';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         backgroundColor: theme.palette.background.paper,
//     },
// }));

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const rows = [
    {
        "id": 1,
        "name": "Foo",
        "age": "20"
    },
    {
        "id": 2,
        "name": "Bar",
        "age": "30"
    },
    {
        "id": 3,
        "name": "Baz",
        "age": "40"
    }
];

class Lists extends React.Component {
    constructor() {
        super();
        this.state = {
            data:
                [
                    {
                        "id": 1,
                        "name": "Foo",
                        "age": "20"
                    },
                    {
                        "id": 2,
                        "name": "Bar",
                        "age": "30"
                    },
                    {
                        "id": 3,
                        "name": "Baz",
                        "age": "40"
                    }
                ]
        }
    }
    render() {
        const { classes } = this.props;
        return (

            <div>
                <Box display="flex" flexDirection="row-reverse" p={1} m={1}>
                    <Box p={1}>
                        <Button component={Link} to={'/add_edit'}>
                            <Icon style={{ fontSize: 40 }}>add_circle</Icon>
                        </Button>
                    </Box>
                </Box>

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Amount</TableCell>
                                <TableCell align="right">Description</TableCell>
                                <TableCell align="right">Type</TableCell>
                                <TableCell align="right">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">sdfsdfd dsfsd</TableCell>
                                    <TableCell align="right">30</TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="delete">
                                            <EditRoundedIcon />
                                        </IconButton>
                                        <IconButton aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        );
    }
}

export default withStyles(useStyles)(Lists);
