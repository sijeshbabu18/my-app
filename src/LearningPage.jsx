import { useState } from 'react';
import './LearningPage.css';

const LearningPage = () => {
  const [language, setLanguage] = useState('en');
  const isUrdu = language === 'ur';

  return (
    <section
      className="learning-page"
      lang={language}
      dir={isUrdu ? 'rtl' : 'ltr'}
      aria-labelledby="learning-page-title"
    >
      <div className="learning-page-header">
        <h1 id="learning-page-title">
          {isUrdu ? 'سیکھنے کا صفحہ' : 'Learning Page'}
        </h1>
        <button
          type="button"
          className="learning-page-language-button"
          onClick={() => setLanguage(isUrdu ? 'en' : 'ur')}
        >
          {isUrdu ? 'English' : 'اردو'}
        </button>
      </div>
    </section>
  );
};

export default LearningPage;