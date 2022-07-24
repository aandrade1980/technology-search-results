/** Libraries */
import { Dispatch, SetStateAction } from 'react';

/** Components */
import { Button, Container, Input, Loading, Spacer } from '@nextui-org/react';

interface SearchFormProps {
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
  isSearching: boolean;
}

export const SearchForm = ({
  handleSearch,
  searchText,
  setSearchText,
  isSearching
}: SearchFormProps) => {
  return (
    <form onSubmit={handleSearch}>
      <Container display="flex">
        <Input
          aria-label="Search for something"
          bordered
          clearable
          color="primary"
          id="search"
          name="search"
          onChange={e => setSearchText(e.target.value)}
          placeholder="Search for something"
          type="text"
          value={searchText}
        />
        <Spacer x={1} />
        <Button shadow type="submit" disabled={isSearching}>
          {isSearching ? (
            <Loading color="currentColor" type="points" size="sm" />
          ) : (
            'Search'
          )}
        </Button>
      </Container>
    </form>
  );
};
