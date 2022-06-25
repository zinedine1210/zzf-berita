import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState, useEffect} from 'react';

const ScrollTopButton = () => {
    const [sticky, setSticky] = useState('');


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (Math.ceil(window.scrollY) >= 200) {
                setSticky('visible duration-500 transition-all translate-y-10 ease-in-out ')
            } else {
                setSticky('invisible')
            }
        });
    }, []);

    function scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
    <button onClick={() => scrollTop()} aria-label="top" className={`${sticky} shadow-lg opacity-80 bg-sky-500 lg:w-14 lg:h-14 w-10 h-10 fixed bottom-16 right-8 lg:bottom-28 lg:right-20 rounded-full flex items-center justify-center`}>
            <div className="text-white text-xl lg:text-2xl cursor-pointer"><FontAwesomeIcon icon={faArrowUp} /></div>
        </button>
    );
};

export default ScrollTopButton;