import React, { useState, useEffect } from 'react'
import { ControlledAccordions } from './Accordion'
import { getToken } from '../../utils/Common'
import { MailAPI } from '../../api/mailAPI'
import Box from '@material-ui/core/Box'

export function TabMailNormal(props) {

    const [mails, setMails] = useState([])
    const fetchDataMail = () => {
        const body = { roleName: 'Normal' }
        const headers = { headers: { token: getToken() } }
        MailAPI.getMail(body, headers)
            .then(data => {
                setMails(data.mails)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchDataMail()
    }, [])

    const resetMails = ()=>{
        fetchDataMail()
    }

    const defaultProps = {
        bgcolor: 'background.paper',
        borderColor: 'rgb(201, 201, 201)',
        m: 1,
        border: 1,
    };

    const renderMails = () => {
        return mails.map(mail =>
            <ControlledAccordions
                name={mail.sender.name}
                title={mail.title}
                content={mail.content}
                _id = {mail._id}
                reset ={resetMails}
            />)
    }
    return (
        <Box
            style={{
                padding: '5px',
                overflowY: 'auto',
                height: '320px',
                backgroundColor: 'rgb(250, 250, 250)'
            }}
            borderRadius="borderRadius"
            {...defaultProps}
        >
            {renderMails()}
        </Box>
    )
}