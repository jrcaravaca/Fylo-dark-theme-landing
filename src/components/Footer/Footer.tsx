import { ContactItem } from "./components/ContactItem"
import  { type ContactInformation } from "../models/contactinformation.model"
import { ListItem } from "./components/ListItem"
import { contactInformation, pages, conditions, socials } from "./CONST"
import { SocialMediaLink } from "./components/SocialMediaLink"
import type { SocialMediaProps } from "../models/socialmediaprops.model"



export const Footer = () => {
  return (
    <footer className="pt-65 px-6">
        <img className="mb-10" src="/images/logo.svg" alt="logo" />

        <div className="flex flex-col gap-4">
          {
            contactInformation.map((item: ContactInformation) => (
                <ContactItem key={item.alt} {...item}/>
            ))
          }
        </div>
        
        <div className="flex flex-col gap-8 mt-16">
          <ul className="list-none">
            {
              pages.map((page: string) => (
                <ListItem key={page} text={page} />
              ))
            }
          </ul>

          <ul className="list-none">
            {
              conditions.map((condition: string) => (
                <ListItem key={condition} text={condition} />
              ))
            }
          </ul>
        </div>

        <div className="flex mt-6 pb-6 items-center justify-center gap-4">
          {
            socials.map((social: SocialMediaProps) => (
              <SocialMediaLink key={social.alt} {...social} />
            ))
          }
        </div>

    </footer>
  )
}


