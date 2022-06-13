import React, {useState, useEffect} from 'react';
import {TabContent, TabPane, Nav, NavItem, Fade} from 'reactstrap';
import axios from 'axios';
import ListWidgetTab from '../Molecules/ListWidgetTab';
import CollectionBerita from "../../repositories/CollectionBerita"


const WidgetTabPane = ({arr, a_id, id, total}) => {
    return (
        <Fade in={id === a_id}>
            <div className="">
                {arr ? arr.map((item, i) => (
                    <ListWidgetTab stuff={item} skeleton={false} key={i}/>
                    
                )) :
                    [...Array(total)].map((item) => {
                        return <ListWidgetTab stuff={null} skeleton={true} key={item}/>
                    })
                }
            </div>
        </Fade>
    )
};

const WidgetTab = ({className, dark, bahasa, total}) => {
    const [activeTab, setActiveTab] = useState("berita");
    const [data, setData] = useState()

    useEffect(() => {
        getData()
    } , [])
    

    const toggle = tab => {
        if (activeTab !== tab){
            setActiveTab(tab)
            setData(null)
 
            getData()
        }
    };

    const getData = () => {
        CollectionBerita.getDataBeritaByTag({tag: activeTab, count:total, img:"thumb"})
        .then(res => {
            setData(res.data)
        })
    }

    return (
        <div className={`w-full`}>
            <Nav tabs className='tabs justify-center'>
                
                <NavItem>
                    <button
                        className={`${activeTab === "berita" ? "tab-active dark:border-white" : ""} tab tab-bordered font-main font-semibold dark:text-white`}
                        onClick={() => {
                            toggle('berita');
                        }}
                    >   
                        {bahasa.submenu.toUpperCase()}
                    </button>
                </NavItem>
                <NavItem>
                    <button
                        className={`${activeTab === "artikel" ? "tab-active dark:border-white" : ""} tab tab-bordered font-main font-semibold dark:text-white`}
                        onClick={() => {
                            toggle('artikel');
                        }}
                    >
                        {bahasa.submenu2.toUpperCase()}
                    </button>
                </NavItem>
                <NavItem>
                    <button
                        className={`${activeTab === "umum" ? "tab-active dark:border-white" : ""} tab tab-bordered font-main font-semibold dark:text-white`}
                        onClick={() => {
                            toggle('umum');
                        }}
                    >
                    {bahasa.submenu3.toUpperCase()}
                    </button>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} className="p-5">
                <TabPane tabId='1' className={activeTab === "berita" ? "block" : "hidden"}><WidgetTabPane dark={dark} a_id={activeTab} id="1" total={total} arr={data ? data : null}/></TabPane>
                <TabPane tabId='2' className={activeTab === "artikel" ? "block" : "hidden"}><WidgetTabPane dark={dark} a_id={activeTab} id="2" total={total} arr={data ? data : null}/></TabPane>
                <TabPane tabId='3' className={activeTab === "umum" ? "block" : "hidden"}><WidgetTabPane dark={dark} a_id={activeTab} id="3" total={total} arr={data ? data : null}/></TabPane>
            </TabContent>
        </div>
    );
};

export default WidgetTab;