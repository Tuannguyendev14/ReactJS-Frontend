export function PostData(type, userData) {
    let BaseUrl = 'http://5d196db8b3b6a100148d1f11.mockapi.io/';

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + type, {
            method: 'POST',
            body: JSON.stringify(userData)
        }).then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson);
        })
        .catch((error) => {
            reject(error)
        });
    });
} 