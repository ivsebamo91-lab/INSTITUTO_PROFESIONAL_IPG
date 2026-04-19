# IPG - Mi Primera App en React

## Descripción
Esta aplicación es una lista de tareas desarrollada con React utilizando Vite. Permite al usuario agregar, eliminar, editar y marcar tareas como completadas, además de cambiar entre modo claro y oscuro.

El objetivo del proyecto es aplicar conceptos fundamentales de React como el uso de componentes, manejo de estado con useState e interacción con el usuario.

## Funcionalidades
- Agregar nuevas tareas
- Eliminar tareas existentes
- Editar tareas
- Marcar tareas como completadas
- Cambiar entre modo claro y oscuro

## Tecnologías utilizadas
- React
- Vite
- JavaScript
- CSS

## Estructura del proyecto
- App.jsx: Componente principal que gestiona el estado global (tareas, input y tema)
- TaskList.jsx: Componente encargado de mostrar la lista de tareas y sus acciones

## Flujo de la aplicación
1. El usuario escribe una tarea en el campo de texto
2. Al presionar "Agregar", la tarea se guarda en el estado
3. Las tareas se renderizan dinámicamente en pantalla
4. El usuario puede:
   - Marcar tareas como completadas
   - Editar su contenido
   - Eliminarlas
5. El estado se actualiza y React re-renderiza la interfaz automáticamente

## Cómo ejecutar el proyecto
1. Copiar el repositorio: 
2. Entrar a la carpeta: cd ipg-primera-app
3. Instalar dependencias: npm install
4. Ejecutar la aplicación: npm run dev
5. Abrir en el navegador: http://localhost:5173


## Autor: Ivan Barra Molina
Proyecto desarrollado como parte de la asignatura de Programación Frontend para la
Carrera Ingeniería en Ciencia de Datos del Instituto Profesional IPG.