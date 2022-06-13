import Repository, { baseUrl, cborUrl, serializeQuery } from './Repository';
// import { C } from '../global/cbor'
const cbor = require("cbor")

class CollectionYoutube {
    async getAllYoutube(obj) {
        let url = `${baseUrl}/youtube-public?`
        if(obj['count']) {
            url += `count=${obj['count']}`
        }
        if(obj['start']) {
            url += `&start=${obj['start']}`
        }
        const reponse = await Repository.get(
            url,
            { 
                responseType: "arraybuffer" 
            }
        )
        .then((response) => {
            let result = cbor.decode(response.data)
            return result;
        })
        .catch((error) => {
            let result = ""
            if(error.response.data){
                result = cbor.decode(error.response.data)
            } else {
                result = cbor.decode(error.response)
            }
            return result;
        });
        return reponse;
    }
    async getOneSatuanFungsi(obj) {
        const reponse = await Repository.get(
            `${baseUrl}/satuanfungsi-public-find-one/${obj.id}?img=${obj.img}`,
            { 
                responseType: "arraybuffer" 
            }
        )
        .then((response) => {
            let result = cbor.decode(response.data)
            return result;
        })
        .catch((error) => {
            let result = ""
            console.log(error)
            if(error.response.data){
                result = cbor.decode(error.response.data)
            } else {
                result = cbor.decode(error.response)
            }
            return result;
        });
        return reponse;
    }
    async getImage(obj) {
        let url = `${baseUrl}/satuanfungsi-public-by-image/${obj.id}?img=${obj.img}`
        if(obj['count']) {
            url += `&count=${obj['count']}`
        }
        const reponse = await Repository.get(
            url,
            { responseType: "arraybuffer" }
        )
        .then((response) => {
            let result = cbor.decode(response.data)
            return result;
        })
        .catch((error) => {
            let result = ""
            if(error.response.data){
                result = cbor.decode(error.response.data)
            } else {
                result = cbor.decode(error.response)
            }
            return result;
        });
        return reponse;
    }
}

export default new CollectionYoutube();