import React from 'react';

const Diets = ({ diets }) => {
    return (
        <div style={styles.card}>
            <h2>Diets</h2>
            {diets.length > 0 ? (
                <ul>
                    {diets.map((diet, index) => (
                        <li key={index}>{diet}</li>
                    ))}
                </ul>
            ) : (
                <p>No diets available.</p>
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

export default Diets;
