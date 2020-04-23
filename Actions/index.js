import { ADD_PROJECT_TO_LIST, ADD_MEMBER_TO_PROJECT, ADD_MEMBER_TO_LIST } from './ActionTypes'

export const addMemberToList = (name, phone) => {
    return{
        type: ADD_MEMBER_TO_LIST,
        name,
        phone
    }
}
export const addProjectToList = (nameProject,url) => {
    return{
        type: ADD_PROJECT_TO_LIST,
        nameProject,
        url
    }
}
export const addMemberToProject = (nameProject, listMember) => {
    return{
        type: ADD_MEMBER_TO_PROJECT,
        nameProject,
        listMember
    }
}