import ButtonStyle from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
    primary:'primary',
    secondary: 'secondary'
}


export default function Button({children , type, variant , ...rest}) {
    
  return (
    <button 
        type={type === 'submit' ? 'submit' : 'button'} 
        className={
            getClasses([ButtonStyle.button , 
            ButtonStyle[`button--${buttonTypes[variant]}`]
        ])}
        {...rest}
        >
        {children}
    </button>
  )
}

function SelectButton({children,...rest}) 
{
    return (
        <select
        className={ButtonStyle.selectButton}
            {...rest}
        >
            {children}
        </select>
    )
}

export {SelectButton};
