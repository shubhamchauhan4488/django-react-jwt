import React from "react";
import { useBusinessInfo } from "../../modules/businesses/hooks";
import { Heading, Button } from "rebass";
import { Flex } from "reflexbox";
import { Alert } from "../shared/Alert/Alert";
import { BusinessHours } from "./BusinessHours";
import { Header } from "../Header/Header";
import theme from '../../Theme/theme'
import { BusinessDescription } from "./BusinessDescription";

export const BusinessesInfo = () => {
  const { selectedBusiness } = useBusinessInfo();

  return (
    <>
      <Header />
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        sx={{
          backgroundImage: `url('https://images.pexels.com/photos/2310904/pexels-photo-2310904.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: '400px',
          color: theme.colors.primary,
        }}>
        <Flex
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            minHeight: "100%",
            minWidth: "100%",
          }}
        >
          <Flex
            flexDirection="column"
            flexGrow="1"
            justifyContent="center"
            alignItems="center">
            <Heading>{selectedBusiness?.name}</Heading>
            <i>"{selectedBusiness?.tagline}"</i>
          </Flex>
        </Flex>
      </Flex>
      <BusinessDescription />
      <BusinessHours />
      <Button variant='primary' mr={2}>Book Now</Button>
    </>
  );
};
