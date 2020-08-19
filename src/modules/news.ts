const SETISNONEWS = 'news/SETISNONEWS' as const;
const SETISFIRSTPAGE = 'news/SETISFIRSTPAGE' as const;

export const setIsFirstPage = (bool: boolean) => ({ type: SETISFIRSTPAGE, payload: bool });
export const setIsNoNews = (bool: boolean) => ({ type: SETISNONEWS, payload: bool });

type NewsAction =
    | ReturnType<typeof setIsFirstPage>
    | ReturnType<typeof setIsNoNews>;

type NewsState = {
    isFirstPage: boolean;
    // isNoNews: boolean;
}

const initialState: NewsState = {
    isFirstPage: false
    // isNoNews: false,
}

function news(state: NewsState = initialState, action: NewsAction) {
    switch(action.type) {
        case SETISFIRSTPAGE:
            return { isFirstPage : action.payload };
        case SETISNONEWS:
            return { isNoNews : action.payload };
        default:
            return state;
    }
}

export default news;