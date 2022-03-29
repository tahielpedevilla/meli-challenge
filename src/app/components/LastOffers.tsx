import React from "react";
import {Grid, Link, Stack, Text} from "@chakra-ui/react";
import {Link as ReactLink} from "react-router-dom";

import ProductCardFull from "./ProductCardFull";

const products = [
  {
    id: 1,
    discount: "21",
    image:
      "https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_858111-MLA47729531255_102021-P.jpeg?alt=media&token=7792f8ad-6789-4f99-be34-f8e9e809a80d",
    installments: "Hasta 18 cuotas sin interés",
    oldPrice: 114999,
    price: 89999,
    shipping: "Envío gratis",
    title: "Aire Acondicionado Sanyo Split Frío/calor 5418 Frigorías Blanco 220",
  },
  {
    id: 2,
    discount: "9",
    image:
      "https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_715512-MLA46711394228_072021-P.jpeg?alt=media&token=e060032a-f8e6-436a-ad3c-38c2f33597cc",
    installments: "Hasta 18 cuotas sin interés",
    oldPrice: 20999,
    price: 18999,
    shipping: "Envío gratis",
    title: "Nokia 24 M 64 Gb Carbón 3 Gb Ram",
  },
  {
    id: 3,
    discount: "9",
    image:
      "https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_857713-MLA47682001678_092021-P.jpeg?alt=media&token=f39406c5-db64-4400-a6a8-b17155b88e0a",
    installments: "Hasta 18 cuotas sin interés",
    oldPrice: 84458,
    price: 69799,
    shipping: "Envío gratis",
    title: "Aire Acondicioando Tcl Taca 5100w Fcsa/el 4500 Frío/calor",
  },
  {
    id: 4,
    discount: "18",
    image:
      "https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_975344-MLA47584874405_092021-P.jpeg?alt=media&token=c71dd2fa-e88a-4c7c-abc5-a9f2b54a3d4f",
    installments: "",
    oldPrice: 92999,
    price: 75999,
    shipping: "Envío gratis",
    title:
      "Notebook Lenovo Ideapad S340-14api  Platinum Gray 14 , Amd Ryzen 3 3200u  8gb De Ram 1tb Hdd, Amd Radeon Rx Vega 3 1366x768px Windows 10 Home",
  },
  {
    id: 5,
    discount: "9",
    image:
      "https://firebasestorage.googleapis.com/v0/b/meli-challenge-83230.appspot.com/o/images%2FD_Q_NP_858735-MLA43632117900_092020-P.jpeg?alt=media&token=dcd5e703-674f-4fff-bafa-bc2efcec1f91",
    installments: "Hasta 18 cuotas sin interés",
    oldPrice: 154458,
    price: 139999,
    shipping: "Envío gratis",
    title:
      "Aire Acondicionado LG Dual Cool Inverter  Split  Frío/calor 5545 Frigorías  Blanco 220v S4-w24ke3a1",
  },
];

const LastOffers = () => (
  <Stack align="center" pt={12}>
    <Stack alignSelf="flex-start" direction="row">
      <Text color="gray.600" letterSpacing={1.2} mb={2}>
        ¡OFERTAS POR POCAS HORAS!
      </Text>
      <Link as={ReactLink} to="/productId">
        Ver más
      </Link>
    </Stack>
    <Grid align="center" gap={4} templateColumns="repeat(10, minmax(26px, 104px))">
      {products.map((product) => (
        <ProductCardFull
          key={product.id}
          discount={product.discount}
          image={product.image}
          installments={product.installments}
          oldPrice={product.oldPrice}
          price={product.price}
          shipping={product.shipping}
          title={product.title}
        />
      ))}
    </Grid>
  </Stack>
);

export default LastOffers;
