import React, { useEffect, useState } from 'react';

import ajax from '../api/ajax';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [healthy, setHealthy] = useState(true);

  useEffect(() => {
    setLoading(true);
    ajax('/', { method: 'GET' })
    .then(() => {
      setHealthy(true);
    })
    .catch(() => {
      setHealthy(false);
    }).finally(() => {
      setLoading(false);
    })
  }, [])

  if (loading) {
    return (
      <div className="App">
        Loading...
      </div>
    )
  }

  return (
    <div className="App">
      {healthy ? 'Server is up and running...' : 'Server is down'}
    </div>
  );
}

export default App;
