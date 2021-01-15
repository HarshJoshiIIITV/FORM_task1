import axios from 'axios';

export const postData = async (user) => {
    return axios.post('https://jsonbox.io/box_908bb927c9ca81da29ea', user).then((resp) => {
        // console.log("*******", resp.data)
        return resp.data
    })
}