import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const ColorCard = ({ color, index }) => {

    const { hex, weight } = color;

    const handleClick = async () => {
        if(navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`)
                toast.success(`Copied code to clipboard successfully`)
            } catch(e) {
                toast.error(`Error while copying to clipboard`)
            }
        } else {
            toast.error(`Browse does not support clipboard copy :(`)
        }
    }

    return (
        <article onClick={handleClick} className={index > 10 ? 'color color-light': 'color'} style={{ background: `#${hex}` }}>
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hex}</p>
        </article>
    )
}

