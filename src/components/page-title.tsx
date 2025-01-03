export interface PageTitleProps {
  title: string
}

export function PageTitle(props: PageTitleProps) {
  return <h1>{props.title}</h1>
}
