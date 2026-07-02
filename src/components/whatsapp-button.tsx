import { siteConfig } from "@/data/site";

export function WhatsAppButton() {
  const whatsappNumber = siteConfig.phoneHref.replace(/\D/g, "");

  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with HYA Tech on WhatsApp at ${siteConfig.phoneDisplay}`}
      title="Chat with HYA Tech on WhatsApp"
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.04 3A12.78 12.78 0 0 0 5.1 22.38L3.4 28.6l6.36-1.67A12.8 12.8 0 1 0 16.04 3Zm0 2.16a10.62 10.62 0 1 1-5.42 19.75l-.38-.23-3.77.99 1.01-3.68-.25-.39a10.62 10.62 0 0 1 8.81-16.44Zm-5.05 5.37c-.24 0-.63.09-.96.45-.33.36-1.26 1.23-1.26 3 0 1.77 1.29 3.48 1.47 3.72.18.24 2.53 3.87 6.14 5.43.86.37 1.53.59 2.05.75.86.27 1.64.23 2.26.14.69-.1 2.13-.87 2.43-1.71.3-.84.3-1.56.21-1.71-.09-.15-.33-.24-.69-.42-.36-.18-2.13-1.05-2.46-1.17-.33-.12-.57-.18-.81.18-.24.36-.93 1.17-1.14 1.41-.21.24-.42.27-.78.09-.36-.18-1.52-.56-2.89-1.79-1.07-.95-1.79-2.13-2-2.49-.21-.36-.02-.55.16-.73.16-.16.36-.42.54-.63.18-.21.24-.36.36-.6.12-.24.06-.45-.03-.63-.09-.18-.81-1.95-1.11-2.67-.29-.7-.59-.61-.81-.62h-.69Z"
        />
      </svg>
    </a>
  );
}
