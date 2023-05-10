import { ColorCard } from "./ColorCard"
import { nanoid } from "nanoid"

export const ColorList = ({ shades }) => {
    console.log(shades)
    return (
        <section className='colors'>
            {shades && shades.map((color, index) => {
                return <ColorCard key={nanoid()} color={color} index={index} />
            })}
        </section>
    )
}


