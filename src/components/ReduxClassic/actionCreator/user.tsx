// import { Dispatch } from "react"
// import { UserAction, UserActionTypes } from "../../types/types"


// export const fetchUsers = () => {
//   return (async (dispatch: Dispatch<UserAction>) => {
//     try {
//       dispatch({ type: UserActionTypes.Fetch_users })
//       const response = await fetch('https://jsonplaceholder.typicode.com/users');
//       const json = await response.json();

//       dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: json });

//     } catch (e) {
//       dispatch({ type: UserActionTypes.FETCH_USER_ERROR, payload: 'Error in user loading' })

//     }
//   })
// } 