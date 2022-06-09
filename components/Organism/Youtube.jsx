import React, {useState, useEffect} from "react"
import CollectionBerita from "../../repositories/CollectionBerita"

export default function Youtube() {
  const [data, setData] = useState(null)


  console.log(data);
  useEffect(() => {
    CollectionBerita.getDataBeritaByTag({tag:"artikel", count:10, img:"thumb"})
    .then(res => {
      setData(res.data)
    })
  }, [])


  return (
    <>
    {data ? data.map((item) => {
      return (
        <>
        <p>{item.judul}</p>
        </>
      )
    }) : "Loading..."}
    </>
  );
}
