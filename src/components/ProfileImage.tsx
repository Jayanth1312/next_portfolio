import Image from "next/image";
import { useState, useEffect } from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, className }) => {
  const [isClient, setIsClient] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);

    if (src.startsWith("/")) {
      setImageSrc(src);
    } else {
      try {
        setImageSrc(src.startsWith("./") ? src.substring(1) : `/${src}`);
      } catch (error) {
        console.error("Error processing image path:", error);
        setImageSrc(src);
      }
    }
  }, [src]);

  if (!isClient || !imageSrc) {
    return (
      <div className={`w-full h-full bg-neutral-800 ${className || ""}`} />
    );
  }

  return (
    <div className="relative w-full h-full">
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{
          objectFit: "cover",
        }}
        priority
        className={className}
        quality={100}
        onError={(e) => {
          console.error(`Failed to load image: ${imageSrc}`);
          // You can set a fallback image here
          // e.currentTarget.src = "/assets/profile.jpg";
        }}
      />
    </div>
  );
};

export default ProfileImage;
