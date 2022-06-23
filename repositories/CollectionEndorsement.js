import Repository, { baseUrl } from './Repository';
const cbor = require('cbor')


class CollectionEndorsement {
    async getOneEndorsement(obj) {
        const reponse = await Repository.get(
            `${baseUrl}/iklan-public-find-one/${obj.id}`,
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
            console.log(result)
        });
        return reponse;
    }
}

export default new CollectionEndorsement();