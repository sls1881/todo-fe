import request from 'superagent'

//URL for back end local host
const URL = 'https://floating-fortress-98302.herokuapp.com/'

//Function for signing up the user
export async function signUpUser(email, password) {
    //create post api response
    const response = await request.post(`${URL}/auth/signup`)
        .send({ email, password })

    return response.body;
}

//Function for logging in the user
export async function loginUser(email, password) {
    const response = await request.post(`${URL}/auth/signin`)
        .send({ email, password })

    return response.body;
}

//Function for getting the todos
export async function getTodos(token) {
    const response = await request.get(`${URL}/api/todos`)
        .set('Authorization', token)

    return response.body;
}

//Function for adding todos
export async function addTodo(todo, token) {
    const response = await request.post(`${URL}/api/todos`)
        .set('Authorization', token)
        .send({ todo })

    return response.body;
}

//Function for completing a todo
export async function completedTodo(todoId, token) {
    const response = await request.put(`${URL}/api/todos/${todoId}`)
        .set('Authorization', token)

    return response.body;
}