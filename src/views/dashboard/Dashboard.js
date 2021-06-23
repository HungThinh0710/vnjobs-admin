import React, { useEffect, useState } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CCallout,
  CWidgetIcon,
  CDataTable,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilShieldAlt, cilFile, cilUser, cilSpreadsheet } from '@coreui/icons';

import * as Config from '../../reusable/Config';
const axios = require('axios');
const fields = [
  {key: 'owner_id', sorter: true, filter: true},
  {key: 'org_name', sorter: true, filter: true},
  {key: 'phones', sorter: true, filter: true},
  {key: 'description', sorter: true, filter: true},
  {key: 'tax_id', sorter: true, filter: true},
  {key: 'address', sorter: true, filter: true},
  {key: 'is_verify', sorter: true, filter: true}
];
const Dashboard = () => {

  const [countOrg, setCountOrg] = useState('0');
  const [countMajor, setCountMajor] = useState('0');
  const [countJobseeker, setCountJobseeker] = useState('0');
  const [countRecruitmentNews, setCountRecruitmentNews] = useState('0');
  const [listVerified, setListVerified] = useState(null);
  const [countVerified, setCountVerified] = useState('0');

  useEffect(() => {
    const getCountOrg = async () => {
      try {
        const response = await axios.get(Config.COUNT_ORGANIZATION);
        if (response.status === 200) {
          setCountOrg(response.data.count.toString());
          setCountVerified(response.data.count_verify.toString());
          setListVerified(response.data.data);
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
    getCountOrg();
  }, []);

  useEffect(() => {
    const getCountMajor = async () => {
      try {
        const response = await axios.get(Config.COUNT_MAJOR);
        if (response.status === 200) {
          setCountMajor(response.data.count.toString());
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
    getCountMajor();
  }, []);

  useEffect(() => {
    const getCountJobseeker = async () => {
      try {
        const response = await axios.get(Config.COUNT_JOBSEEKER);
        if (response.status === 200) {
          setCountJobseeker(response.data.count.toString());
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
    getCountJobseeker();
  }, []);

  useEffect(() => {
    const getCountRecruitmentNews = async () => {
      try {
        const response = await axios.get(Config.COUNT_RECRUITMENTNEWS);
        if (response.status === 200) {
          setCountRecruitmentNews(response.data.count.toString());
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
    getCountRecruitmentNews();
  }, []);

  return (
    <>
      <CRow>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon text="Organization" header={countOrg} color="primary">
            <CIcon width={24} content={cilShieldAlt}/>
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon text="Major" header={countMajor} color="info">
            <CIcon width={24} content={cilFile}/>
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon text="Recruitment News" header={countRecruitmentNews} color="warning">
            <CIcon width={24} content={cilUser}/>
          </CWidgetIcon>
        </CCol>
        <CCol xs="12" sm="6" lg="3">
          <CWidgetIcon text="Jobseeker" header={countJobseeker} color="danger">
            <CIcon width={24} content={cilSpreadsheet}/>
          </CWidgetIcon>
        </CCol>
      </CRow>
      
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Analysis
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12" md="12" xl="12">

                  <CRow>
                    <CCol sm="3">
                      <CCallout color="info">
                        <small className="text-muted">Organizations is verified</small>
                        <br />
                        <strong className="h4">{countVerified}</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="3">
                      <CCallout color="danger">
                        <small className="text-muted">Developing...</small>
                        <br />
                        <strong className="h4">...</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="3">
                      <CCallout color="info">
                        <small className="text-muted">Developing...</small>
                        <br />
                        <strong className="h4">...</strong>
                      </CCallout>
                    </CCol>
                    <CCol sm="3">
                      <CCallout color="danger">
                        <small className="text-muted">Developing...</small>
                        <br />
                        <strong className="h4">...</strong>
                      </CCallout>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                </CCol>
              </CRow>

              <br />
              <CRow>
                <CCol xs="12" lg="12">
                  <CCard>
                    <CCardHeader>
                      List Organizations
                    </CCardHeader>
                    <CCardBody>
                      <CDataTable
                        items={listVerified}
                        fields={fields}
                        striped
                        hover
                        scopedSlots={{
                          'is_verify': (item) => (
                            <td>
                              <CBadge color={item.is_verify === 1 ? 'success' : 'danger'}>
                                {item.is_verify === 1 ? 'verified' : 'pending'}
                              </CBadge>
                            </td>
                          )
                        }}
                      >
                      </CDataTable>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
