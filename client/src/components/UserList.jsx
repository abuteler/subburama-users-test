import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'

import './UsersList.scss'

const API_URL = 'http://localhost:5000'

export default function UsersList () {

  const [ initialized, setInitialized ] = useState(false)
  const [ users, setUsers ] = useState([])
  const [ attributes, setAttributes ] = useState([])
  const [ columns, setColumns ] = useState([])
  const [ rows, setRows ] = useState([])

  const getAttributes = async () => {
    await fetch(`${API_URL}/user-attributes`)
      .then(response => response.json())
      .then(data => {
        setAttributes(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const getUsers = async () => {
    await fetch(`${API_URL}/users`)
      .then(response => response.json())
      .then(data => {
        setUsers(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const updateDataGridColumns = () => {
    const cols = []
    attributes.forEach((attr, i) => {
      cols.push({ field: attr, headerName: attr, width: 150, hide: false })
    })
    setColumns(cols)
  }

  const updateDataGridRows = () => {
    const rows = []
    users.forEach((user, i) => {
      const row = {}
      row.id = i
      for (const attribute in user) {
        row[attribute] = user[attribute]
      }
      rows.push(row)
    })
    setRows(rows)
  }

  useEffect(updateDataGridColumns, [attributes])
  useEffect(updateDataGridRows, [users])
  useEffect(()=>{
    if(!initialized) {
      getAttributes()
      getUsers()
      setInitialized(true)
    }
  }, [initialized])

  return (
    <Container className="UsersListComponent">
      { !initialized ? <p>Loading...</p> : (<DataGrid rows={rows} columns={columns} columnBuffer={columns.length+1}/>) }
    </Container>
  )
}