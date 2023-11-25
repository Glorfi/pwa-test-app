import * as React from 'react';
import {
  Text,
  Button,
  Card,
  CardBody,
  Image,
  Box,
  CardFooter,
  Grid,
  ButtonGroup,
} from '@chakra-ui/react';

export const DashboardPage = () => (
  <>
    <Box height={'100vh'} padding={'20px 20px'} backgroundColor={'cyan.50'}>
      <Text fontSize={'2xl'}>Users Dashboard</Text>
      <Box>
        <Card colorScheme={'facebook'} size={'sm'} maxW={'sm'}>
          <CardBody>
            <Grid gridTemplateColumns={'100px 1fr'} columnGap={'2'}>
              <Box
                backgroundImage="url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww)"
                backgroundSize={'cover'}
                backgroundPosition={'center'}
                borderRadius={'50%'}
                minW={'100px'}
                minH={'100px'}
                gridColumn={1}
                gridRow={'1/3'}
              />
              <Text fontSize={'lg'} gridColumn={2}>
                Konstantin Bobkov
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
                <Text color={'blackAlpha.900'}>50</Text>
                <Text color={'blackAlpha.600'} width={'min-content'}>
                  Email:
                </Text>
                <Text color={'blackAlpha.900'}>mrglorf@gmail.com</Text>
              </Grid>
            </Grid>
          </CardBody>
          <CardFooter>
            <ButtonGroup>
              <Button variant="solid" colorScheme="telegram" size={'xs'}>
                Profile page
              </Button>
              <Button variant="solid" colorScheme="telegram" size={'xs'}>
                User's posts
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </Box>
    </Box>
  </>
);
