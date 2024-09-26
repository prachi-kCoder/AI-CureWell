import React from 'react';

const Precautions = ({ precautions }) => {
    return (
        <div style={styles.card}>
            <h2>Precautions</h2>
            {precautions.length > 0 ? (
                <ul>
                    {precautions.map((precaution, index) => (
                        <li key={index}>{precaution}</li>
                    ))}
                </ul>
            ) : (
                <p>No precautions available.</p>
            )}
        </div>
    );
};

const styles = {
    card: {
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
};

export default Precautions;
