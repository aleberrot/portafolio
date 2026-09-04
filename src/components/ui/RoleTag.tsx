interface Props{
    label: string
}

export function RoleTag({ label }: Props) {
  return <span className="font-mono text-[11px] text-lime/80 border border-lime/20 bg-lime/5 px-2.5 py-1 rounded-full">{label}</span>
}