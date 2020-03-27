import * as Actions from '../actions/Actions';


const initialState = {
    numValue: 0,
    studentArr: [{name: "Raushan", city: "Delhi", pin: 110067, mobile: 8345347645},
                 {name: "Jitender", city: "New Delhi", pin: 110076, mobile: 9834564543},
                 {name: "Rakesh", city: "Delhi", pin: 110067, mobile: 3457645764}
                ]
}

const addSubReducer = function(state = initialState, action) {
    console.log("Inside action:...  ",action);
    const newState = { ...state };
    switch (action.type) {
        // case Actions.ADD_CLICK:
        //     return Object.assign({}, state, {
        //         numValue: action.val
        //     })

        // case Actions.SUB_CLICK:
        //     return Object.assign({}, state, {
        //         numValue: action.val
        //     }) 

        case Actions.ADD_CLICK:
            newState.numValue = action.val
            break;

        case Actions.SUB_CLICK:
            newState.numValue = action.val
            break;
            
        case Actions.CREATE_STUDENT:
            newState.studentArr.push(action.stud)
            break;
        
        case Actions.UPDATE_STUDENT:
            // let arr1 = newState.studentArr;
            // arr1[action.index] = action.stud;
            newState.studentArr[action.index] = action.stud;
            break;

        case Actions.DELETE_STUDENT:
            // let arr = newState.studentArr;
            // let res = arr.splice(action.index, 1);
            // newState.studentArr = arr;
            // newState.studentArr.splice(action.index, 1);
            var arr = newState.studentArr.filter((val,id,ar)=> id!== action.index);
            newState.studentArr = arr;
            break;

    }

    return newState;
}

export default addSubReducer;
