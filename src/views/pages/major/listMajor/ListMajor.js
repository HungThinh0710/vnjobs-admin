import React, {useState, useEffect} from "react";
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
import CIcon from '@coreui/icons-react';
import {cilPlus, cilPencil, cilTrash, cilMonitor} from '@coreui/icons';
import * as Config from '../../../../reusable/Config';
import { NavLink } from "react-router-dom";
const axios = require('axios');

// import majorData from './MajorData';
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
  const [majorList, setMajorList] = useState(null);

  useEffect(() => {
    const getMajorList = async () => {
      try {
        const response = await axios.get(Config.LIST_MAJOR);
        if (response.status === 200) {
          setMajorList(response.data.data);
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

    getMajorList();
  }, [])

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
                            <CDropdownItem to={'/manage/majors/detail/' + item.id}>
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
