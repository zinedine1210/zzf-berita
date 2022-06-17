import React, {useState, useEffect} from 'react';
import {TabContent, TabPane, Nav, NavItem, Fade} from 'reactstrap';
import {connect} from "react-redux"
import ListWidgetTab from '../Molecules/ListWidgetTab';
import CollectionBerita from "../../repositories/CollectionBerita"
import { setDataAll, setDataBerita, setDataArtikel, setDataUmum } from '../../store/actions';
import lodash from "lodash"



async function getByTab(activeTab, count){
    const response = await CollectionBerita.getDataBeritaByTag({tag:activeTab, img:"t", count:count})
    if(response){
        setDataUmum(response['data'])
        return response['data']
    }
}

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

const WidgetTab = (props) => {
    const [activeTab, setActiveTab] = useState("berita");
    const [data, setData] = useState()
    const {dataAll, dataBerita, dataArtikel, dataUmum} = props

    useEffect(() => {
        let allData = dataAll
        if(activeTab === "berita"){
            if(dataBerita.length !== 0){
                setData(dataBerita)
            }else{
                getByTab(activeTab, props.count).then(res => {
                    setData(res)
                    props.setDataBerita(res)
                    props.setDataAll(lodash.unionBy(allData, res, "id"))
                })
            }
        } else if(activeTab === "artikel"){
            if(dataArtikel.length !== 0){
                setData(dataArtikel)
            }else{
                getByTab(activeTab, props.count).then(res => {
                    setData(res)
                    props.setDataArtikel(res)
                    props.setDataAll(lodash.unionBy(allData, res, "id"))
                })
            }
        } else if(activeTab === "umum"){
            if(dataUmum.length !== 0){
                setData(dataUmum)
            }else{
                getByTab(activeTab, props.count).then(res => {
                    setData(res)
                    props.setDataUmum(res)
                    props.setDataAll(lodash.unionBy(allData, res, "id"))
                })
            }
        }
    } , [props.count])
    

    const toggle = tab => {
        if(activeTab != tab){
            setData(null)
            setActiveTab(tab)
            let allData = dataAll
            if(tab === "berita"){
                if(dataBerita.length !== 0){
                    setData(dataBerita)
                }else{
                    getByTab(tab, props.count).then(res => {
                        setData(res)
                        props.setDataBerita(res)
                        props.setDataAll(lodash.unionBy(allData, res, "id"))
                    })
                }
            } else if(tab === "artikel"){
                if(dataArtikel.length !== 0){
                    setData(dataArtikel)
                }else{
                    getByTab(tab, props.count).then(res => {
                        setData(res)
                        props.setDataArtikel(res)
                        props.setDataAll(lodash.unionBy(allData, res, "id"))
                    })
                }
            } else if(tab === "umum"){
                if(dataUmum.length !== 0){
                    setData(dataUmum)
                }else{
                    getByTab(tab, props.count).then(res => {
                        setData(res)
                        props.setDataUmum(res)
                        props.setDataAll(lodash.unionBy(allData, res, "id"))
                    })
                }
            }
        }
    };

    return (
        <div className={`w-full`}>
            <Nav tabs className='tabs justify-center'>
                <NavItem>
                    <button
                    aria-label='berita'
                        className={`${activeTab === "berita" ? "tab-active dark:border-white" : ""} tab tab-bordered font-main font-semibold dark:text-white`}
                        onClick={() => toggle("berita")}
                    >   
                        {props.bahasa.submenu.toUpperCase()}
                    </button>
                </NavItem>
                <NavItem>
                    <button
                    aria-label='artikel'
                        className={`${activeTab === "artikel" ? "tab-active dark:border-white" : ""} tab tab-bordered font-main font-semibold dark:text-white`}
                        onClick={() => toggle("artikel")}
                    >
                        {props.bahasa.submenu2.toUpperCase()}
                    </button>
                </NavItem>
                <NavItem>
                    <button
                    aria-label='umum'
                        className={`${activeTab === "umum" ? "tab-active dark:border-white" : ""} tab tab-bordered font-main font-semibold dark:text-white`}
                        onClick={() => toggle("umum")}
                    >
                    {props.bahasa.submenu3.toUpperCase()}
                    </button>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab} className="p-5 h-[450px] overflow-y-scroll">
                <TabPane tabId='1' className={activeTab === "berita" ? "block" : "hidden"}><WidgetTabPane dark={props.dark} a_id={activeTab} id="1" total={props.total} arr={data ? data : null}/></TabPane>
                <TabPane tabId='2' className={activeTab === "artikel" ? "block" : "hidden"}><WidgetTabPane dark={props.dark} a_id={activeTab} id="2" total={props.total} arr={data ? data : null}/></TabPane>
                <TabPane tabId='3' className={activeTab === "umum" ? "block" : "hidden"}><WidgetTabPane dark={props.dark} a_id={activeTab} id="3" total={props.total} arr={data ? data : null}/></TabPane>
            </TabContent>
        </div>
    );
};

const MapStateToProps = state => {
    return {
        dataAll: state.meta.dataAll,
        dataBerita: state.meta.dataBerita,
        dataArtikel: state.meta.dataArtikel,
        dataUmum: state.meta.dataUmum
    }
}


export default connect(MapStateToProps, {setDataAll, setDataBerita, setDataArtikel, setDataUmum})(WidgetTab);