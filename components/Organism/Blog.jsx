// import axios from 'axios'
import {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import List from "../../components/Molecules/List"
import CollectionBerita from "../../repositories/CollectionBerita"
import {setDataAll} from "../../store/actions"
import lodash from "lodash"


function Blog({kolom, total, tag, dataAll, setDataAll, start}) {
    const [data, setData] = useState()


    useEffect(() => {
        
        CollectionBerita.getDataBerita({start:start, count:total, img:"thumb", flag:"all", tag:tag})
        .then(res => {
            setData(res.data)
            setDataAll(lodash.unionBy(dataAll, res.data, "id"))
        })
    }, [tag, start])


    
  return (
      <div className="w-full">

          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5`}>

                {data ? data.map((item, id) => {
                    return (
                        <List key={id} stuff={item} skeleton={false}/>
                    )
                }) :
                [...Array(total).keys()].map(item => {
                    return <List key={item} stuff={null} skeleton={true} />
                })
                }
                
          </div>
      </div>
  )
}

const MapStateToProps = state => {
    return {
        dataAll: state.meta.dataAll
    }
}


export default connect(MapStateToProps, {setDataAll})(Blog)