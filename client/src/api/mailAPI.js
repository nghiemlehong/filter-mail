import axiosClient from './axiosClient'

export class MailAPI {

    static async createMail(params){
        const url ='/mail/'
        const result = await axiosClient.post(url, params)
        return result
    }
}