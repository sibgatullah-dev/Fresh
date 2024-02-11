

const Button = ({text,className}) => {
  return (
    <button className={`${className} rounded-lg font-poppins font-semibold text-[24px]`}>{text}</button>
  )
}

export default Button