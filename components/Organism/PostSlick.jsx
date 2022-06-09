import React, {useState, useEffect} from 'react';
import {TabContent, TabPane, Nav, NavItem, Fade} from 'reactstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faArrowAltCircleRight,
faArrowAltCircleLeft
} from "@fortawesome/free-solid-svg-icons"
import PostSlickList from '../Molecules/PostSlickList';
import CollectionBerita from '../../repositories/CollectionBerita';


const WidgetTabPane = ({arr, a_id, id, dark}) => {
    return (
        <Fade in={id === a_id}>
            <div className=" mx-auto grid lg:grid-cols-2 grid-cols-1 justify-center gap-3">
                {arr ? arr.map((item, i) => (
                    <PostSlickList stuff={item} key={i} skeleton={false}/>
                )) :
                    [...Array(10)].map((item) => {
                        return <PostSlickList stuff={null} key={item} skeleton={true} />
                    })
                }
            </div>
        </Fade>
    )
};

const PostSlick = ({className, dark, title, total, kolom}) => {
    const [activeTab, setActiveTab] = useState(0);
    const [count, setCount] = useState(5)
    const [data, setData] = useState(null)

    useEffect(() => {
        CollectionBerita.getDataBerita({flag:"all", img:"t", count:total})
        .then(res => {
            setData(res.data)
        })

    } , [])

    const upData = () => {
        if(count < data.length){
            setActiveTab(count)
            setCount(count + kolom)
        }
    }

    const downData = () => {
        if(activeTab != 0){
            setCount(count - kolom)
            setActiveTab(count - (kolom + kolom))
        }
    }

    
    return (
        <div className={`w-full`}>
            <Nav tabs className='flex justify-between py-5'>
                <h1 className="title">{title}</h1>
                <div className='flex'>
                    <NavItem>
                    <button
                        onClick={() => downData()}
                    >   
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="text-sky-500 mx-1 text-xl lg:text-2xl hover:scale-125 hover:duration-300 hover:ease-in-out"/>
                        </button>
                    </NavItem>
                    <NavItem>
                        <button
                            onClick={() => upData()}
                        >
                            <FontAwesomeIcon icon={faArrowAltCircleRight} className="text-sky-500 mx-1 text-xl  lg:text-2xl hover:scale-125 hover:duration-300 hover:ease-in-out" />
                        </button>
                    </NavItem>
                </div>
            </Nav>
            <TabContent activeTab={activeTab} className="">
                <TabPane tabId={activeTab} ><WidgetTabPane dark={dark} a_id={activeTab} id={activeTab} arr={data ? data.slice(activeTab, count ) : false}/></TabPane>
                
            </TabContent>
        </div>
    );
};

export default PostSlick;