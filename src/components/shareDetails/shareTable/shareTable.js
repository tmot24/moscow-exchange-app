import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Spinner from "../../spinner/spinner";

export default class ShareTable extends React.Component {

    render() {
        const {shareArr} = this.props;

        if (!shareArr) {
            return <Spinner/>

        }
        const shareMarketData = shareArr[0];

        const shareSecurities = shareArr[1];

        console.log(shareSecurities)

        let newRows = [];
        for (let key in shareSecurities) {
            const name = shareSecurities.longTitle(key);
            const value = shareSecurities[key];
            const obj = {name, value};
            newRows.push(obj);
        }

        return (
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" style={{fontWeight: "bold", fontSize: "medium"}}>Securities</TableCell>
                            <TableCell align="right" style={{fontWeight: "bold", fontSize: "medium"}}>Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {newRows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}
