
'use server';
/**
 * @fileOverview Server Action for sending contact inquiry emails.
 */
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface InquiryData {
  fullName: string;
  phone: string;
  email: string;
  branch: string;
  message: string;
  submittedAt: string;
}

/**
 * Sends a notification email to the college administration for a new inquiry.
 */
export async function sendInquiryEmailAction(data: InquiryData) {
  try {
    const { fullName, phone, email, branch, message, submittedAt } = data;

    await resend.emails.send({
      from: 'LPC Portal <onboarding@resend.dev>',
      to: 'laxmindharpoly@gmail.com',
      subject: `New Inquiry: ${fullName} (${branch})`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #004a80;">New Student Inquiry</h2>
          <p>A new admission inquiry has been submitted through the Laxmidhar Polytechnic College website.</p>
          <hr />
          <p><strong>Full Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Branch of Interest:</strong> ${branch}</p>
          <p><strong>Message:</strong> ${message || 'No message provided'}</p>
          <p><strong>Submitted At:</strong> ${new Date(submittedAt).toLocaleString()}</p>
          <hr />
          <p style="font-size: 10px; color: #888;">This is an automated notification from the LPC Portal.</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error: any) {
    console.error('Error sending inquiry email:', error);
    return { success: false, error: error.message };
  }
}
