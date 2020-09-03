import { News } from "../components/Main/NewsList/NewsList";

const SETISVIEW = "news/SETISVIEW" as const;
const SETNEWSDATA = "news/SETNEWSDATA" as const;

export const setIsView = (bool: boolean) => ({
  type: SETISVIEW,
  payload: bool,
});
export const setNewsData = (data: News) => ({
  type: SETNEWSDATA,
  payload: data,
});

type NewsAction = ReturnType<typeof setIsView> | ReturnType<typeof setNewsData>;

type NewsState = {
  isView: boolean;
  newsData: News | undefined;
};

const initialState: NewsState = {
  isView: false,
  newsData: undefined,
};

function news(state: NewsState = initialState, action: NewsAction): NewsState {
  switch (action.type) {
    case SETISVIEW:
      return {
        isView: action.payload,
        newsData: state.newsData,
      };
    case SETNEWSDATA:
      return {
        isView: state.isView,
        newsData: action.payload,
      };
    default:
      return state;
  }
}

export default news;
