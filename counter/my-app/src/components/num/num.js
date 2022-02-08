import React from 'react';

const Num = ({state}) => {
    if (state < 0) {
        throw new Error('неккоректный счет :/')
    }
    return (
        <div>
            <h2 className='my-5'>{state}</h2>
        </div>
    );
};

export default Num;