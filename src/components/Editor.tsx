"use client";

import React, { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

export type EditorHandle = {
  getContent: () => string;
  setContent: (value: string) => void;
};

type EditorProps = {
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder: string;
};

const Editor = forwardRef<EditorHandle, EditorProps>(({ defaultValue = "", onChange, placeholder }, ref) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            [{ align: [] }],
            ["link", "image"],
            ["clean"],
          ],
        },
        placeholder,
      });

      if (defaultValue) {
        quillRef.current.root.innerHTML = defaultValue;
      }

      quillRef.current.on("text-change", () => {
        const html = quillRef.current?.root.innerHTML || "";
        onChange?.(html);
      });
    }

    return () => {
      quillRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useImperativeHandle(ref, () => ({
    getContent: () => quillRef.current?.root.innerHTML || "",
    setContent: (value: string) => {
      if (quillRef.current) {
        quillRef.current.root.innerHTML = value;
      }
    },
  }));

  return (
    <div
      ref={editorRef}
      className="resize-y overflow-auto min-h-[300px] rounded-md border border-gray-300 [&>.ql-editor]:min-h-[300px]"
    />
  );
});

Editor.displayName = "Editor";
export default Editor;
