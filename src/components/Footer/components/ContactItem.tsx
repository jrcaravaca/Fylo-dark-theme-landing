import { type ContactInformation } from "../../models/contactinformation.model"

export const ContactItem = ({iconUrl, text, alt, styles=""}:ContactInformation) => {
  return (
    <div className={`flex items-start gap-6  ${styles}`}>
      <img className="mt-1" src={iconUrl} alt={alt} />
      <p>{text}</p>
    </div>
  )
}


