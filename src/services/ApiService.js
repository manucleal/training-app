export class ApiService {
    constructor(){
        this.apiUrl = 'https://trainning-rest-api.herokuapp.com/v1/';
        this.httpHeaders = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': '8cc9d6d4ae9233db164e45618eff1418'
        };
    };

    SetToken(token) {
        this.httpHeaders.Authorization = token;
    }

    async get(url, httpHeaders) {
        const response = await fetch(url, {
            method: 'GET',
            headers: httpHeaders
        });

        if (!response.ok) {
            console.log(response);
            return response;
        }

        return await response.json();
    };

    async post(url, data, httpHeaders) {
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

    async delete(url, httpHeaders) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: httpHeaders
        });

        if (!response.ok) {
            console.log(response);
            return response;
        }

        return await response.json();
    }    

    Login() {
        const action = 'users/login';
        let data = JSON.stringify({ 
            "username": "manucleal@gmail.com",
            "password": "1234"
        })        
        return this.post(this.apiUrl + action, data, this.httpHeaders);
    }

    GetTrainingTypes() {
        const action = 'training-types';
        return this.get(this.apiUrl + action, this.httpHeaders);
    }

    GetTrainings(id) {
        const action = `users/${id}/trainings`;
        return this.get(this.apiUrl + action, this.httpHeaders);
    }

    SaveTrainings(data) {
        const action = 'trainings'
        return this.post(this.apiUrl + action, JSON.stringify(data), this.httpHeaders);
    }

    DeleteTrainings(user_id, training_id) {
        const action = `users/${user_id}/trainings/${training_id}`;
        return this.delete(this.apiUrl + action, this.httpHeaders);
    }
}