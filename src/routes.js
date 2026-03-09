import React from 'react';
import { Icon } from '@chakra-ui/react';
import {
  MdHome,
  MdLock,
  MdImage,
  MdDashboard,
  MdSchool,
  MdPerson,
  MdPhotoLibrary,
  MdMenuBook,
  MdHotel,
  MdQuestionAnswer,
  MdVideoLibrary,
  MdRateReview,
  MdStar,
  MdEmojiEvents,
  MdPlace
} from 'react-icons/md';

import MainDashboard from 'views/admin/default';
import SignInCentered from 'views/auth/signIn';
import HomepageBannerList from 'views/admin/HomePage/HomePageBanner/HomepageBannerList';
import Section1List from 'views/admin/HomePage/Section1/Section1List';
import TeacherHeadingAdmin from 'views/admin/HomePage/HomeTeachers/TeacherHeadingAdmin';
import TeacherName from 'views/admin/HomePage/HomeTeachers/TeacherName';
import TeacherTraining from 'views/admin/HomePage/HomeTeacherTraining/HomeTeacherTraining';
import TeacherTrainingHeading from 'views/admin/HomePage/HomeTeacherTrainingOverview/HomeTeacherTrainingOverviewHeading';
import TeacherTrainingCards from 'views/admin/HomePage/HomeTeacherTrainingOverview/HomeTeacherTrainingOverviewCards';
import HomeFacilityCards from 'views/admin/HomePage/HomeFacilities/FacilitiesCard';
import HomeYogaAlliance from 'views/admin/HomePage/HomeYogaAlliance/YogaAlliance';
import HomeWhyChooseHeading from 'views/admin/HomePage/HomeWhyChoose/Heading';
import HomeWhyChooseCards from 'views/admin/HomePage/HomeWhyChoose/Cards';
import HomeTestinomialHeading from 'views/admin/HomePage/HomeTestinomial/Heading';
import AdminTestimonialForm from 'views/admin/HomePage/HomeTestinomial/cards';
import HomeWhatWeOffer from 'views/admin/HomePage/HomeWhatWeOffer/HomeWhatWeOffer';
import HomeVideoSection from 'views/admin/HomePage/HomeVideoSection/HomeVideoSection';
import HomeFaqHeading from 'views/admin/HomePage/HomeFAq/HomeFAQ';
import FaqQuestion from 'views/admin/HomePage/HomeFAq/FaqQuestion';
import HomeGivingBack from 'views/admin/HomePage/GivingBackSection/GivingBackSection';
import HowToReachHeading from 'views/admin/HomePage/HowToReach/heading';
import AboutFounderSection from 'views/admin/AboutUs/Founder/Founder';
import AboutFounderDetails from 'views/admin/AboutUs/Founder/FounderDetails';
import AboutTeacherHeading from 'views/admin/AboutUs/Teachers/TeacherHeading';
import AboutTeacherDetails from 'views/admin/AboutUs/Teachers/TeacherDetails';
import AboutCoursesDetails from 'views/admin/Courses/CoursesDetails';
import HomeStudentReview from 'views/admin/HomePage/StudentReview/StudentReview';
import AccommodationForm from 'views/admin/AboutUs/Accommodation/Accommodation';
import GalleryHeadingForm from 'views/admin/AboutUs/Gallery/Gallery';
import GalleryForm from 'views/admin/AboutUs/Gallery/GalleryHeading';

const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },
  {
    name: 'HomePage',
    layout: '/admin',
    path: '/homepage',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'HomePage Banner',
        layout: '/admin',
        path: '/homepage/banner',
        icon: <Icon as={MdImage} width="20px" height="20px" color="inherit" />,
        component: <HomepageBannerList />,
      },
      {
        name: 'Section1',
        layout: '/admin',
        path: '/homepage/section1',
        icon: <Icon as={MdMenuBook} width="20px" height="20px" color="inherit" />,
        component: <Section1List />,
      },
      {
        name: 'Home Teacher Courses',
        layout: '/admin',
        path: '/homepage/teacher-courses',
        icon: <Icon as={MdSchool} width="20px" height="20px" color="inherit" />,
        collapse: true,
        items: [
          {
            name: 'Teacher MainHeading',
            layout: '/admin',
            path: '/homepage/teacher-courses/heading',
            icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
            component: <TeacherHeadingAdmin />,
          },
          {
            name: 'Teacher Name',
            layout: '/admin',
            path: '/homepage/teacher-courses/name',
            icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
            component: <TeacherName />,
          },
        ],
      },
      {
        name: 'Home Teacher Training',
        layout: '/admin',
        path: '/homepage/teacher-training',
        icon: <Icon as={MdSchool} width="20px" height="20px" color="inherit" />,
        component: <TeacherTraining />,
      },
      {
        name: 'Teacher Training Overview',
        layout: '/admin',
        path: '/homepage/training-overview',
        icon: <Icon as={MdMenuBook} width="20px" height="20px" color="inherit" />,
        collapse: true,
        items: [
          {
            name: 'Training Overview Heading',
            layout: '/admin',
            path: '/homepage/training-overview/heading',
            icon: <Icon as={MdMenuBook} width="20px" height="20px" color="inherit" />,
            component: <TeacherTrainingHeading />,
          },
          {
            name: 'Training Overview Cards',
            layout: '/admin',
            path: '/homepage/training-overview/cards',
            icon: <Icon as={MdStar} width="20px" height="20px" color="inherit" />,
            component: <TeacherTrainingCards />,
          },
        ],
      },
      {
        name: 'Home Facility',
        layout: '/admin',
        path: '/homepage/facility',
        icon: <Icon as={MdHotel} width="20px" height="20px" color="inherit" />,
        collapse: true,
        items: [
          {
            name: 'Facility Cards',
            layout: '/admin',
            path: '/homepage/facility/cards',
            icon: <Icon as={MdHotel} width="20px" height="20px" color="inherit" />,
            component: <HomeFacilityCards />,
          },
        ],
      },
      {
        name: 'Home Yoga Alliance',
        layout: '/admin',
        path: '/homepage/yoga-alliance',
        icon: <Icon as={MdEmojiEvents} width="20px" height="20px" color="inherit" />,
        component: <HomeYogaAlliance />,
      },
      {
        name: 'Home Why Choose',
        layout: '/admin',
        path: '/homepage/why-choose',
        icon: <Icon as={MdStar} width="20px" height="20px" color="inherit" />,
        collapse: true,
        items: [
          {
            name: 'Why Choose Heading',
            layout: '/admin',
            path: '/homepage/why-choose/heading',
            icon: <Icon as={MdStar} width="20px" height="20px" color="inherit" />,
            component: <HomeWhyChooseHeading />,
          },
          {
            name: 'Why Choose Cards',
            layout: '/admin',
            path: '/homepage/why-choose/cards',
            icon: <Icon as={MdStar} width="20px" height="20px" color="inherit" />,
            component: <HomeWhyChooseCards />,
          },
        ],
      },
      {
        name: 'Home Testimonial',
        layout: '/admin',
        path: '/homepage/testimonial',
        icon: <Icon as={MdRateReview} width="20px" height="20px" color="inherit" />,
        collapse: true,
        items: [
          {
            name: 'Testimonial Heading',
            layout: '/admin',
            path: '/homepage/testimonial/heading',
            icon: <Icon as={MdRateReview} width="20px" height="20px" color="inherit" />,
            component: <HomeTestinomialHeading />,
          },
          {
            name: 'Testimonial Cards',
            layout: '/admin',
            path: '/homepage/testimonial/cards',
            icon: <Icon as={MdRateReview} width="20px" height="20px" color="inherit" />,
            component: <AdminTestimonialForm />,
          },
        ],
      },
      {
        name: 'What We Offer',
        layout: '/admin',
        path: '/homepage/what-we-offer',
        icon: <Icon as={MdMenuBook} width="20px" height="20px" color="inherit" />,
        component: <HomeWhatWeOffer />,
      },
      {
        name: 'Homepage Video Section',
        layout: '/admin',
        path: '/homepage/video-section',
        icon: <Icon as={MdVideoLibrary} width="20px" height="20px" color="inherit" />,
        component: <HomeVideoSection />,
      },
      {
        name: 'Homepage FAQ',
        layout: '/admin',
        path: '/homepage/faq',
        icon: <Icon as={MdQuestionAnswer} width="20px" height="20px" color="inherit" />,
        collapse: true,
        items: [
          {
            name: 'FAQ Heading',
            layout: '/admin',
            path: '/homepage/faq/heading',
            icon: <Icon as={MdQuestionAnswer} width="20px" height="20px" color="inherit" />,
            component: <HomeFaqHeading />,
          },
          {
            name: 'FAQ Questions',
            layout: '/admin',
            path: '/homepage/faq/questions',
            icon: <Icon as={MdQuestionAnswer} width="20px" height="20px" color="inherit" />,
            component: <FaqQuestion />,
          },
        ],
      },
      {
        name: 'Giving Back Section',
        layout: '/admin',
        path: '/homepage/giving-back',
        icon: <Icon as={MdEmojiEvents} width="20px" height="20px" color="inherit" />,
        component: <HomeGivingBack />,
      },
      {
        name: 'How To Reach Us',
        layout: '/admin',
        path: '/homepage/how-to-reach',
        icon: <Icon as={MdPlace} width="20px" height="20px" color="inherit" />,
        collapse: true,
        items: [
          {
            name: 'Heading',
            layout: '/admin',
            path: '/homepage/how-to-reach/heading',
            icon: <Icon as={MdPlace} width="20px" height="20px" color="inherit" />,
            component: <HowToReachHeading />,
          },
        ],
      },
      {
        name: 'Student Review',
        layout: '/admin',
        path: '/homepage/student-review',
        icon: <Icon as={MdRateReview} width="20px" height="20px" color="inherit" />,
        component: <HomeStudentReview />,
      },
    ],
  },
  {
    name: 'AboutUS',
    layout: '/admin',
    path: '/about-us',
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'Founder',
        layout: '/admin',
        path: '/about-us/founder',
        icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
        collapse: true,
        items: [
          {
            name: 'Founder Details',
            layout: '/admin',
            path: '/about-us/founder/details',
            icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
            component: <AboutFounderDetails />,
          },
          {
            name: 'Founder Section',
            layout: '/admin',
            path: '/about-us/founder/Section',
            icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
            component: <AboutFounderSection />,
          },
        ],
      },
      {
        name: 'Teacher',
        layout: '/admin',
        path: '/about-us/Teacher',
        icon: <Icon as={MdSchool} width="20px" height="20px" color="inherit" />,
        collapse: true,
        items: [
          {
            name: 'Teacher Details',
            layout: '/admin',
            path: '/about-us/Teacher/details',
            icon: <Icon as={MdSchool} width="20px" height="20px" color="inherit" />,
            component: <AboutTeacherDetails />,
          },
          {
            name: 'Teacher Section',
            layout: '/admin',
            path: '/about-us/Teacher/Section',
            icon: <Icon as={MdSchool} width="20px" height="20px" color="inherit" />,
            component: <AboutTeacherHeading />,
          },
        ],
      },
      {
        name: 'Gallery',
        layout: '/admin',
        path: '/AboutUs/Gallery',
        icon: <Icon as={MdPhotoLibrary} width="20px" height="20px" color="inherit" />,
        collapse: true,
        items: [
          {
            name: 'GalleryHeading',
            layout: '/admin',
            path: '/AboutUs/Gallery/Heading',
            icon: <Icon as={MdPhotoLibrary} width="20px" height="20px" color="inherit" />,
            component: <GalleryForm />,
          },
          {
            name: 'Gallery',
            layout: '/admin',
            path: '/AboutUs/Gallery/images',
            icon: <Icon as={MdPhotoLibrary} width="20px" height="20px" color="inherit" />,
            component: <GalleryHeadingForm />,
          },
        ],
      },
      {
        name: 'Accommodation',
        layout: '/admin',
        path: '/AboutUs/Accommodation',
        icon: <Icon as={MdHotel} width="20px" height="20px" color="inherit" />,
        component: <AccommodationForm />,
      },
    ],
  },
  {
    name: 'Courses',
    layout: '/admin',
    path: '/Courses',
    icon: <Icon as={MdMenuBook} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'Courses Details',
        layout: '/admin',
        path: '/Courses/Courses-Details',
        icon: <Icon as={MdMenuBook} width="20px" height="20px" color="inherit" />,
        component: <AboutCoursesDetails />,
      },
    ],
  },
  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
];

export default routes;