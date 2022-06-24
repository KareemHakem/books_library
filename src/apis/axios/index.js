import axiosPackage from "axios";

export const axios = axiosPackage.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
  headers: {},
});
