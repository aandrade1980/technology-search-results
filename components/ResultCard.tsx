/** Components */
import { Card, Grid, Image, Link, Row, Text } from '@nextui-org/react';

/** Types */
import { Result } from '../@types/sharedTypes';

export const ResultCard = ({ result }: { result: Result }) => (
  <Grid xs={4}>
    <Link href={result.link} target="_blank">
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
    </Link>
  </Grid>
);
