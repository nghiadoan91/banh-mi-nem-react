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
import { banhMiNemfireStore } from "Config";
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
    banhMiNemfireStore
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
              B???ng b??o gi?? v???n chuy???n
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
            title="UShopBKK nh???n chuy???n t???t c??? c??c m???t h??ng m?? qu?? kh??ch h??ng c?? nhu c???u tr??? nh???ng m???t h??ng c???m ho???c nh???y c???m thu???c phi???n, s??ng ?????n, v?? kh??, ?????ng v???t qu?? hi???m, ng?? voi..."
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
                        Lo???i h??ng
                      </StyledTableCell>
                      <StyledTableCell className={classes.head2} align="right">
                        H??ng ho?? th??ng th?????ng
                      </StyledTableCell>
                      <StyledTableCell className={classes.head3} align="right">
                        H??ng ho?? ?????c bi???t
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
                    {"H??ng ho?? th??ng th?????ng: "}
                  </Typography>
                  <Typography component="span" variant="h6" color="textPrimary">
                    h??ng th???i trang, gi??y d??p, ????? gia d???ng
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography
                    className={classes.title}
                    component="span"
                    variant="h6"
                    color="primary"
                  >
                    {"H??ng ho?? ?????c bi???t: "}
                  </Typography>
                  <Typography component="span" variant="h6" color="textPrimary">
                    H??ng d??? v???, h??ng gi?? tr??? c??o, h??ng t????i s???ng, m??? ph???m, ??i???n
                    t??? gia d???ng, ph??? t??ng ??t?? xe m??y
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
