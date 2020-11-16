import axiosClient from './axiosClient'

export class MailAPI {

    static async createMail(body, headers){
        const url ='/mail/'
        const result = await axiosClient.post(url, body, headers)
        return result
    }

    static async getMail(body, headers){
        const url ='/mail/getMail'
        const result = await axiosClient.post(url, body, headers)
        return result
    }

}