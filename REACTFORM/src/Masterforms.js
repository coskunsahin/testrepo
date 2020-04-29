import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
class Masterform extends React.Component {




  render() {
    return (
      <div>



        <input type="text" name="name" />


        <h1>deneme</h1>
        <Container fluid>

          <Row justify="center" debug>
            <Col md={6} debug>

              <label>
                a</label>



            </Col>
            <Col md={6} debug>

              <label>
                b</label>



            </Col>
            <Col md={6} debug>
              <input type="text" name="name" />

            </Col>
            <Col md={6} debug>
              <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>

            </Col>
            <Col md={6} debug>
              <label>
                c</label>
            </Col>
            <Col md={6} debug>

              <label>
                d</label>

            </Col>
            <Col md={6} debug>

              <select>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option selected value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>

            </Col>
            <Col md={6} debug>
              <input type="datetime-local" id="meeting-time"
                name="meeting-time" value="2018-06-12T19:30"
                min="2018-06-07T00:00" max="2018-06-14T00:00"></input>


            </Col>


          </Row>





          <Row debug>
            <Col md={9} push={{ md: 3 }} debug>

              <input type="datetime-local" id="meeting-time"
                name="meeting-time" value="2018-06-12T19:30"
                min="2018-06-07T00:00" max="2018-06-14T00:00"></input>






            </Col>


            <Col md={3} pull={{ md: 9 }} debug>

              <label>
                e</label>




            </Col>
          </Row>









        </Container>


      </div>



    );
  }

}

export default Masterform;