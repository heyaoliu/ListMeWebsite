import Layout from '@components/Layout';
import Image from 'next/image';
import Button from '@components/element/Button';

export default function ContactPage() {
  return (
    <Layout>
      <div className="h-auto bg-page-black text-white py-20 text-sm">
        <div className=" text-4xl mx-auto text-center">Get in Touch</div>
        <div className="md:container mx-auto flex justify-center items-center md:mt-32 mt-16 flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="h-3/4 flex flex-col justify-around items-start space-y-12">
              <div className="flex flex-row justify-start md:w-1/2">
                <div className="text-center flex flex-col justify-center">
                  <Image
                    src="/images/contact/position.png"
                    width={28}
                    height={40}
                  />
                </div>
                <div className="md:ml-20 ml-10 md:w-3/4">
                  <div className="text-gray-400">Address</div>
                  <div className="font-bold">
                    20-22 Wenlock Road London N1 7Gu
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start md:w-1/2">
                <div className="text-center flex flex-col justify-center">
                  <Image
                    src="/images/contact/mail.png"
                    width={32}
                    height={22}
                  />
                </div>
                <div className="md:ml-20 ml-10 md:w-3/4">
                  <div className="text-gray-400">Email</div>
                  <div className="font-bold">hello@listmeapp.com</div>
                </div>
              </div>
              <div className="flex flex-row justify-start md:w-1/2">
                <div className="text-center flex flex-col justify-center">
                  <Image
                    src="/images/contact/call.png"
                    width={30}
                    height={30}
                  />
                </div>
                <div className="md:ml-20 ml-10 md:w-3/4">
                  <div className="text-gray-400">Whatsapp</div>
                  <div className="font-bold">+447537144586</div>
                </div>
              </div>
              <Button type="primary" className="font-bold">
                Book a Demo
              </Button>
            </div>
          </div>
          <div className="h-96 w-px bg-purple hidden md:block" />
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="space-y-5 text-right md:px-20 px-10">
              <input
                placeholder="Name"
                className="bg-page-black border-purple flex-1 appearance-none border border-transparent w-full py-4 px-5 bg-gray-100  text-xl placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
              />
              <input
                placeholder="E-mail"
                className="bg-page-black border-purple mt-3 flex-1 appearance-none border border-transparent w-full py-4 px-5 bg-gray-100  text-xl placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="bg-page-black border-purple resize-none mt-3 flex-1 appearance-none border border-transparent w-full py-4 px-5 bg-gray-100 text-xl placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
              />
              <Button
                className="w-20 text-lg font-semibold float-right"
                type="primary">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
