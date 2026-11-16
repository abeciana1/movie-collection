import Image from "next/image";
import Link from "next/link";

interface GenreCardProps {
  genre: {
    name: string;
    image: string;
  };
}

export const GenreCard = ({ genre }: GenreCardProps) => {
  return (
    <Link href={`/genre/${genre.name.toLowerCase()}`}>  
      <div>
        <Image src={genre.image} alt={genre.name} width={200} height={200} />
        <div>{genre.name}</div>
      </div>
    </Link>
  );
}