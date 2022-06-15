import { DEFAULT, SETDARKMODE, SETDATAALL, SETDATABERITA, SETDATAARTIKEL, SETDATAUMUM, SETDATATRENDING,SETDATASLIDEUTAMA, SETDATAHEADLINE, SETDATALASTPOST, SETDATAMOSTVIEW, SETDATASATUANFUNGSI, SETDATACATEGORYPOLSEK, SETDATACATEGORYSATUANFUNGSI, SETDATAENDORSEMENT, SETDATAVIDEO, SETDATASATUANPOLSEK} from "../constants";

export const defaultAction = () => dispatch => {
    dispatch({
        type: DEFAULT,
    })
};

export const SetDataDarkMode = (data) => dispatch => {
    dispatch({
        type: SETDARKMODE,
        payload: data
    })
};

export const setDataAll = (data) => dispatch => {
    dispatch({
        type: SETDATAALL,
        payload: data
    })
};

export const setDataVideo = (data) => dispatch => {
    dispatch({
        type: SETDATAVIDEO,
        payload: data
    })
}

export const setDataBerita = (data) => dispatch => {
    dispatch({
        type: SETDATABERITA,
        payload: data
    })
};

export const setDataArtikel = (data) => dispatch => {
    dispatch({
        type: SETDATAARTIKEL,
        payload: data
    })
};

export const setDataUmum = (data) => dispatch => {
    dispatch({
        type: SETDATAUMUM,
        payload: data
    })
};

export const setDataTrending = (data) => dispatch => {
    dispatch({
        type: SETDATATRENDING,
        payload: data
    })
};

export const setDataSlideUtama = (data) => dispatch => {
    dispatch({
        type: SETDATASLIDEUTAMA,
        payload: data
    })
};

export const setDataHeadline = (data) => dispatch => {
    dispatch({
        type: SETDATAHEADLINE,
        payload: data
    })
};

export const setDataLastPost = (data) => dispatch => {
    dispatch({
        type: SETDATALASTPOST,
        payload: data
    })
};

export const setDataMostView = (data) => dispatch => {
    dispatch({
        type: SETDATAMOSTVIEW,
        payload: data
    })
};

export const setDataSatuanPolsek = (data) => dispatch => {
    dispatch({
        type: SETDATASATUANPOLSEK,
        payload: data
    })
}

export const setDataSatuanFungsi = (data) => dispatch => {
    dispatch({
        type: SETDATASATUANFUNGSI,
        payload: data
    })
};

export const setDataCategoryPolsek = (data) => dispatch => {
    dispatch({
        type: SETDATACATEGORYPOLSEK,
        payload: data
    })
};

export const setDataCategorySatuanFungsi = (data) => dispatch => {
    dispatch({
        type: SETDATACATEGORYSATUANFUNGSI,
        payload: data
    })
};

export const setDataEndorsement = (data) => dispatch => {
    dispatch({
        type: SETDATAENDORSEMENT,
        payload: data
    })
};
