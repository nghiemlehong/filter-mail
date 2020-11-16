import axiosClient from './axiosClient'

export class UserAPI{
    static async login(body){
        const url = "/user/login"
        const result = await axiosClient.post(url,body)
        return result
    }

    static async signUp(body){
        const url = "/user/signup"
        const result = await axiosClient.post(url, body)
        return result
    }

    static async check(headers){
        const url = "/user/check"
        const result = await axiosClient.post(url,{},headers)
        return result
    }

}

