export function Logo({ className = "", inline = false }: { className?: string; inline?: boolean }) {
  return (
    <span className={`${inline ? 'inline' : ''} ${className}`}>
      <span className="text-green-600" style={{ fontWeight: 700 }}>Green</span>
      <span style={{ color: '#FFA826', fontWeight: 400 }}>Clean</span>
    </span>
  );
}
