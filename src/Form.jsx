import { useState } from "react"

export const Form = ({ updateShades }) => {

    const [color, setColor] = useState('#f15025')

    const handleSubmit = (e) => {
        e.preventDefault()
        updateShades(color)
    }

    return (
        <section className='container'>
            <h4>color generator</h4>
            <form className='color-form' onSubmit={handleSubmit}>
                <input 
                    type='color'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <input 
                    type='text'
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
                <button className='btn' type='submit' style={{ background: color }}> Submit </button>
            </form>
        </section>
    )
}

