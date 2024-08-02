"use client"

import { CircleUserRound } from 'lucide-react';
import Image from 'next/image';
import useImagePreview from '../hooks/useImagePreview';

const ProfileImage = () => {

  const { previewUrl, fileInputRef, handleClick, handleFileChange } = useImagePreview()

  return (
    <section title='Upload Profile Picture'>
      {previewUrl ?
        <div onClick={handleClick} className="flex items-center justify-center h-20 w-20 overflow-hidden rounded-full cursor-pointer relative">
          <Image src={previewUrl} alt="Preview" loading='lazy' fill style={{ objectFit: "cover" }} />
        </div>
        :
        <CircleUserRound size={80} strokeWidth={0.5} className="cursor-pointer" onClick={handleClick} />}
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </section>
  )
}

export default ProfileImage