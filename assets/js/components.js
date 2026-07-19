document.addEventListener('DOMContentLoaded', () => {

  /* 1. Copy Code Functionality */
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const targetId = btn.getAttribute('data-target');
      const codeBlock = document.getElementById(targetId);
      
      if (codeBlock) {
        try {
          // get innerText to ignore HTML tags injected by PrismJS
          await navigator.clipboard.writeText(codeBlock.innerText);
          const originalText = btn.textContent;
          btn.textContent = 'Copiado!';
          btn.classList.add('copied');
          
          setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
      }
    });
  });

  /* 2. Magnetic Button Logic */
  const magneticBtn = document.getElementById('magneticBtn');
  if (magneticBtn) {
    const text = magneticBtn.querySelector('.magnetic-text');
    
    magneticBtn.addEventListener('mousemove', (e) => {
      const rect = magneticBtn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      magneticBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      text.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    
    magneticBtn.addEventListener('mouseleave', () => {
      magneticBtn.style.transform = 'translate(0px, 0px)';
      text.style.transform = 'translate(0px, 0px)';
    });
  }

  /* 3. Glow Card Logic */
  const glowCard = document.getElementById('glowCard');
  if (glowCard) {
    glowCard.addEventListener('mousemove', (e) => {
      const rect = glowCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      glowCard.style.setProperty('--x', `${x}px`);
      glowCard.style.setProperty('--y', `${y}px`);
    });
  }

  /* 4. Glass OTP Logic */
  const otpInputs = document.querySelectorAll('.otp-input');
  otpInputs.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
      // If a character is entered, move to the next input
      if (e.target.value.length === 1 && index < otpInputs.length - 1) {
        otpInputs[index + 1].focus();
      }
      // If Backspace is pressed and the input is empty, move back
      if (e.key === 'Backspace' && index > 0) {
        otpInputs[index - 1].focus();
      }
    });
  });

  /* 5. Parallax 3D Card Logic */
  const parallaxCard = document.getElementById('parallaxCard');
  if (parallaxCard) {
    parallaxCard.addEventListener('mousemove', (e) => {
      const rect = parallaxCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;
      
      parallaxCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    parallaxCard.addEventListener('mouseleave', () => {
      parallaxCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  }

  /* 6. Hacker Text Scrambler */
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const scrambleElements = document.querySelectorAll(".scramble-text");
  
  scrambleElements.forEach(element => {
    element.addEventListener("mouseover", event => {
      let iteration = 0;
      clearInterval(element.interval);
      
      element.interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if(index < iteration) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        
        if(iteration >= event.target.dataset.value.length){
          clearInterval(element.interval);
        }
        iteration += 1 / 3;
      }, 30);
    });
  });

  /* 7. Meteor Generator */
  const meteorContainer = document.getElementById('meteorContainer');
  if (meteorContainer) {
    for(let i = 0; i < 15; i++) {
      const meteor = document.createElement('span');
      meteor.className = 'meteor';
      
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 2 + Math.random() * 2;
      
      meteor.style.left = `${left}%`;
      meteor.style.top = `-50px`;
      meteor.style.animationDelay = `${delay}s`;
      meteor.style.animationDuration = `${duration}s`;
      
      meteorContainer.appendChild(meteor);
    }
  }

  /* 8. Smooth Scroll for Sidebar Navigation */
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      navItems.forEach(n => n.classList.remove('active'));
      e.currentTarget.classList.add('active');
    });
  });

  /* 6. Intersection Observer to highlight active section in sidebar */
  const sections = document.querySelectorAll('.showcase-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(n => {
          n.classList.toggle('active', n.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.5 });

  sections.forEach(section => observer.observe(section));

});
