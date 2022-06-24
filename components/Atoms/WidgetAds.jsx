import {useEffect, useState} from 'react'
import CollectionEndorsement from "../../repositories/CollectionEndorsement"
import { connect } from 'react-redux'
import {setDataEndorsement} from "../../store/actions"
import Image from 'next/image'
import Link from 'next/link'
import Skeleton from 'react-loading-skeleton'



function WidgetAds(props) {
    const {type, position} = props
    const [data, setData] = useState(null)
    useEffect(() => {
        if(Object.keys(props.dataEndors).length > 0){
            setData(props.dataEndors["_foto1"])
        }else{
            CollectionEndorsement.getOneEndorsement({id:type}).then(res => {
                setData(res.data[0])
                let obj = {[type] : res.data[0]}
                props.setDataEndorsement(obj)
            })
        }
    }, [type])


  return (
    <div className="w-full">
        {data ?

        position === "large" ?
        <Link href={data[props.url] ? data[props.url] :"#"} target={"_blank"}>
            <div className='w-full lg:w-[1080px] cursor-pointer'>
                <Image src={data[type].replace("thumb", "l")} width={props.width} height={props.height} objectFit="contain" alt={data[type]} />
            </div>
        </Link>:

        position === "small" ?
        <Link href={data[props.url] ? data[props.url] :"#"} target="_blank">
            <div className='w-full lg:w-[350px] cursor-pointer'>
                <Image src={data[type].replace("thumb/", "")} width={props.width} height={props.height} objectFit="contain" alt={data[type]}/>
            </div>
        </Link>:

        position === "medium" ?
        <Link href={data[props.url] ? data[props.url] :"#"} target="_blank">
            <div className='w-full lg:w-[730px] cursor-pointer'>
                <Image src={data[type].replace("thumb", "t")} width={props.width} height={props.height} objectFit="contain" alt={data[type]}/>
            </div>
        </Link>:
        ""

        :<Skeleton height={props.height} />}
    </div>
  )
}

const MapStateToProps = state => {
    return {
        dataEndors: state.meta.dataEndorsement
    }
}

export default connect(MapStateToProps, {setDataEndorsement})(WidgetAds)
