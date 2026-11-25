import { useState } from 'react';

const PLACEHOLDER = '/img/no_foto.jpg';

export default function Image({ src, alt = '', title='', fallback = PLACEHOLDER, ...props }) {
  const [error, setError] = useState(false);

  const finalSrc = !src || error ? fallback : src;

  return (
    <img
      src={finalSrc}
      alt={alt}
      onError={() => setError(true)}
      {...props}
      title={title}
    />
  );
}