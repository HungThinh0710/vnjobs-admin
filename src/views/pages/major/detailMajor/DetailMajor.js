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

const DetailMajor = () => {
    return (
        <>
            <CRow className="d-flex justify-content-center">
                <CCol xs="12" md="6">
                    <CCard >
                        <CCardHeader>
                        Detail Major
                        <small> Form</small>
                        </CCardHeader>
                        <CCardBody>
                        <CForm action="" method="post" className="form-horizontal">
                            <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="major_name">Major Name</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput type="text" id="major_name" name="major_name" value="IT" disabled placeholder="Enter Email..." autoComplete="email" />
                                {/* <CFormText className="help-block">Please enter your email</CFormText> */}
                            </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="image_path">Image Path</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput type="text" id="image_path" name="image_path" value="path" disabled placeholder="Enter Password..." autoComplete="current-password"/>
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

export default DetailMajor
