import Color from 'color';

const InputField = ({ setColorValue, setHexValue, isDark, setIsDark, colorValue }) => {
  return (
    <section>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          autoFocus
          required
          placeholder="Enter The Color Name"
          value={colorValue}
          onChange={(e) => {
            const inputColor = e.target.value.toLowerCase();
            setColorValue(inputColor);

            try {
              const hexValue = Color(inputColor).hex();
              setHexValue(hexValue);
            } catch (error) {
              setHexValue(null);
            }
            
          }}
        />
        <br />
        <button type="button" onClick={() => setIsDark(!isDark)}>
          Toggle Text Color
        </button>
      </form>
    </section>
  );
};

export default InputField;
