/** Miguel*/
const viewPasswordEmail = (nameUser, password) => {
  return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bienvenido a Calidad Virgen De Gracia</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <div style="max-width: 600px; margin: 20px auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);">
                
                <!-- Encabezado -->
                <div style="background: linear-gradient(135deg, #0b3074c1, #004085); color: white; text-align: center; padding: 20px;">
                    <h1 style="margin: 0; font-size: 24px;">¡Bienvenido a Calidad Virgen De Gracia!</h1>
                </div>
  
                <!-- Cuerpo del mensaje -->
                <div style="padding: 25px; text-align: center; font-size: 18px; color: #333;">
                    <p>Hola <strong>${nameUser}</strong>,</p>
                    <p>Tu cuenta ha sido creada con éxito. A continuación, encontrarás tu contraseña de acceso:</p>
                    
                    <div style="
                        display: inline-block;
                        background-color: #a5b8dbc1;
                        padding: 15px 25px;
                        font-weight: bold;
                        font-size: 20px;
                        color: #333;
                        border-radius: 8px;
                        margin: 15px 0;
                        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
                    ">
                        ${password}
                    </div>
  
                    <p>Haz clic en el botón para iniciar sesión:</p>
                    
                    <a href="http://localhost:4200/" style="
                        display: inline-block;
                        padding: 12px 30px;
                        margin-top: 15px;
                        font-size: 18px;
                        color: white;
                        background-color: #28a745;
                        text-decoration: none;
                        border-radius: 5px;
                        font-weight: bold;
                        box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
                        transition: 0.3s;
                    " onmouseover="this.style.backgroundColor='#218838';" onmouseout="this.style.backgroundColor='#28a745';">
                        Inicia sesión
                    </a>
  
                    <p style="margin-top: 20px; font-size: 16px;">No olvides cambiar tu contraseña una vez que inicies sesión.</p>
                </div>
  
                <!-- Pie de página -->
                <div style="background-color: #f8f9fa; text-align: center; padding: 12px; font-size: 14px; color: #6c757d;">
                    &copy; 2025 Calidad Virgen de Gracia | No respondas a este correo.
                </div>
            </div>
        </body>
        </html>
      `;
};

export { viewPasswordEmail };
