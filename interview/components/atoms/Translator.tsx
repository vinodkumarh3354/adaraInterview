'use client';
import React, { FormEvent, useState } from 'react';
import { IconArrowsExchange, IconCopy, IconTrash, IconWorld, IconLanguage, IconBrain, IconMicrophone, IconPlayerStop  } from '@tabler/icons-react';
import { googleConfig } from '~/constant/google.config';
import { microsoftConfig } from '~/constant/microsoft.config';
import { deeplConfig } from '~/constant/deepl.config';
import { useRouter } from 'next/navigation';
import { useUserSession } from '~/hooks/useUserSession';
import { useTranscribeService } from '~/services/transcribeService';
import { Compass, Languages } from 'lucide-react';
<<<<<<< HEAD
=======
import toast from 'react-hot-toast';
>>>>>>> origin/main

const TranslationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    text: '',
    languageFrom: 'auto',
    to: 'en',
    engine: 'google',
  });
  const [translatedText, setTranslatedText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isProcessingAudio, setIsProcessingAudio] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const router = useRouter()
  const { user } = useUserSession();

  const translationEngines = [
    { value: 'google', label: 'Google', icon: IconWorld },
    { value: 'deepl', label: 'DeepL', icon: IconLanguage },
    { value: 'microsoft', label: 'Microsoft', icon: IconBrain },
    { value: 'gpt40', label: 'GPT-4', icon: IconBrain },
  ];

  const { isRecording, isTranscribing, startRecording, stopRecording } = useTranscribeService({
    onTranscriptionComplete: (text) => {
      setFormData(prev => ({ ...prev, text }));
      setIsProcessingAudio(false);
      console.log(text)
    },
    onError: (error) => {
      setErrorMessage(error);
      setIsProcessingAudio(false);
      setTimeout(() => setErrorMessage(''), 3000);
    }
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleStopRecording = () => {
    stopRecording();
    setIsProcessingAudio(true);
  }

  const handleTranslate = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!user) {
      setErrorMessage('Please log in to use translation')
      router.push('/login')
      return
    }

    setIsLoading(true)
    setTranslatedText('')
    setErrorMessage('')
    setSuccessMessage('')

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          engine: formData.engine,
          text: formData.text,
          from: formData.languageFrom,
          to: formData.to,
          user
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Translation failed')
      }

      setTranslatedText(data.translations ? data.translations.join('\n') : data.translatedText || '')
<<<<<<< HEAD
      setSuccessMessage('Translation complete')
      
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (error) {
      console.error('Translation error:', error)
      setErrorMessage(error instanceof Error ? error.message : 'Unknown error')
      setTimeout(() => setErrorMessage(''), 5000)
=======
      toast.success('Translation complete')
      
     
    } catch (error) {
      console.error('Translation error:', error)
       toast.error('Translation failed' )
     
>>>>>>> origin/main
    } finally {
      setIsLoading(false)
    }
  }

  const copyToClipboard = async () => {
    if (!translatedText) {
<<<<<<< HEAD
      setErrorMessage('No text to copy')
      setTimeout(() => setErrorMessage(''), 3000)
=======
      toast.error('No text to copy')
>>>>>>> origin/main
      return
    }

    try {
      await navigator.clipboard.writeText(translatedText)
<<<<<<< HEAD
      setSuccessMessage('Copied to clipboard')
      setTimeout(() => setSuccessMessage(''), 3000)
    } catch (err) {
      setErrorMessage('Copy failed')
      setTimeout(() => setErrorMessage(''), 3000)
=======
      toast.success('Copied to clipboard')
    } catch (err) {
      toast.error('Copy failed')
>>>>>>> origin/main
    }
  }

  const swapLanguages = () => {
    setFormData(prev => ({
      ...prev,
      languageFrom: prev.to,
      to: prev.languageFrom,
    }))
  }

  const clearTexts = () => {
    setFormData({
      text: '',
      languageFrom: 'auto',
      to: 'en',
      engine: 'google',
    })
    setTranslatedText('')
    setErrorMessage('')
    setSuccessMessage('')
  }

<<<<<<< HEAD
=======
  const getLanguagesFrom = () => {
    switch (formData.engine) {
      case 'deepl':
        return deeplConfig.languagefrom;
      case 'google':
      case 'gpt40':
        return [
          { code: 'auto', name: '🌎 Detect Language' },
          ...googleConfig.languages
        ];
      case 'microsoft':
        return [
          { code: 'auto', name: '🌎 Detect Language' },
          ...microsoftConfig.languages
        ];
      default:
        return [];
    }
  };

  const getLanguagesTo = () => {
    switch (formData.engine) {
      case 'deepl':
        return deeplConfig.languageto;
      case 'google':
      case 'gpt40':
        return googleConfig.languages;
      case 'microsoft':
        return microsoftConfig.languages;
      default:
        return [];
    }
  };

>>>>>>> origin/main
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-6 bg-gray-100 dark:bg-gray-800 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-center text-black dark:text-cyan-400 py-3">
           Translator
          </h2>

<<<<<<< HEAD
          {/* Translation Engines */}
=======
    
>>>>>>> origin/main
          <div className="flex flex-col md:flex-row justify-center gap-4 md:space-x-4 mb-8">
            {translationEngines.map((engine) => (
              <button
                key={engine.value}
                onClick={() => setFormData(prev => ({ ...prev, engine: engine.value }))}
                className={`
                  flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300
                  ${formData.engine === engine.value 
                    ? 'bg-cyan-500/30 dark:bg-cyan-500/30 text-cyan-950 dark:text-cyan-300 border border-cyan-500' 
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-400 dark:text-gray-400 hover:bg-gray-200/50 dark:hover:bg-gray-700/50'}
                `}
              >
                <engine.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{engine.label}</span>
              </button>
            ))}
          </div>

<<<<<<< HEAD
          {/* Language Selection */}
=======
      
>>>>>>> origin/main
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="relative">
              <label className="block text-sm text-gray-400 dark:text-gray-200 mb-2">Source Language</label>
              <select
                name="languageFrom"
                value={formData.languageFrom}
                onChange={handleInputChange}
                className="w-full cursor-pointer bg-gray-200 dark:bg-gray-800 text-gray-950 dark:text-gray-200 border dark:border-gray-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
<<<<<<< HEAD
                <option value="auto">Detect Language</option>
                {googleConfig.languages.map((lang) => (
=======
                {getLanguagesFrom().map((lang) => (
>>>>>>> origin/main
                  <option key={lang.code} value={lang.code} className="dark:bg-gray-800">
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-center md:self-end">
              <button
                onClick={swapLanguages}
                className="bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 rounded-full p-3 hover:bg-cyan-500/40 transition-all"
              >
                <IconArrowsExchange className="w-6 h-6 " />
              </button>
            </div>

            <div>
              <label className="block text-sm text-gray-400 dark:text-gray-200 mb-2">Target Language</label>
              <select
                name="to"
                value={formData.to}
                onChange={handleInputChange}
                className="w-full cursor-pointer bg-gray-200 dark:bg-gray-800 text-gray-950 dark:text-gray-200 border dark:border-gray-700 rounded-xl py-3 px-4 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              >
<<<<<<< HEAD
                {googleConfig.languages.map((lang) => (
=======
                {getLanguagesTo().map((lang) => (
>>>>>>> origin/main
                  <option key={lang.code} value={lang.code} className="dark:bg-gray-800">
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>


          {/* Enter Text with Mic */}
          <div className="grid grid-col-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">Enter Text</label>
              <button
                onClick={isRecording ? handleStopRecording : startRecording}
                disabled={isTranscribing || isProcessingAudio}
                className={`p-2 relative top-5 z-10 text-white rounded-full shadow-md transition-all ${
                  isRecording 
                    ? 'bg-red-500 animate-pulse' 
                    : isProcessingAudio || isTranscribing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-cyan-500 hover:bg-cyan-600'
                }`}
              >
                {isRecording ? (
                  <IconPlayerStop className="w-5 h-5 text-white" />
                ) : (
                  <IconMicrophone 
                    className={`w-5 h-5 text-white ${
                      isRecording ? 'animate-[wave_1.5s_infinite]' : ''
                    }`} 
                  />
                )}
              </button>
            </div>
            <div className="relative flex flex-col ">
              <textarea
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                placeholder="Enter text to translate..."
                className="w-full p-3 border bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black dark:text-white placeholder-gray-400"
                rows={6}
              />
          
              {/* Audio Processing Loader */}
              {isProcessingAudio && (
                <div className="absolute inset-0 bg-white/70 dark:bg-gray-800/70 flex items-center justify-center rounded-lg">
                  <div className="flex flex-col items-center">
                    <div className="animate-spin mb-2">
                      <svg className="w-10 h-10 text-cyan-500" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Processing audio...</p>
                  </div>
                </div>
              )}
              <p className="text-sm text-gray-500 mt-1">Characters: {formData.text.length}/5000</p>
            </div>
          </div>

          {/* Translated Text Area */}
          <div className="relative">
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-gray-600 dark:text-gray-300">Translated Text</label>
              <button
                onClick={copyToClipboard}
                disabled={!translatedText}
                className={`p-2 relative top-5 rounded-full shadow-md transition-all ${
                  translatedText 
                    ? 'bg-cyan-500 text-white hover:bg-cyan-600' 
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                }`}
              >
                <IconCopy className="w-5 h-5" />
              </button>
            </div>
            <textarea
              value={translatedText}
              readOnly
              rows={6}
              placeholder="Translation will appear here..."
              className="w-full outline-none bg-gray-200 dark:bg-gray-700 text-gray-950 dark:text-gray-200 border dark:border-gray-600 border-gray-300 rounded-lg p-3 "
            />
          </div>
        </div>

        <div className="grid py-2 md:grid-cols-2 gap-4">
          <button
            onClick={handleTranslate}
            disabled={isLoading}
            className="
              w-full py-3 flex items-center justify-center rounded-xl 
              bg-gradient-to-r from-cyan-500 to-blue-600 
              text-white font-medium
              hover:from-cyan-600 hover:to-blue-700
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-all duration-300
            "
          >
           <Languages />  {isLoading ? 'Translating...' : 'Translate'}
          </button>
          <button
            onClick={clearTexts}
            className="
              w-full py-3 rounded-xl 
              bg-gray-200 dark:bg-gray-800 text-gray-300 dark:text-gray-200
              hover:bg-gray-600/50
              flex items-center justify-center
              transition-all duration-300
            "
          >
            <IconTrash className="w-5 h-5 mr-2" />
            Clear
          </button>
        </div>

<<<<<<< HEAD
      
          {errorMessage && (
            <div className="mt-4 bg-red-500/20 text-red-400 py-3 px-4 rounded-xl text-center">
              {errorMessage}
            </div>
          )}
          {successMessage && (
            <div className="mt-4 bg-green-500/20 text-green-400 py-3 px-4 rounded-xl text-center">
              {successMessage}
            </div>
          )}
=======
       
>>>>>>> origin/main
        </div>
      </div>
    </div>
  );
};

export default TranslationForm;