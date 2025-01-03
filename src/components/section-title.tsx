export interface SectionTitleProps {
  title: string
  subtitle?: string
}

export function SectionTitle(props: SectionTitleProps) {
  return (
    <div>
      <h2 className="font-medium text-xl">{props.title}</h2>
      {props.subtitle ? <p>{props.subtitle}</p> : null}
    </div>
  )
}
