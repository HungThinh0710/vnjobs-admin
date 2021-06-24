import React, { useState, useEffect } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormGroup,
    CLabel,
    CRow,
    CForm,
  } from '@coreui/react'
import axios from 'axios';
import * as Config from '../../../../reusable/Config';

const DetailOrganization = (props) => {
    const [item, setItem] = useState(null);
    const [owner, setOwner] = useState(null);
    const id = props.match.params.id;

    useEffect(() => {
        const getOwner = async(ownerId) => {
            try {
                const response = await axios.get(Config.LIST_USER + '/find/' + ownerId, {withCredentials: true});
                if (response.status === 200) {
                    setOwner(response.data);
                }
            } catch (error) {
                if (error.response !== undefined) {
                    if (error.response.status === 401) {
                        console.log("Un Authenticated");
                    }
                    else {
                        console.log(error.response);
                    }
                }
                else {
                    console.log(error.message);
                }
            }
        }

        const getOrganization = async () => {
            if (id > 0) {
                try {
                    const response = await axios.get(Config.LIST_ORGANIZATION + '/find-by-id/' + id);
                    if (response.status === 200) {
                        setItem(response.data);
                        getOwner(response.data.owner_id);
                    }
                } catch (error) {
                    if (error.response.status !== undefined) {
                        console.log(error.response);
                    }
                    else {
                        console.log(error.message);
                    }
                }
            }
            else {
                
            }
        }

        getOrganization();
    }, [id]);

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
                                    {owner ? owner.first_name + ' ' + owner.last_name : '...'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="org_name">Organization Name</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.org_name : '...'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="phones">Phones</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.phones : '...'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="description">Description</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.description : '...'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="tax_id">Tax ID</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.tax_id : '...'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="address">Address</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.address : '...'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="logo_path">Logo Path</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.logo_path : '...'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="cover_path">Cover Path</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.cover_path : '...'}
                                </CCol>
                            </CFormGroup>
                        </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </>
    )
}

export default DetailOrganization
