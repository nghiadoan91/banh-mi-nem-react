import React, { useState, useEffect } from "react";
import {
  useMediaQuery,
  Typography,
  Button,
  Grid,
  colors,
  List,
  ListItem,
  ListItemAvatar,
  Avatar
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
import { exchange_rate } from "Config";
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
  boldText: {
    fontWeight: "bold"
  },
  gridwithMargin: {
    marginLeft: 6,
    marginRight: 6
  }
}));
const ExchangeMoneyService = (): JSX.Element => {
  const [exchangeRate, setExchangeRate] = useState<any>({});
  useEffect(() => {
    exchange_rate.on("value", snapshot => {
      if (snapshot.val() != null) {
        setExchangeRate(snapshot.val());
      }
    });
  }, []);
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
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true
  });
  return (
    <div>
      <SectionHeader
        title={
          <span>
            <Typography component="span" variant="inherit" color="primary">
              Đổi tiền
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
            fontIconClass="fas fa-money-bill-alt"
          />
        </Grid>
        <Grid item xs={9} sm={9}>
          <SectionHeader
            title="UShopBKK nhận chuyển tiền, thanh toán hộ mọi hình thức, chỉ cần khách hàng chuyển tiền VND vào tài khoản ngân hàng của UShopBKK tại Việt Nam, chúng tôi sẽ quy đổi tỷ giá sang Baht Thái và chuyển vào tài khoản như khách hàng mong muốn."
            subtitle=""
            align="left"
            titleProps={{
              variant: "body1",
              color: "textPrimary"
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
              <List className={classes.list}>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Avatar
                      src="/assets/images/shapes/check-icon-yellow.svg"
                      className={classes.checkBox}
                    />
                  </ListItemAvatar>
                  <Typography
                    className={classes.boldText}
                    variant="body1"
                    color="primary"
                  >
                    Phí dịch vụ 20,000vnd/lần chuyển. Giao dịch trên 5 triệu
                    miễn phí dịch vụ.
                  </Typography>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemAvatar>
                    <Avatar
                      src="/assets/images/shapes/check-icon-yellow.svg"
                      className={classes.checkBox}
                    />
                  </ListItemAvatar>
                  <Typography variant="body1" color="textPrimary">
                    Tỷ giá cập nhật gần nhất
                  </Typography>
                </ListItem>
              </List>
              <TableContainer
                className={classes.tableContainer}
                component={Paper}
              >
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell className={classes.head1}>
                        Ngày cập nhật
                      </StyledTableCell>
                      <StyledTableCell className={classes.head2} align="right">
                        {"THB -> VND"}
                      </StyledTableCell>
                      <StyledTableCell className={classes.head3} align="right">
                        {"VND -> THB"}
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell component="th" scope="row">
                        {"03/01/201"}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {exchangeRate.thb_to_vnd}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {exchangeRate.vnd_to_thb}
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ExchangeMoneyService;
