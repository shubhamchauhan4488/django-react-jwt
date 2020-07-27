import React, { useEffect } from "react";
import { useBusinessInfo } from '../../modules/businesses/hooks'
import { weekdaysMap } from "../../constants/daysAndHours";
import { convert24To12hrformat } from "../../globals/Utilities";
import { Heading } from "rebass";
import theme from '../../Theme/theme'
import { Flex } from "reflexbox";

export const BusinessHours = () => {
   const { selectedBusinessHours, hasBusinessHours, dispatchFetchBusinessHours } = useBusinessInfo()
   useEffect(() => {
      dispatchFetchBusinessHours()
   }, [])

   const formattedDays = (weekdayFrom, weekdayTo) => {
      return `${weekdaysMap[weekdayFrom] ?? ''} - ${weekdaysMap[weekdayTo] ?? ''}`
   }

   const formattedHours = (fromHour, toHour) => {
      return `${convert24To12hrformat(fromHour) ?? ''} - ${convert24To12hrformat(toHour) ?? ''}`
   }

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
            {<Heading
               sx={{
                  margin: '-50px -15px 20px 5px',
                  backgroundColor: theme.colors.background,
                  color: theme.colors.primary,
                  zIndex: '2',
               }}
            >Hours of Operation</Heading>}
            {hasBusinessHours && Object.values(selectedBusinessHours).map((businessHour) => {
               const dayString = formattedDays(businessHour?.weekdayFrom, businessHour?.weekdayTo)
               const hourString = formattedHours(businessHour?.fromHour, businessHour?.toHour)
               return (
                  <>
                     {dayString} {hourString}
                     <br />
                  </>
               )
            })}
         </Flex>
      </Flex>
   )
}