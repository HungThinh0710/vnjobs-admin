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

const DetailOrganization = () => {
    return (
        <>
            <CRow className="d-flex justify-content-center">
                <CCol xs="12" md="6">
                    <CCard >
                        <CCardHeader>
                        Detail Organization
                        <small> Form</small>
                        </CCardHeader>
                        <CCardBody>
                        <CForm action="" method="post" className="form-horizontal">
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="owner_id">Owner</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="owner_id" name="owner_id" value="1" disabled placeholder="Enter Email..." />
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="org_name">Organization Name</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="org_name" name="org_name" value="1" disabled placeholder="Enter Password..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="phones">Phones</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="phones" name="phones" value="1" disabled placeholder="Enter Password..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="description">Description</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="description" name="description" value="1" disabled placeholder="Enter Password..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="tax_id">Tax ID</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="tax_id" name="tax_id" value="1" disabled placeholder="Enter Password..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="address">Address</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="address" name="address" value="1" disabled placeholder="Enter Password..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="logo_path">Logo Path</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="logo_path" name="logo_path" value="1" disabled placeholder="Enter Password..."/>
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="cover_path">Cover Path</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CInput type="text" id="cover_path" name="cover_path" value="1" disabled placeholder="Enter Password..."/>
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

export default DetailOrganization
