import { ADD_MEMBER_TO_LIST, ADD_MEMBER_TO_PROJECT, ADD_PROJECT_TO_LIST } from '../Actions/ActionTypes'

const initStateMember = [
    { name: 'Ha Phu Nguyen', phone: '0335566929', project: [] },
    { name: 'Vu Viet Anh', phone: '0163556672', project: [] },
    { name: 'Do Duc Vuong', phone: '0982314112', project: [] },
    { name: 'Thai Bao', phone: '0982314112', project: [] },
    { name: 'Dang Ngoc Trung', phone: '0982314112', project: [] },
    { name: 'Nguyen Van A', phone: '0982314112', project: [] },
    { name: 'Nguyen Van B', phone: '0982314112', project: [] },
    { name: 'Nguyen Van C', phone: '0982314112', project: [] },
]
const initStateProject = [
    { nameProject: 'GrabHotel', listMember: [] },
    { nameProject: 'QRContact', listMember: [] },
    { nameProject: 'SSO', listMember: [] },
]

export const addMember = (state = initStateMember, action) => {
    switch (action.type) {
        case ADD_MEMBER_TO_LIST:
            return [
                ...state,
                { name: action.name, phone: action.phone }
            ]
        default:
            return state
    }
}
export const addProject = (state = initStateProject, action) => {
    switch (action.type) {
        case ADD_PROJECT_TO_LIST:
            return [
                ...state,
                {
                    nameProject: action.nameProject,
                    listMember: []
                }
            ]
        case ADD_MEMBER_TO_PROJECT:
            let index = state.findIndex(item => item.nameProject == action.nameProject)
            let newState = [...state]
            newState[index].listMember = action.listMember;
            return newState
        default:
            return state
    }
}

