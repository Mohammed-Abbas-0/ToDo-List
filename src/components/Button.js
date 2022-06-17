import ButtonStyle from '../styles/modules/button.module.scss';
export default function Button({children,
    type="button", ...rest})
{

    return (
        
        <button       
            className=
                    {
                        [
                            ButtonStyle.button , 
                            ButtonStyle.button_primary
                        ]
                            .join(' ')
                    }                 
            type={type}
            {...rest}
            >
            {children}
        </button>
    )
}
function SelectButton({children,...rest})
{
    return(
    <select
        className={ButtonStyle.selectButton}
        {...rest}
        >
        {children}
    </select>
    )
}
export { SelectButton };