import React, { useState, useEffect } from "react";
import {updateMe} from "../utils/API"
import Auth from '../utils/Auth';

export default function UserDetails(props) {

    const [userFormData, setUserFormData] = useState({name: "",email: "", password: ""});
    const [renderReady, setRenderReady] = useState(false)

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit =  async (e) => {
        e.preventDefault();
       
        const token = Auth.loggedIn() ?  Auth.getToken() : null;
    
        if (!token) {
          return false;
        }

         try { 
           const response = await updateMe(userFormData, token);
          
        
           if (!response.ok) {
             throw new Error('something went wrong!');
           }
      
           
         } catch (err) {
           console.log(err);
        
        
         }


    };

    useEffect(() => {

        setUserFormData(props.userData)
        
        setRenderReady(true)
    },[props.userData]);

    return (

        <div className="col-6">
            { renderReady  && (
            <div className=" border border-dark m-2 p-2" style={{width: "50vw"}}>
                <h2>User Details</h2>
                <form className="form signup-form" id="sign-up-form" onSubmit={(e) => handleFormSubmit(e)}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input className="form-control" type="text" value={userFormData.name} name="name"  onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input className="form-control" type="text" value={userFormData.email} name="email"  onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input className="form-control" type="password" name="password" value={userFormData.password}   onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary m-2" type="submit">Update</button>
                    </div>
                </form>
            </div>
            )}
        </div>
    );
}