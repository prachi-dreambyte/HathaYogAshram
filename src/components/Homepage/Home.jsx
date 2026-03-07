import React, { useEffect, useMemo } from 'react'
import Header from '../../components/header'
import '../../style/home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from '../../components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import { FaCamera, FaVideo, FaPhotoVideo } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

function Home() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // optional: scroll to top if no hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);


  const img1 = useMemo(() => [
    '/image/demo/image1.jpg','/image/demo/image2.jpg','/image/demo/image3.jpg','/image/demo/image4.jpg','/image/demo/image5.jpg','/image/demo/image1.jpg',
    '/image/demo/image4.jpg','/image/demo/image2.jpg','/image/demo/image5.jpg','/image/demo/image3.jpg','/image/demo/img1.jpg','/image/demo/img2.jpg'
  ], [])
     const Set = {
  dots:true,
  arrows: false,
  infinite: true,
  speed: 3000, // smooth slide speed
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 0,
cssEase: "linear", // wait before next slide
  cssEase: "ease-in-out", // smoother transition
  pauseOnHover: true,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 6 } },
    { breakpoint: 992, settings: { slidesToShow: 5 } },
    { breakpoint: 768, settings: { slidesToShow: 4 } },
    { breakpoint: 576, settings: { slidesToShow: 3 } }
  ]
};
  const images = [
    "/image/Img.jpg",
    "/image/demo/REAL ESTATE (3).webp",
    "/image/demo/F&B (1).webp",
    "/image/Apple.jpg",
    "/image/400x500.png",
    "/image/Models/400600.jpg",
    "/image/demo/F&B (4).webp",
  ];

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 800,
    cssEase: "ease-in-out",
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768, // tablets
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const Dreams = {
   dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  const services = [
  {
    icon: <FaCamera size={40} />,
    title: "Product Shoot",
    desc1: "",
    desc2: "We focus on creating timeless memories and producing a film that sticks in the mind with its visuals and compelling stories.",
     img: "/image/Img.jpg"
  },
  {
    icon: <FaCamera size={40} />,
    title: "Content Creation",
    desc1: "",
    desc2: "Our expert team of photographers combine creativity and technology to capture the story and memories behind every photo.",
     img: "/image/Apple.jpg"
  },
  {
    icon: <FaCamera size={40} />,
    title: "Event shoot",
    desc1: "",
    desc2: "Boost your modeling career with Dream Byte Studio for industry-standard photos and videos for your portfolio.",
    img: "/image/demo/EVENT (3).webp"
  },
  {
    icon: <FaCamera size={40} />,
    title: "E-commerce photography",
    desc1: " ",
    desc2: "We help you to tell your brand story and brand vision with a stunning product shoot by capturing every detail of your product.",
    img: "/image/demo/ECOM (1).webp"
  },
  {
    icon: <FaCamera size={40} />,
    title: "Fashion and Model Shoot",
    desc1: "",
    desc2: "Capture energy of every occasion with vibrant event photography and vediography so your special moment never fades away.",
    img: "/image/400x500.png"
  },
  {
    icon: <FaCamera size={40} />,
    title: "Ad Films and Commercial shoots",
    desc1: "",
    desc2: "Advertise or promote your products, brands, and services with amazing visual content to showcase your firm’s story.",
    img: "/image/demo/BTS (2).webp"
  },
  // {
  //   icon: <FaCamera size={40} />,
  //   title: "Documentary",
  //   desc1: " Best Documentary production services | Dream Byte Studio | Dehradun ",
  //   desc2: "Unveil real stories with impactful documentaries by combining stunning visuals, storytelling, and professional cinematography to bring real-life experience.",
  //   img: "//image/MAN13348-2-1920x1080.jpg"
  // },
  // { 


  //   icon: <FaCamera size={40} />,
  //   title: "Wedding videography and photography",
  //   desc1: "best wedding photographer in india | Dream Byte Studio | Dehradun",
  //   desc2: "Cherish your special day with candid shots, cinematic films, and professional editing, and let your moments live forever through our lens.",
  //   img: "//image/MAN13348-2-1920x1080.jpg"
  // },
];

  return (
    <>
      {/* <Header /> */}
      <section>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 zoom" src="/image/MAN13348-2-1920x1080.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 zoom" src="/image/049A9578-1-1920x1080.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 zoom" src="/image/049A6292-1920x1080.jpg" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 zoom" src="/image/001-4-1920x1080.jpg" alt="Fourth slide" />
            </div>
          </div>
        </div>
      </section>
      <section className='FrontSecondSections services-sec'>
        <div className='DreamFrontSecondSection'>
        <div class="container">
          <div className='row'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="55" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
              <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
              <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
            </svg>
            <h1 className='FrontHeadSection'>The Best Production house in India</h1>
            <div className='col-md-6'>
              <p className='fst-italic'>Welcome to Dream Byte Studio, where we bring brands to life by creating compelling visuals. As the creative heart of Dream Byte Solutions, 
                we have enabled impactful showcasing and brand building for brands all over India and have become one of the most trusted production houses in India.</p>
            </div>
            <div className='col-md-6'>
             <p className='fst-italic'> We are a team of young and experienced professionals who have worked with top brands in India. We provide a wide range of services, whether it is a corporate event shoot,
                 product shoot, wedding photography and videography, documentary, etc.</p>
            </div>
          </div>
          </div>
          </div>
        </section>
        <section className="FrontSecondSection services-sections py-5">
         <h1 className="FrontHeadSection">Services we offer</h1>
         <div className="DreamFrontSecondSection">
          <p className="fst-italic">
            We offer a wide range of services, from product shoots to wedding shoots; we do it all.
             We have delivered many diverse projects over these years. Our dynamic team of passionate
             professionals is an expert in all. Our services include brand photography and videography,
            documentary, podcast, wedding shoot, and many more.
          </p>
         </div>
         <div class="DreamCards services-section">
      <div className="container">
        <div className="row g-4">
          {services.map((service, i) => (
  <div className="col-md-4" key={i}>
    <article className="card1">
      <img
        className="card__background"
        src={service.img}   // ✅ Correct way
        alt={service.title}
      />
      <div className="card__content">
        <div className="card__content--container">
          <h2 className="card__title">{service.title}
            {/* {service.icon} {service.title} */}
          </h2>
          <p className="card__description">{service.desc1}</p>
          <p className="card__descriptions">{service.desc2}</p>
        </div>
      </div>
    </article>
  </div>
))}

        </div>
      </div>

      
      <button className="DreamBtn mt-5">
        <Link to="/services">More Services</Link>
      </button>
    </div>
          
        
        </section>

 <section className='FrontSecondSections services-sec'>
        <div className='DreamFrontSecondSection'>
        <div class="container">
          <div className='row'>
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="55" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
              <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
              <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
            </svg>
            <h1 className='FrontHeadSection'>What makes us the best production house in India?</h1>
            <div className='col-md-6'>
              <p className='fst-italic'>At Dream Byte Studio, we combine creativity, technology, storytelling, and our expertees to deliver your story to the world. 
                We believe every brand has a purpose behind its establishment. As a finest production house we not only capture and shoot your videos and</p>
            </div>
            <div className='col-md-6'>
             <p className='fst-italic'> photos, but we give them life so that your memories never fade, and your brand shines and represents the vision of your business.
                  Our only purpose is to create top-quality content for our partners and retain the trust that they have shown us in all these years of business.</p>
            </div>
          </div>
          </div>
          </div>
        </section>

        <section className='FrontSecondSection services-sections'>
               <div className=''>
              <div class="container-fluid">
                <div className='row'>
                  <h1 className='FrontHeadSection'>Why Choose Us?</h1>
                  <div class="DreamPadding">
                  <div class="row">
                    <div class="col-sm-4 mb-3 mb-sm-0">
                      <div className='DreamCards'>
                      <div className="card card4">
                        <div class="card-body">
                          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-flower1" viewBox="0 0 16 16">
                           <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826M8 1a1 1 0 0 0-.998 1.03l.01.091q.017.116.054.296c.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a5 5 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1M2 9l.03-.002.091-.01a5 5 0 0 0 .296-.054c.241-.049.542-.122.887-.213a61 61 0 0 0 2.314-.676L5.762 8l-.144-.045a61 61 0 0 0-2.314-.676 17 17 0 0 0-.887-.213 5 5 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2m7 5-.002-.03a5 5 0 0 0-.064-.386 16 16 0 0 0-.213-.888 61 61 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a5 5 0 0 0-.064.386L7 14a1 1 0 1 0 2 0m-5.696-2.134.025-.017a5 5 0 0 0 .303-.248c.184-.164.408-.377.661-.629A61 61 0 0 0 5.96 9.23l.103-.111-.147.033a61 61 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5 5 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027q.014-.03.036-.084a5 5 0 0 0 .102-.283c.078-.233.165-.53.258-.874a61 61 0 0 0 .572-2.343l.033-.147-.11.102a61 61 0 0 0-1.743 1.667 17 17 0 0 0-.629.66 5 5 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366m9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a5 5 0 0 0-.303.248 17 17 0 0 0-.661.629A61 61 0 0 0 10.04 6.77l-.102.111.147-.033a61 61 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a5 5 0 0 0 .367-.138zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027q-.014.03-.036.084a5 5 0 0 0-.102.283c-.078.233-.165.53-.258.875a61 61 0 0 0-.572 2.342l-.033.147.11-.102a61 61 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5 5 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366M14 9a1 1 0 0 0 0-2l-.03.002a5 5 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a5 5 0 0 0 .386.064zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035q.108.045.283.103c.233.078.53.165.874.258a61 61 0 0 0 2.343.572l.147.033-.103-.111a61 61 0 0 0-1.666-1.742 17 17 0 0 0-.66-.629 5 5 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366m2.196-1.196.017.025a5 5 0 0 0 .248.303c.164.184.377.408.629.661A61 61 0 0 0 6.77 5.96l.111.102-.033-.147a61 61 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5 5 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1m9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a61 61 0 0 0-2.342-.572l-.147-.033.102.111a61 61 0 0 0 1.667 1.742c.253.252.477.465.66.629a5 5 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366m-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5 5 0 0 0-.248-.303 17 17 0 0 0-.629-.661A61 61 0 0 0 9.23 10.04l-.111-.102.033.147a61 61 0 0 0 .572 2.342c.093.345.18.642.258.875a5 5 0 0 0 .138.367zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                          </svg>
                          <h5 class="card-title">Creative Team</h5>
                          <p>Every member has a keen eye and carries the Foto Zone aesthetic, and hence no moment goes amiss 					</p>
                          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                      </div>
                      </div>
                    </div>
                    <div class="col-sm-4 mb-3 mb-sm-0">
                       <div className='DreamCards'>
                      <div className="card card4">
                        <div class="card-body">
                          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="currentColor" class="bi bi-gem" viewBox="0 0 16 16">
                            <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z"/>
                          </svg>
                          <h5 class="card-title">Professional Approach</h5>
                          <p>In this happiness industry, we bring a structure to our work and take the pains of planning away from our customers</p>
                          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                      </div>
                      </div>
                    </div>
                    <div class="col-sm-4 mb-3 mb-sm-0">
                       <div className='DreamCards'>
                      <div className="card card4">
                        <div class="card-body">
                          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" fill="currentColor" class="bi bi-yelp" viewBox="0 0 16 16">
                            <path d="m4.188 10.095.736-.17.073-.02A.813.813 0 0 0 5.45 8.65a1 1 0 0 0-.3-.258 3 3 0 0 0-.428-.198l-.808-.295a76 76 0 0 0-1.364-.493C2.253 7.3 2 7.208 1.783 7.14c-.041-.013-.087-.025-.124-.038a2.1 2.1 0 0 0-.606-.116.72.72 0 0 0-.572.245 2 2 0 0 0-.105.132 1.6 1.6 0 0 0-.155.309c-.15.443-.225.908-.22 1.376.002.423.013.966.246 1.334a.8.8 0 0 0 .22.24c.166.114.333.129.507.141.26.019.513-.045.764-.103l2.447-.566zm8.219-3.911a4.2 4.2 0 0 0-.8-1.14 1.6 1.6 0 0 0-.275-.21 2 2 0 0 0-.15-.073.72.72 0 0 0-.621.031c-.142.07-.294.182-.496.37-.028.028-.063.06-.094.089-.167.156-.353.35-.574.575q-.51.516-1.01 1.042l-.598.62a3 3 0 0 0-.298.365 1 1 0 0 0-.157.364.8.8 0 0 0 .007.301q0 .007.003.013a.81.81 0 0 0 .945.616l.074-.014 3.185-.736c.251-.058.506-.112.732-.242.151-.088.295-.175.394-.35a.8.8 0 0 0 .093-.313c.05-.434-.178-.927-.36-1.308M6.706 7.523c.23-.29.23-.722.25-1.075.07-1.181.143-2.362.201-3.543.022-.448.07-.89.044-1.34-.022-.372-.025-.799-.26-1.104C6.528-.077 5.644-.033 5.04.05q-.278.038-.553.104a8 8 0 0 0-.543.149c-.58.19-1.393.537-1.53 1.204-.078.377.106.763.249 1.107.173.417.41.792.625 1.185.57 1.036 1.15 2.066 1.728 3.097.172.308.36.697.695.857q.033.015.068.025c.15.057.313.068.469.032l.028-.007a.8.8 0 0 0 .377-.226zm-.276 3.161a.74.74 0 0 0-.923-.234 1 1 0 0 0-.145.09 2 2 0 0 0-.346.354c-.026.033-.05.077-.08.104l-.512.705q-.435.591-.861 1.193c-.185.26-.346.479-.472.673l-.072.11c-.152.235-.238.406-.282.559a.7.7 0 0 0-.03.314c.013.11.05.217.108.312q.046.07.1.138a1.6 1.6 0 0 0 .257.237 4.5 4.5 0 0 0 2.196.76 1.6 1.6 0 0 0 .349-.027 2 2 0 0 0 .163-.048.8.8 0 0 0 .278-.178.7.7 0 0 0 .17-.266c.059-.147.098-.335.123-.613l.012-.13c.02-.231.03-.502.045-.821q.037-.735.06-1.469l.033-.87a2.1 2.1 0 0 0-.055-.623 1 1 0 0 0-.117-.27Zm5.783 1.362a2.2 2.2 0 0 0-.498-.378l-.112-.067c-.199-.12-.438-.246-.719-.398q-.644-.353-1.295-.695l-.767-.407c-.04-.012-.08-.04-.118-.059a2 2 0 0 0-.466-.166 1 1 0 0 0-.17-.018.74.74 0 0 0-.725.616 1 1 0 0 0 .01.293c.038.204.13.406.224.583l.41.768q.341.65.696 1.294c.152.28.28.52.398.719q.036.057.068.112c.145.239.261.39.379.497a.73.73 0 0 0 .596.201 2 2 0 0 0 .168-.029 1.6 1.6 0 0 0 .325-.129 4 4 0 0 0 .855-.64c.306-.3.577-.63.788-1.006q.045-.08.076-.165a2 2 0 0 0 .051-.161q.019-.083.029-.168a.8.8 0 0 0-.038-.327.7.7 0 0 0-.165-.27"/>
                          </svg>
                          <h5 class="card-title">Hand Holding</h5>
                          <p>It matters a bit more if what you think is exactly what we plan to provide, the feeling is sweet right? Come, experience this with us</p>
                          {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section className='FrontSecondSections' id="aboutus">
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-7'>
                  <div className="fullwrap homeparallaxwrap">
                    <div className='homeparallaxwrapImg'>
                    <div className="tablewrap">
                      <div className="cellwrap">
                        <div className="fullwrap">
                          About Us 
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-5'>
                  {/* <h1 className='FrontHeadSection' id="aboutus">About Us </h1> */}
                  <p className='DreamWrapperParagarph'>Welcome to Dream Byte Studios, situated in Dehradun, we specialise in Photography, Videography, Production, Influencer & model photoshoot and Brand Promotion. We have successfully completed 150+ projects and earned the trust of over 100 happy clients, which makes us one of the most trusted studios in the region. With more than 2 years of experience, our team combines Creativity and professionalism to deliver work that connects with people.
                  We have a team of professional photographers who are young and passionate about photography and videography. Over the years we have served many projects in different industries. We ensure that every client's vision will be fulfilled with our creativity and innovation.</p>
                   <p className='DreamWrapperParagarph'> “ At Dream Byte Studios - we create Visuals that you will always remember ”</p>
                </div>
              </div>
            </div>
          </section>
          <section className='FrontSecondSection services-sections'>
            <h1 className='FrontHeadSection'>Portfolio</h1>
            <div className='container-fluid'>
              <div className='DreamPad'>
                <div className="slider-container">
                  <div className="container-fluid">
                    <Slider {...Set} className="slick-strip">
                      {images.map((src, idx) => (
                      <div key={`${src}-${idx}`} className="slick-card">
                        <img src={src} alt={`Slide ${idx + 1}`} />
                      </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </section>
            <section id="accordian" className="bsb-accordion-6 py-3 py-md-5 py-xl-8 FrontSecondSections services-sec">
      <h1 className="FrontHeadSection text-center mb-5">
        Frequently Asked Questions
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto">
            <div className="accordion" id="accordionExample">
              {/* Item 1 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                   What services does Dream Byte Studio offer?

                  </button>
                </h4>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                    Our Photography and videography services are diverse, which include product shoots,
                     e-commerce shoots, ad film shoots, content shoots, podcast, wedding shoots and event shoots.
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Why is Dream Byte Studio regarded as one of the best production house?
                  </button>
                </h4>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                    Our reputation comes from blending creativity, technology and storytelling for best visuals.
                     We have numerous successful projects and we produce content that is engaging, inspiring and delivers results. 

                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How experienced is your team? 

                  </button>
                </h4>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                    With this mix of young creative talents and experienced industry professional,
                     our team is well balanced and able to bring fresh ideas and proven expertise. 

                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                   What industries do you work with? 

                  </button>
                </h4>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                     Industries that we serve include corporates, e-commerce, fashion, lifestyle, hospitality, weddings, and entertainment. 
                     Our experience enables us combine of storytelling and visuals to any industry. 

                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="accordion-item accSpace">
                <h4 className="accordion-header">
                  <button
                    className="accordion-button collapsed FAQ"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                   Can I visit your photo studio before booking a shoot?

                  </button>
                </h4>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body accBody">
                  Of course, you can visit our photo studio and to see our setups, crew, 
                  and discuss about your needs and plan your shoot with our creative team.

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </section>
            <section>
            </section>
        

          {/* <Footer/> */}
        </>
  )
}

export default Home