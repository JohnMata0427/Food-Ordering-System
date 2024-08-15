<h1 align="center">
  <img height="35px" src="https://github.com/JohnMata0427/Food-Ordering-API-RESTful/assets/150484680/842b4e83-fd68-4f5e-8b20-e644053a69cf" alt="Logo">
  $\color{Apricot}{Food\ Ordering\ at\ ESFOT\ System}$
  <img height="35px" src="https://github.com/JohnMata0427/Food-Ordering-API-RESTful/assets/150484680/842b4e83-fd68-4f5e-8b20-e644053a69cf" alt="Logo">
</h1>

---

> [!IMPORTANT]
> **Problematic Introduction**
>
> The lunchtime rush at ESFOT poses a significant operational challenge.
> The influx of students seeking to order their meals within a limited timeframe (11 AM to 2 PM) results in the formation of long queues.
> These extended wait times not only inconvenience students but also negatively impact their overall dining experience.
> Additionally, the manual ordering process, with its inherent limitations, can lead to inefficiencies and potential errors.
> The existing system struggles to accommodate the high volume of orders during peak hours, leading to delays and frustration among students.

---

<h3 id="sprint-0">🥣 Sprint 0 - Development Environment Configuration</h3>

<details>
  <summary>✅ Definition of requirements and Constraints</summary>
  <ul>
    <li>El frontend tiene los siguientes perfiles: Cocinero y Estudiante.</li>
    <li>Hay un backend y una serie de APIs públicas y privadas disponibles para su consumo.</li>
    <li>El perfil de Cocinero puede:
      <ul>
        <li>Registrarse e iniciar sesión.</li>
        <li>Gestionar su perfil.</li>
        <li>Gestionar productos.</li>
      </ul>
    </li>
    <li>El perfil de Estudiante puede:
      <ul>
        <li>Registrarse e iniciar sesión.</li>
        <li>Añadir productos al carrito.</li>
        <li>Realizar la compra.</li>
      </ul>
    </li>
  </ul>
</details>

<details>
  <summary>✅ Frontend Project Structure</summary>
  
  > - **Tools**
  > 
  > | Image                                                        | Name                       |
  > |--------------------------------------------------------------|----------------------------|
  > | ![VSCode](https://skillicons.dev/icons?i=vscode&theme=light) | Visual Studio Code         |
  > | ![NodeJS](https://skillicons.dev/icons?i=nodejs&theme=light) | Node.js                    |
  > | ![PNPM](https://skillicons.dev/icons?i=pnpm&theme=light)     | PNPM (Recommendation)      |
  > | ![React](https://skillicons.dev/icons?i=react&theme=light)   | React                      |
  > | ![Tailwind CSS](https://skillicons.dev/icons?i=tailwindcss&theme=light) | Tailwind CSS          |
  
  > - **Project Initialization and Installation Dependencies**
  >   
  >   - Open the terminal and run the following command to create a new React app:
  >     ```
  >     npx create-react-app my-app
  >     ```
  >   - Navigate into your project directory:
  >     ```
  >     cd my-app
  >     ```
  >   - Install Tailwind CSS and other necessary dependencies:
  >     ```
  >     npm install -D tailwindcss postcss autoprefixer
  >     npx tailwindcss init -p
  >     ```
  >   - Configure Tailwind by adding the following to your `tailwind.config.js`:
  >     ```javascript
  >     /** @type {import('tailwindcss').Config} */
  >     module.exports = {
  >       content: [
  >         "./src/**/*.{js,jsx,ts,tsx}",
  >       ],
  >       theme: {
  >         extend: {},
  >       },
  >       plugins: [],
  >     }
  >     ```
  >   - Add the Tailwind directives to your `src/index.css`:
  >     ```css
  >     @tailwind base;
  >     @tailwind components;
  >     @tailwind utilities;
  >     ```
  
  > - **Project File Structure**
  >
  >   - The basic structure of a React project is as follows:
  >     ```
  >     my-app/
  >     ├── node_modules/
  >     ├── public/
  >     ├── src/
  >     │   ├── assets/              # Static files (images, fonts)
  >     │   ├── components/          # Reusable components
  >     │   ├── pages/               # Pages or views
  >     │   ├── App.js               # Main app component
  >     │   ├── index.js             # Entry point
  >     │   ├── index.css            # Global styles
  >     │   └── tailwind.config.js   # Tailwind configuration
  >     ├── .gitignore               # Git ignore file
  >     ├── package.json             # Project dependencies
  >     └── README.md                # Project documentation
  >     ```
  
</details>



---

### 👩🏻‍💻👨🏻‍💻 Multiplatform Website Preview

![Vista Multiplataforma del Sitio](https://github.com/user-attachments/assets/b460007d-3943-4e1e-a7b7-f85a6a7e111d)
