import React from 'react'
import { Card, CardText, CardHeader, CardBody, Row, Container, Col } from 'reactstrap'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    fetch('/flash-cards')
      .then(res => res.json())
      .then(cards => this.setState({
        cards: cards
      }))
  }

  render() {
    return (
      <Container>
        <Row>
          { this.state.cards.map(card =>
            <Col key={ card.id } md="6">
              <Card className="flash-cards mt-4 mb-2">
                <CardHeader className="flash-card-header">{ card.question }</CardHeader>
                <CardBody>
                  <CardText>{ card.answer }</CardText>
                </CardBody>
              </Card>
            </Col>
          ) }
        </Row>
      </Container>
    )
  }

}
