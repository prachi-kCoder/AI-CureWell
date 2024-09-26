import React from 'react';

const Instructions = ({ instructions }) => {
    return (
        <div style={styles.card}>
            <h2>Instructions</h2>
            {instructions.length > 0 ? (
                <ul>
                    {instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
            ) : (
                <p>No instructions available.</p>
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

export default Instructions;
