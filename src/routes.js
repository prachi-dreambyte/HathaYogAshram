import React from 'react';
import { Icon } from '@chakra-ui/react';
import { MdHome, MdLock, MdImage, MdAdd} from 'react-icons/md';
import MainDashboard from 'views/admin/default';
import SignInCentered from 'views/auth/signIn';
import HomepageBannerList from 'views/admin/HomePage/HomePageBanner/HomepageBannerList';
import Section1List from 'views/admin/HomePage/Section1/Section1List';
import TeacherHeadingAdmin from 'views/admin/HomePage/HomeTeachers/TeacherHeadingAdmin';
import TeacherName from 'views/admin/HomePage/HomeTeachers/TeacherName';
import TeacherTraining from 'views/admin/HomePage/HomeTeacherTraining/HomeTeacherTraining';
import TeacherTrainingHeading from 'views/admin/HomePage/HomeTeacherTrainingOverview/HomeTeacherTrainingOverviewHeading';



const routes = [
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/default',
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: <MainDashboard />,
  },

  // ── HomePage with sidebar dropdown ────────────────────────────────────────
  {
    name: 'HomePage',
    layout: '/admin',
    path: '/homepage-banner',
    icon: <Icon as={MdImage} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'HomePageBanner',
        layout: '/admin',
        path: '/homepage-banner/list',
        icon: <Icon as={MdAdd} width="20px" height="20px" color="inherit" />,
        component: <HomepageBannerList/>,
      },
      {
        name: 'Section1',
        layout: '/admin',
        path: '/homepage-banner/Section1',
        icon: <Icon as={MdAdd} width="20px" height="20px" color="inherit" />,
        component: <Section1List/>,
      },
      {
        name: 'HomePage Teacher Courses',
        layout: '/admin',
        path: '/homepage-banner/HomeTeacher',
        icon:  <Icon as={MdAdd} width="20px" height="20px" color="inherit" />,
         collapse: true,   
          items: [
      {
        name: 'Teacher MainHeading',
        layout: '/admin',
        path: '/homepage-banner/HomeTeacher/Heading',
        icon: <Icon as={MdAdd} width="20px" height="20px" color="inherit" />,
        component: <TeacherHeadingAdmin />,
      },
       {
        name: 'Teacher Name',
        layout: '/admin',
        path: '/homepage-banner/HomeTeacher/Name',
        icon: <Icon as={MdAdd} width="20px" height="20px" color="inherit" />,
        component: <TeacherName/>,
      },
          ]
      },
      {
        name: 'Home Teacher Training',
        layout: '/admin',
        path: '/homepage-banner/Home-Teacher-Training',
        icon:  <Icon as={MdAdd} width="20px" height="20px" color="inherit" />,
        component: <TeacherTraining/>,
      },
      {
        name: 'HomeTeacherTrainingOverview',
        layout: '/admin',
        path: '/homepage-banner/Home-Teacher-Training-Overview',
        icon:  <Icon as={MdAdd} width="20px" height="20px" color="inherit" />,
       collapse: true,   
          items: [
      {
        name: 'Training Overview Heading',
        layout: '/admin',
        path: '/homepage-banner/Home-Teacher-Training-Overview/Heading',
        icon: <Icon as={MdAdd} width="20px" height="20px" color="inherit" />,
        component: <TeacherTrainingHeading />,
      },
    ]
      },
    ],
  },
  // ─────────────────────────────────────────────────────────────────────────

  {
    name: 'Sign In',
    layout: '/auth',
    path: '/sign-in',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    component: <SignInCentered />,
  },
];

export default routes;