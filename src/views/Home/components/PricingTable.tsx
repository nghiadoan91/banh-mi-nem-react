import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@mui/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { SectionHeader } from "components/molecules";
import theme from '../../../theme';

const useStyles = makeStyles(() => ({
  swiperContainer: {
    width: "100%"
  },
  image: {
    objectFit: "cover"
  },
  bannerTop: {
    paddingTop: 0,
    paddingBottom: 0
  },
  table: {},
  tableContainer: {},
  head1: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black
  },
  head2: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white
  },
  head3: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white
  }
}));

const PricingTable = ({ shipmentPricingTable }): JSX.Element => {
  const classes = useStyles();
  const StyledTableCell = withStyles(theme => ({
    body: {
      fontSize: 16
    }
  }))(TableCell);

  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover
      }
    }
  }))(TableRow);

  return (
    <div>
      <SectionHeader title={"Bảng Giá Vận Chuyển"} align="left" />
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.head1}>
                Loại hàng
              </StyledTableCell>
              <StyledTableCell className={classes.head2} align="right">
                Hàng hoá thông thường
              </StyledTableCell>
              <StyledTableCell className={classes.head3} align="right">
                Hàng hoá đặc biệt
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shipmentPricingTable.map((row: any, index: number) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.normal_product_price}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.special_product_price}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PricingTable;
