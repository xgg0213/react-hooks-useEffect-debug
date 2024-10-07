import { useNavigate } from 'react-router-dom';

const Unmounted = () => {
  const navigate = useNavigate(); // initialize useNavigate
  return (
    <div className='unmounted'>
      <h1>Welcome</h1>
      {/* call navigate */}
      <button onClick={() => navigate('/mount')}>Login</button> 
    </div>
  );
};

export default Unmounted;
