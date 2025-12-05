"use client"

import { useState } from "react"
import { X, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImagePreviewModalProps {
  image: { url: string; name: string } | null
  onClose: () => void
}

export default function ImagePreviewModal({ image, onClose }: ImagePreviewModalProps) {
  const [zoom, setZoom] = useState(1)

  if (!image) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h3 className="font-semibold text-lg">{image.name}</h3>
            <p className="text-sm text-muted-foreground">Zoom: {Math.round(zoom * 100)}%</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-muted rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Container */}
        <div className="flex-1 overflow-auto flex items-center justify-center bg-muted/30 p-4">
          <img
            src={image.url || "/placeholder.svg"}
            alt={image.name}
            style={{ transform: `scale(${zoom})` }}
            className="transition-transform"
          />
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 p-4 border-t bg-muted/50">
          <Button onClick={() => setZoom(Math.max(0.5, zoom - 0.2))} variant="outline" size="sm" className="gap-2">
            <ZoomOut className="w-4 h-4" />
            Zoom Out
          </Button>
          <Button onClick={() => setZoom(1)} variant="outline" size="sm">
            Reset
          </Button>
          <Button onClick={() => setZoom(Math.min(3, zoom + 0.2))} variant="outline" size="sm" className="gap-2">
            <ZoomIn className="w-4 h-4" />
            Zoom In
          </Button>
        </div>
      </div>
    </div>
  )
}
