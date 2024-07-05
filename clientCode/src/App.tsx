import React, { useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [url, setUrl] = useState('');
  const [emails, setEmails] = useState<string[]>([]);
  const [error, setError] = useState<any>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setEmails([]);

    try {
      const response = await axios.post('http://localhost:5000/api/scrape/scrape', { url });
      setEmails(response.data.emails);
    } catch (err) {
      // setError(err.response ? err.response.data.error : 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Email Scraper</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          required
        />
        <button type="submit">Scrape Emails</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}

    </div>
  );
};

export default App;
