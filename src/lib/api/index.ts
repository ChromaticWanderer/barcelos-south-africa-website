/**
 * Barcelos South Africa - API Layer
 *
 * Central export point for all API functions.
 * Import from '@/lib/api' for consistent access.
 *
 * @example
 * ```tsx
 * import { submitContactForm, validateContactForm } from '@/lib/api'
 *
 * async function handleSubmit(data: ContactFormData) {
 *   const errors = validateContactForm(data)
 *   if (!errors) {
 *     const response = await submitContactForm(data)
 *     // ...
 *   }
 * }
 * ```
 */

// Contact form API
export {
  submitContactForm,
  validateContactForm,
  formatPhoneNumber,
  getRecipientEmail,
  isContactFormAvailable,
  CONTACT_FORM_TYPE_LABELS,
} from "./contact"

export type {
  ContactFormData,
  ContactFormResponse,
  ContactFormErrors,
  ContactFormType,
} from "./contact"
