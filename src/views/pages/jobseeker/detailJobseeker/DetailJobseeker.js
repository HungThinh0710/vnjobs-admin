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

const DetailJobseeker = () => {
    return (
        <>
            <CRow className="d-flex justify-content-center">
                <CCol xs="12" md="6">
                    <CCard >
                        <CCardHeader>
                        Detail Jobseeker
                        <small> Form</small>
                        </CCardHeader>
                        <CCardBody>
                            <CForm action="" method="post" className="form-horizontal">
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="rn_id">Recruitment News</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="rn_id" name="rn_id" value="1" placeholder="Enter Email..." disabled autoComplete="email" />
                                        {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="cv_path">CV</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="cv_path" name="cv_path" value="path" disabled autoComplete="current-password"/>
                                        {/* <CFormText className="help-block">Please enter your password</CFormText> */}
                                </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="cover_letter_path">Cover Letter</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="cover_letter_path" name="cover_letter_path" value="path" disabled autoComplete="current-password"/>
                                        {/* <CFormText className="help-block">Please enter your password</CFormText> */}
                                </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="exp_years">Experience Years</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        <CInput type="text" id="exp_years" name="exp_years" value="path" disabled autoComplete="current-password"/>
                                        {/* <CFormText className="help-block">Please enter your password</CFormText> */}
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

export default DetailJobseeker
