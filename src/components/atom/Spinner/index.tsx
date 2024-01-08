import Spinner from 'react-bootstrap/Spinner';

export interface ISpinner {
  small?: boolean
}

export function CSpinner({
  small = false
}: ISpinner) {

  let others = {};

  if(!!small) others = { size: 'sm' };

  return (
    <Spinner {...others} animation='border' variant='secondary'/>
  );
}