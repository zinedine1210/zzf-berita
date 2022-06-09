import React, {useState, useEffect} from 'react';
import {TabContent, TabPane, Nav, NavItem, Fade} from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faArrowAltCircleRight,
faArrowAltCircleLeft
} from "@fortawesome/free-solid-svg-icons"
import MostSharedList from '../Molecules/MostSharedList';


const WidgetTabPane = ({arr, a_id, id, dark}) => {
    return (
        <Fade in={id === a_id}>
            <div className=" mx-auto ">
                {arr ? arr.map((item, i) => (
                    <MostSharedList stuff={item} key={i} skeleton={false}/>
                )) :
                    [...Array(10)].map((item) => {
                        return <MostSharedList stuff={null} key={item} skeleton={true} />
                    })
                }
            </div>
        </Fade>
    )
};

const MostShared = ({className, dark, title, total}) => {
    const [activeTab, setActiveTab] = useState(1);
    const [data, setData] = useState(null)

    useEffect(() => {
            axios.get(`https://zzfnews.herokuapp.com/api/posts?_sort=informasi.like&_order=desc&_page=1&_limit=${total}`)
            .then(res => {
                setData(res.data)
            })
    } , [])

    const upData = () => {
        if(activeTab != 19){
            setActiveTab(activeTab + 1)
            setData(null)
            getData()
        }

    }

    const downData = () => {
        if(activeTab != 1){
            setActiveTab(activeTab - 1)
            setData(null)
            getData()
        }
    }

    const getData = () => {
        axios.get(`https://zzfnews.herokuapp.com/api/posts?_sort=informasi.share&_order=desc&_page=${activeTab}&_limit=${total}`)
        .then(res => {
            setData(res.data)
        })
    }

    return (
        <div className={`w-full`}>
            <Nav tabs className='flex justify-between mt-5 p-5 shadow-lg'>
                <h1 className='font-semibold font-main text-sm lg:text-xl uppercase text-gray-600 dark:text-white'>{title}</h1>
                <div className='flex'>
                    <NavItem>
                    <button
                        onClick={() => downData()}
                    >   
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="text-orange-500 mx-1 text-xl hover:scale-125 hover:duration-300 hover:ease-in-out"/>
                        </button>
                    </NavItem>
                    <NavItem>
                        <button
                            onClick={() => upData()}
                        >
                            <FontAwesomeIcon icon={faArrowAltCircleRight} className="text-orange-500 mx-1 text-xl hover:scale-125 hover:duration-300 hover:ease-in-out" />
                        </button>
                    </NavItem>
                </div>
            </Nav>
            <TabContent activeTab={activeTab} className="p-5 h-[400px] overflow-hidden hover:overflow-y-scroll">
                <TabPane tabId={activeTab} ><WidgetTabPane dark={dark} a_id={activeTab} id={activeTab} arr={data ? data : false}/></TabPane>
                
            </TabContent>
        </div>
    );
};

export default MostShared;