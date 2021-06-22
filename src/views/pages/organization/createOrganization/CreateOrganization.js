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
const CreateOrganization = () => {
  return <>
  <CRow className="d-flex justify-content-center">
    <CCol xs="12" sm="6">
      <CCard>
        <CCardHeader>
          Create Jobseeker
          <small> Form</small>
        </CCardHeader>
        <CCardBody>
          <CFormGroup>
            <CLabel htmlFor="company">Organization Name</CLabel>
            <CInput id="company" placeholder="Enter your company name" />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="tax">Tax ID</CLabel>
            <CInput id="tax" placeholder="1234567890" />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="phones">Phone</CLabel>
            <CInput id="phones" placeholder="Enter phone" />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="address">Address</CLabel>
            <CInput id="address" placeholder="Enter address" />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="logo">Logo</CLabel>
            <CInputFile id="logo" name="cover_letter_path"/>
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="background">Background</CLabel>
            <CInputFile id="background" name="cover_letter_path"/>
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="description">Description</CLabel>
            <CInput id="description" placeholder="Description" />
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

export default CreateOrganization;
