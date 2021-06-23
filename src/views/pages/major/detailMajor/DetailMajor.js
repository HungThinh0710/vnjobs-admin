import React, { useEffect, useState } from 'react'
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormGroup,
    CInput,
    CLabel,
    CRow,
    CForm,
  } from '@coreui/react'
import axios from 'axios';
import * as Config from '../../../../reusable/Config';

const DetailMajor = (props) => {
    const [item, setItem] = useState(null);
    const id = props.match.params.id;
    useEffect(()=>{
        const getData = async () => {
            try {
                const response = await axios.get(Config.LIST_MAJOR + '/' + id);
                if (response.status === 200) {
                    setItem(response.data);
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
        getData();
    }, [id]);
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
                                {item ? item.major_name : 'Major name'}
                            </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="image_path">Image Path</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                {item ? item.image_path : 'path'}
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

export default DetailMajor
