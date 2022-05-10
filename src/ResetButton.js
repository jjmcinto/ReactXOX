import React from 'react';

const ResetButton = () => {
    function refreshPage() {
        window.location.reload(false);
    }
    
    return (
            <p className="chalkButton" onClick={refreshPage}>Reset</p>
    );
};

export default ResetButton;
