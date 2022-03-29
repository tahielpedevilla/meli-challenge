import React from "react";
import {Box, Container, IconButton, Stack, Text} from "@chakra-ui/react";
import {IoClose} from "react-icons/io5";

const Footer: React.FC = () => {
  const [display, setDisplay] = React.useState("flex");

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplay("none");
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Box bg="gray.50" pt={2}>
        <Container alignSelf="center" maxWidth="container.xl">
          <Stack direction="column" pb={3} pt={2} spacing={1}>
            <Stack color="blackAlpha.800" direction="row" fontSize="sm" spacing={5}>
              <Text>Trabajá con nosotros</Text>
              <Text>Términos y condiciones</Text>
              <Text>Como cuidamos tu privacidad</Text>
              <Text>Información al usuario financiero</Text>
              <Text>Ayuda</Text>
              <Text>Defensa del Consumidor</Text>
            </Stack>
            <Stack color="blackAlpha.500" direction="column" fontSize="xs" spacing={0}>
              <Text>Copyright © 1999-2022 MercadoLibre S.R.L.</Text>
              <Text>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</Text>
            </Stack>
          </Stack>
        </Container>
        <Stack
          alignItems="center"
          bg="gray.600"
          bottom="0"
          color="#fff"
          direction="row"
          display={display}
          justify="space-between"
          opacity="90%"
          p="10px"
          position="fixed"
          w="100%"
          zIndex="9999"
        >
          <Text fontSize="sm">
            ESTE SITIO FUE DESARROLLADO A MODO DE PRACTICA Y COMO DESAFÍO TÉCNICO. NO TIENE NINGUNA
            RELACIÓN CON LA EMPRESA DE MERCADO LIBRE, NI ES UN INTENTO DE PHISHING.
          </Text>
          <IconButton
            aria-label="Close"
            colorScheme="blackAlpha"
            icon={<IoClose />}
            size="xs"
            onClick={() => setDisplay("none")}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
