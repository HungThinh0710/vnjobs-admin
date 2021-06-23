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

const DetailRecruitmentNews = (props) => {
    const [item, setItem] = useState(null);
    const [author, setAuthor] = useState(null);
    const [org, setOrg] = useState(null);
    const [major, setMajor] = useState(null);
    const id = props.match.params.id;

    useEffect(() => {
        const getAuthor = async (authorId) => {
            try {
                const response = await axios.get(Config.LIST_USER + '/find/' + authorId, {withCredentials: true});
                if (response.status === 200) {
                    setAuthor(response.data);
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

        const getOrg = async (orgId) => {
            try {
                const response = await axios.get(Config.LIST_ORGANIZATION + '/find-by-id/' + orgId);
                if (response.status === 200) {
                    setOrg(response.data);
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

        const getMajor = async (majorId) => {
            try {
                const response = await axios.get(Config.LIST_MAJOR + '/' + majorId);
                if (response.status === 200) {
                    setMajor(response.data);
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

        const getRecruitmentNews = async () => {
            if (id > 0) {
                try {
                    const response = await axios.get(Config.LIST_RECRUITMENTNEWS + '/' + id);
                    if (response.status === 200) {
                        setItem(response.data);
                        getAuthor(response.data.author_id);
                        getOrg(response.data.org_id);
                        getMajor(response.data.major_id);
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
            else {

            }
        }
        getRecruitmentNews();
    }, [id]);

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
                                    {org ? org.org_name : '...'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="author_id">Author</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {author ? author.email : '...'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="major_id">Major ID</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {major ? major.major_name : '...'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="title">Title</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.title : '....'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="content">Content</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.content : '....'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="address">Address</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.address : '....'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="city">City</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.city : '....'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="work_type">Work Type</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.work_type : '....'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="start_time">Start Time</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.start_time : '....'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="end_time">End Time</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.end_time : '....'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="interview_start_time">Interview Start Time</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.interview_start_time : '....'}
                                </CCol>
                            </CFormGroup>
                            <CFormGroup row>
                                <CCol md="3">
                                    <CLabel htmlFor="interview_end_time">Interview End Time</CLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    {item ? item.interview_end_time : '....'}
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

export default DetailRecruitmentNews
