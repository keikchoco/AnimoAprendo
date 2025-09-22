"use client";

import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const QuillEditor = dynamic(() => import("react-quill-new"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

type ReactQuillEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

const ReactQuillEditor = ({ value, onChange }: ReactQuillEditorProps) => {
  return (
    <div className="h-56">
      <QuillEditor
        theme="snow"
        value={value}
        onChange={onChange}
        className="bg-white text-black rounded-md h-48"
      />
    </div>
  );
};

export default ReactQuillEditor;
