"use client";

import { useState } from "react";
import { OCCASION_TAGS, RECIPIENT_TAGS } from "@/constants";

interface FilterProps {
  selectedOccasions: string[];
  selectedRecipients: string[];
  onOccasionChange: (occasion: string) => void;
  onRecipientChange: (recipient: string) => void;
  onClearFilters: () => void;
}

export function FilterSidebar({
  selectedOccasions,
  selectedRecipients,
  onOccasionChange,
  onRecipientChange,
  onClearFilters,
}: FilterProps) {
  const [expandedSections, setExpandedSections] = useState({
    occasions: true,
    recipients: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const hasActiveFilters = selectedOccasions.length > 0 || selectedRecipients.length > 0;

  return (
    <div className="w-full md:w-64 space-y-6">
      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={onClearFilters}
          className="w-full px-4 py-2 text-sm font-semibold text-[#a4722c] border border-[#a4722c] rounded-lg hover:bg-[#f9f3ee] transition-colors"
        >
          Clear All Filters
        </button>
      )}

      {/* Occasions Filter */}
      <div className="bg-white rounded-lg p-4 border border-[#ede8df]">
        <button
          onClick={() => toggleSection("occasions")}
          className="w-full flex items-center justify-between mb-4 hover:text-[#a4722c] transition-colors"
        >
          <h3 className="font-bold text-[#1a1a1a] text-sm uppercase tracking-wider">Occasions</h3>
          <svg
            className={`w-5 h-5 transition-transform ${expandedSections.occasions ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

        {expandedSections.occasions && (
          <div className="space-y-3">
            {OCCASION_TAGS.map((occasion) => (
              <label key={occasion} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedOccasions.includes(occasion)}
                  onChange={() => onOccasionChange(occasion)}
                  className="w-4 h-4 text-[#a4722c] rounded cursor-pointer"
                />
                <span className="text-sm text-[#555] group-hover:text-[#a4722c] transition-colors">
                  {occasion}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Recipients Filter */}
      <div className="bg-white rounded-lg p-4 border border-[#ede8df]">
        <button
          onClick={() => toggleSection("recipients")}
          className="w-full flex items-center justify-between mb-4 hover:text-[#a4722c] transition-colors"
        >
          <h3 className="font-bold text-[#1a1a1a] text-sm uppercase tracking-wider">For Whom</h3>
          <svg
            className={`w-5 h-5 transition-transform ${expandedSections.recipients ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>

        {expandedSections.recipients && (
          <div className="space-y-3">
            {RECIPIENT_TAGS.map((recipient) => (
              <label key={recipient} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedRecipients.includes(recipient)}
                  onChange={() => onRecipientChange(recipient)}
                  className="w-4 h-4 text-[#a4722c] rounded cursor-pointer"
                />
                <span className="text-sm text-[#555] group-hover:text-[#a4722c] transition-colors">
                  For {recipient}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="bg-[#f9f3ee] rounded-lg p-4 border border-[#e8dcc8]">
          <p className="text-xs font-semibold text-[#a4722c] mb-3">Active Filters:</p>
          <div className="space-y-2">
            {selectedOccasions.map((occasion) => (
              <div
                key={occasion}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#a4722c]/10 rounded-full text-xs text-[#a4722c] font-medium"
              >
                {occasion}
                <button
                  onClick={() => onOccasionChange(occasion)}
                  className="hover:text-[#a4722c]/70 transition-colors"
                  aria-label="Remove filter"
                >
                  ✕
                </button>
              </div>
            ))}
            {selectedRecipients.map((recipient) => (
              <div
                key={recipient}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#a4722c]/10 rounded-full text-xs text-[#a4722c] font-medium"
              >
                {recipient}
                <button
                  onClick={() => onRecipientChange(recipient)}
                  className="hover:text-[#a4722c]/70 transition-colors"
                  aria-label="Remove filter"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
