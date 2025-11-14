type Props = {
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  placeholder?: string;
  className?: string;
};

export default function CodeEditor({
  value,
  onChange,
  rows = 12,
  placeholder,
  className,
}: Props) {
  return (
    <textarea
      className={className ?? "css-editor"}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      rows={rows}
      placeholder={placeholder}
      spellCheck={false}
    />
  );
}
