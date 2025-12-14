import emailjs from '@emailjs/browser';

let isInitialized = false;

export function initEmailJS() {
  if (!isInitialized && typeof window !== 'undefined') {
    emailjs.init('eFqj0oAAYOabbFwSJ');
    isInitialized = true;
  }
}

export { emailjs };
