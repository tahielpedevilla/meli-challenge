import React from "react";
import {Container, Grid, Image, Link, Stack, Text} from "@chakra-ui/react";
import {Link as ReactLink} from "react-router-dom";

import {ProductCardSmall, ProductCardLarge} from "../components/ProductCard";
import LastOffers from "../components/LastOffers";
import DiscountCard from "../components/DiscountCard";

const HomeScreen: React.FC = () => {
  return (
    <Stack spacing={4}>
      <Image
        alt="Banner Image"
        h="340px"
        objectFit="cover"
        src="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2Fhome-sliderdesktop-1.webp?alt=media&token=585326e3-9f42-4e02-8984-52e1aa08867c"
      />
      <Container alignSelf="center" maxW="container.xl">
        <Stack direction="row" justify="space-between" mb={12} spacing={0}>
          <Image
            _hover={{boxShadow: "lg"}}
            borderRadius={5}
            boxShadow="md"
            cursor="pointer"
            h="100%"
            objectFit="cover"
            src="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP772680-MLA47918261265_102021-B.webp?alt=media&token=f5a049b1-f68c-40e0-9b19-9b0b0e9cd1ed"
            transition="box-shadow .2s ease-in-out"
            w={"calc(50% - .5rem)"}
          />
          <Image
            _hover={{boxShadow: "lg"}}
            borderRadius={5}
            boxShadow="md"
            cursor="pointer"
            h="100%"
            objectFit="cover"
            src="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP818885-MLA47918261210_102021-B.webp?alt=media&token=04f6fae0-ed30-4803-8762-f3588e8f8dbf"
            transition="box-shadow .2s ease-in-out"
            w={"calc(50% - .5rem)"}
          />
        </Stack>
        <Stack align="center" pb={10}>
          <Text color="blackAlpha.800" letterSpacing={1.2} mb={2}>
            APROVECHÁ LAS OFERTAS DEL CYBER MONDAY
          </Text>
          <Stack direction="column" spacing={4}>
            <Grid align="center" gap={4} templateColumns="repeat(12, minmax(26px, 104px))">
              <ProductCardSmall
                category="Informática"
                discount="30"
                image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_649806-MLA47931899819_102021-G.webp?alt=media&token=a19daf53-1d1d-48f9-af0b-3a972e76cbf4"
              />
              <ProductCardSmall
                category="Celulares"
                discount="25"
                image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_664678-MLA47932048458_102021-G.webp?alt=media&token=d017f441-fd18-462f-8108-489a9001b11a"
              />
              <ProductCardLarge
                category={"Hogar & deco"}
                discount="45"
                image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP_759262-MLA48064590884_102021-C.webp?alt=media&token=9528fadc-b9ab-444f-ba73-dcab15bbab41"
              />
              <ProductCardLarge
                category="Electro"
                discount="30"
                image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP_927976-MLA47933252037_102021-C.webp?alt=media&token=6941c3fc-3d84-4e0d-b3fb-0094ee67b2f8"
              />
            </Grid>
            <Grid align="center" gap={4} templateColumns="repeat(12, minmax(26px, 104px))">
              <ProductCardSmall
                category="Tv y audio"
                discount="30"
                image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_998916-MLA47932058477_102021-G.webp?alt=media&token=828daaec-d089-447f-ae24-2b13d268a4d5"
              />
              <ProductCardSmall
                category="Herramientas"
                discount="40"
                image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_963606-MLA47932058496_102021-G.webp?alt=media&token=efb35fc1-163a-4eb9-9230-a0e8e91460c3"
              />
              <ProductCardLarge
                category="Deportes"
                discount="40"
                image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP_613724-MLA47933062640_102021-C.webp?alt=media&token=11c7de8d-f4e9-4436-a225-18a2ebc677cf"
              />
              <ProductCardSmall
                category="Autopartes"
                discount="35"
                image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_929993-MLA47932058522_102021-G.webp?alt=media&token=62b826ab-31e3-4f6a-9fef-27bbbe9637a8"
              />
              <ProductCardSmall
                category="Fitness"
                discount="50"
                image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_724888-MLA47932058534_102021-G.webp?alt=media&token=4bdec7f0-4dbe-4435-b90f-5ef77ae9276c"
              />
            </Grid>
          </Stack>
        </Stack>
        <Stack align="center">
          <Text color="blackAlpha.800" letterSpacing={1.2} mb={2}>
            MÁS CATEGORÍAS CON DESCUENTO
          </Text>
          <Stack>
            <Grid align="center" gap={4} templateColumns="repeat(12, minmax(26px, 104px))">
              <ProductCardLarge
                category="Climatización"
                discount="30"
                image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP_971824-MLA48101530354_112021-C.jpeg?alt=media&token=98f11601-0a3a-41da-afd4-cf3421d23f23"
              />
              <ProductCardLarge
                category="Ropa y accesorios"
                discount="50"
                image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP_980822-MLA48101278519_112021-C.jpeg?alt=media&token=86bb76a8-0fa0-41fd-8c52-ac75f41733c0"
              />
              <ProductCardSmall
                category="Gaming"
                discount="30"
                image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_823507-MLA48101206773_112021-G.jpeg?alt=media&token=a3ebbc8b-41e0-4977-9d2c-2749e3e479a9"
              />
              <ProductCardSmall
                category="Supermercado"
                discount="40"
                image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_850503-MLA48101206793_112021-G.jpeg?alt=media&token=95925cf3-c631-4629-a06d-3c900bc47645"
              />
            </Grid>
          </Stack>
        </Stack>
      </Container>
      <Stack
        align="center"
        bgImage="url('https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP_665407-MLA47977664923_102021-F.jpeg?alt=media&token=20a1b3d9-7b67-47ae-ba66-7608c6a0994a')"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="180px"
        p="30px 0"
      >
        <Grid
          gap={4}
          gridTemplateColumns="repeat(12,minmax(26px,104px));"
          justifyContent="center"
          margin="auto"
          maxW="1167px"
        >
          <DiscountCard preTitle="Aprovechá hasta" title="18x sin interés" />
          <DiscountCard preTitle="Te llega en 48 hs" title="Full" />
          <DiscountCard preTitle="Desde $3500" title="Envíos gratis" />
        </Grid>
      </Stack>
      <Container alignSelf="center" maxW="container.xl">
        <Stack>
          <Grid align="center" gap={4} templateColumns="repeat(12, minmax(26px, 104px))">
            <ProductCardLarge
              category="Jardín y aire libre"
              discount="25"
              image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP_700696-MLA47934714671_102021-C.jpeg?alt=media&token=65cb6e85-5ff4-4721-8af2-ff90e22fda7b"
            />
            <ProductCardSmall
              category="Cuidado personal"
              discount="50"
              image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_663633-MLA47932272044_102021-G.jpeg?alt=media&token=eb8194ae-ec88-4834-96ed-5435fb3a7fe4"
            />
            <ProductCardSmall
              category="Construcción"
              discount="35"
              image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_975479-MLA47932048653_102021-G.jpeg?alt=media&token=c6097e91-aa51-4018-9dd5-341747f1362d"
            />
            <ProductCardSmall
              category="Juegos y jugetes"
              discount="40"
              image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_744293-MLA48101278766_112021-G.jpeg?alt=media&token=fac9ea70-cfab-431d-b6fe-4c78af896a2c"
            />
            <ProductCardSmall
              category="Motopartes"
              discount="35"
              image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_873148-MLA47932058897_102021-G.jpeg?alt=media&token=d06c8cc6-5df3-4e78-9e2f-d602234db253"
            />
          </Grid>
        </Stack>
        <LastOffers />
        <Stack mb={4} mt={8}>
          <Image
            borderRadius={4}
            src="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP_649609-MLA47307981762_082021-OO.webp?alt=media&token=56671283-e928-4e4b-b69f-de2a5157c6f9"
          />
        </Stack>
        <Stack>
          <Grid align="center" gap={4} templateColumns="repeat(12, minmax(26px, 104px))">
            <ProductCardLarge
              category="Dormitorio"
              discount="45"
              image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP_759262-MLA48064590884_102021-C.webp?alt=media&token=9528fadc-b9ab-444f-ba73-dcab15bbab41"
            />
            <ProductCardSmall
              category="Pequeños electro"
              discount="30"
              image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_899183-MLA48101278840_112021-G.jpeg?alt=media&token=3ecc67fe-76e9-4096-86cd-2524684c6447"
            />
            <ProductCardSmall
              category="Bebés"
              discount="40"
              image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_899183-MLA48101278840_112021-G.jpeg?alt=media&token=3ecc67fe-76e9-4096-86cd-2524684c6447"
            />
            <ProductCardSmall
              category="Libros"
              discount="25"
              image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_984639-MLA48101445250_112021-G.jpeg?alt=media&token=7255598e-725a-468f-b404-523788864190"
            />
            <ProductCardSmall
              category="Sustentables"
              discount="45"
              image="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_674471-MLA47932240681_102021-G.jpeg?alt=media&token=39551841-378f-4cb9-bb52-610dce2ba5a0"
            />
          </Grid>
        </Stack>
        <Stack mb={12} mt={4}>
          <Image
            borderRadius={4}
            src="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP_912152-MLA48035925849_102021-OO.jpeg?alt=media&token=0731d27c-b2e0-420a-bb00-e2c6e11c360b"
          />
        </Stack>
        <Stack align="center" spacing={4}>
          <Text color="blackAlpha.800" letterSpacing={1.2} mb={2}>
            BENEFICIOS EXCLUSIVOS
          </Text>
          <Stack direction="row" my={4} spacing={4}>
            <Image
              borderRadius={6}
              src="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP_899967-MLA48091266177_112021-OO.jpeg?alt=media&token=28072324-ca66-43c0-810b-0bb633b184a6"
              w={"calc(50% - .5rem)"}
            />
            <Image
              borderRadius={6}
              src="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP_985984-MLA47953979174_102021-OO.jpeg?alt=media&token=124fb0fc-8430-4c50-a79c-a4f158a62475"
              w={"calc(50% - .5rem)"}
            />
          </Stack>
          <Image
            borderRadius={4}
            src="https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_NQ_NP_601303-MLA48012631444_102021-OO.jpeg?alt=media&token=22ea5296-576f-48fd-a66c-1b114edf1896"
          />
        </Stack>
        <Text color="blackAlpha.800" fontSize="xs" mt={4}>
          Imágenes de referencia.Válido en Argentina del 01/11 al 08/11/2021 para compras de
          productos seleccionados publicados en http://www.mercadolibre.com.ar/ofertas/cyber-monday.
          Ofertas a cargo de cada usuario vendedor, sujetas a disponibilidad de los productos
          ofertados y a las condiciones establecidas por el vendedor en el anuncio publicado en el
          Sitio Web. Cuotas sin interés en bancos seleccionados. Más informacion en Promociones
          Bancarias. Envios gratis en productos nuevos seleccionados de precio superior a $3500.
          Contratos de adhesión - Ley N° 24.240 de Defensa del Consumidor
        </Text>
      </Container>
      <Container alignSelf="center" maxW="container.xl" pb={4}>
        <Link as={ReactLink} to="/productId">
          Ver página de detalle de producto
        </Link>
      </Container>
    </Stack>
  );
};

export default HomeScreen;
