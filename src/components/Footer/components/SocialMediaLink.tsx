import { type SocialMediaProps } from "../../models/socialmediaprops.model";

export const SocialMediaLink = ({ iconUrl, alt }: SocialMediaProps) => {
  return (
    <div>
      <a href="#">
        <img src={iconUrl} alt={alt} className="size-7.5 text-white border border-white rounded-full p-0.75" />
      </a>
    </div>
  );
};
