<div class="side-bar">
    <a class="bubble whatsapp" href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp chat link">
      <div class="bubble-effect">
        <div class="highlight-1"></div>
        <div class="highlight-2"></div>
      </div>
      <div class="icon-container">
        <i class="fa-brands fa-whatsapp"></i>
      </div>
    </a>

    <a class="bubble call" href="tel:+919749033332" target="_blank" rel="noopener noreferrer" aria-label="Phone number">
      <div class="bubble-effect">
        <div class="highlight-1"></div>
        <div class="highlight-2"></div>
      </div>
      <div class="icon-container">
        <i class="fa-solid fa-phone"></i>
      </div>
    </a>
</div>
  
<style>
.side-bar {
  position: fixed;
  bottom: 25%;
  right: 20px;
  z-index: 999;
}

.bubble {
  position: relative;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #25d366, #128C7E);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.call {
  margin-top: 15px;
  background: linear-gradient(135deg, #ff7043, #e64a19);
}

/* Bubble glass effect */
.bubble-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 60%);
  opacity: 0.8;
  z-index: 1;
}

/* Highlights to create bubble effect */
.highlight-1 {
  position: absolute;
  width: 40%;
  height: 20%;
  top: 10%;
  left: 10%;
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
  transform: rotate(-20deg);
}

.highlight-2 {
  position: absolute;
  width: 15%;
  height: 15%;
  bottom: 25%;
  right: 20%;
  background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 70%);
  border-radius: 50%;
}

.icon-container {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon-container i {
  color: white;
  font-size: 34px;
}

/* Hover effects */
.bubble.whatsapp:hover {
  transform: scale(1.1);
  border-radius: 35% 65% 65% 35% / 45% 45% 55% 55%;
  background: linear-gradient(135deg, #00e676, #1a7bf1);
  box-shadow: 0 8px 25px rgba(26, 123, 241, 0.4);
}

.bubble.call:hover {
  transform: scale(1.1);
  border-radius: 35% 65% 65% 35% / 45% 45% 55% 55%;
  background: linear-gradient(135deg, #ff9800, #f44336);
  box-shadow: 0 8px 25px rgba(26, 123, 241, 0.4);
}

.bubble:active {
  transform: scale(0.95);
  border-radius: 50%;
}

/* Floating animation */
@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Glowing effect */
@keyframes glowing {
  0% {
    box-shadow: 0 0 10px rgba(37, 211, 102, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(37, 211, 102, 0.7), 0 0 30px rgba(37, 211, 102, 0.3);
  }
  100% {
    box-shadow: 0 0 10px rgba(37, 211, 102, 0.5);
  }
}

.bubble {
  animation: floating 3s ease-in-out infinite, glowing 2s alternate infinite;
}

.bubble:hover {
  animation: floating 2s ease-in-out infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.bubble-effect {
  animation: rotate 12s linear infinite;
}

@keyframes morph {
  0% {
    border-radius: 50%;
  }
  50% {
    border-radius: 35% 65% 65% 35% / 45% 45% 55% 55%;
  }
  100% {
    border-radius: 50%;
  }
}

.bubble:hover .bubble-effect {
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 60%);
  animation: rotate 8s linear infinite, morph 3s ease-in-out infinite;
}

/* MOBILE RESPONSIVENESS FIXES */
@media (max-width: 768px) {
  .side-bar {
    bottom: 20%;
    right: 15px;
  }
  
  .bubble {
    width: 60px;
    height: 60px;
  }
  
  .icon-container i {
    font-size: 28px;
  }
  
  .call {
    margin-top: 12px;
  }
}

@media (max-width: 480px) {
  .side-bar {
    bottom: 15%;
    right: 10px;
  }
  
  .bubble {
    width: 55px;
    height: 55px;
  }
  
  .icon-container i {
    font-size: 24px;
  }
  
  .call {
    margin-top: 10px;
  }
}
</style>