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
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react';

const CreateRecruitmentNews = () => {
  return <>
  <CRow className="d-flex justify-content-center">
    <CCol xs="12" sm="6">
      <CCard>
        <CCardHeader>
          Create RecruitmentNews
          <small> Form</small>
        </CCardHeader>
        <CCardBody>
          <CFormGroup>
            <CLabel htmlFor="company">Company</CLabel>
            <CSelect custom name="org_id" id="org_id">
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
            <CLabel htmlFor="vat">Major</CLabel>
            <CSelect custom name="major_id" id="major_id">
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
            <CLabel htmlFor="title">Title</CLabel>
            <CInput id="title" placeholder="Enter title" />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="content">Content</CLabel>
            <CInput id="content" placeholder="Enter content" />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="address">Address</CLabel>
            <CInput id="address" placeholder="Enter address" />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="city">City</CLabel>
            <CInput id="city" placeholder="Enter city" />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="work_type">Work Type</CLabel>
            <CInput id="work_type" placeholder="Enter work type" />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="start_time">Start Time</CLabel>
            <CInput type="datetime-local" id="start_time" />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="end_time">End Time</CLabel>
            <CInput type="datetime-local" id="end_time" />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="interview_start_time">Interview Start Time</CLabel>
            <CInput type="datetime-local" id="interview_start_time" />
          </CFormGroup>
          <CFormGroup>
            <CLabel htmlFor="interview_end_time">Interview End Time</CLabel>
            <CInput type="datetime-local" id="interview_end_time" />
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

export default CreateRecruitmentNews;
