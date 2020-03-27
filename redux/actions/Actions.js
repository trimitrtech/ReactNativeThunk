export const ADD_CLICK = "ADD_CLICK"
export const SUB_CLICK = "SUB_CLICK"


// student actions
export const CREATE_STUDENT = "ADD_STUDENT_DETAIL"
export const UPDATE_STUDENT = "UPDATE_STUDENT_DETAIL"
export const DELETE_STUDENT = "DELETE_STUDENT_DETAIL"


export const addVal = (val) => {
    return { type: ADD_CLICK, val: val }
}


export const subVal = (val) => {
    return { type: SUB_CLICK, val: val}
}

export const createStudent = (stud) => {
    return { type: CREATE_STUDENT, stud: stud}
}

export const updateStudent = (stud, index) => {
    console.log("Stud value: ",stud)
    console.log("Index value: ",index)
    return { type: UPDATE_STUDENT, stud: stud, index: index}
}

export const deleteStudent = (index) => {
    return { type: DELETE_STUDENT, index: index}
}