import React, { useEffect } from "react";
import { runFireworks } from "./utils";
import { Link } from "react-router-dom";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import Button from "@material-ui/core/Button";
import useStyles from "./useStyles";
import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../../actions";

const CheckoutSuccess = () => {
  const classes = useStyles();
  const productsCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.removeItem("itemsCart");
  }, []);

  useEffect(() => {
    dispatch(clearCart());
    runFireworks();
  }, [productsCart]);

  return (
    <div className={classes.successWrapper}>
      <div className={classes.success}>
        <p className={classes.icon}>
          <LocalMallIcon />
        </p>
        <h2 className={classes.title}>Thank you for your order!</h2>
        <p className={classes.emailMsg}>
          Check your email inbox for our confirmation mail.
        </p>
        <p className={classes.description}>
          If you have any questions, please email
          <a
            className={classes.email}
            style={{ color: "#606060" }}
            href="mailto:tuspaciopg@gmail.com"
          >
            tuspaciopg@gmail.com
          </a>
        </p>
        <Link to="/home">
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={`${classes.margin} ${classes.btn}`}
          >
            Continue Shopping!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
