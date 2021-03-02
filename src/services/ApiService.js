const apiUrl = 'https://trainning-rest-api.herokuapp.com/v1/';
let httpHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const get = async (url, httpHeaders) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: httpHeaders
    });

    if (!response.ok) {
        console.log(response);
        return response;
    }

    return await response.json();
}

const post = async (url, data, httpHeaders) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: httpHeaders,
        body: data
    });

    if (!response.ok) {
        console.log(response);
        return response;
    }

    return await response.json();
}

const del = async (url, httpHeaders) => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: httpHeaders
    });

    if (!response.ok) {
        console.log(response);
        return response;
    }

    return await response.json();
};
const register = (credentials) => {
    const action = 'users/register';
    let data = JSON.stringify({ 
        'username': credentials.userName,
        'password': credentials.password,
        'height': Number(credentials.userHeight)
    });
    return post(apiUrl + action, data, httpHeaders);
};

const login = (credentials) => {
    const action = 'users/login';
    let data = JSON.stringify({ 
        'username': credentials.userName,
        'password': credentials.password
    });
    return post(apiUrl + action, data, httpHeaders);
};

const getTrainings = () => {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    if(credentials) {
        const action = `users/${credentials.id}/trainings`;
        httpHeaders.Authorization = credentials.token;
        return get(apiUrl + action, httpHeaders);
    } else {
        return [];
    }
};

const getTrainingsTypes = () => {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    if(credentials) { 
        const action = 'training-types';
        httpHeaders.Authorization = credentials.token;
        return get(apiUrl + action, httpHeaders);
    } else {
        return [];
    }
};

const saveTrainings = (data) => {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    const action = 'trainings'
    httpHeaders.Authorization = credentials.token;
    data.user_id = credentials.id;
    return post(apiUrl + action, JSON.stringify(data), httpHeaders);
};

const deleteTrainings = (trainingId) => {
    const credentials = JSON.parse(localStorage.getItem('credentials'));
    const action = `users/${credentials.id}/trainings/${trainingId}`;
    httpHeaders.Authorization = credentials.token;
    return del(apiUrl + action, httpHeaders);
};

module.exports = {
    register: register,
    login: login,
    getTrainings: getTrainings,
    getTrainingsTypes: getTrainingsTypes,
    saveTrainings: saveTrainings,
    deleteTrainings: deleteTrainings
};