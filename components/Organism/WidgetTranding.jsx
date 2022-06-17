import React, {useState, useEffect} from 'react';
import {TabContent, TabPane, Nav, NavItem, Fade} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faAngleRight,
faAngleLeft
} from "@fortawesome/free-solid-svg-icons"
import Link from 'next/link';
import CollectionBerita from '../../repositories/CollectionBerita';
import ReactMarkdown from 'react-markdown';
import { setDataTrending } from '../../store/actions';
import {connect} from "react-redux"


const WidgetTabPane = ({arr, a_id, id, dark}) => {
    return (
        <Fade in={id === a_id}>
            <div className="">
                {arr ? 
                <Link href={`/berita/${arr.id}/${arr.judul}`}><h1 className='text-black text-sm cursor-pointer dark:text-white'>{arr.judul.length > 60 ? <ReactMarkdown>{arr.judul.substring(0, 60)+"..."}</ReactMarkdown> : <ReactMarkdown>{arr.judul}</ReactMarkdown>}</h1></Link>
                : ""}
            </div>
        </Fade>
    )
};


const WidgetTranding = ({className, dark, total, dataTrending, setDataTrending}) => {
    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState(null)

    const getDataTrending = () => {
        if(dataTrending.length !== 0){
            setData(dataTrending)
        }else{
            CollectionBerita.getDataBerita({flag:"all", img:"t", count:total, start:0})
            .then(res => {
                setData(res.data)
                setDataTrending(res.data)
            })
        }
    }

    useEffect(() => {
        getDataTrending()
    } , [])

    const upData = () => {
        if(activeTab < data.length - 1){
            setActiveTab(activeTab + 1)
        }
    }

    const downData = () => {
        if(activeTab != 0){
            setActiveTab(activeTab - 1)
        }
    }

    
    return (
        <div className={`w-full flex items-center`}>
            <TabContent activeTab={activeTab} className="w-[500px] overflow-hidden">
                <TabPane tabId={activeTab} ><WidgetTabPane dark={dark} a_id={activeTab} id={activeTab} arr={data ? data[activeTab] : false}/></TabPane>
            </TabContent>
            <Nav tabs className='flex'>
                    <NavItem>
                    <button
                    aria-label='down'
                        onClick={() => downData()}
                        className="border border-white py-2 dark:border-slate-500 hover:scale-110 hover:duration-200 dark:text-slate-500 px-4"
                    >   
                        <FontAwesomeIcon icon={faAngleLeft}/>   
                        <h1 className="hidden">left</h1>
                        </button>
                    </NavItem>
                    <NavItem>
                        <button
                        aria-label='up'
                            onClick={() => upData()}
                            className="border border-white py-2 dark:border-slate-500 hover:scale-110 hover:duration-200 dark:text-slate-500 px-4"
                        >
                            <h1 className='hidden'>right</h1>
                            <FontAwesomeIcon icon={faAngleRight}/>

                        </button>
                    </NavItem>
            </Nav>
            
        </div>
    );
};


const MapStateToProps = state => {
    return {
        dataTrending: state.meta.dataTrending
    }
}

export default connect(MapStateToProps, {setDataTrending})(WidgetTranding)