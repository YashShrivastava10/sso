import React, { useRef, useState } from 'react'

const useImagePreview = () => {
  const [previewUrl, setPreviewUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  
  const handleClick = () => {
    if(fileInputRef.current) fileInputRef.current.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(!event.target.files) return

    const file = event.target.files[0];

    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    
    if (file && validImageTypes.includes(file.type)) {
      const objectUrl = URL.createObjectURL(file);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  };

  return { previewUrl, fileInputRef, handleClick, handleFileChange }
}

export default useImagePreview