import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
 
import './App.css'
import HomePage from './pages/HomePage'
import AstrologyAppsPage from './pages/AstrologyAppsPage'
import HoroscopesPage from './pages/HoroscopesPage'
import JewelleryGemstonesPage from './pages/JewelleryGemstonesPage'
import MatrimonialPage from './pages/MatrimonialPage'
import MediaEntertainmentPage from './pages/MediaEntertainmentPage'
import NumerologyPage from './pages/NumerologyPage'
import PricingPage from './pages/PricingPage'
import RestAPIPage from './pages/RestAPIPage'
import TarotReadingPage from './pages/TarotReadingPage'
import UtilityLifestylePage from './pages/UtilityLifestylePage'
import VedicAstrologyPage from './pages/VedicAstrologyPage'
import WesternAstrologyPage from './pages/WesternAstrologyPage'
import LayoutPage from './layouts/LayoutPage'
import PageNotFound from './pages/PageNotFound'
import AboutPage from './pages/AboutPage'
import TermPage from './pages/TermPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import RefundPolicyPage from './pages/RefundPolicyPage'
import ContactUsPage from './pages/ContactUsPage'
import HelpCenterPage from './pages/HelpCenterPage'
import ScheduleDemoPage from './pages/ScheduleDemoPage'
import BlogPage from './pages/BlogPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const routes = [
  {
    path: '/',
    element: <LayoutPage />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path:'/astrology-apps',
        element: <AstrologyAppsPage />
      },
      {
        path:'/horoscope',
        element: <HoroscopesPage />
      },
      {
        path:'/jewellery-gemstones',
        element: <JewelleryGemstonesPage />
      },
      {
        path:'/dating-matrimonial',
        element: <MatrimonialPage />
      },
      {
        path:'/media-entertainment',
        element: <MediaEntertainmentPage />
      },
      {
        path:'/numerology',
        element: <NumerologyPage />
      },
      {
        path:'/pricing',
        element: <PricingPage />
      },
      {
        path:'/astrology-rest',
        element: <RestAPIPage />
      },
      {
        path:'/tarot-card',
        element: <TarotReadingPage />
      },
      {
        path:'/utility-lifestyle',
        element: <UtilityLifestylePage />
      },
      {
        path:'/vedic-astrology',
        element: <VedicAstrologyPage />
      },
      {
        path:'/western-astrology',
        element: <WesternAstrologyPage />
      },
      {
        path:'/about',
        element: <AboutPage />
      },
      {
        path:'/terms',
        element: <TermPage />
      },
      {
        path:'/privacy',
        element: <PrivacyPolicyPage />
      },
      {
        path:'/refund',
        element: <RefundPolicyPage />
      },
      {
        path:'/blog',
        element: <BlogPage />
      },
      {
        path:'/support',
        element: <HelpCenterPage />
      },
      {
        path:'/schedule-demo',
        element: <ScheduleDemoPage />
      },
      {
        path:'/contact',
        element: <ContactUsPage />
      },
      {
        path:'/login',
        element: <SignIn />
      },
      {
        path:'/signup',
        element: <SignUp />
      }
    ]

  }
]

  const router = createBrowserRouter(routes);

function App() {
  
  

  return (
   
      <RouterProvider router={router} />
   
  )
}

export default App
