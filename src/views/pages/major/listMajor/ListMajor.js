import React, {useState} from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
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
                        <CDropdown className="m-1">
                          <CDropdownToggle>
                            Options
                          </CDropdownToggle>
                          <CDropdownMenu>
                            <CDropdownItem>
                              <CIcon content={cilMonitor} className="text-info" style={{marginRight: '3px'}} />
                              Detail
                            </CDropdownItem>
                            <CDropdownItem>
                              <CIcon content={cilPencil} className="text-warning" style={{marginRight: '3px'}} />
                              Update
                            </CDropdownItem>
                            <CDropdownItem>
                              <CIcon content={cilTrash} className="text-danger" style={{marginRight: '3px'}} />
                              Delete
                            </CDropdownItem>
                          </CDropdownMenu>
                        </CDropdown>
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
