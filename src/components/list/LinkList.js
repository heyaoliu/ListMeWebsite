import Link from 'next/link';

const LinkList = ({ list, className }) => {
  return list.map(({ title, link }) => (
    <Link href={link} key={title}>
      <div className={className}>{title}</div>
    </Link>
  ));
};

export default LinkList;
