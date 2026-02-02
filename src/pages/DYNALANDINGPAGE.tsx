// @ts-nocheck - Single default export; TS falsely reports "multiple default exports" in large JSX files
import { useState } from 'react';
import { motion } from 'framer-motion';
import Bg from '../components/Bg';
import WebCTA from '../components/WebCTA';
import Component1 from '../components/Component1';
import TencentDBForMariaDB3DCN from '../components/TencentDBForMariaDB3DCN';
import Shadow from '../components/Shadow';
import Wrap from '../components/Wrap';
import CircleButtonBG from '../components/CircleButtonBG';
import TabItem from '../components/TabItem';
import Avatar from '../components/Avatar';
import Avatar1 from '../components/Avatar1';
import Blog from '../components/Blog';
import FooterContent from '../components/FooterContent';
import Logo from '../components/Logo';
import {
  fadeInUp,
  fadeIn,
  slideInLeft,
  slideInRight,
  scaleIn,
  staggerContainer,
  listItemVariant,
  imageFloat,
  TAB_ITEMS,
  AVATAR_ITEMS,
  BLOG_ITEMS,
  TARGET_AUDIENCE_LIST,
} from './landing';
import './DYNALANDINGPAGE.css';

export default function DYNALANDINGPAGE() {
  const [tabItemItems] = useState(TAB_ITEMS);
  const [avatarItems] = useState(AVATAR_ITEMS);
  const [blogItems] = useState(BLOG_ITEMS);

  return (
    <div className="dyna-landingpage">
      <main className="main-container-parent">
        {/* Hero Section */}
        <motion.section 
          className="main-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
        >
          <Bg property1="Default" />
          <motion.section 
            className="content-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.div className="text-container" variants={fadeInUp}>
              <div className="header-container">
                <h1 className="title">Ton co-pilote IA <br/>pour ton business freelance</h1>
              </div>
              <h3 className="description">L'app qui booste le chiffre d'affaires de ceux qui travaillent seuls</h3>
            </motion.div>
            <motion.div className="button-container" variants={fadeInUp}>
              <WebCTA property1="Variant2" button="Découvrir l'offre fondateur" webCTAFlex="1" />
              <WebCTA property1="Default" button="Rejoins la liste VIP" />
            </motion.div>
          </motion.section>
        </motion.section>

        {/* Revolution Section with Cards */}
        <motion.section 
          className="main-container2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div className="text-block" variants={fadeInUp}>
            <h1 className="main-title">Ce n'est pas une application de management, c'est une révolution</h1>
            <h3 className="subtitle">Ce n'est pas une app de plus, c'est une nouvelle façon de travailler.</h3>
          </motion.div>
          
          <motion.div 
            className="content-container2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <motion.div 
              className="card-container"
              variants={scaleIn}
            >
              <motion.div 
                className="frame-parent"
                whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
              >
                <div className="card-title-parent">
                  <h3 className="card-title">Résumé de la réunion</h3>
                  <div className="card-subtitle">15 juillet 2025</div>
                </div>
                <img className="frame-child" alt="" src="/Rectangle-649@2x.png" />
              </motion.div>
            </motion.div>

            <motion.section 
              className="card-container2"
              variants={staggerContainer}
            >
              <motion.div 
                className="frame-group"
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
              >
                <div className="card-title-parent">
                  <h3 className="card-title">Votre score DYNA</h3>
                  <div className="card-subtitle">Voyez votre activité clairement</div>
                </div>
                <img className="frame-child" alt="" src="/Rectangle-6491@2x.png" />
              </motion.div>
              <motion.div 
                className="card-image"
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
              >
                <div className="card-title-container">
                  <h3 className="card-title">Quick Boost</h3>
                  <div className="frame-inner" />
                </div>
                <img className="frame-2087327354-4" alt="" src="/Frame-2087327354-4@2x.png" />
              </motion.div>
            </motion.section>

            <motion.section 
              className="card-container3"
              variants={staggerContainer}
            >
              <motion.div 
                className="card-image2"
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
              >
                <img className="image-62-icon" alt="" src="/image-62@2x.png" />
                <div className="card-content">
                  <h3 className="card-title">Pour les indépendants</h3>
                  <div className="card-subtitle3">Conçu pour les indépendants</div>
                </div>
              </motion.div>
              <motion.div 
                className="card-content2"
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
              >
                <h3 className="card-title5">Gestionnaire digital</h3>
                <div className="card-subtitle4">Partenaire de croissance</div>
                <img className="card-content-child" alt="" src="/Frame-1321314117@2x.png" />
              </motion.div>
            </motion.section>

            <motion.section 
              className="card-container4"
              variants={staggerContainer}
            >
              <motion.div 
                className="frame-group"
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
              >
                <div className="card-title-parent">
                  <h3 className="card-title">Selon la tendance</h3>
                  <div className="card-subtitle">Décidez en temps réel.</div>
                </div>
                <img className="frame-child" alt="" src="/Rectangle-6492@2x.png" />
              </motion.div>
              <motion.div 
                className="frame-parent2"
                variants={scaleIn}
                whileHover={{ scale: 1.03, y: -5, transition: { duration: 0.3 } }}
              >
                <div className="card-subtitle-parent">
                  <div className="card-subtitle6">Customers</div>
                  <div className="card-title7">+10h gagnées | semaine</div>
                </div>
                <img className="frame-child" alt="" src="/Rectangle-6493@2x.png" />
              </motion.div>
            </motion.section>

            <motion.div 
              className="card-container5"
              variants={scaleIn}
            >
              <div className="card-image3">
                <div className="date">Conçu pour les indépendants</div>
                <div className="description2">Avec Dyna à vos côtés, travaillez plus intelligemment et reprenez la main sur votre temps</div>
                <div className="divider-container">
                  <div className="divider" />
                  <div className="divider2" />
                  <div className="divider2" />
                </div>
              </div>
            </motion.div>
            <img className="content-container-child" alt="" src="/Frame-2087327353.svg" />
          </motion.div>
        </motion.section>

        {/* Target Audience Section */}
        <motion.section 
          className="main-container3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.section 
            className="text-and-list-container"
            variants={slideInLeft}
          >
            <motion.div className="text-block2" variants={fadeInUp}>
              <h1 className="main-title">À qui s'adresse Dyna ?</h1>
              <h2 className="subtitle2">
                <span className="ta-manager-20">Ta manager 2.0 pour ton business</span>
                <span className="pour-freelances-indpendants"> Pour freelances, indépendants et solopreneurs : <br/>quand tu dois tout gérer seul, la solitude finit par peser.</span>
              </h2>
            </motion.div>
            <motion.div 
              className="list"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {TARGET_AUDIENCE_LIST.map((text, index) => (
                <motion.div key={index} className="li" variants={listItemVariant}>
                  <img className="bullet-icon" loading={index === 0 ? "lazy" : undefined} alt="" src="/Bullet.svg" />
                  <h3 className={`list-item-text${index === 1 ? '2' : index === 3 ? '4' : index === 4 ? '5' : ''}`}>{text}</h3>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section 
            className="image-and-rating-container"
            variants={slideInRight}
          >
            <motion.img 
              className="img-01-icon" 
              alt="" 
              src="/img-01@2x.png"
              variants={imageFloat}
              animate="animate"
            />
            <div className="img-02">
              <img className="pexels-eric-dekker-3334048-1-icon" alt="" src="/pexels-eric-dekker-3334048-1@2x.png" />
              <div className="image-container">
                <img className="image-icon" loading="lazy" alt="" src="/Image@2x.png" />
              </div>
            </div>
            <div className="small-element" />
            <div className="small-elements" />
            <div className="small-elements2" />
            <motion.img 
              className="img-03-icon" 
              loading="lazy" 
              alt="" 
              src="/img-03@2x.png"
              variants={imageFloat}
              animate="animate"
              transition={{ delay: 0.5 }}
            />
            <motion.div 
              className="rating-container-wrapper"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="rating-container">
                <Component1  />
                <div className="rating-text-container">
                  <div className="name">
                    <div className="content-block-name">Casey</div>
                  </div>
                  <div className="stars-container">
                    {[...Array(5)].map((_, i) => (
                      <motion.img 
                        key={i}
                        className="star-icon" 
                        alt="" 
                        src="/Star.svg"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="small-element2" />
            <div className="small-elements3" />
            <div className="small-elements4" />
          </motion.section>
        </motion.section>

        {/* Features Section - Too complex, keeping most structure but adding key animations */}
        <section className="main-container4">
          <motion.section 
            className="container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <TencentDBForMariaDB3DCN property1="Default" />
            <div className="container2">
              <div className="group">
                <div className="rectangle" />
                <div className="rectangle2" />
              </div>
              <div className="rectangle3" />
            </div>
          </motion.section>
          
          <motion.div 
            className="text-block3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
          >
            <h1 className="main-title">Tout ce dont tu as besoin, en une seule app</h1>
            <h3 className="subheading">5min / jour suffiront pour mieux gérer ton activité</h3>
          </motion.div>

          {/* Keeping the complex nested structure but will add animations to main containers */}
          <div className="content-container3">
            <div className="content-row">
              <motion.section 
                className="content-column"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={slideInLeft}
              >
                <div className="image-block">
                  <div className="image-container2" />
                  <div className="content-block">
                    <h3 className="text">Établis tes objectifs, atteins-les !</h3>
                    <h3 className="text2">Avec les rappels auto, booste ta productivité de 25%</h3>
                  </div>
                </div>
                <div className="content-block2">
                  <h3 className="text">Performances commerciales en temps réel</h3>
                  <h3 className="text2">Mesure ton business, suis les conseils de Dyna.</h3>
                </div>
              </motion.section>

              <motion.section 
                className="image-block2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={slideInRight}
              >
                <div className="image-container3">
                  <div className="image-frame">
                    <div className="inside-parent">
                      <div className="inside" />
                      <div className="search-header">
                        <div className="inside-group">
                          <div className="inside2" />
                          <div className="inside-flat" />
                          <div className="header">
                            <div className="search-options-wrapper">
                              <div className="search-options">
                                <div className="search-options-child" />
                                <div className="search-options-child" />
                                <div className="search-options-child" />
                              </div>
                            </div>
                            <img className="search-magnifying-glass" alt="" src="/search-magnifying-glass.svg" />
                          </div>
                          <div className="search-results-wrapper">
                            <div className="search-results">
                              <div className="search-item">
                                <div className="search-details">
                                  <div className="search-progress" />
                                  <div className="search-progress2" />
                                  <div className="search-progress2" />
                                </div>
                                <img className="search-image-icon" loading="lazy" alt="" src="/Search-Image@2x.png" />
                              </div>
                              <div className="search-item2">
                                <img className="search-image-icon" alt="" src="/Search-Image1@2x.png" />
                                <div className="search-details">
                                  <div className="search-progress" />
                                  <div className="search-progress2" />
                                  <div className="search-progress2" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="shadow-parent"><Shadow property1 />
                      <div className="task-container">
                        <div className="wrap-parent"><Wrap lightMode />
                          <img className="image-frame-icon" alt="" src="/Image-Frame@2x.png" />
                          <div className="inside-container">
                            <div className="inside3" />
                            <div className="frame-parent3">
                              <div className="task-header-wrapper">
                                <div className="task-header">
                                  <div className="step-name">Tasks to achieve</div>
                                  <div className="task-list">
                                    <div className="task-item">
                                      <img className="icon" alt="" src="/icon.svg" />
                                      <div className="task-details">
                                        <div className="task-progress" />
                                        <div className="search-progress2" />
                                      </div>
                                    </div>
                                    <div className="task-item">
                                      <img className="icon" alt="" src="/icon.svg" />
                                      <div className="task-details">
                                        <div className="task-progress" />
                                        <div className="search-progress2" />
                                      </div>
                                    </div>
                                    <div className="task-item">
                                      <img className="icon" alt="" src="/icon.svg" />
                                      <div className="task-details">
                                        <div className="task-progress" />
                                        <div className="search-progress2" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="analytics-option">
                                <div className="circle-button-bg-parent"><CircleButtonBG lightTheme />
                                  <div className="ellipse-div" />
                                </div>
                              </div>
                            </div>
                            <div className="task-summary">
                              <div className="button-background-parent">
                                <div className="button-background" />
                                <div className="step-name2">Generate</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-block3">
                  <h3 className="text">Établis tes objectifs, atteins-les !</h3>
                  <h3 className="text2">Avec les rappels auto, booste ta productivité de 25%</h3>
                </div>
              </motion.section>
            </div>

            <motion.div 
              className="testimonials"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.section 
                className="content-column2"
                variants={scaleIn}
              >
                <img className="content-block-icon" loading="lazy" alt="" src="/Content-Block@2x.png" />
                <div className="content-block4">
                  <h3 className="text">Réunions hebdomaires avec Dyna</h3>
                  <h3 className="text2">Chaque semaine, ta manager 2.0 te fait un feedback sur ce qui s'est passé</h3>
                </div>
              </motion.section>
              
              <motion.section 
                className="content-block5"
                variants={scaleIn}
              >
                <div className="content-block6">
                  <div className="content-block7">
                    <div className="true" />
                    <div className="shadow-parent">
                      <img className="content-block-icon2" alt="" src="/Content-Block1@2x.png" />
                      <div className="content-block8">
                        <div className="content-block9"><Component1  />
                          <div className="content-block-text">
                            <div className="name">
                              <div className="content-block-name">Casey</div>
                            </div>
                            <div className="stars-container">
                              <img className="star-icon" alt="" src="/Star.svg" />
                              <img className="star-icon" alt="" src="/Star.svg" />
                              <img className="star-icon" alt="" src="/Star.svg" />
                              <img className="star-icon" alt="" src="/Star.svg" />
                              <img className="star-icon" alt="" src="/Star.svg" />
                            </div>
                          </div>
                        </div>
                        <div className="content-block-review">Dyna m'aide à rester concentré et me fait gagner des heures chaque semaine.</div>
                      </div>
                      <div className="true-parent">
                        <div className="true2" />
                        <img className="svg-planet-icon" alt="" src="/svg-planet@2x.png" />
                        <div className="wrapper-content-block">
                          <img className="content-block-icon3" alt="" src="/Content-Block2@2x.png" />
                        </div>
                        <div className="content-block10">
                          <div className="content-block-cursor-parent">
                            <img className="content-block-cursor" loading="lazy" alt="" src="/Content-Block-Cursor.svg" />
                            <div className="content-block11">
                              <div className="content-block-text2">DYNA</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="content-block3">
                  <h3 className="text">Feedback de la communauté</h3>
                  <h3 className="text2">Dyna m'aide à rester concentré et me fait gagner des heures chaque semaine.</h3>
                </div>
              </motion.section>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <motion.section 
          className="main-container5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.section 
            className="text-block4"
            variants={fadeInUp}
          >
            <h2 className="main-title">Deviens membre fondateur</h2>
            <h3 className="subtitle3">Rejoins Dyna parmi les premiers !"
</h3>
            <motion.div 
              className="tabs-group"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              {tabItemItems.map((item, index) => (
                <motion.div key={index} variants={scaleIn}>
                  <TabItem
                    state={item.state}
                    type={item.type}
                    label={item.label}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          <motion.section 
            className="subscription-container"
            variants={scaleIn}
          >
            <motion.div 
              className="subscription"
              whileHover={{ scale: 1.02, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="main">
                <div className="title-description">
                  <b className="plan-name">Offre fondateur</b>
                  <div className="plan-description">Elle arrive bientôt !</div>
                </div>
                <div className="cost">
                  <div className="number-value">
                    <div className="currency-symbol">€</div>
                    <div className="price">15.90</div>
                  </div>
                  <div className="time">
                    <div className="billing-cycle">/Monthly</div>
                  </div>
                </div><WebCTA property1="Variant2" button="Get Started" webCTAFlex="unset" />
              </div>
              <div className="container3">
                <div className="feature-description">
                  <img className="icon-container" loading="lazy" alt="" src="/Icon-Container.svg" />
                  <div className="feature-info">
                    <div className="feature-text">6 Business Dashboards</div>
                    <div className="feature-text2">{`Sales, Clients, Revenue, Margins, Activities & Insights`}</div>
                  </div>
                </div>
                <div className="feature-description">
                  <img className="icon-container" alt="" src="/Icon-Container.svg" />
                  <div className="feature-info">
                    <div className="feature-text">Unlimited AI Assistant</div>
                    <div className="feature-text2">24/7 access to your business co-pilot</div>
                  </div>
                </div>
                <div className="feature-description">
                  <img className="icon-container" alt="" src="/Icon-Container.svg" />
                  <div className="feature-info">
                    <div className="feature-text">Automated Follow-ups</div>
                    <div className="feature-text2">{`Smart sales & lead management`}</div>
                  </div>
                </div>
                <div className="feature-description">
                  <img className="icon-container" alt="" src="/Icon-Container.svg" />
                  <div className="feature-info">
                    <div className="feature-text">Weekly Reports</div>
                    <div className="feature-text2">Automated PDF reports via email</div>
                  </div>
                </div>
                <div className="feature-description">
                  <img className="icon-container" alt="" src="/Icon-Container.svg" />
                  <div className="feature-info">
                    <div className="feature-text">{`Challenges & Badges`}</div>
                    <div className="feature-text2">Gamification system unlocked</div>
                  </div>
                </div>
              </div>
              <div className="partern-group">
                <div className="partern" />
              </div>
              <div className="content">
                <img className="popular-icon" alt="" src="/Popular-Icon.svg" />
                <div className="popular-label">Most Popular</div>
              </div>
              <img className="partern-icon" alt="" src="/Partern.svg" />
            </motion.div>
          </motion.section>
        </motion.section>

        {/* Community & Testimonials */}
        <motion.section 
          className="container4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="content-container4">
            <motion.section 
              className="text-and-trustpilot-container"
              variants={slideInLeft}
            >
              <div className="text-block5">
                <h2 className="main-title">Communauté</h2>
                <h2 className="description3">Rejoins une communauté de travailleurs solos qui travaillent mieux, plus intelligemment, et gagnent plus</h2>
              </div>
              <motion.div 
                className="trustpilot-content"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <div className="avatar-group">
                  <motion.div className="avatars" variants={staggerContainer}>
                    {avatarItems.map((item, index) => (
                      <motion.div key={index} variants={scaleIn}>
                        <Avatar
                          placeholder={item.placeholder}
                          size={item.size}
                          statusIcon={item.statusIcon}
                          text={item.text}
                          contrastBorder={item.contrastBorder}
                          avatarMarginLeft={item.avatarMarginLeft}
                          avatarHeight={item.avatarHeight}
                          avatarWidth={item.avatarWidth}
                        />
                      </motion.div>
                    ))}
                    <motion.div className="avatar" variants={scaleIn}>
                      <div className="contrast-border" />
                      <div className="text11">+5</div>
                    </motion.div>
                  </motion.div>
                  <motion.div className="avatar-add-button" variants={scaleIn}>
                    <img className="content-icon" alt="" src="/Content.svg" />
                  </motion.div>
                </div>
                <motion.div className="trustpilot-rating-container" variants={fadeInUp}>
                  <div className="trustpilot-rating-text">1000+ Reviews</div>
                  <div className="rating">
                    <img className="star-icon" alt="" src="/Star.svg" />
                    <div className="resources">4.8</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.section>

            <motion.section 
              className="testimonials-container"
              variants={slideInRight}
            >
              <motion.div 
                className="testimonials"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
              >
                <motion.div 
                  className="testimonial-card"
                  variants={scaleIn}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <img className="frame-icon" loading="lazy" alt="" src="/Frame.svg" />
                  <div className="testimonial-text">"Dyna is like a companion who always reminds me and helps me not to miss deadlines. It really helps me focus more and feel less lonely when working alone."</div>
                  <div className="testimonial-header"><Avatar1 placeholder={false} size="lg" statusIcon={false} text={false} contrastBorder />
                    <div className="name4">
                      <b className="testimonial-name">Markus Freeman</b>
                      <div className="testimonial-role">Dev Ops - Azious</div>
                    </div>
                  </div>
                </motion.div>
                <motion.div 
                  className="testimonial-card2"
                  variants={scaleIn}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <img className="frame-icon" alt="" src="/Frame1.svg" />
                  <div className="testimonial-text">"Dyna is like a companion who always reminds me and helps me not to miss deadlines. It really helps me focus more and feel less lonely when working alone."</div>
                  <div className="testimonial-header2"><Avatar1 placeholder={false} size="lg" statusIcon={false} text={false} contrastBorder />
                    <div className="name4">
                      <b className="testimonial-name">Markus Freeman</b>
                      <div className="testimonial-role2">Dev Ops - Azious</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              <div className="progress-bar-container">
                <div className="progress-bar-background" />
                <motion.div 
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: "132px" }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.section>
          </div>
        </motion.section>

        {/* Blog Section */}
        <motion.section 
          className="technologyfaq"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div className="testimonial-header-container" variants={fadeInUp}>
            <h2 className="main-title">DYNA Blog</h2>
            <h2 className="testimonial-header-description">Stay updated with the latest insights, product updates, and best practices from the DYNA ecosystem, your all-in-one platform for performance and growth.</h2>
          </motion.div>
          <motion.section 
            className="blog-parent"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {blogItems.map((item, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Blog frameDivBackgroundImage={item.frameDivBackgroundImage} />
              </motion.div>
            ))}
          </motion.section>
        </motion.section>

        {/* FAQ Section */}
        <motion.section 
          className="technologyfaq2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div className="testimonial-header-container" variants={fadeInUp}>
            <h2 className="main-title">Une question?</h2>
            <h3 className="testimonial-header-description2">Get quick answers to your queries about our ecosystem</h3>
          </motion.div>
          <motion.section 
            className="faq-container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <motion.div className="faq-item-container" variants={fadeInUp}>
              <div className="faq-item-header">
                <h3 className="faq-item-question">À quoi sert l'application Dyna ?</h3>
                <img className="menu-button-icon" loading="lazy" alt="" src="/Menu-button.svg" />
              </div>
              <div className="faq-item-description-container">
                <div className="description4">L'application permet de centraliser les données clés de ton business (chiffre d'affaires, ventes, objectifs, taux de conversion...) pour les transformer en indicateurs clairs et visuels. Concrètement, elle te permet d'obtenir une visibilité complète pour prendre de meilleures décisions, et améliorer ton chiffre d'affaires !</div>
              </div>
            </motion.div>
            <div className="bottom-line" />
            <motion.div className="faq-item-container2" variants={fadeInUp}>
              <div className="faq-item-header2">
                <h3 className="faq-item-question2">Comment se présente le management 2.0 opéré par Dyna ?</h3>
                <img className="menu-button-icon" alt="" src="/Menu-button1@2x.png" />
              </div>
              <div className="description-wrapper">
                <div className="description5">Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes. Stay current on the latest Onix project developments, news, and content, updated daily. Stay current on the latest Onix project developments, news, and content, updated daily.</div>
              </div>
            </motion.div>
            <div className="bottom-line" />
            <motion.div className="faq-item-container2" variants={fadeInUp}>
              <div className="faq-item-header2">
                <h3 className="faq-item-question2">Je peux utiliser Dyna quelque soit mon niveau en business ?</h3>
                <img className="menu-button-icon" alt="" src="/Menu-button1@2x.png" />
              </div>
              <div className="description-wrapper">
                <div className="description5">Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes. Stay current on the latest Onix project developments, news, and content, updated daily. Stay current on the latest Onix project developments, news, and content, updated daily.</div>
              </div>
            </motion.div>
            <div className="bottom-line" />
            <motion.div className="faq-item-container2" variants={fadeInUp}>
              <div className="faq-item-header2">
                <h3 className="faq-item-question2">Quand est-ce que Dyna sera disponible ?</h3>
                <img className="menu-button-icon" alt="" src="/Menu-button1@2x.png" />
              </div>
              <div className="description-wrapper">
                <div className="description5">Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes. Stay current on the latest Onix project developments, news, and content, updated daily. Stay current on the latest Onix project developments, news, and content, updated daily.</div>
              </div>
            </motion.div>
            <div className="bottom-line" />
            <motion.div className="faq-item-container2" variants={fadeInUp}>
              <div className="faq-item-header2">
                <h3 className="faq-item-question2">Dyna ne sera utilisable que sur mobile ?</h3>
                <img className="menu-button-icon" alt="" src="/Menu-button1@2x.png" />
              </div>
              <div className="description-wrapper">
                <div className="description5">Your data can be transformed, organized, and shared across applications for anyone to query with just a few keystrokes. Stay current on the latest Onix project developments, news, and content, updated daily. Stay current on the latest Onix project developments, news, and content, updated daily.</div>
              </div>
            </motion.div>
          </motion.section>
        </motion.section>
        
        <FooterContent property1="Variant2" union="/Union.svg" group="/Group.svg" />
      </main>

      {/* Header with animation */}
      <motion.header 
        className="frame-header"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="frame"><Logo property1="Default" union="/Union1.svg" group="/Group1.svg" />
        </div>
        <div className="menu">
          <div className="inner">
            <div className="icon-placeholder">
              <img className="elements-icon" alt="" src="/elements.svg" />
            </div>
            <div className="home">Home</div>
            <div className="icon-placeholder">
              <img className="elements-icon2" alt="" src="/elements1.svg" />
            </div>
          </div>
          <div className="inner">
            <div className="icon-placeholder">
              <img className="elements-icon" alt="" src="/elements2.svg" />
            </div>
            <div className="home">About us</div>
            <div className="icon-placeholder">
              <img className="elements-icon2" alt="" src="/elements1.svg" />
            </div>
          </div>
          <div className="inner">
            <div className="icon-placeholder">
              <img className="elements-icon" alt="" src="/elements2.svg" />
            </div>
            <div className="home">Services</div>
            <div className="icon-placeholder">
              <img className="elements-icon2" alt="" src="/elements1.svg" />
            </div>
          </div>
          <div className="inner">
            <div className="icon-placeholder">
              <img className="elements-icon" alt="" src="/elements2.svg" />
            </div>
            <div className="home">Projects</div>
            <div className="icon-placeholder">
              <img className="elements-icon2" alt="" src="/elements1.svg" />
            </div>
          </div>
          <div className="inner5">
            <div className="icon-placeholder4">
              <img className="elements-icon" alt="" src="/elements2.svg" />
            </div>
            <div className="resources">Resources</div>
            <img className="lucidechevron-down-icon" loading="lazy" alt="" src="/lucide-chevron-down.svg" />
          </div>
          <div className="inner5">
            <div className="icon-placeholder4">
              <img className="elements-icon" alt="" src="/elements2.svg" />
            </div>
            <div className="resources">Blog</div>
          </div>
        </div>
        <div className="web-cta-wrapper"><WebCTA property1="Default" button="Contact Us" webCTAFlex="unset" />
        </div>
      </motion.header>
    </div>
  );
}
