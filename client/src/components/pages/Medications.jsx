import React from 'react';

const Medications = ({ medications }) => {
    return (
        <div style={styles.card}>
            <h2>Medications</h2>
            {medications.length > 0 ? (
                <ul>
                    {medications.map((medication, index) => (
                        <li key={index}>{medication}</li>
                    ))}
                </ul>
            ) : (
                <p>No medications available.</p>
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

export default Medications;
