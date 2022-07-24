/** Components */
import { Card, Grid, Image, Row, Text } from '@nextui-org/react';

/** Types */
import { Result } from '../@types/sharedTypes';

export const ResultList = ({ searchResults }: { searchResults: Result[] }) => {
  return (
    <Grid.Container
      gap={2}
      css={{ mt: 40, maxH: 'calc(100vh - 165px)', overflowX: 'auto' }}
    >
      {searchResults.map(result => (
        <Grid key={result.title} xs={4}>
          <Card color="black" isHoverable isPressable>
            <Card.Body>
              <Row justify="center" align="center">
                <Image
                  objectFit="cover"
                  src={result.image as string}
                  alt={result.title}
                />
              </Row>
              <Row justify="center" align="center">
                <Text transform="capitalize" h4 size={18} css={{ m: 0 }}>
                  {result.title}
                </Text>
              </Row>
              <Row justify="center" align="baseline">
                <Text h4 size={15} css={{ m: 0, color: '$red600' }}>
                  {result.price}
                </Text>
              </Row>
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};
