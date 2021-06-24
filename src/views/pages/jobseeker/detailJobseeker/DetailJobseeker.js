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
  

const DetailJobseeker = (props) => {
    const [item, setItem] = useState(null);
    const [rn, setRn] = useState(null);
    const id = props.match.params.id;
    useEffect(()=>{
        const getRecruitmentNews = async(rnId) => {
            try {
                const response = await axios.get(Config.LIST_RECRUITMENTNEWS + '/' + rnId);
                if (response.status === 200) {
                    setRn(response.data);
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

        const getData = async () => {
            if (id > 0) {
                try {
                    const response = await axios.get(Config.LIST_JOBSEEKER + '/' + id);
                    if (response.status === 200) {
                        setItem(response.data);
                        getRecruitmentNews(response.data.rn_id);
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


        getData();
    }, [id]);
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
                                        {rn ? rn.title : 'title'}
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="cv_path">CV</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        {item ? item.cv_path : '...'}
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="cover_letter_path">Cover Letter</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        {item ? item.cover_letter_path : '...'}
                                    </CCol>
                                </CFormGroup>
                                <CFormGroup row>
                                    <CCol md="3">
                                        <CLabel htmlFor="exp_years">Experience Years</CLabel>
                                    </CCol>
                                    <CCol xs="12" md="9">
                                        {item ? item.exp_years : '...'}
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

export default DetailJobseeker
