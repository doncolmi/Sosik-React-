const SETISNONEWS = 'news/SETISNONEWS' as const;
const SETISFIRSTPAGE = 'news/SETISFIRSTPAGE' as const;
const SETISLOADING = 'news/SETISLOADING' as const;
const SETLASTNEWS = 'news/SETLASTNEWS' as const;
const ADDNEWS = 'news/ADDNEWS' as const;
const RESETNEWSSTATE = 'news/RESETNEWSSTATE' as const;

export const setIsFirstPage = (bool: boolean) => ({ type: SETISFIRSTPAGE, payload: bool });
export const setIsNoNews = (bool: boolean) => ({ type: SETISNONEWS, payload: bool });
export const setIsLoading = (bool: boolean) => ({ type: SETISLOADING, payload: bool });
export const setLastNews = (news: any) => ({ type: SETLASTNEWS, payload: news });
export const addNews = (news: [any]) => ({ type: ADDNEWS, payload: news });
export const resetNewsState = () => ({ type: RESETNEWSSTATE });

type NewsAction =
    | ReturnType<typeof setIsFirstPage>
    | ReturnType<typeof setIsNoNews>
    | ReturnType<typeof setIsLoading>
    | ReturnType<typeof setLastNews>
    | ReturnType<typeof addNews>
    | ReturnType<typeof resetNewsState>;

type NewsState = {
    isFirstPage: boolean,
    isNoNews: boolean,
    isLoading: boolean,
    lastNews: any,
    newsList: any,
}

const initialState: NewsState = {
    isFirstPage: true,
    isNoNews: false,
    isLoading: false,
    lastNews: null,
    newsList: [],
}

function news(state: NewsState = initialState, action: NewsAction): NewsState {
    switch (action.type) {
        case SETISFIRSTPAGE:
            return {
                isFirstPage : action.payload, 
                isNoNews : state.isNoNews,
                isLoading : state.isLoading,
                lastNews : state.lastNews,
                newsList : state.newsList
            };
        case SETISNONEWS:
            return {
                isFirstPage : state.isFirstPage,
                isNoNews : action.payload,
                isLoading : state.isLoading,
                lastNews : state.lastNews,
                newsList : state.newsList
            };
        case SETISLOADING:
            console.log(action.payload);
            console.log(state);
            return {
                isFirstPage : state.isFirstPage,
                isNoNews : state.isNoNews,
                isLoading : action.payload,
                lastNews : state.lastNews,
                newsList : state.newsList
            };
        case SETLASTNEWS:
        return {
            isFirstPage : state.isFirstPage,
            isNoNews : state.isNoNews,
            isLoading : state.isLoading,
            lastNews : action.payload,
            newsList : state.newsList
        };
        case ADDNEWS:
            action.payload.map(element => {
                return state.newsList.push(element);
            })
            return {
                isFirstPage : state.isFirstPage,
                isNoNews : state.isNoNews,
                isLoading : state.isLoading,
                lastNews : state.lastNews,
                newsList : state.newsList,
            };
        case RESETNEWSSTATE:
            return {
                isFirstPage: true,
                isNoNews: true,
                isLoading: false,
                lastNews: null,
                newsList: [],
            };
        default:
            return state;
    }
}

export default news;