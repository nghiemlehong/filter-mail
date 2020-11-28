import { MailAPI } from '../../api/mailAPI'
export const getMail = (body, headers) => {
    return dispatch => {
        MailAPI.getMail(body, headers)
            .then(data => {
                dispatch({ type: 'GOT_LIST', list: data.mails })
            })
            .catch(err => console.log(err))
    }
}