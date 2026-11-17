import Image from "next/image";
import Link from "next/link";

interface GenreCardProps {
  name: string;
  image: string;
}

export const GenreCard = ({ name, image }: GenreCardProps) => {
  return (
    <Link href={`/genre/${name.toLowerCase()}`}>  
      <div>
        <Image src={image} alt={name} width={200} height={200} />
        <div>{name}</div>
      </div>
    </Link>
  );
}