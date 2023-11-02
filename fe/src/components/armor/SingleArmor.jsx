import React from 'react'
import { Card, CardHeader, CardBody, Heading, Text, Stack, Divider, CardFooter, Button, ButtonGroup, Image } from '@chakra-ui/react'
import MainLayout from "../../layout/MainLayout"

import { ChakraProvider } from '@chakra-ui/react'

const SingleArmor = ({ img, description, price, title, helmet, }) =>
{
    

    return (

        <Card className='' maxW='md'>
            <CardBody>
                <Image
                
                    src={ img }
                    alt={ title }
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{ title }</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque inspired
                        spaces, earthy toned spaces and for people who love a chic design with a
                        sprinkle of vintage design.
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        { price }$
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                    <Button variant='solid' colorScheme='blue'>
                        Buy now
                    </Button>
                    <Button variant='ghost' colorScheme='blue'>
                        Add to cart
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}

export default SingleArmor
