import axiosClient from './axiosClient'

export class MailAPI {

    static async checkRole(body){
        const url ='/svm'
        const result = await axiosClient.post(url,body)
        return result
    }
    static async createMail(body, headers) {
        const url = '/mail/'
        const result = await axiosClient.post(url, body, headers)
        return result
    }

    static async getMail(body, headers) {
        const url = '/mail/getMail'
        const result = await axiosClient.post(url, body, headers)
        return result
    }

    static async deleteMail(body, headers) {
        const url = '/mail/'
        const result = await axiosClient.delete(url, body, headers)
        return result
    }
}