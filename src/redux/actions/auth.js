// import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import { Log } from "../../util";
// import { alertMessage } from "../../util/common/alertToastMessages";
// import { server_url } from "../../util/config";
// import request from "../../util/request";
// import { isLoading } from "./loader";
// import {
//   AUTH_LOADING,
//   AUTH_USER,
//   FORGOT_CODE,
//   FORGOT_EMAIL,
//   FORGOT_PASSWORD,
//   GET_USER,
//   SET_USER,
//   USER_LOGOUT,
// } from "./types";

// export const loginUser = (userData) => async (dispatch) => {
//   Log("Call ACTION Logged In", userData);
//   dispatch(isLoading(true));
//   try {
//     const res = await request.post("/auth/login", userData);
//     const { message, status, data } = res.data;
//     if (status === "Fail") throw res.data;
//     if (status === "Success") {
//       dispatch(isLoading(false));
//       setUserSessions(data);
//       dispatch({
//         type: AUTH_USER,
//         payload: data,
//       });
//     }
//   } catch (e) {
//     Log("error", e.message);
//     dispatch(isLoading(false));
//   }
// };

// export const authUsingFacebook = (userData) => async (dispatch) => {
//   Log("Call ACTION authUsingFacebook", userData);
//   dispatch(isLoading(true));
//   try {
//     const res = await request.post("/auth/loginFacebook", userData);
//     const { message, status, data } = res.data;
//     if (status === "Fail") throw res.data;
//     if (status === "Success") {
//       dispatch(isLoading(false));
//       console.log("Auth Using Facebook Success", data);
//       setUserSessions(data);
//       dispatch({
//         type: AUTH_USER,
//         payload: data,
//       });
//     }
//   } catch (e) {
//     Log("authUsingFacebook", e.message);
//     dispatch(isLoading(false));
//   }
// };

// export const authUsingGoogle = (userData) => async (dispatch) => {
//   Log("Call ACTION authUsingGoogle", userData);
//   dispatch(isLoading(true));
//   try {
//     const res = await request.post("/auth/loginGmail", userData);
//     const { message, status, data } = res.data;
//     if (status === "Fail") throw res.data;
//     if (status === "Success") {
//       dispatch(isLoading(false));
//       console.log("Auth Using Google Success", data);
//       setUserSessions(data);
//       dispatch({
//         type: AUTH_USER,
//         payload: data,
//       });
//     }
//   } catch (e) {
//     Log("authUsingGoogle", e.message);
//     dispatch(isLoading(false));
//   }
// };

// export const signUpUser = (userData, navigate) => async (dispatch) => {
//   Log("Call ACTION signUpUser", userData);
//   dispatch(isLoading(true));
//   try {
//     const res = await request.post("/auth/signup", userData);
//     const { message, status, data } = res.data;
//     if (status === "Fail") throw res.data;
//     if (status === "Success") {
//       alertMessage("Successfully Register.");
//       Log("URL Signup", data?.user?.accountLink);
//       setUserSessions(data);
//       dispatch(isLoading(false));
//       // navigate("StripeScreen", { url: data?.user?.accountLink });
//       navigate("ChooseTag");
//     }
//   } catch (e) {
//     dispatch(isLoading(false));

//     Log("error", e.message);
//   }
// };

// export const setUserSessions = (data) => {
//   try {
//     Log("Data set=>", data);
//     AsyncStorage.setItem("Token", data.token);
//     AsyncStorage.setItem("user", JSON.stringify(data.user));
//   } catch (e) {
//     // saving error
//     Log("Error While Adding Data to AsyncStorage", e);
//   }
// };

// //// get token from async storage///
// export const getUserSessions = () => async (dispatch) => {
//   dispatch(AuthLoading(true));
//   Log("Runing getUserSessions");
//   try {
//     const token = await AsyncStorage.getItem("Token");
//     const userId = await AsyncStorage.getItem("user");
//     const data = JSON.parse(userId);
//     Log("Data get=>", { user: data, token: token });
//     if (token) {
//       dispatch(isAuthenticated({ user: data, token: token }));
//     } else {
//       dispatch(unAuthorized());
//     }
//     dispatch(AuthLoading(false));
//   } catch (error) {
//     console.error("error is ", error);
//     dispatch(AuthLoading(false));
//   }
// };

// export const forgotPassword = (inputdata) => async (dispatch) => {
//   Log("forgotPassword", inputdata);
//   dispatch(isLoading(true));

//   try {
//     const res = await request.post("/auth/forgotemail", { email: inputdata });
//     const { message, status, data } = res.data;
//     if (status === "Fail") throw res.data;
//     if (status === "Success") {
//       AsyncStorage.setItem("forgotToken", data.token);
//       alertMessage(message);
//       dispatch({ type: FORGOT_EMAIL });
//       dispatch(isLoading(false));
//     }
//   } catch (e) {
//     alertMessage(e.message);
//     dispatch(isLoading(false));
//   }
// };

// export const verifyPinCode = (inputdata) => async (dispatch) => {
//   const token = await AsyncStorage.getItem("forgotToken");
//   Log("verifyPinCode", inputdata, token);
//   dispatch(isLoading(true));

//   try {
//     const res = await axios.post(
//       server_url + "/auth/verifyforgotpin",
//       { pinCode: inputdata },
//       { headers: { Authorization: token } }
//     );
//     const { message, status, data } = res.data;
//     if (status === "Fail") throw res.data;
//     if (status === "Success") {
//       alertMessage(message);
//       Log("Data", data);
//       dispatch({ type: FORGOT_CODE });
//       dispatch(isLoading(false));
//     }
//   } catch (e) {
//     alertMessage(e.message);
//     dispatch(isLoading(false));
//   }
// };

// export const resetPassword = (inputdata, back) => async (dispatch) => {
//   Log("resetpassword", inputdata);
//   const token = await AsyncStorage.getItem("forgotToken");
//   dispatch(isLoading(true));
//   try {
//     const res = await axios.post(
//       server_url + "/auth/resetpassword",
//       { password: inputdata },
//       { headers: { Authorization: token } }
//     );
//     const { message, status, data } = res.data;
//     if (status === "Fail") throw res.data;
//     if (status === "Success") {
//       alertMessage(message);
//       Log("Data", data);
//       dispatch({ type: FORGOT_PASSWORD });
//       AsyncStorage.removeItem("forgotToken");
//       back();
//       dispatch(isLoading(false));
//     }
//   } catch (e) {
//     alertMessage(e.message);
//     dispatch(isLoading(false));
//   }
// };

// export const isAuthenticated = (data) => (dispatch) => {
//   Log({ data });
//   dispatch({
//     type: AUTH_USER,
//     payload: data,
//   });
// };

// export const setUserData = (data) => (dispatch) => {
//   Log("setUserData=>", data);
//   dispatch({
//     type: SET_USER,
//     payload: data,
//   });
// };

// export const unAuthorized = () => async (dispatch) => {
//   await dispatch({
//     type: USER_LOGOUT,
//   });
// };

// export const logout = () => (dispatch) => {
//   AsyncStorage.clear();
//   dispatch(unAuthorized());
// };

// export const AuthLoading = (data) => (dispatch) => {
//   // Log({ data });
//   dispatch({
//     type: AUTH_LOADING,
//     payload: data,
//   });
// };
