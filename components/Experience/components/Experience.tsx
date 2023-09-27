import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { EXPERIENCE } from '../../../utils/constants';

export default function Experience() {
  return (
    <VerticalTimeline lineColor="gray">
      {EXPERIENCE.map((item, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.05)',
              boxShadow: 'none',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              textAlign: 'left',
              padding: '1.3rem 2rem',
            }}
            contentArrowStyle={{
              borderRight: '0.5rem solid rgba(255, 255, 255, 0.5)',
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: '#333333',
              fontSize: '1.5rem',
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="!font-normal !mt-0 text-white/75">{item.location}</p>
            <p className="!mt-1 !font-normal !mb-2">{item.description}</p>
            <ul className="list-inside">
              {item.list?.map((row, index) => (
                <li className="list-disc" key={index}>
                  {row}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>
  );
}
