import ReactSwipe from 'react-swipe';
import Image from 'next/image';
import cn from 'classnames';
import { useState } from 'react';

const HomeSwipe = ({ list, type = 'home' }) => {
  const [index, setIndex] = useState(0);
  const swipeOptions = {
    startSlide: index,
    auto: 1000,
    speed: 2000,
    disableScroll: true,
    continuous: true,
    callback() {
      // setIndex(index)
    },
    transitionEnd(idx) {
      setIndex(idx);
    },
  };

  return (
    <div className="w-full bg-black h-auto text-white md:py-32 py-10">
      <div className="mx-auto">
        <ReactSwipe
          ref={(reactSwipe) => reactSwipe}
          swipeOptions={swipeOptions}>
          {list.map(({ title, description }, idx) => {
            if (type === 'dashboard') {
              return (
                <div
                  className="md:px-56 px-8 justify-between flex flex-col md:flex-row"
                  key={title}>
                  <div className="flex justify-center flex-col h-full space-y-24 mt-14">
                    <div className="text-3xl space-y-2">
                      <div className="text-purple"> How ListMe Works</div>
                      <div className="text-green">The ListMe Dashboard</div>
                    </div>
                    <div className="space-y-12">
                      <div className="text-9xl font-bold text-purple">
                        0{idx + 1}
                      </div>
                      <div className="text-5xl font-bold">{title}</div>
                      <div className="md:text-2xl md:w-3/4 text-gray-350">
                        {description}
                      </div>
                    </div>
                  </div>
                  <div className="h-auto text-center">
                    <Image
                      src={`/images/dashboard/${idx + 1}.png`}
                      priority
                      width={815}
                      height={640}
                    />
                  </div>
                </div>
              );
            }
            return (
              <div
                className="md:px-56 px-8 justify-between flex flex-col md:flex-row"
                key={title}>
                <div className="flex justify-center flex-col h-full space-y-24 mt-14">
                  <div className="text-3xl space-y-2">
                    <div className="text-purple"> How ListMe Works</div>
                    <div className="text-green">Our Application Interface</div>
                  </div>
                  <div className="space-y-12">
                    <div className="text-9xl font-bold text-purple">
                      0{idx + 1}
                    </div>
                    <div className="text-5xl font-bold">{title}</div>
                    <div className="md:text-2xl md:w-3/4 text-gray-350">
                      {description}
                    </div>
                  </div>
                </div>
                <div className="h-auto text-center">
                  <Image
                    src={`/images/app/${idx + 1}.png`}
                    priority
                    width={367}
                    height={654}
                  />
                </div>
              </div>
            );
          })}
        </ReactSwipe>
      </div>

      <div className="hidden md:block">
        <div className="container mx-auto text-center flex justify-center space-x-5 mt-12">
          {list.map(({ title }, idx) => {
            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
              <div
                className={cn(
                  'cursor-pointer h-1.5 w-24 rounded-full',
                  idx === index ? 'bg-gray-700' : 'bg-purple',
                )}
                key={title}
                onClick={() => {
                  setIndex(idx);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeSwipe;
