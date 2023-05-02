import { useState, useEffect } from 'react';
import axios from 'axios';
// import { useAuth0 } from "@auth0/auth0-react";

export function useData() {
  const [profileData, setProfileData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {

    const options = { 
      method: "GET",
      url: "http://localhost:3001/api",
      headers:  `authorization: Bearer ${process.env.TOKEN}`,
    };

    axios(options)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log('byeeeeeeeeee'); 
      });

    const loadProfileData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER}/profile`);

        if (response.status === 200) {
          setProfileData({ ...response.data[0], hasData: true });
        } else {
          setProfileData({ hasData: false });
        }

        setDataLoaded(true);
        console.log(response.data);

        console.log(response.data[3]);
      } catch (error) {
        alert(error.message);
        return;
      }
    };

    loadProfileData();
  }, []);

  return { profileData, dataLoaded };
}


