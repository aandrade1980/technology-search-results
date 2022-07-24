/** Libraries */
import { Dispatch, SetStateAction } from 'react';

/** Components */
import { Button, Container, Input, Loading, Spacer } from '@nextui-org/react';

interface SearchFormProps {
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  isSearching: boolean;
}

export const SearchForm = ({
  handleSearch,
  inputValue,
  setInputValue,
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
          onChange={e => setInputValue(e.target.value)}
          placeholder="Search for something"
          type="text"
          value={inputValue}
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
