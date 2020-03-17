import React from 'react'

function RadioButtons(props) {
    return (
        <div id='buttons'>
            <form>
                <div className='radio'>
                    <label>
                        <input type='radio' value='italic' onChange={props.handleFontChange} checked={props.styleOption==='italic'}/>
                        Italic
                    </label>
                </div>
                <div className='radio'>
                    <label>
                        <input type='radio' value='bold' onChange={props.handleFontChange} checked={props.styleOption==='bold'}/>
                        Bold
                    </label>
                </div>
                <div className='radio'>
                    <label>
                        <input type='radio' value='normal' onChange={props.handleFontChange} checked={props.styleOption==='normal'}/>
                        Normal
                    </label>
                </div>
            </form>

            <form>
                <div className='radio'>
                    <label>
                        <input type='radio' value='red' onChange={props.handleColorChange} checked={props.color==='red'}/>
                        Red
                    </label>
                </div>
                <div className='radio'>
                    <label>
                        <input type='radio' value='blue' onChange={props.handleColorChange} checked={props.color==='blue'}/>
                        Blue
                    </label>
                </div>
                <div className='radio'>
                    <label>
                        <input type='radio' value='black' onChange={props.handleColorChange} checked={props.color==='black'}/>
                        Black
                    </label>
                </div>
            </form>
        </div>
    )
}

export default RadioButtons