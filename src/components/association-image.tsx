import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AssociationImageProps {
  src: string;
  alt: string;
  type: 'logo' | 'banner';
  className?: string;
}

export function AssociationImage({ src, alt, type, className }: AssociationImageProps) {
  return (
    <div className={cn(
      'relative overflow-hidden rounded-md',
      type === 'logo' ? 'w-24 h-24' : 'w-full h-48',
      className
    )}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={type === 'logo' ? '96px' : '100vw'}
        priority
      />
    </div>
  );
} 