import Link from 'next/link';
import Image from 'next/image';

const ContactList = ({ list }) => {
  return list.map(({ img, link }) => (
    <Link href="/" key={link}>
      <Image
        className="hover:opacity-90 cursor-pointer transition-opacity duration-200"
        src={img}
        width={32}
        height={32}
      />
    </Link>
  ));
};

export default ContactList;
