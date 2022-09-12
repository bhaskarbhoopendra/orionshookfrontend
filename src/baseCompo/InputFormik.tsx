
export default function InputFormikComponent({label, type}: any) {
  return (
    <div>
        <label>
            {label}
        </label>
        <input type={type} />
    </div>
  )
}
