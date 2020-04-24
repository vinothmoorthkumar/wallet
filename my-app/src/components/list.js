import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import Grid from "@material-ui/core/Grid";
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
                        <Button> 
                            <Icon style={{ fontSize: 40 }}>add_circle</Icon>
                        </Button>
                    </Box>
                </Box>

                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
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
