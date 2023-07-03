import React, { useState } from 'react';
import * as yup from 'yup';

import { Collapse, Button, CardBody, Card, Spinner, Container, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// https://reactstrap.github.io/?path=/docs/home-installation--page


 const ReactStrapComponent = ()=> {


    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const submitUser = async (event)=> {
      event.preventDefault();

      const validationSchema =
        yup.object().shape({
          name: yup.string().required(),
          password: yup.string().min(4).max(10).required()
        })
  

      let formData = {
          name: event.target[0].value,
          password: event.target[1].value
      }
      console.log(formData);
      let isValid = await validationSchema.isValid(formData);


      //this will return true or false based on the validation 
      console.log(isValid);
    }

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

      <Form onSubmit={submitUser}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
        </FormGroup>
        <Input type="submit">Submit</Input>
      </Form>

    </Container>
}

export default ReactStrapComponent;


//react straps forms : https://6-4-0--reactstrap.netlify.app/components/form/
//read about and checkbox and radio buttons here 

//https://6-4-0--reactstrap.netlify.app/components/buttons/

//example : https://gist.github.com/AndrewBedell/b5f650475012f62bbbdf6ffbdf3711da

//yup validation: https://www.youtube.com/watch?v=RQ1E2EjyqY4&ab_channel=PedroTech