import {
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Text,
} from '@chakra-ui/react';

interface IUserPost {
  key: string | number;
  title: string;
  text: string;
  tags: string[];
}

export const UserPost = (props: IUserPost) => {
  const { title, text, tags } = props;

  const postTags = tags.map((tag, index) => {
    return (
      <Button variant="solid" colorScheme="telegram" size={'xs'} key={index}>
        {tag}
      </Button>
    );
  });
  return (
    <Card w={'100%'}>
      <CardBody>
        <Text as={'h3'} fontSize={'xl'} fontWeight={500}>
          {title}
        </Text>
        <Text as={'p'} fontSize={'lg'} mt={'6px'}>
          {text}
        </Text>
      </CardBody>
      <CardFooter>
        <HStack spacing={'2'}>{postTags}</HStack>
      </CardFooter>
    </Card>
  );
};
