import React, { useState, useEffect } from "react";
import {
  useMediaQuery,
  Typography,
  Button,
  Grid,
  colors
} from "@material-ui/core";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import { SectionHeader, IconAlternate } from "components/molecules";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { uShopBKKfireStore } from "Config";
const useStyles = makeStyles(theme => ({
  checkBox: {
    background: "transparent",
    borderRadius: 0,
    width: 20,
    height: 20
  },
  list: {
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      marginBottom: theme.spacing(1)
    }
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
  },
  title: {
    fontWeight: "bold"
  },
  gridwithMargin: {
    marginLeft: 6,
    marginRight: 6
  }
}));
const ShippingService = (): JSX.Element => {
  const [shipmentPricingTable, setShipmentPricingTable] = useState<any>([]);
  useEffect(() => {
    console.log("fetch....");
    uShopBKKfireStore
      .collection("homepage")
      .doc("config")
      .get()
      .then(result => {
        if (result.data() != null) {
          setShipmentPricingTable(result.data().shipment_pricing_table);
        }
      });
  }, []);
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
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
      <SectionHeader
        title={
          <span>
            <Typography component="span" variant="inherit" color="primary">
              Bảng báo giá vận chuyển
            </Typography>
          </span>
        }
        fadeUp
      />
      <Grid container spacing={3}>
        <Grid item xs={3} sm={3} container justify="center">
          <IconAlternate
            size="large"
            color={colors.red}
            fontIconClass="fas fa-truck"
          />
        </Grid>
        <Grid item xs={9} sm={9}>
          <SectionHeader
            title="UShopBKK nhận chuyển tất cả các mặt hàng mà quý khách hàng có nhu cầu trừ những mặt hàng cấm hoặc nhạy cảm thuốc phiện, súng đạn, vũ khí, động vật quý hiếm, ngà voi..."
            subtitle=""
            align="left"
            titleProps={{
              variant: "body1",
              color: "primary"
            }}
            subtitleProps={{
              color: "textPrimary"
            }}
            disableGutter
          />
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={3} container justify="center"></Grid>
          <Grid item xs={12} sm={9} container justify="center">
            <div className={classes.gridwithMargin}>
              <TableContainer
                className={classes.tableContainer}
                component={Paper}
              >
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
              <br></br>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Typography
                    className={classes.title}
                    component="span"
                    variant="h6"
                    color="secondary"
                  >
                    {"Hàng hoá thông thường: "}
                  </Typography>
                  <Typography component="span" variant="h6" color="textPrimary">
                    hàng thời trang, giày dép, đồ gia dụng
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography
                    className={classes.title}
                    component="span"
                    variant="h6"
                    color="primary"
                  >
                    {"Hàng hoá đặc biệt: "}
                  </Typography>
                  <Typography component="span" variant="h6" color="textPrimary">
                    Hàng dễ vỡ, hàng giá trị cáo, hàng tươi sống, mỹ phẩm, điện
                    tử gia dụng, phụ tùng ôtô xe máy
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShippingService;
