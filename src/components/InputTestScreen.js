import { useState } from 'react';
import InputBox from './InputBox';
import './InputTestScreen.css';

const translations = {
  en: {
    languageLabel: 'Language',
    title: 'InputBox component test',
    description: 'Try the reusable input component with text, Aadhaar, and email values.',
    textLabel: 'Text input',
    textPlaceholder: 'Type something',
    aadhaarLabel: 'Aadhaar input',
    aadhaarPlaceholder: 'xxx xxxx xxx xxx',
    emailLabel: 'Email input',
    emailPlaceholder: 'name@example.com',
    invalidEmail: 'Please enter a valid email address',
  },
  hi: {
    languageLabel: 'भाषा',
    title: 'इनपुट बॉक्स कंपोनेंट परीक्षण',
    description: 'टेक्स्ट, आधार और ईमेल के लिए पुन: उपयोग किए जा सकने वाले इनपुट को आज़माएँ।',
    textLabel: 'टेक्स्ट इनपुट',
    textPlaceholder: 'कुछ लिखें',
    aadhaarLabel: 'आधार इनपुट',
    aadhaarPlaceholder: 'xxx xxxx xxx xxx',
    emailLabel: 'ईमेल इनपुट',
    emailPlaceholder: 'name@example.com',
    invalidEmail: 'कृपया मान्य ईमेल पता दर्ज करें',
  },
  ur: {
    languageLabel: 'زبان',
    title: 'ان پٹ باکس کمپوننٹ کا ٹیسٹ',
    description: 'متن، آدھار اور ای میل کے لیے دوبارہ استعمال ہونے والا ان پٹ آزمائیں۔',
    textLabel: 'متن کا ان پٹ',
    textPlaceholder: 'کچھ لکھیں',
    aadhaarLabel: 'آدھار ان پٹ',
    aadhaarPlaceholder: 'xxx xxxx xxx xxx',
    emailLabel: 'ای میل ان پٹ',
    emailPlaceholder: 'name@example.com',
    invalidEmail: 'براہ کرم درست ای میل پتہ درج کریں',
  },
  ml: {
    languageLabel: 'ഭാഷ',
    title: 'ഇൻപുട്ട് ബോക്സ് ഘടക പരിശോധന',
    description: 'ടെക്സ്റ്റ്, ആധാർ, ഇമെയിൽ എന്നിവയ്ക്കുള്ള ഇൻപുട്ട് പരീക്ഷിക്കുക.',
    textLabel: 'ടെക്സ്റ്റ് ഇൻപുട്ട്',
    textPlaceholder: 'എന്തെങ്കിലും ടൈപ്പ് ചെയ്യുക',
    aadhaarLabel: 'ആധാർ ഇൻപുട്ട്',
    aadhaarPlaceholder: 'xxx xxxx xxx xxx',
    emailLabel: 'ഇമെയിൽ ഇൻപുട്ട്',
    emailPlaceholder: 'name@example.com',
    invalidEmail: 'സാധുവായ ഇമെയിൽ വിലാസം നൽകുക',
  },
};

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'ur', name: 'اردو' },
  { code: 'ml', name: 'മലയാളം' },
];

function InputTestScreen() {
  const [language, setLanguage] = useState('en');
  const [textValue, setTextValue] = useState('');
  const [aadhaarValue, setAadhaarValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const text = translations[language];

  return (
    <main
      className="input-test-screen"
      lang={language}
      dir={language === 'ur' ? 'rtl' : 'ltr'}
    >
      <section className="input-test-card">
        <div className="input-test-header">
          <div>
            <h1>{text.title}</h1>
            <p>{text.description}</p>
          </div>
          <label className="input-test-language">
            <span>{text.languageLabel}</span>
            <select
              aria-label={text.languageLabel}
              value={language}
              onChange={(event) => {
                setLanguage(event.target.value);
                setEmailError(
                  emailValue && !isEmailValid
                    ? translations[event.target.value].invalidEmail
                    : '',
                );
              }}
            >
              {languages.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.name}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="input-test-fields">
          <InputBox
            name="text"
            labelText={text.textLabel}
            value={textValue}
            placeholder={text.textPlaceholder}
            dir={language === 'ur' ? 'rtl' : 'ltr'}
            onChange={(event) => setTextValue(event.target.value)}
            closeEnabled={Boolean(textValue)}
            onClear={() => setTextValue('')}
          />

          <InputBox
            name="aadhaar"
            labelText={text.aadhaarLabel}
            value={aadhaarValue}
            placeholder={text.aadhaarPlaceholder}
            maxLength={12}
            isAadhaarType
            dir="ltr"
            onChange={(event) => setAadhaarValue(event.target.value)}
          />

          <InputBox
            name="email"
            labelText={text.emailLabel}
            value={emailValue}
            placeholder={text.emailPlaceholder}
            isEmailType
            error={emailError}
            dir="ltr"
            onChange={(event) => {
              setEmailValue(event.target.value);
              setIsEmailValid(event.target.isValid);
              setEmailError(event.target.isValid ? '' : text.invalidEmail);
            }}
          />
        </div>
      </section>
    </main>
  );
}

export default InputTestScreen;
