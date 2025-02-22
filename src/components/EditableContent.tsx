import React, { useState, useRef, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';

interface EditableContentProps {
  initialContent: string;
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  isImage?: boolean;
  isIcon?: boolean;
  iconSize?: number;
  imageProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  editMode?: boolean;
}

export const EditableContent: React.FC<EditableContentProps> = ({
  initialContent,
  tag = 'div',
  className = '',
  isImage = false,
  isIcon = false,
  iconSize = 32,
  imageProps,
  editMode = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(initialContent);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isEditing && elementRef.current) {
      elementRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    if (editMode) {
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIsEditing(false);
    }
  };

  if (isIcon) {
    const IconComponent = (LucideIcons as any)[content] || LucideIcons.HelpCircle;
    return (
      <div className="editable-icon-container">
        <IconComponent size={iconSize} />
        {editMode && isEditing && (
          <div className="editable-icon-selector">
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className="editable-icon-input"
              placeholder="Enter icon name (e.g., Rocket)"
              autoFocus
            />
            <div className="editable-icon-suggestions">
              {Object.keys(LucideIcons)
                .filter(name => 
                  name.toLowerCase().includes(content.toLowerCase()) &&
                  typeof (LucideIcons as any)[name] === 'function'
                )
                .slice(0, 5)
                .map(name => (
                  <button
                    key={name}
                    onClick={() => {
                      setContent(name);
                      setIsEditing(false);
                    }}
                    className="editable-icon-suggestion"
                  >
                    {name}
                  </button>
                ))}
            </div>
          </div>
        )}
        {editMode && (
          <div
            className="editable-icon-overlay"
            onDoubleClick={handleDoubleClick}
          >
            Double click to change icon
          </div>
        )}
      </div>
    );
  }

  if (isImage) {
    return (
      <div className="editable-image-container">
        <img
          {...imageProps}
          src={content}
          alt={imageProps?.alt || ''}
          className={`${className} ${isEditing ? 'editable--active' : ''}`}
        />
        {editMode && isEditing && (
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="editable-image-input"
            autoFocus
          />
        )}
        {editMode && (
          <div
            className="editable-image-overlay"
            onDoubleClick={handleDoubleClick}
          >
            Double click to edit image URL
          </div>
        )}
      </div>
    );
  }

  const Element = tag;

  return (
    <Element
      ref={elementRef as any}
      className={`editable ${isEditing ? 'editable--active' : ''} ${className}`}
      contentEditable={editMode && isEditing}
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      suppressContentEditableWarning={true}
    >
      {content}
    </Element>
  );
};