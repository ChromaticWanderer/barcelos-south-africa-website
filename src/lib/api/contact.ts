/**
 * Barcelos South Africa - Contact Form API
 *
 * Handles contact form submissions across the website.
 * Provides form validation, submission handling, and response formatting.
 *
 * TODO: Integrate with email service (SendGrid, Resend, etc.)
 * TODO: Add database logging for form submissions
 * TODO: Implement rate limiting for spam prevention
 */

/**
 * Contact form types
 */
export type ContactFormType = "general" | "franchise" | "catering" | "feedback"

/**
 * Contact form type display names
 */
export const CONTACT_FORM_TYPE_LABELS: Record<ContactFormType, string> = {
  general: "General Inquiry",
  franchise: "Franchise Inquiry",
  catering: "Catering Request",
  feedback: "Feedback",
}

/**
 * Contact form data interface
 */
export interface ContactFormData {
  /** Customer name */
  name: string
  /** Customer email address */
  email: string
  /** Optional phone number */
  phone?: string
  /** Message content */
  message: string
  /** Type of inquiry */
  type: ContactFormType
  /** Optional: Preferred contact method */
  preferredContact?: "email" | "phone"
  /** Optional: Location for franchise inquiries */
  preferredLocation?: string
  /** Optional: Event date for catering */
  eventDate?: string
  /** Optional: Number of guests for catering */
  guestCount?: number
}

/**
 * Contact form validation errors
 */
export interface ContactFormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  type?: string
  general?: string
}

/**
 * Contact form response interface
 */
export interface ContactFormResponse {
  /** Whether the submission was successful */
  success: boolean
  /** Response message to display to user */
  message: string
  /** Reference ID for tracking */
  referenceId?: string
  /** Validation errors if any */
  errors?: ContactFormErrors
}

/**
 * Email validation regex
 */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Indian phone number regex (10 digits, optional +91 prefix)
 */
const PHONE_REGEX = /^(\+91)?[6-9]\d{9}$/

/**
 * Validate contact form data
 * @param data Form data to validate
 * @returns Validation errors or null if valid
 */
export function validateContactForm(
  data: Partial<ContactFormData>
): ContactFormErrors | null {
  const errors: ContactFormErrors = {}

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters"
  } else if (data.name.length > 100) {
    errors.name = "Name must be less than 100 characters"
  }

  // Email validation
  if (!data.email) {
    errors.email = "Email is required"
  } else if (!EMAIL_REGEX.test(data.email)) {
    errors.email = "Please enter a valid email address"
  }

  // Phone validation (optional but must be valid if provided)
  if (data.phone) {
    const cleanPhone = data.phone.replace(/\s/g, "")
    if (!PHONE_REGEX.test(cleanPhone)) {
      errors.phone = "Please enter a valid 10-digit Indian phone number"
    }
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters"
  } else if (data.message.length > 2000) {
    errors.message = "Message must be less than 2000 characters"
  }

  // Type validation
  if (!data.type) {
    errors.type = "Please select an inquiry type"
  } else if (
    !["general", "franchise", "catering", "feedback"].includes(data.type)
  ) {
    errors.type = "Invalid inquiry type"
  }

  return Object.keys(errors).length > 0 ? errors : null
}

/**
 * Generate a unique reference ID for tracking
 */
function generateReferenceId(type: ContactFormType): string {
  const prefix = {
    general: "BCL-GEN",
    franchise: "BCL-FRN",
    catering: "BCL-CTR",
    feedback: "BCL-FBK",
  }
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `${prefix[type]}-${timestamp}-${random}`
}

/**
 * Format phone number for storage
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "")
  if (cleaned.length === 10) {
    return `+91${cleaned}`
  }
  if (cleaned.length === 12 && cleaned.startsWith("91")) {
    return `+${cleaned}`
  }
  return phone
}

/**
 * Submit contact form
 *
 * NOTE: This is currently a stub implementation. In production:
 * - Integrate with email service (SendGrid, Resend, etc.)
 * - Store submission in database
 * - Implement rate limiting
 * - Add CAPTCHA verification
 *
 * @param data Form data to submit
 * @returns Response with success status and message
 */
export async function submitContactForm(
  data: ContactFormData
): Promise<ContactFormResponse> {
  // Validate form data
  const validationErrors = validateContactForm(data)
  if (validationErrors) {
    return {
      success: false,
      message: "Please correct the errors below",
      errors: validationErrors,
    }
  }

  try {
    // Generate reference ID
    const referenceId = generateReferenceId(data.type)

    // Format phone if provided
    const formattedData = {
      ...data,
      phone: data.phone ? formatPhoneNumber(data.phone) : undefined,
    }

    // TODO: Implement actual email sending
    // Example with SendGrid:
    // await sendgrid.send({
    //   to: 'barcelos.india@barcelos.com',
    //   from: 'barcelos.india@barcelos.com',
    //   subject: `[${CONTACT_FORM_TYPE_LABELS[data.type]}] New inquiry from ${data.name}`,
    //   text: formatEmailBody(formattedData, referenceId),
    // })

    // TODO: Log submission to database
    // await db.contactSubmissions.create({
    //   data: { ...formattedData, referenceId, createdAt: new Date() }
    // })

    // Log for development purposes
    if (process.env.NODE_ENV === "development") {
      console.log("Contact form submission:", {
        referenceId,
        ...formattedData,
        timestamp: new Date().toISOString(),
      })
    }

    // Simulate network delay in development
    if (process.env.NODE_ENV === "development") {
      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    // Return success response
    return {
      success: true,
      message: getSuccessMessage(data.type),
      referenceId,
    }
  } catch (error) {
    console.error("Contact form submission error:", error)

    return {
      success: false,
      message:
        "We encountered an error processing your request. Please try again or contact us directly.",
      errors: {
        general: "Submission failed. Please try again.",
      },
    }
  }
}

/**
 * Get type-specific success message
 */
function getSuccessMessage(type: ContactFormType): string {
  const messages: Record<ContactFormType, string> = {
    general:
      "Thank you for your message. We will get back to you within 24-48 hours.",
    franchise:
      "Thank you for your interest in a Barcelos franchise. Our team will contact you within 48 hours to discuss opportunities.",
    catering:
      "Thank you for your catering enquiry. Our events team will reach out within 24 hours with a customised quote.",
    feedback:
      "Thank you for your feedback. We value your input and use it to continuously improve our service.",
  }
  return messages[type]
}

/**
 * Get recipient email based on form type
 * TODO: Configure actual email addresses
 */
export function getRecipientEmail(type: ContactFormType): string {
  const emails: Record<ContactFormType, string> = {
    general: "barcelos.india@barcelos.com",
    franchise: "barcelos.india@barcelos.com",
    catering: "barcelos.india@barcelos.com",
    feedback: "barcelos.india@barcelos.com",
  }
  return emails[type]
}

/**
 * Check if contact form is available
 * Can be used to disable form during maintenance
 */
export function isContactFormAvailable(): boolean {
  // TODO: Implement maintenance mode check
  return true
}

export default submitContactForm
