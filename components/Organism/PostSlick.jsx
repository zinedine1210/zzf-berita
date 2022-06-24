import {useState, useEffect} from 'react';
import {TabContent, TabPane, Nav, NavItem, Fade} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
faAngleLeft,
faAngleRight
} from "@fortawesome/free-solid-svg-icons"
import PostSlickList from '../Molecules/PostSlickList';
import {connect} from "react-redux"
import {setDataLastPost} from "../../store/actions"
import CollectionBerita from '../../repositories/CollectionBerita';


const WidgetTabPane = ({arr, a_id, id, dark, kolom}) => {
    return (
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {arr ? arr.map((item, i) => (
                <PostSlickList stuff={item} key={i} skeleton={false}/>
            )) :
                [...Array(kolom).keys()].map((item) => {
                    return <PostSlickList stuff={null} key={item} skeleton={true} />
                })
            }
        </div>
    )
};

const PostSlick = ({className, dark, title, kolom, dataLastPost, total, setDataLastPost}) => {
    const [activeTab, setActiveTab] = useState(0);
    const [count, setCount] = useState(kolom)
    const [data, setData] = useState(null)
    

    const getDataLastPost = () => {
        if(dataLastPost.length !== 0){
            setData(dataLastPost)
        }else{
            CollectionBerita.getDataBerita({flag:"all", img:"thumb", count:total})
            .then(res => {
                setData(res.data)
                setDataLastPost(res.data)
            })
        }
    }

    useEffect(() => {

        getDataLastPost()

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
            <div className='flex items-center justify-between'>
                <h1 className="title">{title}</h1>
                <Nav tabs className='flex justify-center gap-2'>
                    <NavItem>
                        <button
                        aria-label='left'
                            onClick={() => downData()}
                            className="border flex items-center justify-center p-2 hover:scale-105 hover:duration-300 hover:ease-in-out"
                        >   
                        <FontAwesomeIcon icon={faAngleLeft} className="text-sky-500 mx-1 text-xl lg:text-2xl"/>
                        </button>
                    </NavItem>
                    <NavItem>
                        <button
                        aria-label='right'
                            onClick={() => upData()}
                            className="border flex items-center justify-center p-2 hover:scale-105 hover:duration-300 hover:ease-in-out"
                        >
                            <FontAwesomeIcon icon={faAngleRight} className="text-sky-500 mx-1 text-xl  lg:text-2xl" />
                        </button>
                    </NavItem>
                </Nav>


            </div>
            <TabContent activeTab={activeTab} className="">
                <TabPane tabId={activeTab} ><WidgetTabPane dark={dark} a_id={activeTab} id={activeTab} kolom={kolom} arr={data ? data.slice(activeTab, count ) : false}/></TabPane>
                
            </TabContent>
        </div>
    );
};


const MapStateToProps = state => {
    return {
        dataLastPost:state.meta.dataLastPost
    }
}

export default connect(MapStateToProps, { setDataLastPost })(PostSlick);