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
            backgroundColor: theme.colors.secondary,
            color: theme.colors.primary,
         }}>
         {hasBusinessHours && <Heading>Hours of Operation</Heading>}
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
   )
}