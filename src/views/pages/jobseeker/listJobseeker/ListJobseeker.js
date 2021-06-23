import React, {useState, useEffect} from "react";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {cilPlus, cilPencil, cilTrash, cilMonitor} from '@coreui/icons';

// import jobseekerData from './JobseekerData';
import { NavLink } from "react-router-dom";
import * as Config from '../../../../reusable/Config';
const axios = require('axios');
const fields = [
  {key: 'rn_id', sorter: true, filter: true},
  {key: 'user_id', sorter: true, filter: true},
  {key: 'is_elect', sorter: true, filter: true},
  {key: 'cv_path', sorter: true, filter: true},
  {key: 'cover_letter_path', sorter: true, filter: true},
  {key: 'exp_years', sorter: true, filter: true},
  {key: 'updated_at', sorter: true, filter: true},
  {
    key: 'show_details',
    label: '',
    sorter: false,
    filter: false
  }
];

const ListJobseeker = () => {
  const [jobseekerData, setJobseekerData] = useState(null);
  const [listJobseeker, setListJobseeker] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [lastPage, setLastPage] = useState(null);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    const getListJobseeker = async () => {
      try {
        const response = await axios.get(Config.LIST_JOBSEEKER);
        if (response.status === 200) {
          setListJobseeker(response.data.data);
          setJobseekerData(response.data);
          setCurrentPage(response.data.current_page);
          setLastPage(response.data.last_page);
          setPrev(response.data.prev_page_url);
          setNext(response.data.next_page_url);
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
    getListJobseeker();
  }, []);

  const handleClick = async (link) => {
    try {
      const response = await axios.get(link);
      if (response.status === 200) {
        setListJobseeker(response.data.data);
        setJobseekerData(response.data);
        setCurrentPage(response.data.current_page);
        setLastPage(response.data.last_page);
        setPrev(response.data.prev_page_url);
        setNext(response.data.next_page_url);
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
  return (
    <div>
      <CRow>
        <CCol col="8" className="text-left mb-3">
        <nav aria-label="Page navigation" style={{display: 'inline-block', paddingRight: '30px'}}>
          <ul className="pagination ">
            {prev !== null ? 
            <li className="page-item">
              <button className="page-link" onClick={() => handleClick(prev)} tabIndex="-1">Previous</button>
            </li>
            : 
            <li className="page-item disabled">
              <NavLink className="page-link" to="#" tabIndex="-1">Previous</NavLink>
            </li>
            }
            {next !== null ? 
            <li className="page-item">
              <button className="page-link" onClick={() => handleClick(next)}>Next</button>
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
          <NavLink className="btn btn-outline-info" to="/manage/jobseekers/create">
            <CIcon content={cilPlus} style={{paddingBottom: '3px'}} /> Create New Jobseeker
          </NavLink>
        </CCol>
      </CRow>
      <CRow>
        
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              List Jobseeker
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={listJobseeker}
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
                            <CDropdownItem to={'/manage/jobseekers/detail/' + item.id}>
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
                  'is_elect': (item) => (
                    <td>
                      <CBadge color={item.is_verify === 1 ? 'success' : 'danger'}>
                        {item.is_verify === 1 ? 'elected' : 'pending'}
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

export default ListJobseeker;
