import Image from 'next/image';
import { useRef, useState } from 'react';
import cn from '@/utils/class-names';
import Upload from '@/components/ui/upload';
import { PiX } from 'react-icons/pi';

interface FileInputProps {
  className?: string;
  label?: React.ReactNode;
  onChange: any;
}

export default function FileInput({
  className,
  label,
  onChange,
}: FileInputProps) {
  const imageRef = useRef<HTMLInputElement>(null);
  const [images, setImages] = useState<Array<File>>([]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = (event.target as HTMLInputElement).files;
    const newFiles = Object.entries(uploadedFiles as object)
      .map((file) => {
        if (file[1].type.includes('image')) return file[1];
      })
      .filter((file) => file !== undefined);
    setImages((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleImageDelete = (index: number) => {
    const updatedFiles = images.filter((_, i) => i !== index);
    setImages(updatedFiles);
    (imageRef.current as HTMLInputElement).value = '';
  };

  return (
    <div className={className}>
      <Upload
        label={label}
        ref={imageRef}
        accept="img"
        onChange={(e) => {
          onChange(e);
          handleImageUpload(e);
        }}
      />

      {images.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-1">
          {images?.map((file: File, index: number) => (
            <figure
              key={file.name}
              className="group relative aspect-square w-16 overflow-hidden rounded border border-gray-300 @md:w-20"
            >
              <Image
                src={URL.createObjectURL(file)}
                alt={file.name}
                fill
                priority
                sizes="(max-width: 768px) 100vw"
              />
              <button
                onClick={() => handleImageDelete(index)}
                className="invisible absolute left-1/2 top-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded bg-red-light text-white opacity-0 transition duration-300 group-hover:visible group-hover:opacity-100"
              >
                <PiX />
              </button>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
