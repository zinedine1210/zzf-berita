import React, { useEffect } from 'react'
import {connect} from "react-redux"
import { setDataAll, setDataUmum } from "../store/actions"
function coba({props}) {

    useEffect(() => {
        console.log(props);
    }, [])
  return (
      <div>
          Selamat datang di tes redux
      </div>
  )
}


const MapStateToProps = state => {
    return {
        props:{
            dataAll: state.meta.dataAll,
            dataUmum: state.meta.dataUmum,
            dataArtikel: state.meta.dataArtikel,
            dataBerita: state.meta.dataBerita,
            dataSlideUtama:state.meta.dataSlideUtama,
            dataLastPost: state.meta.dataLastPost,
            dataTrending : state.meta.dataTrending
        }
    }
}

export default connect(MapStateToProps, {setDataAll,setDataUmum})(coba)