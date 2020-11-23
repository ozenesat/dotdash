import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Alerts from './Alerts';

const ButtonsPopups = () => {
  const [alert, setAlert] = useState({ variant: '', message: '', show: false });

  const buttonsJsx = (
    <div style={{ margin: '5em',textAlign: 'center' }}>
      <Button variant='success' onClick={() => {
        setAlert({ variant:'success', message:'Thank you!', show:true });
      }}>
        Confirm
      </Button>
      {' '}
      <Button variant='danger' onClick={() => setAlert({ variant:'danger', message:'Come back soon.', show:true })}>
        Cancel
      </Button>
    </div>
  )

  const alertJsx = (
    <Alerts variant={alert.variant} message={alert.message}/>
  );
  
  if(alert.show) {
    // setInterval(setAlert({ variant:'', message:'', show:false }), 8000)
    return (
      <>
      {buttonsJsx}
      {alertJsx}
    </>
    )
  }
  
   return buttonsJsx;
}

export default ButtonsPopups;