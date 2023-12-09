import * as React from 'react';
import {
  Text,
  Button,
  Card,
  CardBody,
  Box,
  CardFooter,
  Grid,
  ButtonGroup,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface IUserCard {
  key?: number;
  image: string;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  id: number;
}

export const UserCard = (props: IUserCard) => {
  const { image, firstName, lastName, age, email, id } = props;
  const navigate = useNavigate();
  return (
    <Card w={'100%'}>
      <CardBody>
        <Grid gridTemplateColumns={'100px 1fr'} columnGap={'2'}>
          <Box
            backgroundImage={image}
            backgroundSize={'cover'}
            backgroundPosition={'center'}
            borderRadius={'50%'}
            minW={'100px'}
            minH={'100px'}
            gridColumn={1}
            gridRow={'1/3'}
          />
          <Text fontSize={'lg'} gridColumn={2}>
            {`${firstName} ${lastName}`}
          </Text>
          <Grid
            gridColumn={2}
            gridTemplateColumns={'min-content 1fr'}
            gap={1}
            alignSelf={'end'}
          >
            <Text color={'blackAlpha.600'} width={'min-content'}>
              Age:
            </Text>
            <Text color={'blackAlpha.900'}>{age}</Text>
            <Text color={'blackAlpha.600'} width={'min-content'}>
              Email:
            </Text>
            <Text color={'blackAlpha.900'}>{email}</Text>
          </Grid>
        </Grid>
      </CardBody>
      <CardFooter>
        <ButtonGroup>
          <Button
            variant="solid"
            colorScheme={"telegram"}
            size={'xs'}
            onClick={() => {
              navigate(`/users/${id}`);
            }}
          >
            Profile page
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
