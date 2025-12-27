import React from 'react'

export default function FloatingWhatsApp({ phone = '+919999999999', message = 'Hi! I would like to enquire about your services.' }) {
  const encoded = encodeURIComponent(message)
  const href = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encoded}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="Contact on WhatsApp"
      className="fixed right-6 bottom-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#19b75a] flex items-center justify-center shadow-lg transition-transform hover:scale-105"
    >
      {/* Standard WhatsApp icon (24x24) */}
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M12.04 2C6.48 2 2 6.48 2 12.04c0 2.12.62 4.09 1.7 5.74L2 22l4.42-1.16A9.9 9.9 0 0012.04 22C17.6 22 22 17.52 22 11.96 22 6.4 17.6 2 12.04 2zm5.4 14.32c-.24.67-1.4 1.27-1.93 1.36-.5.08-1.11.11-4.03-.72-3.06-.86-5.02-3.12-5.18-3.31-.16-.19-1.26-1.56-1.26-2.97 0-1.4.71-2.09.96-2.38.25-.29.54-.36.72-.36.18 0 .36 0 .52 0 .16 0 .37-.06.57.43.2.5.68 1.71.74 1.84.06.14.1.3.02.48-.08.18-.12.3-.24.46-.12.16-.26.34-.36.46-.12.16-.26.34-.06.62.2.28 1.08 1.76 2.32 2.84 1.58 1.29 2.9 1.67 3.32 1.86.42.19.67.16.92-.1.25-.26.98-1.13 1.24-1.52.26-.39.52-.32.86-.19.34.13 1.08.4 1.26.48.18.08.3.12.34.18.04.06.04.36-.2.99z"/>
      </svg>
    </a>
  )
}
