import { Link } from 'react-router-dom';

const RouteTest = () => {
  return (
    <>
      <Link to='/'>Home</Link>
      <br />
      <Link to='/New'>New</Link>
      <br />
      <Link to='/Edit'>Edit</Link>
      <br />
      <Link to='/Diary'>Diary</Link>
      <br />
    </>
  );
};

export default RouteTest;
