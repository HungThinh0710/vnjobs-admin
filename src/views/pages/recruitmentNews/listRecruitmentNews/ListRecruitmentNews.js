import React, {useState, useEffect} from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {cilPlus, cilPencil, cilTrash, cilMonitor} from '@coreui/icons';

import recruitmentNewsData from './RecruitmentNewsData';
import { NavLink } from "react-router-dom";
const fields = [
  { key: 'org_id' }, 
  { key: 'author_id' }, 
  { key: 'major_id' }, 
  { key: 'title' }, 
  { key: 'content' }, 
  { key: 'address' }, 
  { key: 'city' }, 
  { key: 'work_type' }, 
  { key: 'start_time' }, 
  { key: 'end_time' }, 
  { key: 'interview_start_time' }, 
  { key: 'interview_end_time' }, 
  {
    key: 'show_details',
    label: '',
    sorter: false,
    filter: false
  }
];

const ListRecruitmentNews = () => {

  const [listRecruitmentData, setListRecruitmentData] = useState(recruitmentNewsData.data);
  const [currentPage, setCurrentPage] = useState(recruitmentNewsData.current_page);
  const [lastPage, setLastPage] = useState(recruitmentNewsData.last_page);
  const handleClick = (link) => {
    console.log(link);
    return;
  }

  return (
    <div>
      <CRow>
        <CCol col="8" className="text-left mb-3">
        <nav aria-label="Page navigation" style={{display: 'inline-block', paddingRight: '30px'}}>
          <ul className="pagination ">
            {recruitmentNewsData.prev_page_url !== null ? 
            <li className="page-item">
              <button className="page-link" onClick={() => handleClick(recruitmentNewsData.prev_page_url)} tabIndex="-1">Previous</button>
            </li>
            : 
            <li className="page-item disabled">
              <NavLink className="page-link" to="#" tabIndex="-1">Previous</NavLink>
            </li>
            }
            {recruitmentNewsData.next_page_url !== null ? 
            <li className="page-item">
              <button className="page-link" onClick={() => handleClick(recruitmentNewsData.next_page_url)}>Next</button>
            </li>
            : 
            <li className="page-item disabled">
              <NavLink className="page-link" to="#">Next</NavLink>
            </li>
            }
          </ul>
        </nav>
        # Current Page {currentPage}/{lastPage}
        </CCol>
        <CCol col="4" className="text-right mb-3">
          <NavLink className="btn btn-outline-info" to="/manage/recruitment-news/create">
            <CIcon content={cilPlus} style={{paddingBottom: '3px'}} /> Create New Recruitment News
          </NavLink>
        </CCol>
      </CRow>
      <CRow>
        
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              List RecruitmentNews
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={listRecruitmentData}
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
                    ),
                  'work_type': (item) => (
                    <td>
                      <CBadge color="secondary">
                        {item.work_type}
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
    </div>
  );
};

export default ListRecruitmentNews;
