import Image from 'next/image';

const ServiceList = ({ list }) => {
  return list.map(({ img, title, description }) => (
    <div className="text-center" key={title}>
      <Image src={img} width={350} height={350} />
      <div className="mt-8">{title}</div>
      <div className="text-green font-bold">{description}</div>
    </div>
  ));
};

export default ServiceList;
