import Image from "next/image";
import Link from "next/link";

interface GenreCardProps {
  name: string;
  image: {
    src: string;
    height: number;
    width: number;
  };
}

export const GenreCard = ({ name, image }: GenreCardProps) => {
  return (
    <Link href={`/genre/${name.toLowerCase()}`}>  
      <div>
        <Image src={image.src} alt={name} width={178} height={100} />
        <div>{name}</div>
      </div>
    </Link>
  );
}