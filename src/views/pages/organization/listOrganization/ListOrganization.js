import React, {useState, useEffect} from "react";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {cilPlus, cilPencil, cilTrash, cilMonitor} from '@coreui/icons';

import * as Config from '../../../../reusable/Config';
import { NavLink } from "react-router-dom";
const axios = require('axios');
const fields = [
  {key: 'owner_id', sorter: true, filter: true},
  {key: 'org_name', sorter: true, filter: true},
  {key: 'phones', sorter: true, filter: true},
  {key: 'description', sorter: true, filter: true},
  {key: 'tax_id', sorter: true, filter: true},
  {key: 'address', sorter: true, filter: true},
  {key: 'logo_path', sorter: true, filter: true},
  {key: 'cover_path', sorter: true, filter: true},
  {key: 'is_verify', sorter: true, filter: true},
  {
    key: 'show_details',
    label: '',
    sorter: false,
    filter: false
  }
];

const ListOrganization = () => {

  const [listOrganization, setListOrganization] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);
  const [lastPage, setLastPage] = useState(null);
  const [prev, setPrev] = useState(null);
  const [next, setNext] = useState(null);

  useEffect(() => {
    const getListOrganization = async () => {
      try {
        const response = await axios.get(Config.LIST_ORGANIZATION);
        if (response.status === 200) {
          setListOrganization(response.data.data);
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
    getListOrganization();
  }, [])

  const handleClick = async (link) => {
    try {
      const response = await axios.get(link);
      if (response.status === 200) {
        setListOrganization(response.data.data);
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
          <NavLink className="btn btn-outline-info" to="/manage/organizations/create">
            <CIcon content={cilPlus} style={{paddingBottom: '3px'}} /> Create New Organization
          </NavLink>
        </CCol>
      </CRow>
      <CRow>
        
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              List Organizations
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={listOrganization}
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
                            <CDropdownItem to={'/manage/organizations/detail/' + item.id}>
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
    </div>
  );
};

export default ListOrganization;
