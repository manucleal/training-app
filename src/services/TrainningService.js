export class TrainningService {
    constructor(){
        this.apiUrl = 'https://trainning-rest-api.herokuapp.com/v1/';
        this.httpHeaders = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
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

    Login() {
        const action = 'users/login';
        let data = JSON.stringify({ 
            "username": "manucleal@gmail.com",
            "password": "1234"
        })        
        return this.post(this.apiUrl + action, data, this.httpHeaders);
    }

    GetTrainningTypes() {
        const action = 'training-types';
        return this.get(this.apiUrl + action, this.httpHeaders);
    }

    GetTrainnings() {
        const action = 'users/31/trainings';
        return this.get(this.apiUrl + action, this.httpHeaders);
    }
}



    // const apiUrl = 'https://trainning-rest-api.herokuapp.com/v1/';
    // const httpHeaders = {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    // }; 
    
    // const get = async (url, httpHeaders) => {
    //     const response = await fetch(url, {
    //         method: 'GET',
    //         headers: httpHeaders
    //     });

    //     if (!response.ok) {
    //         const message = `An error has occured: ${response.status}`;
    //         throw new Error(message);
    //     }

    //     return await response.json();
    // };