const FirstLastNameFormField = ({ label, placeholder, id }: {
  label: string,
  placeholder: string,
  id: string
}) => (
  <div className="flex flex-col gap-2 w-1/2">
    <label htmlFor={id} className="text-13 font-normal">{label}</label>
    <input id={id} name={id} placeholder={`eg.${placeholder}`} className="h-10 w-full outline-none border border-white/10 focus:border-accent bg-grey pl-2 rounded-lg placeholder" required />
  </div>
)

export default FirstLastNameFormField