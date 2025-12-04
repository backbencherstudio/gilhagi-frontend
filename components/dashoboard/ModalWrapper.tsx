"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ReactNode } from "react";

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full" | "custom";
}

export default function ModalWrapper({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
}: ModalWrapperProps) {
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-4xl",
    custom: "max-w-[495px]"
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${sizeClasses[size]} max-h-[90vh] overflow-y-auto pb-1`}>
        <DialogHeader >
          <DialogTitle className="self-stretch text-[color:var(--Text-color-Text-01,#1C2022)] [font-family:Geist] text-xl font-semibold leading-[130%] tracking-[0.1px]">{title}</DialogTitle>
          {description && (
            <DialogDescription className="text-[color:var(--Text-color-Text-02,#5F728B)] [font-family:Geist] text-base font-normal leading-[140%] tracking-[0.08px]">
              {description}
            </DialogDescription>
          )}
        </DialogHeader>
        <div className=" border-t">{children}</div>
      </DialogContent>
    </Dialog>
  );
}