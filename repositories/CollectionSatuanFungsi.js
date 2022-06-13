import Repository, { baseUrl, cborUrl, serializeQuery } from './Repository';
const cbor = require('cbor')

class CollectionSatuanFungsi {
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
        });
        return reponse;
    }
}

export default new CollectionSatuanFungsi();