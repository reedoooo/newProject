import React, { useEffect } from 'react';
import axios from 'axios';
import MiaRetreival2 from './MiaRetreival2';

const InsertDocument = () => {
  useEffect(() => {
    const insertData = async () => {
      try {
        const config = {
          method: 'post',
          url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-pyokt/endpoint/data/v1/action/insertOne',
          headers: {
            'Content-Type': 'application/json',
            'api-key': `${process.env.REACT_APP_MONGODB_API_KEY}`,
          },
          data: JSON.stringify({
            collection: 'human-collections',
            database: 'human-database',
            dataSource: 'ClusterThaHuman',
            document: {
              name: 'John Doe',
              age: 25,
            },
          }),
        };

        const response = await axios(config);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    insertData();
  }, []);

  return (
    <div>
      <h2>Insert Document</h2>
      <p>Check the console for the response.</p>
    </div>
  );
};

export default InsertDocument;
