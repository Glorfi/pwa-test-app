import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Grid,
  HStack,
  Skeleton,
  Text,
} from '@chakra-ui/react';
import { RiRadioButtonLine } from 'react-icons/ri';
import { Header } from 'components/Header';
import { UserCard } from 'components/UserCard';
import { UserPost } from 'components/UserPost';
import { IPost, IUser } from 'interfaces/dummy';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  useGetUserPostQuery,
  useGetUserQuery,
  useGetUsersQuery,
  useLazyGetUserPostQuery,
  useLazyGetUserQuery,
} from 'store/dummy-api/dummy.api';
import { getCurrentUserFromCache } from 'utils/getCurrentUserFromCache';
import { trimUrl } from 'utils/trimUrs';

export const UserPage = () => {
  const [userData, setUserData] = useState<IUser>();
  const location = useLocation();

  const { data } = useGetUsersQuery('');

  const { data: userPosts, isLoading } = useGetUserPostQuery(
    trimUrl(location.pathname)
  );

  const userPostsToDisplay = userPosts?.map((post: IPost) => {
    return (
      <UserPost
        title={post.title}
        text={post.body}
        tags={post.tags}
        key={`post ${post.id}`}
      />
    );
  });

  useEffect(() => {
    if (data) {
      const currentUser = getCurrentUserFromCache(data, location.pathname);
      setUserData(currentUser);
    }
  }, [location.pathname, data]);

  return (
    <Box minHeight="100vh" padding={'20px 20px'} backgroundColor={'#3e3e42'}>
      <Skeleton isLoaded={!isLoading}>
        <Header
          title={`${userData?.firstName}'s ${userData?.lastName} Posts`}
        />
      </Skeleton>
      <Grid templateColumns={'1fr 2fr 1fr'} gap={'3'}>
        <Skeleton isLoaded={!isLoading}>
          {userData && (
            <UserCard
              firstName={userData.firstName}
              lastName={userData.lastName}
              id={userData.id}
              image={userData.image}
              email={userData.email}
              age={userData.age}
            />
          )}
        </Skeleton>
        <Skeleton isLoaded={!isLoading} w={'100%'} h={'100%'}>
          <HStack flexWrap={'wrap'}>{userPostsToDisplay}</HStack>
        </Skeleton>
      </Grid>
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
