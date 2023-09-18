import React , {useState} from "react";
import { Link } from "react-router-dom";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const RegisterPage = ()=>{

    const [requestResponse, setRequestResponse] = useState({
        textMessage: '',
        alertClass: ''
    })


    const initialValues = {
        firstName : '',
        email : '',
        mobile : '',
        password : ''
    }
const onSubmit = (values)=>{
    axios.post('https://orca-app-jhg4l.ondigitalocean.app/api/auth/register', values)
            .then((response) => {
                setRequestResponse({
                    textMessage: response.data.message,
                    alertClass: 'alert alert-success'
                })
            }, (error) => {
                setRequestResponse({
                    textMessage: error.response.data.message,
                    alertClass: 'alert alert-danger'
                })
            })
            .catch((error) => console.log(error))
}
// const validate = (values) =>{
//     let errors = {};
//     if(!values.firstName){
//         errors.firstName = 'first name is required'
//     }
//     if(!values.email){
//         errors.firstName = 'email is required'
//     }else if(
//         !/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//     ){
//     errors.email = 'email is not valid'
//     }
//     if(!values.mobile){
//         errors.mobile = 'mobile is required'
//     }
//     if(!values.password){
//         errors.password = 'password is required'
//     }
//     return errors
// }
const validationSchema = Yup.object({
    firstName : Yup.string().required('first name is required'),
    email :Yup.string().required('email is required'),
    mobile : Yup.string().required('mobile is required'),
    password : Yup.string().required('password is required').min(6,"password should be of six characters")
})
const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount : true

})


//     const [user, setUser] = useState({
//         firstName: '',
//         email: '',
//         mobile: '',
//         password: ''
//     })

//   const onChangeHandler = (event)=>{
//      setUser({
//         ...user,
//          [event.target.name] : event.target.value
//      })
//   }
  return(
    <div className="jumbotron">
    <div className="container  ">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
             <div className="wrapper">
              {/* <h1>{formik.values.firstName}</h1> */}
              <div class={requestResponse.alertClass} role="alert">
                            {requestResponse.textMessage}
                        </div>
              <h2>Register</h2>
              <hr />
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label >First Name</label>
                    <input type="text" 
                     className={formik.touched.firstName && formik.errors.firstName ? 'form-control is-invalid' : 'form-control'}
                     value = {formik.values.firstName}
                     name="firstName"
                     onChange={ formik.handleChange }
                     onBlur={formik.handleBlur} 
                     />
                     {formik.errors.firstName && formik.touched.firstName ? (
                        <small className="text-danger">
                           { formik.errors.firstName}
                        </small>
                    ) : null }
                </div>
                <div className="form-group">
                    <label >Email</label>
                    <input type="text" 
                     className={formik.touched.email && formik.errors.email ? 'form-control is-invalid' : 'form-control'}
                    value = {formik.values.email}
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}   />
                      {formik.errors.email && formik.touched.email ? (
                        <small className="text-danger">
                           { formik.errors.email}
                        </small>
                    ) : null }
                </div>
                <div className="form-group">
                    <label >Mobile</label>
                    <input type="number"
                      className={formik.touched.mobile && formik.errors.mobile ? 'form-control is-invalid' : 'form-control'}
                     value = {formik.values.mobile}
                     name="mobile"
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur} 
                    />
                    {formik.errors.mobile && formik.touched.mobile ? (
                        <small className="text-danger">
                           { formik.errors.mobile}
                        </small>
                    ) : null }
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" 
                     className={formik.touched.password && formik.errors.password ? 'form-control is-invalid' : 'form-control'}
                     value = {formik.values.password}
                     name="password"
                     onChange={formik.handleChange}  
                     onBlur={formik.handleBlur} 
                    />
                    {formik.errors.password && formik.touched.password ? (
                        <small className="text-danger">
                           { formik.errors.password}
                        </small>
                    ) : null }
                </div>
                <input type="submit" value="Register" disabled = {!formik.isValid} className="btn btn-primary btn-block" />
              </form>
              <br />
              <p className="text-center">
                Already Register ? <Link to="/login">Click Here</Link>
              </p>
             </div>
            </div>
           <div className="col-md-3"></div>
        </div>
    </div>
    </div>
  )
}

export default RegisterPage;
