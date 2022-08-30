import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Typography,
  Grid,
  Button,
  TextField,
  useMediaQuery,
  Divider
} from "@material-ui/core";
import validate from "validate.js";
import webApi from "api/orderApi";
import { Image } from "components/atoms";
import { SectionHeader } from "components/molecules";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1)
  },
  deleteButtonText: {
    margin: 0,
    padding: 0,
    fontWeight: "bold",
    color: theme.palette.primary.main
  }
}));

const schema = {
  email: {
    presence: { allowEmpty: false, message: "is required" },
    email: true,
    length: {
      maximum: 300
    }
  },
  name: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 120
    }
  },
  phone: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      maximum: 120
    }
  },
  address: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      minimum: 8
    }
  }
};

const Form = (): JSX.Element => {
  const classes = useStyles();
  const theme = useTheme();
  const [completeState, setCompleteState] = React.useState(false);
  const [formState, setFormState] = React.useState<FormStateProps>({
    isValid: false,
    values: {},
    touched: {},
    errors: {}
  });

  const [shoppingCart, setShoppingCart] = React.useState<
    Array<ShoppingCartItemProps>
  >([
    {
      id: 0,
      linkUrl: "",
      productName: "",
      description: "",
      qty: 1,
      price: 0.0
    }
  ]);

  const addShoppingItem = () => {
    console.log(shoppingCart);
    var id = 0;
    if (shoppingCart.length > 0) {
      id =
        (Math.max.apply(
          Math,
          shoppingCart.map(item => item.id)
        ) || 0) + 1;
    }
    setShoppingCart([
      ...shoppingCart,
      {
        id: id,
        linkUrl: "",
        productName: "",
        description: "",
        qty: 1,
        price: 0.0
      }
    ]);
  };

  React.useEffect(() => {
    const errors = validate(formState.values, schema);

    setFormState(formState => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {}
    }));
  }, [formState.values]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();

    setFormState(formState => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]:
          event.target.type === "checkbox"
            ? event.target.checked
            : event.target.value
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true
      }
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState.isValid) {
      console.log({
        userInfo: formState.values,
        order: shoppingCart
      });
      setCompleteState(true);
      webApi
        .put("/order", {
          userInfo: formState.values,
          order: shoppingCart
        })
        .then(res => console.log(res));
    }

    setFormState(formState => ({
      ...formState,
      touched: {
        ...formState.touched,
        ...formState.errors
      }
    }));
  };

  const hasError = (field: string): boolean =>
    formState.touched[field] && formState.errors[field] ? true : false;
  if (completeState) {
    return (
      <>
        <SectionHeader
          title={
            <span>
              Cảm ơn bạn đã quan tâm và đặt hàng với UShopBKK
              <Typography
                component="span"
                variant="inherit"
                color="primary"
              ></Typography>
            </span>
          }
          subtitle="Nhân viên sẽ có nhiệm vụ check hàng và liên hệ với bạn qua email trong vòng 24h"
          ctaGroup={[<div />]}
          fadeUp
        />
        <Image
          id="how-to-order"
          src="https://i.pinimg.com/originals/7f/b3/bf/7fb3bf1f7cda9f03a2745a9b1152eea1.jpg"
        />
        <Image
          id="how-to-calculate"
          src="https://i.pinimg.com/originals/1f/79/74/1f797486e4a61af9901e056e466fb709.jpg"
        />
      </>
    );
  }
  return (
    <div className={classes.root}>
      <form name="password-reset-form" method="post" onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              placeholder="Họ và tên"
              label="Họ và tên *"
              variant="outlined"
              size="medium"
              name="name"
              fullWidth
              helperText={hasError("name") ? formState.errors.name[0] : null}
              error={hasError("name")}
              onChange={handleChange}
              type="name"
              value={formState.values.name || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Số điện thoại"
              label="Số điện thoại *"
              variant="outlined"
              size="medium"
              name="phone"
              fullWidth
              helperText={hasError("phone") ? formState.errors.phone[0] : null}
              error={hasError("phone")}
              onChange={handleChange}
              type="phone"
              value={formState.values.phone || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="E-mail"
              label="E-mail *"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              helperText={hasError("email") ? formState.errors.email[0] : null}
              error={hasError("email")}
              onChange={handleChange}
              type="email"
              value={formState.values.email || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Địa chỉ nhận hàng"
              label="Địa chỉ nhận hàng *"
              variant="outlined"
              size="medium"
              name="address"
              fullWidth
              helperText={
                hasError("address") ? formState.errors.address[0] : null
              }
              error={hasError("address")}
              onChange={handleChange}
              type="address"
              value={formState.values.address || ""}
            />
          </Grid>
          <Grid item xs={12}>
            <i>
              <Typography variant="subtitle2">dấu * là bắt buộc.</Typography>
            </i>
          </Grid>
          <br></br>
          {shoppingCart.map((item: ShoppingCartItemProps, index: number) => (
            <Grid key={item.id} container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h6" color="textPrimary"></Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" color="textPrimary"></Typography>
                <Divider />
              </Grid>
              <Grid item xs={12}></Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  className={classes.inputTitle}
                >
                  {index + 1}. Tên hàng{" "}
                  {shoppingCart.length > 1 && (
                    <Button
                      key={index}
                      className={classes.deleteButtonText}
                      onClick={event => {
                        setShoppingCart(
                          shoppingCart.filter((i, _) => {
                            console.log(`item ${item.id}`);
                            console.log(`i ${i.id}`);
                            console.log(i.id != item.id);
                            return i.id != item.id;
                          })
                        );
                      }}
                    >
                      xoá{" "}
                    </Button>
                  )}
                </Typography>
                <TextField
                  placeholder="Copy tên hàng cần mua"
                  variant="outlined"
                  size="medium"
                  name="productName"
                  fullWidth
                  type="text"
                  onChange={event => {
                    event.preventDefault();
                    shoppingCart[index].productName = event.target.value;
                    setShoppingCart(shoppingCart);
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  className={classes.inputTitle}
                >
                  Số lượng
                </Typography>
                <TextField
                  variant="outlined"
                  size="medium"
                  name="qty"
                  fullWidth
                  type="number"
                  onChange={event => {
                    shoppingCart[index].qty = Number.parseInt(
                      event.target.value
                    );
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={3}>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  className={classes.inputTitle}
                >
                  Giá đơn vị (THB)
                </Typography>
                <TextField
                  placeholder=""
                  variant="outlined"
                  size="medium"
                  name="price"
                  fullWidth
                  type="number"
                  onChange={event => {
                    shoppingCart[index].price = Number.parseInt(
                      event.target.value
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  className={classes.inputTitle}
                >
                  URL Link tới hàng
                </Typography>
                <TextField
                  placeholder="Copy url hàng cần mua"
                  variant="outlined"
                  size="medium"
                  name="urlLink"
                  fullWidth
                  type="text"
                  onChange={event => {
                    shoppingCart[index].linkUrl = event.target.value;
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="subtitle1"
                  color="textPrimary"
                  className={classes.inputTitle}
                >
                  Mô tả
                </Typography>
                <TextField
                  placeholder="color: white"
                  variant="outlined"
                  name="description"
                  fullWidth
                  multiline
                  rows={2}
                  onChange={event => {
                    shoppingCart[index].description = event.target.value;
                  }}
                />
              </Grid>
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button onClick={addShoppingItem}>Thêm hàng vào order </Button>
          </Grid>
          <Grid item xs={12}>
            <Button
              size="large"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            >
              Đặt hàng
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Form;
