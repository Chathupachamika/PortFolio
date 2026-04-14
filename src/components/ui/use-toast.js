"use client"

import { useState, useCallback } from "react"

// Simple ID generator to ensure each toast can be uniquely targeted
let count = 0
function generateId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

export function useToast() {
  const [toasts, setToasts] = useState([])

  const toast = useCallback((props) => {
    const id = generateId()

    // Add the new toast with a unique ID
    setToasts((prev) => [...prev, { id, open: true, props }])

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      // Target the specific toast by ID to trigger the close animation
      setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, open: false } : t)))

      // Remove from array entirely after animation completes
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, 300)
    }, 5000)
  }, [])

  return { toast, toasts }
}