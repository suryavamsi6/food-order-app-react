import { useFormik } from "formik";
import useHttp from "../../hooks/use-http";
import { useState } from "react";

const OrderForm = (props) => {
  const { sendRequest: addOrder, isLoading, error } = useHttp();

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (values.firstName.length > 15) {
      errors.firstName = "Must be 15 characters or less";
    }

    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (values.lastName.length > 20) {
      errors.lastName = "Must be 20 characters or less";
    }
    if (!values.address) {
      errors.address = "Required";
    } else if (values.address.length > 40) {
      errors.address = "Must be 40 characters or less";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Required";
    } else if (values.phoneNumber.length > 10) {
      errors.phoneNumber = "Must be 10 characters or less";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phoneNumber: "",
    },
    validate,
    onSubmit: (values) => {
      addOrder({
        url: "https://food-order-app-react-60fc7-default-rtdb.firebaseio.com/orders.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: values,
      });
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          type="textarea"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        {formik.errors.address ? <div>{formik.errors.address}</div> : null}
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        {formik.errors.phoneNumber ? (
          <div>{formik.errors.phoneNumber}</div>
        ) : null}
        <button type="submit">Order Now</button>
      </form>
    </>
  );
};

export default OrderForm;
