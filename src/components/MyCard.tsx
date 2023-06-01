import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from "react"
import "./styles/Card.css"
import 'bootstrap/dist/css/bootstrap.min.css'
type IMyCard = {
  listOfJobs: any[]
}

const MyCard : React.FC<IMyCard> = ({listOfJobs}) => {
  
    return(
      <>
      {listOfJobs.map((value, index) => {
        return(
          <div className="card-container" key={index}>
        <Card bg="dark" text="light" style={{ width: '40rem' }}>
          <Card.Body className="card-body">
            <div className="left-content">
              <Card.Title>{value.jobName}</Card.Title>
              <Card.Text>
                Some quick example text to aweaea Some quick example text to aweaea Some quick example text to aweaea Some quick example text to aweaea Some quick example text to aweaea
              </Card.Text>
            </div>
            <div className="right-content">
              <Button variant="primary" className="mr-2">Details</Button>
              <Button variant="secondary">Apply</Button>
            </div>
          </Card.Body>
        </Card>
        </div>
        )
      })
    }
    </>
    )
}

export default MyCard