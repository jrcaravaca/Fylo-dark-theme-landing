import type { SocialMediaProps } from "../models/socialmediaprops.model"
import  { type ContactInformation } from "../models/contactinformation.model"

export const contactInformation: ContactInformation[] = [
  {
    text : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati odit placeat cumque ipsa ad esse provident voluptas error, culpa ex dignissimos, incidunt magni veritatis? Corrupti numquam saepe quis asperiores veniam?",
    iconUrl: "/images/icon-location.svg",
    alt: "location"
  },
  {
    text: "+1-543-123-4567",
    iconUrl: "/images/icon-phone.svg", 
    alt: "phone"
  },
  {
    text: "example@fylo.com",
    iconUrl: "/images/icon-email.svg", 
    alt: "email"
  }
]

export const pages: string[] = [
  'About Us', 'Jobs', 'Press', 'Blog'
]

export const conditions: string[] = [
  'Contact Us', 'Terms', 'Privacy'
]

export const socials: SocialMediaProps[] =  [
  {
    iconUrl: "/images/facebook-icon.svg",
    alt: "facebook icon"
  },
   {
    iconUrl: "/images/twitter-icon.svg",
    alt: "twitter icon"
  },
   {
    iconUrl: "/images/instagram-icon.svg",
    alt: "instagram icon"
  }
]