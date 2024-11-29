import React, { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import './Rose.css'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
  position: relative;
  overflow: hidden;
`

const Letter = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  position: relative;
  z-index: 1;
  margin-bottom: 80px;
`

const Flower = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background: pink;
  border-radius: 50%;
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: pink;
    border-radius: 50%;
    transform: rotate(45deg);
  }
`

const FlowerContainer = ({ count = 20 }) => {
  return [...Array(count)].map((_, i) => (
    <Flower
      key={i}
      initial={{
        x: Math.random() * window.innerWidth,
        y: -20,
        rotate: 0,
      }}
      animate={{
        y: window.innerHeight + 20,
        rotate: 360,
      }}
      transition={{
        duration: Math.random() * 5 + 5,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        left: `${Math.random() * 100}%`,
      }}
    />
  ))
}

const Envelope = styled(motion.div)`
  width: 300px;
  height: 200px;
  background: #f8d7da;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  margin: 50px auto;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
    border-top: 100px solid #dc3545;
    transform-origin: top;
    transition: transform 0.5s;
  }
`

const EnvelopeFlap = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-left: 150px solid transparent;
  border-right: 150px solid transparent;
  border-bottom: 100px solid #dc3545;
  transform-origin: top;
`

const EnvelopeFront = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #dc3545;
  transform-origin: bottom;
`

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showGift, setShowGift] = useState(false);

  const handleGiftClick = () => {
    setShowGift(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseRose = () => {
    setShowGift(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <Container>
      <FlowerContainer />
      <AnimatePresence>
        {!isOpen ? (
          <Envelope
            onClick={() => setIsOpen(true)}
            initial={{ scale: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
          >
            <EnvelopeFlap
              animate={{ rotateX: isOpen ? -180 : 0 }}
              transition={{ duration: 0.5 }}
            />
            <EnvelopeFront />
          </Envelope>
        ) : (
          <>
            <Letter
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 style={{ marginBottom: '1.5rem', color: '#333' }}>My Palangga,</h1>
              <p style={{ lineHeight: '1.8', color: '#666', marginBottom: '1rem' }}>
                Sorry for not telling you early. I know it hurt you deeply, and seeing that pain in your eyes breaks my heart. I should have been more open and honest with you from the start.
              </p>
              <p style={{ lineHeight: '1.8', color: '#666', marginBottom: '1rem' }}>
                You deserve nothing but honesty and transparency from me. I hope you understand that my love for you is genuine and unwavering. You mean everything to me, and I never meant to cause you any pain.
              </p>
              <p style={{ lineHeight: '1.8', color: '#666', marginBottom: '1rem' }}>
                Every moment we spend together is precious to me, and I promise to always be honest with you from now on. Your trust is something I cherish, and I will work hard to rebuild it.
              </p>
              <p style={{ lineHeight: '1.8', color: '#666', marginBottom: '2rem' }}>
                I love you so much, more than words can express. You are my everything, my source of joy, and my reason to smile. Please forgive me, palangga.
              </p>
              <p style={{ textAlign: 'right', color: '#333', fontWeight: 'bold' }}>
                Forever yours,
                <br />
                Bum Bum
              </p>
            </Letter>
            <motion.button 
              className="gift-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={handleGiftClick}
            >
              Tap to see my gift 🌹
            </motion.button>
          </>
        )}
      </AnimatePresence>
      
      {showGift && (
        <motion.div 
          className="rose-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className="close-rose" onClick={handleCloseRose}>×</button>
          <div className="container">
            <div className="glass">
              <div className="shine"></div>
            </div>
            <div className="thorns">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="leaves">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="petals">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="deadPetals">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </motion.div>
      )}
    </Container>
  )
}

export default App
