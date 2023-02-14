import { useState } from 'react';

export default function NewBook() {

  const [file, setFile] = useState();
  const [nombre, setNombre] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    } else {
      setFile(null);
    }
  };

  const upload = async () => {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('nombre', nombre);

    try {
      await fetch('http://localhost:3000/api/books', {
        method: 'POST',
        body: formData
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <label>Titulo:</label>
      <input
        type="text"
        id="nombre"
        name="bookNombre"
        onChange={(e) => setNombre(e.target.value)}
      />
      <label>File:</label>
      <input
        type="file"
        id="file-id"
        name="file-id"
        onChange={handleFileChange}
      />
      <button onClick={upload}>Submit</button>
    </div>
  );
}
