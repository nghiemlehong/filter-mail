import axiosClient from './axiosClient'

export class UserAPI{
    static async login(params)
    {
        const url = "/user/login"
        const result = await axiosClient.post(url,params)
        return result
    }

    static async signUp(params)
    {
        const url ="/user/signup"
        const result = await axiosClient.post(url, params)
        return result
    }

}

