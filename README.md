# Recargas App

## Descripción
Esta aplicación te permite seleccionar un operador de telecomunicaciones y realizar recargas de saldo.

## Funcionalidades

- **Selección de Operador:** La aplicación te permite seleccionar un operador de telecomunicaciones de una lista predefinida.
- **Recargas de Saldo:** Una vez que hayas seleccionado un operador, puedes ingresar el número de teléfono y el monto que deseas recargar.
- **Pagos de Servicios:** Además de recargas de saldo, la aplicación también admite pagos de servicios relacionados con los operadores de telecomunicaciones.

## Datos Necesarios
Para que la aplicación funcione correctamente, necesitarás:

- **Token de Acceso:** La aplicación consume un API que requiere un token de acceso para autenticarse.

## API Consumida
La aplicación consume los siguientes endpoints del API externo:

1. **Obtener Token de Acceso:**
   - **Endpoint:** `[http://api.example.com](http://137.184.230.141:5000/)/token_json`
   - **Método:** POST
   - **Datos Devueltos:** El API devuelve un token de acceso después de autenticar las credenciales proporcionadas.

2. **Obtener Usuario Actual:**
   - **Endpoint:** `[http://api.example.com](http://137.184.230.141:5000/)/user/me`
   - **Método:** GET
   - **Datos Devueltos:** El API devuelve los detalles del usuario actual, incluyendo su nombre de usuario, correo electrónico, nombre completo, etc.

3. **Obtener Operadores de Telecomunicaciones:**
   - **Endpoint:** `[http://api.example.com](http://137.184.230.141:5000/)/api/v1/operadores`
   - **Método:** GET
   - **Datos Devueltos:** El API devuelve una lista de operadores de telecomunicaciones disponibles, cada uno con su nombre y otros detalles relevantes.

4. **Enviar Recarga:**
   - **Endpoint:** `[http://api.example.com](http://137.184.230.141:5000/)/api/v1/enviar_recarga`
   - **Método:** POST
   - **Datos Enviados:** La aplicación envía los detalles de la recarga, incluyendo el operador seleccionado, el número de teléfono y el monto de la recarga.

## Tecnologías Utilizadas
- React
- Tailwind CSS

## Instalación y Ejecución
Sigue estos pasos para instalar y ejecutar la aplicación en tu entorno local:

1. Clona este repositorio en tu máquina local.
2. Navega al directorio del proyecto en tu terminal.
3. Ejecuta `npm install` para instalar todas las dependencias.
4. Ejecuta `npm start` para iniciar la aplicación.

¡Disfruta de tu experiencia de recargas y pagos!
