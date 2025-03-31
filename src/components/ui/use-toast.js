"use client"

import { useState } from "react"

export function useToast() {
  const [toasts, setToasts] = useState([])

  const toast = (props) => {
    setToasts((prev) => [...prev, { open: true, props }])

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.map((toast, i) => (i === prev.length - 1 ? { ...toast, open: false } : toast)))

      // Remove from array after animation completes
      setTimeout(() => {
        setToasts((prev) => prev.filter((_, i) => i !== prev.length - 1))
      }, 300)
    }, 5000)
  }

  return { toast, toasts }
}

