import React, { useState } from 'react';
import {APP_ENV} from "../env";
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

const RegisterPage: React.FC = () => {

  const [formData, setFormData] = useState({
    // username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Для перенаправлення користувача

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Відправка POST-запиту безпосередньо через axios
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/register/`, formData);

      setMessage('Реєстрація успішна! Перенаправлення на авторизацію...');

      // Перенаправлення через 2 секунди на сторінку логіну
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      setMessage('Помилка реєстрації. Перевірте введені дані.');
    }
  };


  // baseQuery: fetchBaseQuery({ baseUrl: `${APP_ENV.REMOTE_BASE_URL}/api` }), // Replace with your base API URL



  // const [message, setMessage] = useState('');
  // const navigate = useNavigate(); 

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     await fetchBaseQuery.post('register/', formData);
  //     setMessage('Реєстрація успішна! Перенаправлення на авторизацію...');
      
      
  //     setTimeout(() => {
  //       navigate('/login'); 
  //     }, 2000);
  //   } catch (error) {
  //     setMessage('Помилка реєстрації. Перевірте введені дані.');
  //   }
  // };



  //   // Отправка даних на сервер
  //   try {
  //     const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/register`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(data.message || 'Something went wrong');
  //     }

  //     // Успішна реєстрація
  //     console.log('User registered:', data);
  //     alert('Registration successful');
  //   } catch (err) {
  //     setError(err.message);
  //     console.error('Registration error:', err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">Реєстрація</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* <div>
            <label className="block text-gray-700">Ім'я користувача:</label>
            <input
              type="text"
              name="username"
              placeholder="Ім'я користувача"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>  */}
          <div>
            <label className="block text-gray-700">Електронна пошта:</label>
            <input
              type="email"
              name="email"
              placeholder="Електронна пошта"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Пароль:</label>
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Зареєструватися
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-red-500">{message}</p>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
