import React, { useState, useEffect } from 'react'
import { ControlledAccordions } from './Accordion'
import { getToken } from '../../utils/Common'
import { MailAPI } from '../../api/mailAPI'
import Box from '@material-ui/core/Box'

export function TabMail(props) {

    const [mails, setMails] = useState([])

    useEffect(() => {
        const body = { roleName: 'Normal' }
        const headers = { headers: { token: getToken() } }
        console.log(body)
        MailAPI.getMail(body, headers)
            .then(data => {
                console.log(data)
                setMails(data.mails)
            })
            .catch(err => console.log(err))
    }, [])

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
            />)
    }


    return (
        <Box
            style={{
                padding: '5px',
                overflowY: 'auto',
                height: '320px',
                backgroundColor : 'rgb(250, 250, 250)'
            }}
            borderRadius="borderRadius"
            {...defaultProps}
        >
            {renderMails()}
        </Box>
    )
}