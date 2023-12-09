import {
  Card,
  CardBody,
  Box,
  Text,
  IconButton,
  HStack,
} from '@chakra-ui/react';

import { useState, useEffect } from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface IHeader {
  title: string;
}

export const Header = (props: IHeader) => {
  const [title, setTitle] = useState<string>(props.title);

  useEffect(() => {
    setTitle(props.title);
  }, [props.title]);

  return (
    <Card width={'100%'} mb={'16px'} colorScheme={'gray'}>
      <CardBody>
        <HStack>
          <Link to={'/'}>
            <IconButton
              aria-label="1"
              icon={<FaHome color="white" />}
              colorScheme={'telegram'}
              size={'sm'}
            />
          </Link>
          <Text fontSize={'2xl'}>{title}</Text>
        </HStack>
        <Box></Box>
      </CardBody>
    </Card>
  );
};
