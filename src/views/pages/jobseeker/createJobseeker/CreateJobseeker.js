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
  CSelect,
  CInputFile
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
const CreateJobseeker = () => {  
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
              <CLabel htmlFor="company">Recruitment News</CLabel>
              <CSelect custom name="nrn_id" id="rn_id">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </CSelect>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="vat">CV</CLabel>
            <CInputFile id="file-input" name="cv_path"/>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="street">Cover Letter</CLabel>
            <CInputFile id="file-input" name="cover_letter_path"/>
            </CFormGroup>
            <CFormGroup>
              <CLabel htmlFor="street">Experience Years</CLabel>
              <CInput id="street" placeholder="Enter street name" />
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

export default CreateJobseeker;
