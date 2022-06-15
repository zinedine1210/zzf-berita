import { 
    IS_LOADING, RE_RENDERED, THROW_ERROR, THROW_SUCCESS, SETDARKMODE, 
    SETDATAUMUM, SETDATAALL, SETDATABERITA, SETDATAARTIKEL, SETDATATRENDING, 
    SETDATASLIDEUTAMA, SETDATAHEADLINE, SETDATALASTPOST, SETDATAMOSTVIEW, 
    SETDATASATUANFUNGSI, SETDATACATEGORYPOLSEK, SETDATACATEGORYSATUANFUNGSI, SETDATAENDORSEMENT, SETDATAVIDEO, SETDATASATUANPOLSEK
} from "../constants";
// import {toast} from "react-toastify";

const init = {
isLoading: false,
error: '',
success: '',
reRendered: false,
darkMode: typeof window !== 'undefined' ? localStorage.getItem('darkMode'):false,
dataAll: [], 
dataBerita: [],
dataArtikel: [],
dataUmum: [],
dataTrending: [],
dataSlideUtama: [],
dataHeadline: [],
dataLastPost: [],
dataMostView: [],
dataSatuanFungsi: [],
dataSatuanPolsek: [],
dataCategoryPolsek: [],
dataCategorySatuanFungsi: [],
dataVideo: [],
dataEndorsement: {}
};

const metaReducer = (state = init, action) => {
switch (action.type) {
    case THROW_ERROR: {
        // toast.error(action.payload);
        return {
            ...state,
            error: action.payload
        }
    }
    case SETDATASATUANPOLSEK:
        return {
            ...state,
            dataSatuanPolsek: action.payload
        }

        
    case THROW_SUCCESS: {
        // toast.success(action.payload);
        return {
            ...state,
            success: action.payload
        }
    }
    case IS_LOADING:
        return {
            ...state,
            isLoading: action.payload
        };
    case SETDATAVIDEO:
        return {
            ...state,
            dataVideo: action.payload
        }
    case RE_RENDERED:
        return {
            ...state,
            reRendered: action.payload
        };
    case SETDARKMODE:
        return {
            ...state,
            darkMode: action.payload
        };
    case SETDATAALL:
        return {
            ...state,
            dataAll: action.payload
        };
    case SETDATABERITA:
        return {
            ...state,
            dataBerita: action.payload
        };
    case SETDATAARTIKEL:
        return {
            ...state,
            dataArtikel: action.payload
        };
    case SETDATAUMUM:
        return {
            ...state,
            dataUmum: action.payload
        };
    case SETDATATRENDING:
        return {
            ...state,
            dataTrending: action.payload
        };
    case SETDATASLIDEUTAMA:
        return {
            ...state,
            dataSlideUtama: action.payload
        };
    case SETDATAHEADLINE:
        return {
            ...state,
            dataHeadline: action.payload
        };
    case SETDATALASTPOST:
        return {
            ...state,
            dataLastPost: action.payload
        };
    case SETDATAMOSTVIEW:
        return {
            ...state,
            dataMostView: action.payload
        };
    case SETDATASATUANFUNGSI:
        return {
            ...state,
            dataSatuanFungsi: action.payload
        };
    case SETDATACATEGORYPOLSEK:
        return {
            ...state,
            dataCategoryList: action.payload
        };
    case SETDATACATEGORYSATUANFUNGSI:
        return {
            ...state,
            dataCategoryList: action.payload
        };
    case SETDATAENDORSEMENT:
        return {
            ...state,
            dataEndorsement: action.payload
        };
    default:
        return state;
}
};

export default metaReducer;