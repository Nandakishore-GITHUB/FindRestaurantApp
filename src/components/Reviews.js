import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';

function Reviews({reviewData}) {

    const [open, setOpen] = useState(false);

    return (
        <>

            <Button
                className='mt-2'
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >
                Reviews
            </Button>
            <div style={{ minHeight: '150px' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        {
                        reviewData.map(item => 

                            <div className='p-2 mt-1'>
                                <Card body style={{ width: '400px' }}>
                                    <h6>{item.name}</h6>
                                    <h6>{item.date}</h6>
                                    <h6>{item.rating}</h6>
                                    <h6>{item.comments}</h6>
                                </Card>
                            </div>

                        )
                        }
                    </div>
                </Collapse>
            </div>

        </>
    )
}

export default Reviews
