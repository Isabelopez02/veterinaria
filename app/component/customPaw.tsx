export const CustomPaw = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <div
    className={`inline-block ${className}`}
    style={{
      maskImage: "url(/paw-icon.svg)",
      maskRepeat: "no-repeat",
      maskSize: "contain",
      WebkitMaskImage: "url(/paw-icon.svg)",
      WebkitMaskRepeat: "no-repeat",
      WebkitMaskSize: "contain",
      backgroundColor: "currentColor", // Esto permite que tome el color de 'text-purple-100'
      ...style,
    }}
  />
);