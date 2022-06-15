import TitleStyle from '../styles/modules/title.module.scss';

export default function pageTitle( {children, ...rest} ) {
  return (
    <div className={TitleStyle.title} {...rest}>        
        <p> {children.toUpperCase()} </p>
    </div>
  )
}
