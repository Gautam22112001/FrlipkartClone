import {
  Box,
  Dialog,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { useContext, useState } from "react";

import { authenticateSignup, authenticateLogin } from "../../service/api";
import DataContext from "../../context/DataContext";

const Component = styled(Box)`
  height: 70vh;
  width: 100vh;
  display: flex;
`;

const Image = styled(Box)`
  height: 83%;
  width: 30%;
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  //textfield componenet renders as div
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;
const LoginButton = styled(Button)`
  text-ransform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
  &:hover {
    background-color: #e55a17;
  }
`;

const RequestOTP = styled(Button)`
  text-ransform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  color: #2874f0;
  text-align: center;
  font-weight: 600;
  cursor: pointer;
`;

const Error = styled(Typography)`
  color: #ff6161;
  line-height: 0;
  margin-top: 12px;
  font-weight: 600;
  font-size: 10px;
`;

const accountValues = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your oders wishlist and recomendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new here!",
    subheading: "Signup with your mobile number to get started.",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountValues.login);
  const [signup, setSignup] = useState(signupInitialValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataContext);

  const toggleSignup = () => {
    toggleAccount(accountValues.signup);
  };

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountValues.login);
    setError(false);
  };

  const onInputChange = (e) => {
    setSignup((signup) => ({
      ...signup,
      [e.target.name]: e.target.value,
    }));
    console.log(signup);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
    if (!response) {
      //if signup is failed
      return;
    }
    handleClose();
    setAccount(signup.firstname);
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    console.log(response);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Image>
          <Typography variant="h5"> {account.heading} </Typography>
          <Typography style={{ marginTop: 20 }}>
            {account.subheading}
          </Typography>
        </Image>
        {account.view === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              label="Enter username"
              onChange={(e) => onValueChange(e)}
              name="username"
            />

            <TextField
              variant="standard"
              label="Enter _Password"
              onChange={(e) => onValueChange(e)}
              name="password"
            />
            {error && <Error>Please enter valid username or password</Error>}
            <Text>
              By continnuing you agree to the Flipkarts Terms of Use and Privacy
              Policy
            </Text>
            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount onClick={() => toggleSignup()}>
              New to Flipkart? Create an account
            </CreateAccount>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              label="Enter FirstName"
              onChange={(e) => onInputChange(e)}
              name="firstname"
              value={signup.firstname}
            />
            <TextField
              variant="standard"
              label="Enter LastName"
              onChange={(e) => onInputChange(e)}
              name="lastname"
              value={signup.lastname}
            />
            <TextField
              variant="standard"
              label="Enter Username"
              onChange={(e) => onInputChange(e)}
              name="username"
              value={signup.username}
            />
            <TextField
              variant="standard"
              label="Enter email"
              onChange={(e) => onInputChange(e)}
              name="email"
              value={signup.email}
            />
            <TextField
              variant="standard"
              label="Enter _Password"
              onChange={(e) => onInputChange(e)}
              name="password"
              value={signup.password}
            />
            <TextField
              variant="standard"
              label="Enter Phone"
              onChange={(e) => onInputChange(e)}
              name="phone"
              value={signup.phone}
            />

            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
