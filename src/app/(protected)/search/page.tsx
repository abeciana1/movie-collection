
interface SearchResultsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const SearchResultsPage = async ({
  searchParams,
}: SearchResultsPageProps) => {
  const { query } = await searchParams;
  return (
    <div>
      <h1>Search Results for: <span className="italic">&ldquo;{query}&ldquo;</span></h1>
    </div>
  );
}

export default SearchResultsPage;