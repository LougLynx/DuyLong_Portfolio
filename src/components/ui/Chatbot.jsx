import Groq from 'groq-sdk';
import { Bot, Loader2, MessageCircle, Send, User, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { getDetailedContext, getSystemPrompt } from '../../data/chatbotData';

// Get API key from environment variable
const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

// Debug: Log API key status
// console.log('🔑 API Key Status:', {
//   exists: !!API_KEY,
//   length: API_KEY?.length || 0,
//   first10chars: API_KEY?.substring(0, 10) || 'NOT_FOUND',
//   allEnvVars: import.meta.env
// });

export const Chatbot = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const genAI = useRef(null);
  const chat = useRef(null);
  const currentLanguage = useRef(language);
  const chatInitialized = useRef(false);
  const contextSent = useRef(false);
  
  // Rate limiting để tránh vượt quota
  const lastRequestTime = useRef(0);
  const requestCount = useRef(0);
  const dailyResetTime = useRef(Date.now());

  // Initialize Groq AI
  useEffect(() => {
    if (API_KEY) {
      try {
        genAI.current = new Groq({
          apiKey: API_KEY,
          dangerouslyAllowBrowser: true, // Required for browser environment
        });
        // console.log('✅ Groq AI initialized successfully');
      } catch (error) {
        console.error('❌ Error initializing Groq AI:', error);
      }
    } else {
      console.error('❌ API key not found. Please create .env file with VITE_GROQ_API_KEY');
    }
  }, []);

  // Initialize chat when opening chatbot or changing language
  useEffect(() => {
    if (isOpen && genAI.current) {
      // Only reinitialize if language changed or not yet initialized
      if (!chatInitialized.current || currentLanguage.current !== language) {
        currentLanguage.current = language;
        contextSent.current = false; // Reset context when language changes
        initializeChat();
      }
    }
  }, [isOpen, language]);

  const initializeChat = async () => {
    try {
      // console.log('🚀 Initializing Groq chatbot...');
      
      // Groq doesn't need model initialization like Gemini
      // We'll use the API directly in sendMessage
      chatInitialized.current = true;
      
      // Add welcome message only once
      if (messages.length === 0) {
        setMessages([
          {
            role: 'bot',
            content: language === 'vi'
              ? "Chào bạn! Tôi là Duy Long. Hãy hỏi tôi bất cứ điều gì về kinh nghiệm, kỹ năng, dự án hay lý do tôi chọn nghề lập trình nhé!"
              : "Hello! I'm Duy Long. Ask me anything about my experience, skills, projects, or why I chose programming!",
            timestamp: new Date()
          }
        ]);
      }
      
      // console.log('✅ Groq chatbot initialized successfully');
    } catch (error) {
      console.error('❌ Error initializing Groq chatbot:', error);
      
      setMessages([
        {
          role: 'bot',
          content: language === 'vi'
            ? "Xin lỗi, chatbot tạm thời không khả dụng. Bạn có thể:\n\n• Liên hệ trực tiếp: longtd204@gmail.com\n• Xem thông tin chi tiết trong các phần khác của portfolio\n• Thử lại sau ít phút\n\nCảm ơn bạn đã quan tâm! 😊"
            : "Sorry, the chatbot is temporarily unavailable. You can:\n\n• Contact me directly: longtd204@gmail.com\n• Check out detailed information in other sections of my portfolio\n• Try again in a few minutes\n\nThank you for your interest! 😊",
          timestamp: new Date()
        }
      ]);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    // console.log('🔍 handleSendMessage called:', { 
    //   inputMessage: inputMessage.trim(), 
    //   isLoading, 
    //   genAI: !!genAI.current,
    //   inputLength: inputMessage.length 
    // });
    
    if (!inputMessage.trim() || isLoading || !genAI.current) {
      // console.log('❌ Early return:', { 
      //   noInput: !inputMessage.trim(), 
      //   loading: isLoading, 
      //   noGenAI: !genAI.current 
      // });
      return;
    }

    // Kiểm tra rate limiting
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime.current;
    
    // Reset daily counter nếu đã qua 24h
    if (now - dailyResetTime.current > 24 * 60 * 60 * 1000) {
      requestCount.current = 0;
      dailyResetTime.current = now;
    }
    
    // Giới hạn: 100 requests/ngày cho Groq free tier (an toàn)
    if (requestCount.current >= 100) {
      const errorMessage = {
        role: 'bot',
        content: language === 'vi'
          ? "Hôm nay đã đạt giới hạn 100 câu hỏi. Vui lòng thử lại ngày mai hoặc liên hệ: longtd204@gmail.com"
          : "Daily limit of 100 questions reached. Please try again tomorrow or contact: longtd204@gmail.com",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }
    
    // Giới hạn: ít nhất 2 giây giữa các request (Groq nhanh hơn)
    if (timeSinceLastRequest < 2000) {
      const remainingTime = Math.ceil((2000 - timeSinceLastRequest) / 1000);
      const errorMessage = {
        role: 'bot',
        content: language === 'vi'
          ? `Vui lòng đợi ${remainingTime} giây trước khi hỏi câu tiếp theo.`
          : `Please wait ${remainingTime} seconds before asking the next question.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
      return;
    }

    const userMessage = {
      role: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    const currentInput = inputMessage;
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Cập nhật rate limiting
    lastRequestTime.current = now;
    requestCount.current += 1;

    try {
      // console.log('📤 Sending message to Gemini:', currentInput);
      
      // Build message with smart context injection
      let messageToSend = currentInput;
      
      if (!contextSent.current) {
        // First message: add base system prompt với context đầy đủ
        const systemPrompt = getSystemPrompt(language);
        const detailedContext = getDetailedContext(currentInput, language);
        messageToSend = `${systemPrompt}\n\nContext: ${detailedContext}\n\nQuestion: ${currentInput}\n\nPlease provide a detailed, comprehensive answer with specific examples.`;
        contextSent.current = true;
        // console.log('🎯 First message with enhanced context');
      } else {
        // Subsequent messages: thêm context ngắn gọn
        const briefContext = getDetailedContext(currentInput, language);
        if (briefContext) {
          messageToSend = `Context: ${briefContext}\n\nQuestion: ${currentInput}\n\nPlease provide a detailed answer.`;
        } else {
          messageToSend = `${currentInput}\n\nPlease provide a detailed, comprehensive answer.`;
        }
        // console.log('📚 Question with brief context');
      }
      
      // Use Groq API (non-streaming for now)
      try {
        // console.log('📤 Sending to Groq:', messageToSend);
        
        const completion = await genAI.current.chat.completions.create({
          messages: [
            {
              role: "system",
              content: language === 'vi' 
                ? "Bạn là Trần Duy Long, sinh viên FPT University chuyên ngành Software Engineering. Trả lời thân thiện, chi tiết và đầy đủ bằng tiếng Việt. Mỗi câu trả lời ít nhất 3-4 câu với ví dụ cụ thể."
                : "You are Tran Duy Long, a FPT University student majoring in Software Engineering. Answer friendly, detailed and comprehensive in English. Each response should be at least 3-4 sentences with specific examples."
            },
            {
              role: "user",
              content: messageToSend
            }
          ],
          model: "llama-3.1-8b-instant", // Updated to use available model
          temperature: 0.8,
          max_tokens: 10000
        });

        const text = completion.choices[0]?.message?.content || '';
        
        // console.log('✅ Groq response received:', text.substring(0, 50));
        
        if (!text.trim()) {
          throw new Error('Empty response from Groq');
        }
        
        const botMessage = {
          role: 'bot',
          content: text,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        
      } catch (groqError) {
        console.error('❌ Groq API error:', groqError);
        throw groqError;
      }
    } catch (error) {
      console.error('❌ Error sending message:', error);
      console.error('Error details:', error.message);
      
      let errorText = language === 'vi'
        ? "Xin lỗi, tôi gặp sự cố khi xử lý câu hỏi của bạn. "
        : "Sorry, I encountered an issue processing your question. ";
      
      if (error.message && error.message.includes('API_KEY_INVALID')) {
        errorText += language === 'vi'
          ? "API key không hợp lệ. Vui lòng kiểm tra file .env"
          : "Invalid API key. Please check your .env file";
      } else if (error.message && (error.message.includes('quota') || error.message.includes('QUOTA_EXCEEDED') || error.message.includes('rate limit'))) {
        errorText += language === 'vi'
          ? "Đã hết quota API. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email: longtd204@gmail.com"
          : "API quota exceeded. Please try again later or contact me directly at: longtd204@gmail.com";
      } else if (error.message && error.message.includes('SAFETY')) {
        errorText += language === 'vi'
          ? "Câu hỏi vi phạm chính sách an toàn. Vui lòng hỏi câu khác."
          : "Question violates safety policy. Please ask something else.";
      } else {
        errorText += language === 'vi'
          ? "Vui lòng thử lại."
          : "Please try again.";
      }
      
      const errorMessage = {
        role: 'bot',
        content: errorText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = language === 'vi' ? [
    "Bạn có kinh nghiệm gì với React?",
    "Tại sao bạn chọn nghề lập trình?",
    "Kể về dự án nổi bật nhất của bạn",
    "Bạn có kỹ năng gì về .NET?"
  ] : [
    "What experience do you have with React?",
    "Why did you choose programming?",
    "Tell me about your most notable project",
    "What are your .NET skills?"
  ];

  const handleSuggestedQuestion = (question) => {
    setInputMessage(question);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 group"
        aria-label={language === 'vi' ? 'Mở chatbot' : 'Open chatbot'}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] h-[600px] bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">Duy Long</h3>
              <p className="text-xs text-blue-100">
                {language === 'vi' ? 'AI Trợ lý - Đang hoạt động' : 'AI Assistant - Online'}
              </p>
            </div>
            <button
              onClick={toggleChat}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
            {messages.map((message, index) => (
              <div
                key={message.id || index}
                className={`flex gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'bot' && (
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] p-3 rounded-2xl ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-none'
                      : 'bg-slate-800/80 text-slate-100 rounded-bl-none border border-slate-700/50'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap break-words">
                    {message.content}
                    {message.streaming && <span className="inline-block w-1 h-4 ml-1 bg-blue-400 animate-pulse" />}
                  </p>
                  <span className="text-[10px] opacity-60 mt-1 block">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-slate-800/80 p-3 rounded-2xl rounded-bl-none border border-slate-700/50">
                  <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions or Contact Info */}
          {messages.length <= 1 && (
            <div className="p-3 border-t border-slate-700/50 bg-slate-900/80">
              <p className="text-xs text-slate-400 mb-2">
                {language === 'vi' ? 'Câu hỏi gợi ý:' : 'Suggested questions:'}
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.slice(0, 2).map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="text-xs bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 px-3 py-1.5 rounded-full transition-colors border border-slate-700/50"
                  >
                    {question}
                  </button>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-700/30">
                <p className="text-xs text-slate-400 mb-2">
                  {language === 'vi' ? 'Hoặc liên hệ trực tiếp:' : 'Or contact me directly:'}
                </p>
                <a
                  href="mailto:longtd204@gmail.com"
                  className="text-xs bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/50 inline-block"
                >
                  📧 longtd204@gmail.com
                </a>
              </div>
            </div>
          )}

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700/50 bg-slate-900/80">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={language === 'vi' ? 'Nhập câu hỏi của bạn...' : 'Type your question...'}
                className="flex-1 bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 rounded-xl hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
