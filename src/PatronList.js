import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_ALL_PATRONS = gql`
  query GetPatrons {
    patrons {
      id
      firstName
      lastName
      status
    }
  }
`;

export const PatronList = () => {
  const { data, loading } = useQuery(GET_ALL_PATRONS);
  const { patrons } = data;
  console.log({ patrons });

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Patrons</h1>
      {patrons && patrons.map((patron) => <div>{patron.firstName} {patron.lastName}</div>)}
    </>
  );
};
