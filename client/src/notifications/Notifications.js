import { NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'

export class MyNotification {
    static login(message) {
        switch (message) {
            case "USER_NAME_EMPTY":
                NotificationManager.error("Tên đăng nhập không được bỏ trống !", "", 3000)
                break
            case "PASSSWORD_EMPTY":
                NotificationManager.error("Mật khẩu không được bỏ trống !", "", 3000)
                break
            case "USER_NOT_EXITS":
                NotificationManager.error("Tên đăng nhập không tồn tại !", "", 3000)
                break
            case "PASSWORD_INCORRECT":
                NotificationManager.error("Mật khẩu không chính xác !", "", 3000)
                break
            case true:
                NotificationManager.info("Đăng nhập thành công !", "", 3000)
                break
            default:
                NotificationManager.info("Server quá tải !", "", 3000)

        }
    }
    static signUp(message) {
        switch (message) {
            case "USER_NAME_EMPTY":
                NotificationManager.error("Tên đăng nhập không được bỏ trống !", "", 3000)
                break
            case "PASSSWORD_EMPTY":
                NotificationManager.error("Mật khẩu không được bỏ trống !", "", 3000)
                break
            case "NAME_EMPTY":
                NotificationManager.error("Tên không được bỏ trống !", "", 3000)
                break
            case "USER_NAME_EXITS":
                NotificationManager.error("Tên đăng nhập đã tồn tại !", "", 3000)
                break
            case true:
                NotificationManager.info("Đăng ký tài khoản thành công!", "", 3000)
                break
            default:
                NotificationManager.info("Server quá tải !")
        }

    }
    static sendMail(message) {
        switch (message) {
            case "TITLE_EMPTY":
                NotificationManager.error("Tựa đề không được trống !", "", 3000)
                break
            case "CONTENT_EMPTY":
                NotificationManager.error("Nội dung không đc trống !", "", 3000)
                break
            case "USER_NOT_EXIST":
                NotificationManager.error("Không tìm thấy người nhận !", "", 3000)
                break
            case true:
                NotificationManager.info("Gửi mail thành công !", "", 3000)
                break
            default:
                NotificationManager.info("Server quá tải !")

        }
    }


}