import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default class ShareTable extends React.Component {

    render() {
        const {shareArr, title} = this.props;

        let newRows = [];
        for (let key in shareArr) {
            const name = shareArr.longTitle(key);
            const value = shareArr[key];
            const obj = {name, value};
            newRows.push(obj);
        }
        return (
            <TableContainer component={Paper} style={{marginTop: 30}}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell size={"medium"} align="left" style={{fontWeight: "bold", fontSize: 20}}>{title}</TableCell>
                            <TableCell size={"medium"} align="right" style={{fontWeight: "bold", fontSize: 20}}/>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {newRows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row" style={{fontSize: 18}}>
                                    {row.name}
                                </TableCell>
                                <TableCell align="right" style={{fontSize: 18}}>{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}
