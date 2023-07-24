import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MainSection = () => {
    return (
        <div className='first-section my-3' >
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-3 col-md-6 col-sm-6 '>
                        <Button style={{ backgroundColor: '#1A9D57', border: 'none', color: '#fff' }} as={Link} to={'login'} className="button-6 btn_record" >Join Our Liberary</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSection