
export const ListItem = ({ text }: { text: string}) => {
  return (
    <div>
      <li>
        <a className="hover:text-teal-200" href="#">
          {text}
        </a>
      </li>
    </div>
  );
};
