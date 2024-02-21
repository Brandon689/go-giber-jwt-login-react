import { useEffect, useState } from 'react';

function RestrictedPage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchRestricted = async () => {
      const response = await fetch('http://localhost:1323/api/restricted', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        const data = await response.text();
        setMessage(data);
      } else {
        setMessage('Failed to fetch restricted content');
      }
    };

    fetchRestricted();
  }, []);

  return <h1>{message}</h1>;
}

export default RestrictedPage;