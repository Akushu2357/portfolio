import { useState } from 'react';
import { getImageUrl } from '../utils/projectsUtils';
export default function AssetImage({ src, alt, fallback }) {
  const [failed, setFailed] = useState(null);
  return src && failed !== src ? (
    <img
      src={getImageUrl(src)}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(src)}
    />
  ) : (
    <div className="asset-fallback">{fallback}</div>
  );
}
