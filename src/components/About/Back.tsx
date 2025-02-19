'use client';
import { useRouter } from 'next/navigation';

export default function Back({
  className,
  nameBtn,
}: {
  className?: string;
  nameBtn?: string;
}) {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className={className}>
      {nameBtn}
    </div>
  );
}
