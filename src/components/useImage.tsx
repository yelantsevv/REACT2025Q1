import { useState } from 'react';

export default function useImage() {
  const [image, setImage] = useState<string | null>(null);
  const [nameFile, setNameFile] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return setImage(null);
    setNameFile(file.name);
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };
  return [image, handleImage, nameFile] as const;
}
