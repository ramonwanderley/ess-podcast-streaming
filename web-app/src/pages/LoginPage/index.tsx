import { Center, Image, Input, Box, Button, FormControl, Stack, Text, VStack, Link } from "@chakra-ui/react";
import podshare_logo from '../../styles/assets/podshare-logo.svg';
// import { Link } from "react-router-dom";

const border = "0px";

function LoginGroup () {
    return (
        <Stack spacing="2" border={border} w="15%">
            <Text align="center" fontWeight="bold">Usuário ou E-mail</Text>    
            
            <FormControl alignContent="center" alignItems="center" alignSelf="center" marginTop="15%">
                <Input type="email" placeholder="E-mail" border={border} marginBottom="2.5%" size="sm" variant="filled" />
            </FormControl>
            
            <Text align="center" fontWeight="bold">Senha</Text>
            <FormControl>
                <Input type="password" placeholder="Senha" border={border} size="sm" variant="filled"/> 
            </FormControl>
            <Button 
                colorScheme="orange" 
                type="submit" 
                variant="solid" 
                marginTop="10%" 
                marginLeft="35%" 
                w="40%" 
                alignSelf="center"
            >Login</Button>
        </Stack>
    );
}

export default function LoginPage() {
    return (
        <Box alignContent="center">
            <VStack>
                <Image src={podshare_logo} alt="podshare logo" border={border} marginTop="8%"/>
                <LoginGroup />
            </VStack>
            <Center>
                <Link marginTop=".75%" href="/register">Não possui uma conta? Clique aqui</Link>
            </Center>
        </Box>

    //     <Center marginTop="8%">
    //     <Center>
    //         <Image src={podshare_logo} alt="podshare logo" border="2px"/>
    //     </Center>
    //     <Center 
    //         border="2px" 
    //         borderColor="red" 
    //         display='flex'
    //         bg='tomato'
    //         h='100px'
    //     >
    //         <LoginGroup /> 
    //     </Center>
    //     <Button colorScheme="orange" type="submit" variant="solid">
    //         Login
    //     </Button>
    // </Center>
    );
}