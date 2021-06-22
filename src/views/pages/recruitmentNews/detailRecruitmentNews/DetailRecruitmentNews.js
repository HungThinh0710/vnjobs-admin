import React from 'react'
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
    CInputFile,
    CForm,
    CFormText
  } from '@coreui/react'
import CIcon from '@coreui/icons-react'

const DetailRecruitmentNews = () => {
    return (
        <>
            <CRow className="d-flex justify-content-center">
                <CCol xs="12" md="6">
                    <CCard >
                        <CCardHeader>
                        Detail RecruitmentNews
                        <small> Form</small>
                        </CCardHeader>
                        <CCardBody>
                        <CForm action="" method="post" className="form-horizontal">
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="org_id">Org ID</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="org_id" name="org_id" value="1" disabled placeholder="Enter Email..." />
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="author_id">Author ID</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="author_id" name="author_id" value="1" disabled placeholder="Enter text..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="major_id">Major ID</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="major_id" name="major_id" value="1" disabled placeholder="Enter text..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="title">Title</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="title" name="title" value="1" disabled placeholder="Enter text..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="content">Content</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="content" name="content" value="1" disabled placeholder="Enter text..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="address">Address</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="address" name="address" value="1" disabled placeholder="Enter text..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="city">City</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="city" name="city" value="1" disabled placeholder="Enter text..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="work_type">Work Type</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="work_type" name="work_type" value="1" disabled placeholder="Enter text..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="start_time">Start Time</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="start_time" name="start_time" value="1" disabled placeholder="Enter text..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="end_time">End Time</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="end_time" name="end_time" value="1" disabled placeholder="Enter text..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="interview_start_time">Interview Start Time</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="interview_start_time" name="interview_start_time" value="1" disabled placeholder="Enter text..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="interview_end_time">Interview End Time</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="interview_end_time" name="interview_end_time" value="1" disabled placeholder="Enter text..."/>
                                </CCol>
                            </CFormGroup>
                        </CForm>
                        </CCardBody>
                        <CCardFooter>
                        <CButton type="submit" size="sm" color="primary"><CIcon name="cil-scrubber" /> Update</CButton> <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
                        </CCardFooter>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default DetailRecruitmentNews
