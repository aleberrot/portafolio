interface Props{
    label: string
}

export function TechTag({ label }: Props) {
  return <span className="font-mono text-[11px] text-dim border border-line px-2.5 py-1 rounded-full">{label}</span>
}
