import axios from 'axios'
const headerConfig = { headers: { Authorization : "Bearer" + " " + localStorage.getItem('token') } }

export const SignIn = async(obj) => {

    let response = await axios.post('http://localhost:4000/api/v1/users/login',obj)
    return response

}

export const SignUp = async(obj) => {

    let response = await axios.post('http://localhost:4000/api/v1/users',obj)
    return response
}

export const createNote = async(obj) => {

    let response = await axios.post('http://localhost:4000/api/v1/note',obj,headerConfig)
    return response
}

export const getNotes = async(obj) => {

    let response = await axios.get('http://localhost:4000/api/v1/note',headerConfig)
    return response
}

export const addArchive = async(id) => {

    let response = await axios.put(`http://localhost:4000/api/v1/note/${id}/addArchive`,{},headerConfig)
    return response
}

export const removeArchive = async(id) => {

    let response = await axios.put(`http://localhost:4000/api/v1/note/${id}/removeArchive`,{},headerConfig)
    return response
}

export const addTrash = async(id) => {

    let response = await axios.put(`http://localhost:4000/api/v1/note/${id}/addtrash`,{},headerConfig)
    return response
}

export const removeTrash = async(id) => {

    let response = await axios.put(`http://localhost:4000/api/v1/note/${id}/removetrash`,{},headerConfig)
    return response
}

export const updateColor = async(id,obj) => {

    let response = await axios.put(`http://localhost:4000/api/v1/note/${id}/updatecolor`,obj,headerConfig)
    return response
}

export const updateNote = async(obj) => {

    let response = await axios.put(`http://localhost:4000/api/v1/note/${obj._id}`,obj,headerConfig)
    return response
}