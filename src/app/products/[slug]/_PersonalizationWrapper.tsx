"use client";

import { useState } from "react";
import { PersonalizationOptions } from "@/components/product/PersonalizationOptions";

interface PersonalizationWrapperProps {
  isPersonalizable: boolean;
  onNoteChange: (note: string) => void;
}

export function PersonalizationWrapper({
  isPersonalizable,
  onNoteChange,
}: PersonalizationWrapperProps) {
  const [personalizationNote, setPersonalizationNote] = useState("");

  const handleChange = (note: string) => {
    setPersonalizationNote(note);
    onNoteChange(note);
  };

  return (
    <PersonalizationOptions
      isPersonalizable={isPersonalizable}
      options={["Add Name", "Add Date", "Add Message"]}
      onPersonalizationChange={handleChange}
    />
  );
}
