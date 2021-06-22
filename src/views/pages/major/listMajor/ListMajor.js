import React, {useState} from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {cilPlus, cilPencil, cilTrash, cilMonitor} from '@coreui/icons';

import majorData from './MajorData';
import { NavLink } from "react-router-dom";
const fields = [
  {key: 'major_name', sorter: true, filter: true},
  {key: 'image_path', sorter: true, filter: true},
  {key: 'updated_at', sorter: true, filter: true},
  {
    key: 'show_details',
    label: '',
    sorter: false,
    filter: false
  }
];
const getBadge = status => {
  switch (status) {
    case 'Active': return 'success'
    case 'Inactive': return 'secondary'
    case 'Pending': return 'warning'
    case 'Banned': return 'danger'
    default: return 'primary'
  }
}

const ListMajor = () => {
  const [majorList, setMajorList] = useState(majorData.data);
  return (
    <div>
      <CRow>
        <CCol col="2" className="text-right mb-3">
          <NavLink className="btn btn-outline-info" to="/manage/majors/create">
            <CIcon content={cilPlus} style={{paddingBottom: '3px'}} /> Create New Major
          </NavLink>
        </CCol>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              List Majors
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={majorList}
                fields={fields}
                striped
                hover
                scopedSlots={{
                  'show_details':
                    (item) => (
                      <td>
                        <CButton
                          color="info"
                          variant="outline"
                          square="true"
                          size="sm"
                        >
                          <CIcon content={cilMonitor} style={{marginRight: '3px'}} />
                        </CButton>
                        <CButton
                          color="warning"
                          variant="outline"
                          square="true"
                          size="sm"
                        >
                          <CIcon content={cilPencil} style={{marginRight: '3px'}} />
                        </CButton>
                        <CButton
                          color="danger"
                          variant="outline"
                          square="true"
                          size="sm"
                        >
                          <CIcon content={cilTrash} style={{marginRight: '3px'}} />
                        </CButton>
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

export default ListMajor;
