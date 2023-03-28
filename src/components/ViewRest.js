import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image,Button } from 'react-bootstrap';
import OperatingTime from './OperatingTime';
import Reviews from './Reviews';

function ViewRest() {

  const params = useParams()
  // console.log(params.id);


  const [allrestaurent, setallrestaurent] = useState([])

  // function to api call for datas inside json file
  const restaurentdata = async () => {
    await fetch('/restaurants.json')
      .then(data => {
        data.json()
          .then(result => {

            setallrestaurent(result.restaurants)

          })

      })

  }

  // console.log(allrestaurent);

  const restData = allrestaurent.find(item => item.id == params.id)
  console.log(restData);

  useEffect(() => {
    restaurentdata()
  }, [])

  return (
    <>

      {restData ? (

        <Row>
          <Col>
            <Image className='p-5' src={restData.photograph} fluid/>
          </Col>
          <Col className='mt-5'>
            <h1>{restData.name}</h1>
            <h3>{restData.neighborhood}</h3>
            <h4>Cuisine Type : {restData.cuisine_type}</h4>
            <h4>Location : {restData.address}</h4>

            <OperatingTime timedata={restData.operating_hours}></OperatingTime>
            <br></br>
            <Reviews reviewData={restData.reviews} ></Reviews>

          </Col>
        </Row>

      ) : 'null'}

    </>
  )
}

export default ViewRest
