import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";

interface IModal {
  toggleShow: () => void;
  centredModal: boolean;
  setCentredModal: React.Dispatch<React.SetStateAction<boolean>>;
  job: {
    _id: string;
    jobName: string;
    prefferedSkills: string[];
    suitableDisabilities: string[];
    salaryPerYear: string[];
  };
}

const ModalForDetails: React.FC<IModal> = ({
  toggleShow,
  centredModal,
  setCentredModal,
  job: { jobName, prefferedSkills, suitableDisabilities, salaryPerYear },
}) => {
  return (
    <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
      <MDBModalDialog centered>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>
              <span style={{ color: "black" }}>{jobName}</span>
            </MDBModalTitle>
            <MDBBtn className="btn-close" color="dark" onClick={toggleShow} />
          </MDBModalHeader>
          <MDBModalBody>
            <p style={{ color: "black" }}>
              <strong>Preferred Skills:</strong> {prefferedSkills.join(", ")}
            </p>
            <p style={{ color: "black" }}>
              <strong>Suitable Disabilities:</strong>{" "}
              {suitableDisabilities.join(", ")}
            </p>
            <p style={{ color: "black" }}>
              <strong>Salary per Year:</strong> {salaryPerYear}
            </p>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={toggleShow}>
              Close
            </MDBBtn>
            <MDBBtn>Apply</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default ModalForDetails;
