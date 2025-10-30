import React from "react";
import { useParams } from "react-router-dom";
import ContainerDev from "../common/ContainerDev";

const EditRecordOffice = () => {
  const { id } = useParams();
  console.log({ id });
  return (
    <ContainerDev style="min-h-screen">
      <h1>Edit Record office</h1>
    </ContainerDev>
  );
};

export default EditRecordOffice;
