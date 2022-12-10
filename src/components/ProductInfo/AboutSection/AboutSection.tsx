import React from 'react';
import { Article } from '../../../types/Article';

import './AboutSection.scss';

type Props = {
  id: string;
  articles: Article[];
};

export const AboutSection: React.FC<Props> = ({ id, articles }) => {
  return (
    <div className='about'>
      <h3 className='about__title'>About</h3>

      {articles.map(({ title, text }) => (
        <article key={title} className="about__article article">
          <h4 className="article__subtitle">{title}</h4>
          <div className="article__content">
            {text.map(item => (
              <p key={item} className="article__paragraph">
                {item}
              </p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};
