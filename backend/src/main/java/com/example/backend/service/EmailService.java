package com.example.backend.service;

import com.example.backend.entity.Reservation;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${app.frontend.url:http://localhost:5173}")
    private String frontendUrl;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendConfirmationEmail(String to, String confirmationLink) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(to);
            helper.setSubject("Confirm Your Reservation at Qitchen");

            // HTML email content
            String emailContent = "<!DOCTYPE html>" +
                    "<html lang=\"en\">" +
                    "<head>" +
                    "<meta charset=\"UTF-8\">" +
                    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
                    "<title>Qitchen Reservation</title>" +
                    "<style>" +
                    "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Open+Sans&display=swap');" +
                    "body { margin: 0; padding: 0; background-color: #111111; font-family: 'Open Sans', sans-serif; color: #ffffff; }" +
                    ".email-container { max-width: 600px; margin: 40px auto; background: #1c1c1c; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6); border: 1px solid #333; }" +
                    ".email-header { background-color: #000000; text-align: center; padding: 30px 20px; border-bottom: 1px solid #333; }" +
                    ".email-header h1 { font-family: 'Playfair Display', serif; color: #d4af37; font-size: 28px; margin: 0; letter-spacing: 1px; }" +
                    ".email-body { padding: 30px 25px; color: #dddddd; }" +
                    ".email-body p { line-height: 1.8; margin-bottom: 16px; font-size: 16px; }" +
                    ".confirm-button { display: inline-block; margin-top: 25px; padding: 12px 28px; background: linear-gradient(135deg, #d4af37, #b8860b); color: #000000; font-weight: bold; text-decoration: none; border-radius: 30px; font-size: 16px; transition: background 0.3s ease; }" +
                    ".confirm-button:hover { background: linear-gradient(135deg, #c49b27, #a87f06); }" +
                    ".email-footer { text-align: center; padding: 20px; background-color: #0e0e0e; color: #777777; font-size: 12px; border-top: 1px solid #333; }" +
                    "</style>" +
                    "</head>" +
                    "<body>" +
                    "<div class=\"email-container\">" +
                    "<div class=\"email-header\">" +
                    "<h1>Qitchen Reservation</h1>" +
                    "</div>" +
                    "<div class=\"email-body\">" +
                    "<p>Dear Guest,</p>" +
                    "<p>We are delighted you chose <strong>Qitchen</strong> for your next culinary experience.</p>" +
                    "<p>Please confirm your reservation by clicking the button below:</p>" +
                    "<a href=\"" + confirmationLink + "\" class=\"confirm-button\">Confirm Reservation</a>" +
                    "<p style=\"margin-top: 30px;\">If this request wasn't made by you, kindly disregard this message.</p>" +
                    "</div>" +
                    "<div class=\"email-footer\">" +
                    "<p>&copy; 2025 Qitchen. All rights reserved.<br>" +
                    "Designed with taste and elegance.</p>" +
                    "</div>" +
                    "</div>" +
                    "</body>" +
                    "</html>";

            helper.setText(emailContent, true);

            mailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send email", e);
        }
    }

    public void sendReservationDetailsEmail(String to, Reservation reservation) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setTo(to);
            helper.setSubject("Your Qitchen Reservation Details");            String updateLink = frontendUrl + "/update-reservation/" + reservation.getId();
            String deleteLink = frontendUrl + "/delete-reservation/" + reservation.getId();

            // HTML email content
            String emailContent = "<!DOCTYPE html>" +
                    "<html lang=\"en\">" +
                    "<head>" +
                    "<meta charset=\"UTF-8\">" +
                    "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">" +
                    "<title>Qitchen Reservation Details</title>" +
                    "<style>" +
                    "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&family=Open+Sans&display=swap');" +
                    "body { margin: 0; padding: 0; background-color: #111111; font-family: 'Open Sans', sans-serif; color: #ffffff; }" +
                    ".email-container { max-width: 600px; margin: 40px auto; background: #1c1c1c; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6); border: 1px solid #333; }" +
                    ".email-header { background-color: #000000; text-align: center; padding: 30px 20px; border-bottom: 1px solid #333; }" +
                    ".email-header h1 { font-family: 'Playfair Display', serif; color: #d4af37; font-size: 28px; margin: 0; letter-spacing: 1px; }" +
                    ".email-body { padding: 30px 25px; color: #dddddd; }" +
                    ".email-body p { line-height: 1.8; margin-bottom: 16px; font-size: 16px; }" +
                    ".reservation-details { background: #222; padding: 20px; border-radius: 8px; margin: 20px 0; }" +
                    ".button-container { display: flex; gap: 15px; margin-top: 25px; }" +
                    ".action-button { display: inline-block; padding: 12px 28px; color: #000000; font-weight: bold; text-decoration: none; border-radius: 30px; font-size: 16px; transition: background 0.3s ease; }" +
                    ".update-button { background: linear-gradient(135deg, #d4af37, #b8860b); }" +
                    ".delete-button { background: linear-gradient(135deg, #ff4444, #cc0000); }" +
                    ".action-button:hover { opacity: 0.9; }" +
                    ".email-footer { text-align: center; padding: 20px; background-color: #0e0e0e; color: #777777; font-size: 12px; border-top: 1px solid #333; }" +
                    "</style>" +
                    "</head>" +
                    "<body>" +
                    "<div class=\"email-container\">" +
                    "<div class=\"email-header\">" +
                    "<h1>Reservation Confirmed</h1>" +
                    "</div>" +
                    "<div class=\"email-body\">" +
                    "<p>Dear " + reservation.getName() + ",</p>" +
                    "<p>Your reservation at <strong>Qitchen</strong> has been confirmed. Here are your reservation details:</p>" +
                    "<div class=\"reservation-details\">" +
                    "<p><strong>Date & Time:</strong> " + reservation.getReservationTime() + "</p>" +
                    "<p><strong>Number of Guests:</strong> " + reservation.getNumberOfGuests() + "</p>" +
                    "<p><strong>Table Type:</strong> " + reservation.getTableType() + "</p>" +
                    "</div>" +
                    "<p>You can manage your reservation using the buttons below:</p>" +
                    "<div class=\"button-container\">" +
                    "<a href=\"" + updateLink + "\" class=\"action-button update-button\">Update Reservation</a>" +
                    "<a href=\"" + deleteLink + "\" class=\"action-button delete-button\">Delete Reservation</a>" +
                    "</div>" +
                    "</div>" +
                    "<div class=\"email-footer\">" +
                    "<p>&copy; 2025 Qitchen. All rights reserved.<br>" +
                    "Designed with taste and elegance.</p>" +
                    "</div>" +
                    "</div>" +
                    "</body>" +
                    "</html>";

            helper.setText(emailContent, true);
            mailSender.send(message);
        } catch (MessagingException e) {
            throw new RuntimeException("Failed to send email", e);
        }
    }
}
