import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../components';

function Trynow() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the external link when the page loads
    window.location.href = 'https://kritika745.github.io/Duck-Hunt-Game/';
  }, []);

  useEffect(() => {
    // When navigating back, go directly to the home directory
    return () => navigate('/');
  }, [navigate]);

  return (
    <div className="w-full bg-green text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className="w-full">
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Trynow;
