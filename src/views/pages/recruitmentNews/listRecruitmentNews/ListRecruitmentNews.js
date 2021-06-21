import React from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {cilPlus} from '@coreui/icons';

import usersData from '../../../users/UsersData';
import { NavLink } from "react-router-dom";
const fields = ['name','registered', 'role', 'status'];
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const ListRecruitmentNews = () => {
  return (
    <div>
      <CRow>
        <CCol col="2" className="text-right mb-3">
          <NavLink className="btn btn-outline-info" to="/manage/recruitment-news/create">
            <CIcon content={cilPlus} style={{paddingBottom: '3px'}} /> Create New Recruitment News
          </NavLink>
        </CCol>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              List RecruitmentNews
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                striped
                hover
                scopedSlots={{
                  'status':
                    (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    )

                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default ListRecruitmentNews;
