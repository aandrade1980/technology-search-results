/** Hooks */
import { useQuery } from '@tanstack/react-query';

/** Types */
import { Result } from '../@types/sharedTypes';

const searchByText = async (text: string): Promise<Array<Result>> => {
  const response = await fetch(`/api/getResults?searchText=${text}`);

  return await response.json();
};

export default function useResults(searchText: string) {
  const { isLoading, data: searchResults = [] } = useQuery(
    ['searchQuery', searchText],
    () => searchByText(searchText),
    {
      enabled: !!searchText
    }
  );

  const isSearching = isLoading && searchText ? true : false;

  return { isSearching, searchResults };
}
