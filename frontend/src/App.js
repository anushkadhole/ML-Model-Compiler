import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [target, setTarget] = useState('CPU');
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('model', file);
    formData.append('target', target);

    const res = await fetch('http://localhost:5000/api/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div>
      <h1>Upload ML Model for Optimization</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <select onChange={(e) => setTarget(e.target.value)} value={target}>
        <option>CPU</option>
        <option>GPU</option>
        <option>TPU</option>
      </select>
      <button onClick={handleUpload}>Upload & Optimize</button>
      {result && (
        <div>
          <h2>Optimization Result</h2>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
