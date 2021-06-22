import React from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CCardFooter,
  CButton,
  CInputFile
} from '@coreui/react'
import CIcon from '@coreui/icons-react';
const CreateMajor = () => {
  return <>
  <CRow className="d-flex justify-content-center">
    <CCol xs="12" sm="6">
      <CCard>
        <CCardHeader>
          Create Major
          <small> Form</small>
        </CCardHeader>
        <CCardBody>
          <CFormGroup>
            <CLabel htmlFor="company">Major Name</CLabel>
            <CInput id="company" placeholder="Enter your major name" />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="vat">Image</CLabel>
            <CInputFile id="file-input" name="file-input"/>
          </CFormGroup>
        </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
          </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</>
};

export default CreateMajor;
