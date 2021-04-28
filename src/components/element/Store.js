import Image from 'next/image';

const Store = ({ src }) => (
  <Image
    className="hover:opacity-90 cursor-pointer transition-opacity duration-200"
    src={src}
    width={135}
    height={40}
  />
);

export default Store;
