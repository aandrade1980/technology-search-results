/** Components */
import { Card, Grid, Image, Row, Text } from '@nextui-org/react';

/** Types */
import { Result } from '../@types/sharedTypes';
import { ResultCard } from './ResultCard';

export const ResultList = ({ searchResults }: { searchResults: Result[] }) => {
  return (
    <Grid.Container
      gap={2}
      css={{ mt: 40, maxH: 'calc(100vh - 165px)', overflowX: 'auto' }}
    >
      {searchResults.map(result => (
        <ResultCard result={result} key={result.id} />
      ))}
    </Grid.Container>
  );
};
