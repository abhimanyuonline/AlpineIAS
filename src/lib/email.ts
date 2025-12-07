import emailjs from '@emailjs/browser';

let isInitialized = false;

export function initEmailJS() {
  if (!isInitialized && typeof window !== 'undefined') {
    emailjs.init('DEtpanQS847AcgU_4');
    isInitialized = true;
  }
}

export { emailjs };
