import { useState } from 'react';

export default function Main(props) {
    const [count, setCount] = useState(1);

    function plus() {
        setCount((prev) => prev + 1)
    }

    function minus() {
        setCount((prev) => prev -1)
    }

    return (
        <main>
            <div className='counter'>
                <div className='count'>{count}</div>
                <div className='buttons'>
                    <span className='minus' onClick={minus}> - </span>
                    <span className='plus' onClick={plus}> + </span>
                </div>
            </div>
        </main>
    )
}