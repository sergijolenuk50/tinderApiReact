// import React, { useState } from 'react';  
// import { useNavigate } from 'react-router-dom';  
// import axios from 'axios';  
// import { isAxiosError } from 'axios';

// const LoginPage: React.FC = () => {  
//     const [formData, setFormData] = useState({  
//         email: '',  
//         password: '',  
//     });  

//     const [message, setMessage] = useState('');  
//     const navigate = useNavigate();  

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
//         setFormData({ ...formData, [e.target.name]: e.target.value });  
//     };  

//     const handleSubmit = async (e: React.FormEvent) => {  
//         e.preventDefault();  
//         try {  
//             const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/token/`, {  
//                 email: formData.email,  
//                 password: formData.password,  
//             });  

//             const { access, refresh } = response.data;  
//             localStorage.setItem('access', access);  
//             localStorage.setItem('refresh', refresh);  
//             setMessage('Авторизація успішна!');  
//             navigate('/Home');   
//         } catch (error) {  
//             console.error(error); // Логування помилки  
//             if (isAxiosError(error) && error.response) {  
//                 setMessage(error.response.data.detail || "Помилка авторизації. Перевірте ім'я користувача та пароль.");  
//             } else {  
//                 setMessage("Сталася невідома помилка.");  
//             }  
//         }  
//     };  

//     const handleRegisterRedirect = () => {  
//         navigate('/register');   
//     };  


import React, { useState } from 'react';
// import axios from '../axiosInstance';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Console } from 'console';

interface LoginResponse {
  email: string;
  password: string;
}

  const LoginPage: React.FC = () => {
    
    
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
    //APP_ENV
    e.preventDefault();
    try {
      console.log("env", import.meta.env.VITE_BASE_URL);
      console.log("email",formData);
      // console.log("password",formData.password);

      // Відправка POST-запиту безпосередньо через axios
      // const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/accounts/login/`, formData);
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/token/`, formData);
      console.log("test",response.data);
      console.log("Response:", response);
      const { access, refresh } = response.data; 

     
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
      // const { email, password } = response.data; 
      
      
      // localStorage.setItem('email', email);
      // localStorage.setItem('password', password);
      
      setMessage('Авторизація успішна!');
      // navigate('/profile'); 
      navigate('/Home'); 

    } catch (error) {
      setMessage("Помилка авторизації. Перевірте ім'я користувача та пароль.");
    }
  };
  
  const handleRegisterRedirect = () => {
    navigate('/register'); 
  };
  
  
  
  
  
  
  
  
  
  //   const [formData, setFormData] = useState({
  //     username: '',
  //     password: '',
  //   });
  
  // const [message, setMessage] = useState('');
  // const navigate = useNavigate();
  
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post<LoginResponse>('/login/', formData); 
  //     const { access, refresh } = response.data; 

     
  //     localStorage.setItem('access', access);
  //     localStorage.setItem('refresh', refresh);

  //     setMessage('Авторизація успішна!');
  //     navigate('/profile'); 
  //   } catch (error) {
  //     setMessage("Помилка авторизації. Перевірте ім'я користувача та пароль.");
  //   }
  // };

  // const handleRegisterRedirect = () => {
  //   navigate('/register'); 
  // };









  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Авторизація</h1>
        <form
         onSubmit={handleSubmit} 
        className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Ім'я користувача:</label>
            <input
              type="text"
              name="email"
              placeholder="Ім'я користувача"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Пароль:</label>
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
            Увійти
          </button>
        </form>
        {message && (
          <p
          className={`mt-4 text-center ${
            message === 'Авторизація успішна!' ? 'text-green-500' : 'text-red-500'
            }`}
            >
            {message}
            </p>
            )}
        <button
          onClick={handleRegisterRedirect}
          className="mt-4 w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400 transition"
          >
          Створити акаунт
        </button>
      </div>
    </div>
          </>
  );
};

export default LoginPage;
