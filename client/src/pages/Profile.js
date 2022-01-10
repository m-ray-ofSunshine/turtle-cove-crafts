import React, {useState, useEffect } from "react"
import UserDetails from "../components/userDetails";
import Auth from "../utils/Auth"
import {getMe} from "../utils/API"

function Profile(props) {

    const [userData, setUserData] = useState({});

    const userDataLength = Object.keys(userData).length;

    useEffect(() => {
            
      getUserData();

    }, [userDataLength]);

    const getUserData = async () => {
        try {
          const token = Auth.loggedIn() ? Auth.getToken() : null;
  
          if (!token) {
            return false;
          }
  
          const response = await getMe(token);
  
          if (!response.ok) {
            throw new Error('something went wrong!');
          }
  
          const user = await response.json();
          setUserData(user);
          props.setUser(user)
        
        } catch (err) {
          console.error(err);
        }
        
      };
      console.log(userData);

    return ( 
        <div className="row d-flex">
            <UserDetails userData={userData}/>
            {userData.adminAccess && (
              <div className="col-6">
              <a href="/admin" alt="..." >Link to Admin page</a>
            </div>
            )}
            
        </div>
     );
}

export default Profile;