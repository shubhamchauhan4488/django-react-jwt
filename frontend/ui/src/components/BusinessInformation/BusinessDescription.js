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
            backgroundColor: theme.colors.background,
            color: theme.colors.primary,
         }}>
         <Flex
            flexDirection="column"
            py={4}
            px={3}
            mt={3}
            sx={{
               border: `solid 1px ${theme.colors.secondary}`,
               borderRadius: '7px',
               zIndex: '1',
               // TODO : create transition on border
            }}>
            <Heading
               sx={{
                  margin: '-50px -15px 20px 5px',
                  backgroundColor: theme.colors.background,
                  color: theme.colors.primary,
                  zIndex: '2',
               }}>
               What do we do ?
            </Heading>
            <span>{selectedBusiness?.description}</span>
         </Flex>
      </Flex>
   )
}