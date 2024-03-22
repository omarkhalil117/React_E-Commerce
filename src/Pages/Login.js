import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {getUserInfo} from '../store/slices/userSlice'
import { Link } from 'react-router-dom';
function Login() {
  
  const dispatch = useDispatch()

  const [isFormSubmitted, setIseFormSubmiited] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email:"",
    password:"",
    confirmPassword:"",
    profilePic:""
  });

  const [userInfoErrs, setUserInfoErrors] = useState({
    nameErr: "",
    emailErr: "",
    passwordErr: "",
    confirmPasswordErr:"",
    profilePicErr:""

  });

  useEffect(() => {
    if (
      !userInfoErrs.nameErr &&
      !userInfoErrs.emailErr &&
      !userInfoErrs.passwordErr &&
      !userInfoErrs.confirmPasswordErr &&
      !userInfoErrs.profilePic &&
      isFormSubmitted
    ) {
      // console.log("request ur api");
      dispatch(getUserInfo(userInfo))
      console.log("Done !")
    }
  }, [userInfoErrs,isFormSubmitted]);

  const validateForm = () => {

    setUserInfoErrors({
      nameErr: !userInfo.name
        ? "first name is required"
        : userInfo.name.length < 3
        ? "first name should be more than 3 chars "
        : "",
      emailErr: !userInfo.email
        ? "email is required"
        : userInfo.email.split('@').length !== 2
        ? "email is not valid"
        : "",
      passwordErr: !userInfo.password
        ? "password is required"
        : userInfo.password.length < 8
        ? "password should be more than 8 charachters"
        : "",
      confirmPasswordErr: !userInfo.confirmPassword
        ? "confirm password is required"
        : userInfo.confirmPassword !== userInfo.password 
        ? "Password doesn't match"
        : "",
      profilePicErr: !userInfo.profilePic
        ? "profile pic is required"
        : ""
    });
}

  const handleChange = (e) => {

    switch (e.target.name) {
      case "name":
        setUserInfo({
          ...userInfo,
          name: e.target.value,
        });
        validateForm();
        break;

      case "email":
        setUserInfo({
          ...userInfo,
          email: e.target.value,
        });
        validateForm();
        break;

      case "password":
        setUserInfo({
          ...userInfo,
          password: e.target.value,
        });
        validateForm();
        break;

      case "confirm":
        setUserInfo({
          ...userInfo,
          confirmPassword: e.target.value,
        });
        validateForm();
        break;

      case "profilePic":
        setUserInfo({
          ...userInfo,
          profilePic: e.target.value,
        });
        validateForm();
        break;
      
      default:
        break;
    }
  };

const handleSubmit = (e) => {
    e.preventDefault();
    setIseFormSubmiited(true);
    console.log(userInfo);
    validateForm();
  };

const resetForm = () => {
  setUserInfo({
    name:"",
    email:"",
    password:"",
    confirmPassword:"",
    profilePic:""
  })
}

  return (

  <section className="vh-100 bg-image">
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card">
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Login</h2>

              <form>

                <div className="form-outline mb-4">
                  <input name="name" onChange={handleChange} type="text" id="form3Example1cg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example1cg">Your Name</label>
                  {userInfoErrs.nameErr && <p className='text-danger fw-bold'>{userInfoErrs.nameErr}</p>}
                </div>

                <div className="form-outline mb-4">
                  <input name="email" onChange={handleChange} type="email" id="form3Example3cg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example3cg">Your Email</label>
                  {userInfoErrs.emailErr && <p className='text-danger fw-bold'>{userInfoErrs.emailErr}</p>}
                </div>

                <div className="form-outline mb-4">
                  <input name="password" onChange={handleChange} type="password" id="form3Example4cg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example4cg">Password</label>
                  {userInfoErrs.passwordErr && <p className='text-danger fw-bold'>{userInfoErrs.passwordErr}</p>}
                </div>

                <div className="form-outline mb-4">
                  <input name="confirm" onChange={handleChange} type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example4cdg">Repeat your password</label>
                  {userInfoErrs.confirmPasswordErr && <p className='text-danger fw-bold'>{userInfoErrs.confirmPasswordErr}</p>}
                </div>

                <div className="form-outline mb-4">
                  <input name="profilePic" onChange={handleChange} type="file" id="form3Example4cdg" className="form-control form-control-lg" />
                  <label className="form-label" for="form3Example4cdg">Profile picture</label>
                  {userInfoErrs.profilePicErr && <p className='text-danger fw-bold'>{userInfoErrs.profilePicErr}</p>}
                </div>


                <div className="d-flex justify-content-center">
                  <button type="button"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                    onClick={handleSubmit}>Login</button>
                </div>


              </form>

              <Link to="/userInfo">
                <h5 className='m-4'>
                  User Info
                </h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )

}
export default Login