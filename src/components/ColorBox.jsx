const ColorBox = ({colorValue,hexValue,isDark}) => {
    return (
    <section>
        <div className='color-box'
        style={
            {
                backgroundColor:colorValue,
                color: isDark ? "#000000" : "#ffffff"
            }
        }
        > 
        <h1>{colorValue? colorValue : "Empty Value"}</h1>
        <p>{hexValue? hexValue : null}</p>
        </div>
    </section>
  )
}

ColorBox.defaultProps ={
    colorValue:"Empty"
}

export default ColorBox
