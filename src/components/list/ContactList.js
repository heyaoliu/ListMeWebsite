const ContactList = ({ list }) => {
  return list.map(({ title, content }) => (
    <div key={title}>
      <div className="text-gray-400 cursor-default">{title}</div>
      <div>{content}</div>
    </div>
  ));
};

export default ContactList;
