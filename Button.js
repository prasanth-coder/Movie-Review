const Button = ({name,classname,onclick}) => {
  return(
    <button 
    className={classname}
    onClick={() => {
      onclick();
      

    }}
    >
      {name}
    </button>

  )
}

export default Button;