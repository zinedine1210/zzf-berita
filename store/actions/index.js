import { DEFAULT, SETDARKMODE, SETDATAALL, SETDATABERITA, SETDATAARTIKEL, SETDATAUMUM, SETDATATRENDING,SETDATASLIDEUTAMA, SETDATAHEADLINE, SETDATALASTPOST, SETDATAMOSTVIEW, SETDATASATUANFUNGSI, SETDATACATEGORYPOLSEK, SETDATACATEGORYSATUANFUNGSI, SETDATAENDORSEMENT, SETDATAVIDEO, SETDATASATUANPOLSEK, SETDATAPEMBINAAN, SETDATAPERISTIWA, SETDATASOSIAL, SETDATAHUKUM, SETTOTALCOUNT, SETTAG} from "../constants";

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

export const setDataPembinaan = (data) => dispatch => {
    dispatch({
        type: SETDATAPEMBINAAN,
        payload: data
    })
}
export const setTag = (data) => dispatch => {
    dispatch({
        type: SETTAG,
        payload: data
    })
}
export const setTotalCount = (data) => dispatch => {
    dispatch({
        type: SETTOTALCOUNT,
        payload: data
    })
}

export const setDataPeristiwa = (data) => dispatch => {
    dispatch({
        type: SETDATAPERISTIWA,
        payload: data
    })
}

export const setDataSosial = (data) => dispatch => {
    dispatch({
        type: SETDATASOSIAL,
        payload: data
    })
}
export const setDataHukum = (data) => dispatch => {
    dispatch({
        type: SETDATAHUKUM,
        payload: data
    })
}

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
