import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUserGraduate, FaBriefcaseMedical, FaReact } from 'react-icons/fa';
import { MdOutlineComputer } from 'react-icons/md';

const experiencesData = [
  {
    title: 'Full matriculation certificates',
    location: 'Begin High School',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: <FaUserGraduate />,
    date: 'Sep 2016 - Jul 2019',
    points: ['1', '2', '3'],
  },
  {
    title: 'Israel Defense Forces',
    location: '',
    description: 'As a combat medic in Handasa Kravit',
    icon: <FaBriefcaseMedical />,
    date: 'Nov 2019 - Aug 2022',
    points: ['1', '2', '3'],
  },
  {
    title: 'Full Stack Developer | Freelance',
    location: 'Remote',
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: <MdOutlineComputer />,
    date: 'Apr 2021 - Present',
    points: ['1', '2', '3'],
  },
  {
    title: 'Full-Stack Developer Front-end Focused',
    location: 'Kal-Quote · Part-time',
    description:
      'A startup company that specializes in providing a solution to the problem of communication and management between suppliers and customers. As a sole front developer, I created the frontend myself while thinking and self learning about the best options',
    icon: <FaReact />,
    date: 'Jan 2022 - Present',
    points: ['1', '2', '3'],
  },
];

export default function Experience() {
  return (
    <VerticalTimeline lineColor="gray">
      {experiencesData.map((item, index) => (
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
            <p className="!font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline>
  );
}
