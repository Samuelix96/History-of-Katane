/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import MainLayout from '../layout/MainLayout';
import '../components/style/museum.scss';

const Museum = () => {
  return (
    <MainLayout>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ width: window.innerWidth, translate: { duration: 0.1 } }}>
        <div>
          <div className='museum-back'>
            <h1>Museum</h1>
          </div>

          <div>
            <section id='timeline'>
              <h2 className='text-center fst-italic'>
                The story of master Musashi Miyamoto
              </h2>
              <p class='leader'>The spiritual side of combat</p>
              <div class='demo-card-wrapper'>
                <div class='demo-card demo-card--step1'>
                  <div class='head'>
                    <div class='number-box'>
                      <span>01</span>
                    </div>
                    <h2>
                      <span class='small'>
                        Honchō Suikoden gōyū happyakunin no hitori
                      </span>{' '}
                      Musashi killing a monster
                    </h2>
                  </div>
                  <div class='body'>
                    <p>
                      Thus, in combat, the ideal strike is the one “in a time
                      alone”, which cancels any distance between thought of
                      action and action, between the will to strike and the hit.
                      When the decision to strike manifests itself first of the
                      action even if it were a fraction of a second. I look,
                      some micro movements, the slight shift of the tip of the
                      sword betray the intent by putting alert the opponent, who
                      has the opportunity to prepare. The stroke that Musashi
                      prescribes originates from an absence of will. The body
                      will have to move on its own, sensing the favorable
                      moment, and it will have already struck before the mind if
                      she noticed it.
                    </p>
                    <img
                      src='https://temizen.zenworld.eu/images/approfondimenti/musashi-lato-spirituale-combattimento/musashi-lato-spirituale-combattimento-05.jpg'
                      alt='Graphic'
                    />
                  </div>
                </div>

                <div class='demo-card demo-card--step2'>
                  <div class='head'>
                    <div class='number-box'>
                      <span>02</span>
                    </div>
                    <h2>
                      <span class='small'>The birth of the strongest</span>{' '}
                      Musashi Miyamoto
                    </h2>
                  </div>
                  <div class='body'>
                    <p>
                      In fact, he wrote in the Gorin no sho (Book of Five
                      Rings), his spiritual testament: I am Shinmen no Musashi
                      no kami Fujiwara no genshin, born as a bushi in the
                      province of Arima, having reached the age of sixty. And
                      this would lead us to accept 1584 as the date of birth,
                      since the last chapters of the book, written on the point
                      of death in the Reigando cave perched in the middle of the
                      mountains, where he had retired to live, bear the date of
                      1645. Some texts specify : Musashi ceased to live in the
                      third year of the Shôhô era, on the thirtieth day of the
                      fourth month (which would correspond to June 13, 1645).
                    </p>
                    <img
                      src='https://temizen.zenworld.eu/images/approfondimenti/musashi-lato-spirituale-combattimento/musashi-lato-spirituale-combattimento-03.thumb.jpg'
                      alt='Graphic'
                    />
                  </div>
                </div>

                <div class='demo-card demo-card--step3'>
                  <div class='head'>
                    <div class='number-box'>
                      <span>03</span>
                    </div>
                    <h2>
                      <span class='small'>
                        Ichiyosai Yoshitaki (1841-1899){' '}
                      </span>{' '}
                      Musashi teaches his students
                    </h2>
                  </div>
                  <div class='body'>
                    <p>
                      Certainly, having entered the service of the Hosokawa as a
                      master of arms and having founded the Niten Ichi ryu
                      school, which still exists, he spread his message with
                      practice, but in his writings he warned above all to keep
                      intact the principles of rectitude and firm determination,
                      without delving into the technical aspects, which he
                      considered less important than the former. But one could
                      say that this is already a great, important teaching. In
                      addition to the 21 precepts of Dokkodo, reported
                      previously, his main works are three.
                    </p>
                    <img
                      src='https://www.musubi.it/images/ArtiMarziali/Maestri/storici/musashi/yoshitaki-musashi.jpg'
                      alt='Graphic'
                    />
                  </div>
                </div>

                <div class='demo-card demo-card--step4'>
                  <div class='head'>
                    <div class='number-box'>
                      <span>04</span>
                    </div>
                    <h2>
                      <span class='small'>Mitate Hakkeie</span> Glorious sunset
                    </h2>
                  </div>
                  <div class='body'>
                    <p>
                      We still remember when we read at the beginning; Musashi
                      wrote about himself: "I then wandered from province to
                      province, accepting challenges from many experts from
                      various schools, always winning in over sixty duels. All
                      this between the ages of thirteen and thirty." The doubt
                      remains whether they really happened or whether these are
                      also legends that have accumulated over time. In the
                      detail we see Musashi, treacherously attacked by the men
                      of his enemy Shirakura Dengoyemon, defend himself being
                      unarmed by even tearing a pillar of the house and beating
                      him wildly with it.
                    </p>
                    <img
                      src='https://www.musubi.it/images/ArtiMarziali/Maestri/storici/musashi/shirakura.jpg'
                      alt='Graphic'
                    />
                  </div>
                </div>

                <div class='demo-card demo-card--step5'>
                  <div class='head'>
                    <div class='number-box'>
                      <span>05</span>
                    </div>
                    <h2>
                      <span class='small'>The Ganryujima Monument</span>
                      Last Duel
                    </h2>
                  </div>
                  <div class='body'>
                    <p>
                      The last duel, or at least the last one faced in that
                      phase of life that Musashi considered essential to
                      understand the rest of his path, is known as the
                      Ganryujima duel and took place on April 13, 1612. It is
                      still today considered the most important in the history
                      of Japan; or at least the one by far the best known and
                      most celebrated. At an unidentifiable stage in his life,
                      Musashi felt the desire to end his stray life by entering
                      the service of a noble. It seems that a question was
                      forwarded to Mr. Hosokawa Tadaoki, However, he always
                      remained faithful to his wife's memory, despite having
                      survived him for 46 years.
                    </p>
                    <img
                      src='https://www.musubi.it/images/ArtiMarziali/Maestri/storici/musashi/ganryujima.jpg'
                      alt='Graphic'
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default Museum;
