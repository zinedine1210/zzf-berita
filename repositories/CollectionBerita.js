import Repository, { baseUrl } from './Repository';
// import { C } from '../global/cbor'
const cbor = require('cbor')

class CollectionBerita {
    async getDataBerita(obj) {
        let url = `${baseUrl}/berita-public/${obj.flag}?img=${obj.img}`
        if(obj['count']) {
            url += `&count=${obj['count']}`
        }
        if(obj['start']) {
            url += `&start=${obj['start']}`
        }
        if(obj['tag']) {
            url += `&tag=${obj['tag']}`
        }
        if(obj['category']) {
            url += `&category=${obj['category']}`
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
            let result = error
            if(error.response.data){
                result = cbor.decode(error.response.data)
            } else {
                result = cbor.decode(error.response)
            }
            console.log(result)
        });
        return reponse;
    }
    async getOneDataBerita(obj) {
        const reponse = await Repository.get(
            `${baseUrl}/berita-public-find-one/${obj.id}?img=${obj.img}`,
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
        });
        return reponse;
    }
    async getDataBeritaByTag(obj) {
        let url = `${baseUrl}/berita-public-by-tag/${obj.tag}?img=${obj.img}`
        if(obj['count']) {
            url += `&count=${obj['count']}`
        }
        if(obj['category']) {
            url += `&category=${obj['category']}`
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
            console.log(result)
        });
        return reponse;
    }
    async getImage(obj) {
        let url = `${baseUrl}/berita-public-by-image/${obj.id}?img=${obj.img}`
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
            console.log(result)
        });
        return reponse;
    }
    async setViewBerita(obj) {
        const reponse = await Repository.put(
            `${baseUrl}/berita-public-set-view/${obj.id}`,
            { 
                responseType: "arraybuffer" 
            }
        )
        .then((response) => {
            return response;
        })
        .catch((error) => {
            let result = ""
            console.log(error)
            if(error.response.data){
                result = cbor.decode(error.response.data)
            } else {
                result = cbor.decode(error.response)
            }
            console.log(result)
        });
        return reponse;
    }
    async getDataBeritaMostView(obj) {      
        let url = `${baseUrl}/berita-public-by-most-view`
        if(obj['img']) {
            url += `?img=${obj['img']}`
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
            console.log(error)
            if(error.response.data){
                result = cbor.decode(error.response.data)
            } else {
                result = cbor.decode(error.response)
            }
            console.log(result)
        });
        return reponse;
    }
    async getCategory(obj) {
        let url = `${baseUrl}/beritacategorycombopublic/${obj.id}`
        const reponse = await Repository.get(url, {responseType: "arraybuffer"})
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
    async getDataSearch(obj) {
        let url = `${baseUrl}/berita-public-search?img=${obj.img}`
        if(obj['count']) {
            url += `&count=${obj['count']}`
        }
        if(obj['start']) {
            url += `&start=${obj['start']}`
        }
        // if(obj['keyword']) {
            url += `&keyword=${obj['keyword']}`
        // }
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
            console.log(result)
        });
        return reponse;
    }
}

export default new CollectionBerita();