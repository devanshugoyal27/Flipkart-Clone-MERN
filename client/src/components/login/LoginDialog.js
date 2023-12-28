import React, { useState,useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { authenticateSignup , authenticateLogin } from "../../services/api";
import { dataContext } from "../../context/DataProvider";


const initialValue = {
  login: {
    view: "login",
    heading: 'Login',
    subHeading: 'Get access to your Orders, Wishlist and Recommendations'
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: 'Signup to get started'
  },
};

 const signupInitialValue = {
  firstname : '',
  lastname : '',
  email : '',
  phone : '',
  password : '',
 
}
 const loginInitialValue = {
  email : '',
  password : ''
 
}


const LoginDialog = ({ isOpen,setOpen }) => {
  const [account, setAccount] = useState(initialValue.login);
  const [signup,setSignup] = useState(signupInitialValue);
  const [login,setLogin] = useState(loginInitialValue);
  const [error,setError] = useState(false);
  const {setData} = useContext(dataContext)
  if (!isOpen) return null;

  const closeDialog = ()=>{
    setOpen(false)
    setAccount(initialValue.login);
    setError(false)
  }

  const toggleSignup = () => {
    setAccount(initialValue.signup);
  };
  const toggleLogin = () => {
    setAccount(initialValue.login);
  };

  const onChangeInput = (e)=>{
    setSignup({...signup,[e.target.name]:e.target.value})
    
  }
  const signupUser = async ()=>{
     let response = await authenticateSignup(signup);
     if(!response) return;
     closeDialog();
     setData(signup.firstname);
  }

  const onValueChange = (e)=>{
      setLogin({...login,[e.target.name]:e.target.value})
  }

  const loginUser = async ()=>{
    let response = await authenticateLogin(login);
    if(response.status === 200) {
      closeDialog();
    setData(response.data.data.firstname);
    }else {
          setError(true)
    }
    
 }

  return (
    <div>
      <div className="fixed z-[9999] inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        {/* login page */}
        <div className="w-[700px] h-[500px] bg-white rounded-md flex">
          {/* left */}
          <div className="bg-blue-500 max-w-[300px] text-white p-7">
            <h1 className="font-bold text-2xl mb-5">{account.heading}</h1>
            <p className="tracking-wider">
              {account.subHeading}
            </p>
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
              alt="loginimg"
              className="mt-[180px]"
            />
          </div>

          {/* right */}

          {account.view === 'login' ? (
            // login form 
            <div className="p-6 flex flex-col gap-6 mt-3">
              <div>
                <label className="text-sm text-gray-500" htmlFor="">
                  Enter Email
                </label>
                <input
                  className="p-1 outline-none border-b-2 w-full"
                  type="text"
                  name="email"
                  onChange={(e)=>onValueChange(e)}
                />
                {error && <p className="text-red-500 text-sm">please enter valid email or password</p>}
              </div>

              <div>
                <label htmlFor=""></label>
                <input
                  className="p-1 outline-none border-b-2 w-full placeholder-gray-500 "
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={(e)=>onValueChange(e)}
                />
                <a
                  href="/"
                  className="text-blue-700 text-sm font-semibold absolute right-[410px]"
                >
                  Forgot?
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-4">
                By continuing, you agree to Flipkart's{" "}
                <a className="text-blue-500 mr-1" href="/">
                  Terms of use
                </a>
                and
                <a href="/" className="text-blue-500 ml-1">
                  Privacy Policy
                </a>
              </p>

              <button onClick={loginUser} className="w-full p-2 bg-orange-600 text-white ">
                Login
              </button>
              <p className="text-center text-gray-500">OR</p>
              <button className="w-full p-2 bg-white text-blue-700 shadow-lg font-semibold">
                Request OTP
              </button>
              <p
                onClick={() => toggleSignup()}
                className="text-blue-700 text-sm mt-7 text-center cursor-pointer"
                
              >
                New to Flipkart? Create an account
              </p>
            </div>
          ) :  ( 
            // signup form
            <div className="p-6 flex flex-col gap-6 mt-3">
              <div>
                <label className="" htmlFor=""></label>
                <input
                  className="p-1 outline-none border-b-2 w-full placeholder-gray-500"
                  type="text"
                  placeholder="First Name"
                  onChange={(e)=>onChangeInput(e)}
                  name="firstname"
                />
              </div>

              <div>
                <label htmlFor=""></label>
                <input
                  className="p-1 outline-none border-b-2 w-full placeholder-gray-500 "
                  type="text"
                  placeholder="Last Name"
                  name="lastname"
                  onChange={(e)=>onChangeInput(e)}
                />
              </div>
              <div>
                <label htmlFor=""></label>
                <input
                  className="p-1 outline-none border-b-2 w-full placeholder-gray-500 "
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={(e)=>onChangeInput(e)}
                />
              </div>
              <div>
                <label htmlFor=""></label>
                <input
                  className="p-1 outline-none border-b-2 w-full placeholder-gray-500 "
                  type="text"
                  placeholder="Enter Phone"
                  name="phone"
                  onChange={(e)=>onChangeInput(e)}
                />
              </div>
              <div>
                <label htmlFor=""></label>
                <input
                  className="p-1 outline-none border-b-2 w-full placeholder-gray-500 "
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={(e)=>onChangeInput(e)}
                />
              </div>
              <p className="text-gray-500 text-sm mt-1">
                By continuing, you agree to Flipkart's 
                <a className="text-blue-500" href="/">
                   Terms of use
                </a>
                and
                <a href="/" className="text-blue-500">
                  Privacy Policy
                </a>
              </p>

              <button onClick={()=> signupUser()} className="w-full p-2 bg-orange-600 text-white ">
                Continue
              </button>
              <p
                onClick={() => toggleLogin()}
                className="text-blue-700 text-sm text-center cursor-pointer"
                
              >
                Already have an account?, Continue to Login
              </p>
            </div>
          )}
        </div>

        {/* close button */}
        <div className="mt-[-470px] ml-2">
          <button onClick={closeDialog}>
            <AiOutlineClose size={30} className="text-2xl text-white " />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginDialog;
