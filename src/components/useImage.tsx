import { useState } from 'react';

export default function useImage() {
  const [image, setImage] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return setImage(null);
    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result as string);
    reader.readAsDataURL(file);
  };
  return [image, handleImage] as const;
}
