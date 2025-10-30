import { FileImage, FileText, Play, Music, File, X } from "lucide-react";

export const MediaItemCard = ({
  item,
  fileUrl,
  fileName,
  fileSize = "144 kb",
  date = "Mon Sep 22 2025",
  showDeleteButton = false,
  onDelete,
}) => {
  // Simple function to get file extension
  const getFileExtension = (url) => {
    return url?.split(".").pop()?.toLowerCase() || "file";
  };

  // Simple media type detection
  const getMediaType = (url) => {
    const ext = getFileExtension(url);

    if (["png", "jpg", "jpeg", "gif", "webp"].includes(ext)) return "image";
    if (ext === "pdf") return "pdf";
    if (["mp4", "avi", "mov"].includes(ext)) return "video";
    if (["mp3", "wav"].includes(ext)) return "audio";
    return "document";
  };

  const mediaType = getMediaType(fileUrl);

  // Simple icon mapping
  const icons = {
    image: FileImage,
    pdf: FileText,
    video: Play,
    audio: Music,
    document: File,
  };

  const previewTexts = {
    image: "Preview",
    pdf: "View",
    video: "Play",
    audio: "Listen",
    document: "Open",
  };

  const IconComponent = icons[mediaType] || File;
  const previewText = previewTexts[mediaType] || "Open";

  return (
    <div
      key={item}
      className="flex justify-between items-center gap-y-2 bg-neutral-100 px-8 py-2 rounded-[10px] w-full"
    >
      <div className="flex custom-gapx-8 items-center">
        <div className="text-primary-darkest">
          <IconComponent size={24} />
        </div>
        <div className="grid">
          <h1 className="text-primary-darkest custom-text-14">
            {fileName || `File ${item}.${getFileExtension(fileUrl)}`}
          </h1>
          <h1 className="text-neutral-500 custom-text-14">
            <span>{fileSize} </span>
            <span>{date}</span>
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-x-4">
        <h3 className="text-primary-darkest">{previewText}</h3>
        {showDeleteButton && (
          <button
            onClick={() => onDelete?.(item)}
            className="text-gray-500 hover:text-red-500 transition-colors"
            title="Delete file"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
};
