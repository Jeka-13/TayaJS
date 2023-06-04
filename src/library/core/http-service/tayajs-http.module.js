export class TayaJSHTTPModule {
    static GET(path) {
        return fetch(path)
            .then(response => {
                if (!response.ok) {
                    throw new Error('GET request was failed');
                }
                return response.json();
            }).catch(error => {
                console.error('Error:', error);
            });
    }

    static POST(path, data) {
        return fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('POST request was failed');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    static PUT(path, data) {
        return fetch(path, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
            if (!response.ok) {
                throw new Error('PUT request was failed');
            }
            return response.json();
        })
            .catch(error => {
            console.error('Error:', error);
        });
    }

    static PATCH(path, data) {
        return fetch(path, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('PATCH request was failed');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    static DELETE(path) {
        return fetch(path, {
            method: 'DELETE'
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('DELETE request was failed');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}