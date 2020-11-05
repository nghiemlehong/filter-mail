import { NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'

export class MyNotification {
    static login(message) {
        switch (message) {
            case "EMPTY_EMAIL":
                NotificationManager.error("Email không được để trống !")
                break
            case "EMPTY_PASSWORD":
                NotificationManager.error("Mật khẩu không được để trống !")
                break
            case "PASSWORD_INCORRECT":
                NotificationManager.error("Mật khẩu không chính xác !")
                break
            case "CANT_FIND_USER":
                NotificationManager.error("Không tìm thấy email người dùng !")
                break
            case true:
                NotificationManager.info("Đăng nhập thành công !")
                break
            default:
                NotificationManager.info("Server quá tải !")

        }
    }
    static sendMail(message) {
        switch (message) {
            case "SEND_EMAIL":
                NotificationManager.info("Bạn đã gửi mail thành công !")
                break
            default:
                NotificationManager.info("Server quá tải !")

        }
    }


}