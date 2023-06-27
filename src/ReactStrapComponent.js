import React, { useState } from 'react';

import { Collapse, Button, CardBody, Card, Spinner, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// https://reactstrap.github.io/?path=/docs/home-installation--page


 const ReactStrapComponent = ()=> {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    return <Container>
    <Button color="danger">Danger!</Button>

    <Spinner
  className="m-5"
  color="primary"
>
  Loading...
</Spinner>

<Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        Toggle
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>


    </Container>
}

export default ReactStrapComponent;