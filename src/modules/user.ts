export interface User {
  name: string;
  thumbnailImage: string;
  profileImage: string;
} 

const SETUSERINFO = 'user/SETUSERINFO' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const setUserInfo = (UserInfo: User) => ({ type: SETUSERINFO, payload: UserInfo});
// export const decrease = () => ({ type: DECREASE });
// export const increaseBy = (diff: number) => ({
//   type: INCREASE_BY,
//   payload: diff
// });

type CounterAction =
  | ReturnType<typeof setUserInfo>;
  // | ReturnType<typeof decrease>
  // | ReturnType<typeof increaseBy>;

type CounterState = {
  name: string;
  thumbnailImage: string;
  profileImage: string;
}

const initialState: CounterState = {
  name: "User",
  thumbnailImage: "",
  profileImage: "",
};

function user(state: CounterState = initialState, action: CounterAction) {
    switch (action.type) {
      case SETUSERINFO:
        return { 
          name: action.payload.name,
          thumbnailImage: action.payload.thumbnailImage,
          profileImage: action.payload.profileImage,
        };
      // case DECREASE:
      //   return { count: state.count - 1 };
      // case INCREASE_BY:
      //   return { count: state.count + action.payload };
      default:
        return state;
    }
  }
  
  export default user;