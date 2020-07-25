import React from "react";
import { useBusinessInfo } from '../../modules/businesses/hooks'
import { Heading } from "rebass";
import theme from '../../Theme/theme'
import { Flex } from "reflexbox";

export const BusinessDescription = () => {
   const { selectedBusiness } = useBusinessInfo();

   return (
      <Flex
         flexDirection="column"
         py={4}
         px={3}
         sx={{
            backgroundColor: theme.colors.secondary,
            color: theme.colors.primary,
         }}>
         <Heading
            mb={3}>
            What do we do ?
      </Heading>
         <span>{selectedBusiness?.description}</span>
      </Flex>
   )
}