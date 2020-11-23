import React from 'react';
import { Form, Button } from 'react-bootstrap';

const NewsLetter = () => {
    return (
        <Form style={{ marginTop: '5em', textAlign: 'center' }}>
          <hr style={{ borderTop: '.25em solid #008EBB' }}/>
          <Form.Label column='lg' style={{ color: '#008EBB', fontWeight: 'bold' }}> FREE EMAIL NEWSLETTER </Form.Label>
          <hr style={{ borderTop: '.05em solid #008EBB' }}/>
          <div style={{ textAlign: 'left', margin: '1em', color: '#989898' }}>
          <Form.Label>Let About.com send you the latest from our Neurology Expert</Form.Label>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Treatment Options' />
          </Form.Group>
          <Form.Group controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Specialty Information' />
          </Form.Group>
          
          <Form.Group controlId='formBasicEmail'> 
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Your email address' />
          </Form.Group>
          <Button style={{ backgroundColor: 'linear-gradient(180deg, rgba(135,227,255,1) 0%, rgba(0,142,187,1) 100%)',
                           border: '1em solid #008EBB',
                           borderRadius: '.5em' }} size='lg' block>
          &#9734;SIGN UP!&#9734;
          </Button>
          </div>
        </Form>
    );
}

export default NewsLetter;