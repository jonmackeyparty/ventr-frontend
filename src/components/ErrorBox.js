import React from 'react'
import { connect } from 'react-redux';
import {
  Container, Row, Col, Alert
} from 'reactstrap'

class ErrorBox extends React.Component {

  render() {
    return (
      <>
        {this.props.errors &&
          <Container style={{marginTop:'5px', marginBottom:'5px'}}>
            <Row>
              <Col md={{ size:6, offset: 3}}>
                <Alert color="warning">
                  {this.props.errors}
                </Alert>
              </Col>
            </Row>
          </Container>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    errors: state.user.errors
  }
}

export default connect(mapStateToProps)(ErrorBox)
