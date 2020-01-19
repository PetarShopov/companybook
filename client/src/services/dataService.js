const baseUrl = 'http://localhost:5000/'

const getOptions = () => ({
    mode: 'cors',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

const handleJsonResponse = res => res.json()

class DataService {
    static get(url) {
        let options = getOptions()
        options.method = 'GET'

        return window.fetch(
            `${baseUrl}${url}`,
            options)
            .then(handleJsonResponse)
    }

    static post(url, data) {
        let options = getOptions()
        options.method = 'POST'
        options.body = JSON.stringify(data)

        return window.fetch(
            `${baseUrl}${url}`,
            options)
            .then(handleJsonResponse)
    }
}

export default DataService