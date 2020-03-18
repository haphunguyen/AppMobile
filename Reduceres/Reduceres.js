import { ADD_MEMBER_TO_LIST, ADD_MEMBER_TO_PROJECT, ADD_PROJECT_TO_LIST } from '../Actions/ActionTypes'

const initStateMember = [
    { name: 'Nguyen', phone: '033', project: [] },
    { name: 'Ha', phone: '556', project: [] },
    { name: 'Phu', phone: '692', project: [] },
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

