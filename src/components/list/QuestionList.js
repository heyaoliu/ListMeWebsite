import cn from 'classnames';
import { useState } from 'react';

const QuestionList = ({ list }) => {
  const [current, setCurrent] = useState(-1);

  return list.map(({ question, answer }, index) => (
    <div className="md:w-1/2 w-3/4" key={question}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        onClick={() => setCurrent(current === index ? -1 : index)}
        className="flex flex-row justify-between border-purple px-5 py-4 md:text-xl text-lg text-left rounded-2xl hover:bg-purple cursor-pointer">
        <div className="leading-10 select-none">{question}</div>
        <div
          className={cn(
            ' text-3xl',
            current === index ? 'text-gray-300' : 'text-purple',
          )}>
          {current === index ? '-' : '+'}
        </div>
      </div>
      <div
        className={cn(
          'mt-5 text-left px-2 text-base',
          current === index ? '' : 'hidden',
        )}>
        {answer}
      </div>
    </div>
  ));
};

export default QuestionList;
