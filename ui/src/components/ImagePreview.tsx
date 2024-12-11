import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ImagePreviewProps {
  value?: string;
  onChange: (value: string) => void;
  className?: string;
}

export function ImagePreview({
  value,
  onChange,
  className,
}: ImagePreviewProps) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      await processFile(file);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await processFile(file);
    }
  };

  const processFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      onChange(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    onChange("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div
      className={cn(
        "relative rounded-lg border-2 border-dashed p-4 transition-colors",
        dragActive ? "border-primary" : "border-muted-foreground/25",
        className,
      )}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />

      {value ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <img
            src={value}
            alt="Preview"
            className="h-full w-full object-cover"
          />
          <Button
            variant="destructive"
            size="icon"
            className="absolute right-2 top-2"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-8">
          <Upload className="mb-4 h-8 w-8 text-muted-foreground" />
          <p className="mb-2 text-sm font-medium">
            Drag and drop an image here, or click to select
          </p>
          <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
          <Button
            type="button"
            variant="secondary"
            className="mt-4"
            onClick={() => inputRef.current?.click()}
          >
            Choose File
          </Button>
        </div>
      )}
    </div>
  );
}
