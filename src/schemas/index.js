import * as yup from "yup";

const propertyTypeOptions = [
  "Villa",
  "Flat",
  "Studio",
  "Residential",
  "Business",
];

const rentOrSell = ["Rent", "Sell"];

export const basicSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  propertyType: yup
    .string()
    .oneOf(propertyTypeOptions, "Please Choose One")
    .required("Required"),
  rentSell: yup
    .string()
    .oneOf(rentOrSell, "Please Choose One")
    .required("Required"),
  location: yup.string().required("Required"),
  expectedPrice: yup
    .number()
    .typeError("Must be a number")
    .required("Required"),
  carpetArea: yup.number().typeError("Must be a number").required("Required"),
  bedRooms: yup.number().typeError("Must be a number").required("Required"),
  bathRooms: yup.number().typeError("Must be a number").required("Required"),
});
