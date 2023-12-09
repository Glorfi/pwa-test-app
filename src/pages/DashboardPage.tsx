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
  HStack,
  Skeleton,
  CircularProgress,
} from '@chakra-ui/react';
import { RiRadioButtonLine } from 'react-icons/ri';
import { useGetUsersQuery } from 'store/dummy-api/dummy.api';
import { UserCard } from 'components/UserCard';
import { useDispatch } from 'react-redux';
import { Header } from 'components/Header';

export const DashboardPage = () => {
  const { isLoading, isError, isSuccess, data } = useGetUsersQuery('');
  const dispatch = useDispatch();

  const usersToDispay =
    data &&
    data.map((item, index) => {
      return (
        <UserCard
          key={index}
          id={item.id}
          image={item.image}
          lastName={item.lastName}
          firstName={item.firstName}
          email={item.email}
          age={item.age}
        />
      );
    });

  return (
    <Box minH={'100vh'} padding={'20px 20px'} backgroundColor={'#3e3e42'}>
      <Header title={'Users DashBoard'} />
      <Skeleton isLoaded={!isLoading}>
        <Grid
          templateColumns={'repeat(auto-fill, minmax(300px, 1fr))'}
          gap={'16px'}
        >
          {usersToDispay}
        </Grid>
      </Skeleton>
      <Card
        position={'fixed'}
        right={'8px'}
        bottom={'8px'}
        align={'flex-start'}
      >
        <CardBody p={'2px'} display={'flex'}>
          <RiRadioButtonLine color="green" />
          <Text fontSize={'x-small'}>Online</Text>
        </CardBody>
      </Card>
    </Box>
  );
};
