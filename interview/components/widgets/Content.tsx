import Image from 'next/image';
import { IconBrandPushbullet, IconBubble, IconCheck, IconPoint } from '@tabler/icons-react';

import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';

const Content = ({
  header,
  content,
  items,
  image,
  isReversed,
  isAfterContent,
  id,
  hasBackground = false,
}: ContentProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={hasBackground}
    containerClass={`${isAfterContent ? 'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20' : ''}`}
  >
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="mx-auto max-w-7xl">
      <div className={`md:flex ${isReversed ? 'md:flex-row-reverse' : ''} md:gap-16`}>
        <div className="self-center md:basis-1/2">
          {/* {content && <div className="text-lg text-gray-600 dark:text-slate-400">{content}</div>} */}
          <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-6">
          Adara Translate is a cutting-edge multilingual tool engineered to eliminate language barriers by facilitating seamless translation across various platforms. It is designed for use with Google Spreadsheets, Docs, Slides, Microsoft Office Excel, Word, PowerPoint, and WordPress.


          </p>
          <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-6">
          Effortlessly translate individual cells, whole documents, or entire sheets with just a single click into over 100 languages. Our tool offers flexible translation options to suit your needs:
          </p>
          <ul className="list-disc pl-5 dark:text-slate-400 text-gray-600 space-y-2">
            <li>Translate a selected range of text</li>
            <li>Translate all text within a file</li>
            <li>Create a duplicate of the file before translating</li>
            <li>
              Support for multiple translation providers, including DeepL,
              Google, Microsoft, and GPT-4o
            </li>
          </ul>
          <p className="text-gray-600 dark:text-slate-400 leading-relaxed mt-6">
          Leveraging the powerful DeepL translation engine, known for its exceptional accuracy and cutting-edge performance, Adara Translate also incorporates Google&apos;s neural machine translation and Microsoft&apos;s AI, supplemented by the adaptive, context-aware capabilities of GPT-4o. This synergy provides translations that rival professional human translators in quality.
<br/>
<br/>
With Adara Translate, access state-of-the-art technology that ensures your translations are not only accurate but also retain the nuance and tone of the original text, making it ideal for business, academic, and personal use.
          </p>
        </div>
        <div aria-hidden="true" className="mt-10 md:mt-0 md:basis-1/2">
        <div className="grid grid-cols-2 gap-10 ">
<<<<<<< HEAD
            <img
              src="https://adaratranslate.com/assets/images/about/about-image-01.jpg"
              alt="Team working"
=======
            <Image
              src="/about-image-01.jpg"
              alt="Team working"
              width={500}
              height={500}
>>>>>>> origin/main
              className="min-h-full shadow-lg"
            />
            <div className='grid grin-col-2 gap-10'> 


<<<<<<< HEAD
            <img
              src="https://adaratranslate.com/assets/images/about/about-image-02.jpg"
              alt="Laptop with code"
              className="w-full shadow-lg"
              />
          <div className="text-center bg-blue-600 text-white py-5 shadow-lg">
=======
            <Image
              src="/about-image-02.jpg"
              alt="Laptop with code"
              width={500}
              height={500}
              className="w-full shadow-lg"
              />
          <div className="text-center bg-cyan-600 text-white py-5 shadow-lg">
>>>>>>> origin/main
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="text-lg">Supported Languages</p>
          </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default Content;
