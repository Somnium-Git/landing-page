import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/lib/utils/modal"

type ModalProps = {
  trigger: React.ReactNode
  title: string
  description?: string
  children?: React.ReactNode
  showCloseButton?: boolean
}

function Modal({ trigger, title, description, children, showCloseButton = true }: ModalProps) {
  return (
    <Dialog>
      {trigger}
      <DialogContent showCloseButton={showCloseButton}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default Modal
