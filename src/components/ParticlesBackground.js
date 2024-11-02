// src/components/ParticlesSpace.js
import React from "react";
import Particles from "react-tsparticles";

const ParticlesSpace = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#000000" // Latar belakang hitam untuk efek luar angkasa
          }
        },
        particles: {
          number: {
            value: 150, // Banyak bintang di layar
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#ffffff" // Warna bintang (putih)
          },
          shape: {
            type: "circle" // Bentuk partikel bulat seperti bintang
          },
          opacity: {
            value: 0.8, // Sedikit transparan untuk efek lebih realistis
            random: true, // Bintang dengan opacity acak
            anim: {
              enable: true,
              speed: 0.5, // Animasi mengedip pelan
              opacity_min: 0.3,
              sync: false
            }
          },
          size: {
            value: 3, // Ukuran rata-rata partikel
            random: true, // Ukuran acak
            anim: {
              enable: true,
              speed: 3,
              size_min: 0.1,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 0.1, // Gerakan sangat pelan seperti bintang jauh
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out", // Menghilang di luar layar
            bounce: false
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse" // Partikel menjauh saat dihover
            },
            onclick: {
              enable: true,
              mode: "push" // Menambah partikel saat diklik
            }
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true // Optimalkan untuk layar retina
      }}
    />
  );
};

export default ParticlesSpace;
