import React from 'react'
import { useState, useEffect } from 'react'
import Restcard from './Restcard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Reastaurentlist() {

  const [allrestaurent, setallrestaurent] = useState([])

  // function to api call for datas inside json file
  const getRestaurentdata = async () => {
    await fetch('/restaurants.json')
      .then(data => {
        data.json()
          .then(result => {

            setallrestaurent(result.restaurants)

          })

      })

  }

  // console.log(allrestaurent);

  useEffect(() => {
    getRestaurentdata()
  }, [])

  return (
    <Row>

      {
        allrestaurent.map(item => (
          <Restcard data={item}></Restcard>
        ))
      }

    </Row>
  )
}

export default Reastaurentlist

