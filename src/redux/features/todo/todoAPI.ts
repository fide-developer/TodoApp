

export const getTodosAPI = async () => {
    const response = await fetch("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
    const data = await response.json()

    if(response.ok){
        return data
    }
}