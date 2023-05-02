import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchDocument = () => {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          method: 'post',
          url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-pyokt/endpoint/data/v1/action/findOne',
          headers: {
            'Content-Type': 'application/json',
            'api-key': `${process.env.REACT_APP_MONGODB_API_KEY}`,
          },
          data: JSON.stringify({
            collection: 'human-collections',
            database: 'human-database',
            dataSource: 'ClusterThaHuman',
            filter: { age: { $gte: 18 } },
          }),
        };

        const response = await axios(config);
        setDocument(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Document:</h2>
      {document ? JSON.stringify(document) : 'Loading...'}
    </div>
  );
};

export default FetchDocument;

