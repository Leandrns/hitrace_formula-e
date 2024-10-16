import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const CreditosInfo = () => {
    const { creditos } = useContext(UserContext); 

    return (
        <div className="score-item">
          <h4>Créditos</h4>
          <p>{creditos}</p>
        </div>
    );
};

export default CreditosInfo;