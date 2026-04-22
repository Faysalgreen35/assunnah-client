"use client";

import { useState } from "react";

interface PersonalizationOptionsProps {
  isPersonalizable: boolean;
  options?: string[];
  onPersonalizationChange: (note: string) => void;
}

export function PersonalizationOptions({
  isPersonalizable,
  options = [],
  onPersonalizationChange,
}: PersonalizationOptionsProps) {
  const [selectedOptions, setSelectedOptions] = useState<Set<string>>(new Set());
  const [customNote, setCustomNote] = useState("");

  if (!isPersonalizable) {
    return null;
  }

  const handleOptionChange = (option: string) => {
    const newSelected = new Set(selectedOptions);
    if (newSelected.has(option)) {
      newSelected.delete(option);
    } else {
      newSelected.add(option);
    }
    setSelectedOptions(newSelected);
    updateNote(Array.from(newSelected), customNote);
  };

  const handleCustomNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const note = e.target.value;
    setCustomNote(note);
    updateNote(Array.from(selectedOptions), note);
  };

  const updateNote = (selected: string[], note: string) => {
    const parts = [...selected];
    if (note.trim()) {
      parts.push(`Custom: ${note}`);
    }
    onPersonalizationChange(parts.join(" | "));
  };

  return (
    <div className="space-y-4 p-4 rounded-lg bg-primary/5 border border-primary/20">
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-heading mb-2 flex items-center gap-2">
          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
          Personalization Available
        </h3>
        <p className="text-xs text-body mb-3">
          Make this gift extra special with personalization options
        </p>
      </div>

      {/* Personalization Options */}
      {options.length > 0 && (
        <div className="space-y-2">
          <p className="text-xs font-semibold text-heading uppercase tracking-wider">Select Options:</p>
          <div className="space-y-2">
            {options.map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedOptions.has(option)}
                  onChange={() => handleOptionChange(option)}
                  className="w-4 h-4 text-primary rounded cursor-pointer accent-primary"
                />
                <span className="text-sm text-body group-hover:text-primary transition-colors">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Custom Note */}
      <div className="space-y-2 border-t border-primary/20 pt-3">
        <label htmlFor="custom-note" className="text-xs font-semibold text-heading uppercase tracking-wider block">
          Custom Note or Message:
        </label>
        <textarea
          id="custom-note"
          value={customNote}
          onChange={handleCustomNoteChange}
          placeholder="Add a personal message, name, or special request (max 200 characters)..."
          maxLength={200}
          className="w-full px-3 py-2 text-sm border border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          rows={3}
        />
        <p className="text-xs text-body/60">
          {customNote.length}/200 characters
        </p>
      </div>

      {/* Info Box */}
      <div className="bg-white/50 rounded p-3 text-xs text-body space-y-1">
        <p className="font-semibold text-heading">📝 Personalization Details:</p>
        <ul className="list-disc list-inside space-y-0.5 text-body/80">
          <li>Personalization will be added during product preparation</li>
          <li>Ensure accuracy of names and messages</li>
          <li>Processing time: 2-3 additional days</li>
          <li>Cannot be modified after order confirmation</li>
        </ul>
      </div>
    </div>
  );
}
