import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Expensetracker }) => {
  const isSignin = localStorage.getItem('isSignin') === 'true';

  return isSignin ? <Expensetracker /> : <Navigate to="/Signin" />;
};

export default ProtectedRoute;

