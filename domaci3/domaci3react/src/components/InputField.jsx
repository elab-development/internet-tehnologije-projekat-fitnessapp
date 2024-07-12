const InputField = ({ name, value, onChange, placeholder, type }) => {
    
  
    return (
      <div className="input-group">
       
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
        />
      </div>
    );
  };
  
  export default InputField;