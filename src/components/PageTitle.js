import TitleStyle from '../styles/modules/title.module.scss';
export default function PageTitle({children,...rest}) {
  return (
    <header className={TitleStyle.title} {...rest}>
      <h2 > {children.toUpperCase()} </h2>
    </header>
  )
}
