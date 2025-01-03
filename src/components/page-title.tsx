export interface PageTitleProps {
  title: string
}

export function PageTitle(props: PageTitleProps) {
  return <h1 className="font-semibold text-3xl">{props.title}</h1>
}
