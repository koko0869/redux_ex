import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_INPUT = "infos/CHANGE_INPUT";
const INSERT = "infos/INSERT";
const TOGGLE = "infos/TOGGLE";
const REMOVE = "infos/REMOVE";

//createAction 가독성 좋은 액션
export const changeInput = createAction(CHANGE_INPUT, input => input);
let id = 3;
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false
}));
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

// //액션
// export const changeInput = input => ({
//   type: CHANGE_INPUT,
//   input
// });

// let id = 3;
// export const insert = text => ({
//   type: INSERT,
//   info: {
//     id: id++,
//     text,
//     done: false
//   }
// });

// export const toggle = id => ({
//   type: TOGGLE,
//   id
// });

// export const remove = id => ({
//   type: REMOVE,
//   id
// });

//리듀서
const initialState = {
  input: "",
  infos: [
    {
      id: 1,
      text: "리덕스 기초",
      done: true
    },
    {
      id: 2,
      text: "리액트 리듀서",
      done: true
    }
  ]
};

//immer produce사용
//handleAcitons 가독성좋은 리듀서
const infos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, draft => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: info }) =>
      produce(state, draft => {
        draft.infos.push(info);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, draft => {
        const info = draft.infos.find(info => info.id === id);
        info.done = !info.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, draft => {
        const index = draft.infos.findIndex(info => info.id === id);
        draft.infos.splice(index, 1);
      })
  },
  initialState
);

// function infos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input
//       };
//     case INSERT:
//       return {
//         ...state,
//         infos: state.infos.concat(action.info)
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         infos: state.infos.map(info =>
//           info.id === action.id
//             ? {
//                 ...info,
//                 done: !info.done
//               }
//             : info
//         )
//       };
//     case REMOVE:
//       return {
//         ...state,
//         infos: state.infos.filter(info => info.id !== action.id)
//       };
//     default:
//       return state;
//   }
// }

export default infos;
