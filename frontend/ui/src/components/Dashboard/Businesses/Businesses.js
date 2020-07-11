import React from "react";
import { useBusinesses } from "../../../modules/businesses/hooks";
import { Card, Image, Heading } from "rebass";
import addImg from "./../../../assets/addIcon.png";
import { Flex } from "reflexbox";
import { Alert } from "../../shared/Alert/Alert";
import { Link } from "react-router-dom";

export const Businesses = () => {
  const { savedBusinesses, businessesError, onClickBusiness } = useBusinesses();

  return (
    <>
      {businessesError && (
        <Alert
          id="businesses-error"
          callouts={false}
          errors={[
            {
              id: "businesses-error",
              msg: businessesError,
              isError: true
            }
          ]}
        />
      )}
      <Flex flexWrap="wrap" justifyContent="center" p={3}>
        <Card
          p={2}
          m={2}
          sx={{
            width: ["100%", "30%"]
          }}
        >
          <Image
            src={addImg}
            sx={{
              borderRadius: 8
            }}
          />
          <Heading>Add</Heading>
        </Card>
        {savedBusinesses &&
          Object.values(savedBusinesses).map(({ name, id }) => (
            <Card
              p={2}
              m={2}
              sx={{
                width: ["100%", "30%"]
              }}
            >
              <Image
                src={addImg}
                sx={{
                  borderRadius: 8
                }}
              />
              <Link to={`/business/${id}`} >
                <Heading id={id} onClick={(e) => onClickBusiness(e.target.id)}>{name}</Heading>
              </Link>
            </Card>
          ))}
      </Flex>
    </>
  );
};
