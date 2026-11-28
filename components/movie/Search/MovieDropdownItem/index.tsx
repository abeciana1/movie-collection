import Image from 'next/image'
import Link from 'next/link'
import { format } from "date-fns"

interface MovieDropdownItemProps {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string | null;
}

export const MovieDropdownItem = ({ id, title, poster_path, release_date }: MovieDropdownItemProps) => {
  return (
    <Link href={`/movie/${id}`} className="flex items-center gap-4">
      <Image src={poster_path ? `https://media.themoviedb.org/t/p/original/${poster_path}` : "/path/to/poster.jpg"} alt={`${title} - Movie Poster`} width={50} height={75} className="w-10" />
      <div>
        <p className="font-semibold">{title}</p>
        <p>{release_date ? format(new Date(release_date), "yyyy") : ""}</p>
      </div>
    </Link>
  );
}