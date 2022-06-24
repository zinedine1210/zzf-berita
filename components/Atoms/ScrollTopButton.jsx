import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useState, useEffect} from 'react';

const ScrollTopButton = () => {
    const [sticky, setSticky] = useState('');


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (Math.ceil(window.scrollY) >= 200) {
                setSticky('visible duration-500 transition-all -translate-y-10 ease-in-out ')
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
    <button onClick={() => scrollTop()} className={`${sticky} shadow-lg opacity-80 bg-sky-500 lg:w-16 lg:h-16 w-10 h-10 fixed bottom-5 right-5 lg:bottom-10 lg:right-10 rounded-full flex items-center justify-center`}>
            <div className="text-white text-xl lg:text-3xl cursor-pointer"><FontAwesomeIcon icon={faArrowUp} /></div>
        </button>
    );
};

export default ScrollTopButton;