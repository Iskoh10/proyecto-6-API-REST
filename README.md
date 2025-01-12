# Proyecto 6
## _My Plants API REST_

Una API RESTful que te permite interaccionar con el sistema de gestion/clasificación de plantas, su ecología y polinizadores. Permite realizar operaciones CRUD (crear, leer, actualizar, eliminar) sobre las plantas, sus interacciones ecológicas y polinizadores.

## Endpoints

## **++Colección Plantas++**

### 1. **Obtener todas las plantas**
- **URL**: "/api/v1/plants"
- **Método**: "GET"
- **Descripción**: Obtiene la lista de todas las plantas en la base de datos.
- **Respuesta de ejemplo**:
    ```json
    [
    {
		"_id": "677c3c30385bb2f8c6bf4571",
		"kingdom": "Plantae",
		"phylum": "Magnoliophyta",
		"family": "Papaveraceae",
		"species": "Papaver rhoeas",
		"commonName": "Amapola",
		"characteristics": [],
		"imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/93/Papaver_rhoeas_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-101.jpg",
		"__v": 0,
		"createdAt": "2025-01-06T20:25:20.339Z",
		"updatedAt": "2025-01-07T12:24:16.498Z",
		"ecology": {
			"_id": "677c2ac4c00eef96d2680128",
			"plantId": "677c3c30385bb2f8c6bf4571",
			"pollinators": [
				{
					"_id": "677d166ce3acaa1c90125e46",
					"species": "Apis mellifera",
					"commonName": "Abeja melifera",
					"category": "insecto",
					"imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/70/Apis_mellifera_-_Brassica_napus_-_Valingu.jpg",
					"createdAt": "2025-01-07T11:56:28.931Z",
					"updatedAt": "2025-01-07T12:14:30.545Z",
					"__v": 0
				}
			],
			"associatedSpecies": "Manzanilla, Diente de León, Margarita Silvestre",
			"invasiveStatus": false,
			"createdAt": "2025-01-06T19:11:00.098Z",
			"updatedAt": "2025-01-07T12:28:40.526Z",
			"__v": 0
		}
	},
    ]
    ```

### 2. **Crear una nueva planta**
- **URL**: "/api/v1/plants"
- **Método**: "POST"
- **Descripción**: Crea una nueva planta en la base de datos.
- **Cuerpo de la solicitud**:
    ```json
    {
	"kingdom": "Plantae",
    "phylum": "Magnoliophyta",
    "family": "Papaveraceae",
    "species": "Papaver rhoeas",
    "commonName": "Amapola",
    "characteristics": "",
    "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/93/Papaver_rhoeas_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-101.jpg",
	"ecology": "677c2ac4c00eef96d2680128"
    }
    ```
- **Respuesta de ejemplo**:
    ```json
    {
	"kingdom": "Plantae",
	"phylum": "Magnoliophyta",
	"family": "Papaveraceae",
	"species": "Papaver rhoeas",
	"commonName": "Amapola",
	"characteristics": "",
	"imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/93/Papaver_rhoeas_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-101.jpg",
	"ecology": "677c2ac4c00eef96d2680128",
	"_id": "677c2e2f24d49c3ef10a5369",
	"createdAt": "2025-01-06T19:25:35.781Z",
	"updatedAt": "2025-01-06T19:25:35.781Z",
	"__v": 0
    }
    ```

### 3. **Actualizar una planta**
- **URL**: "/api/v1/plants/:id"
- **Método**: "PUT"
- **Descripción**: Actualiza una planta existente.
- **Parametros**:
    - `id`(requerido): El identificador único de la planta.  
- **Cuerpo de la solicitud**:
    ```json
    {
     "name": "Amapola",
     "family": "Papaveraceae",
     "species": "Papaver rhoeas",
	 "ecology": "677c2ac4c00eef96d2680128"
    }
    ```
- **Respuesta de ejemplo**:
    ```json
    {
	"_id": "677c3c30385bb2f8c6bf4571",
	"kingdom": "Plantae",
	"phylum": "Magnoliophyta",
	"family": "Papaveraceae",
	"species": "Papaver rhoeas",
	"commonName": "Amapola",
	"characteristics": [],
	"imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/93/Papaver_rhoeas_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-101.jpg",
	"__v": 0,
	"createdAt": "2025-01-06T20:25:20.339Z",
	"updatedAt": "2025-01-07T12:24:16.498Z",
	"ecology": "677c2ac4c00eef96d2680128"
    }
    ```
    
### 4. **Eliminar una planta**
- **URL**: "/api/v1/plants/:id"
- **Método**: "DELETE"
- **Descripción**: Elimina una planta de la base de datos.
- **Parametros**:
    - `id`(requerido): El identificador único de la planta.  
- **Respuesta de ejemplo**:
    ```json
    {
	"_id": "677bd0bddc6fd5785a85760e",
	"createdAt": "2025-01-06T12:46:53.824Z",
	"updatedAt": "2025-01-06T12:46:53.824Z",
	"__v": 0
    }
    ```
    
## **++Colección Ecologia++**

### 1. **Obtener todas las ecologias**
- **URL**: "/api/v1/ecologies"
- **Método**: "GET"
- **Descripción**: Obtiene la lista de todas las ecologias en la base de datos.
- **Respuesta de ejemplo**:
    ```json
    [
    {
		"_id": "677c2ac4c00eef96d2680128",
		"plantId": {
			"_id": "677c3c30385bb2f8c6bf4571",
			"kingdom": "Plantae",
			"phylum": "Magnoliophyta",
			"family": "Papaveraceae",
			"species": "Papaver rhoeas",
			"commonName": "Amapola",
			"characteristics": [],
			"imgUrl": "https://upload.wikimedia.org/wikipedia/commons/9/93/Papaver_rhoeas_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-101.jpg",
			"__v": 0,
			"createdAt": "2025-01-06T20:25:20.339Z",
			"updatedAt": "2025-01-07T12:24:16.498Z",
			"ecology": "677c2ac4c00eef96d2680128"
		},
		"pollinators": [
			{
				"_id": "677d166ce3acaa1c90125e46",
				"species": "Apis mellifera",
				"commonName": "Abeja melifera",
				"category": "insecto",
				"imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/70/Apis_mellifera_-_Brassica_napus_-_Valingu.jpg",
				"createdAt": "2025-01-07T11:56:28.931Z",
				"updatedAt": "2025-01-07T12:14:30.545Z",
				"__v": 0
			}
		],
		"associatedSpecies": "Manzanilla, Diente de León, Margarita Silvestre",
		"invasiveStatus": false,
		"createdAt": "2025-01-06T19:11:00.098Z",
		"updatedAt": "2025-01-07T12:28:40.526Z",
		"__v": 0
	}
    ]
    ```

### 2. **Crear una nueva ecologia**
- **URL**: "/api/v1/ecologies"
- **Método**: "POST"
- **Descripción**: Crea una nueva ecologia en la base de datos.
- **Cuerpo de la solicitud**:
    ```json
    {
	"plantId": "677bd0f8b21379661cda1d57",
  "associatedSpecies": "Manzanilla, Diente de León, Margarita Silvestre",
  "invasiveStatus": "false"
    }
    ```
- **Respuesta de ejemplo**:
    ```json
    {
	"plantId": "677bd0f8b21379661cda1d57",
	"pollinators": [],
	"associatedSpecies": "Manzanilla, Diente de León, Margarita Silvestre",
	"invasiveStatus": false,
	"_id": "677c2acdfc97c2b73a09be7b",
	"createdAt": "2025-01-06T19:11:09.895Z",
	"updatedAt": "2025-01-06T19:11:09.895Z",
	"__v": 0
    }
    ```

### 3. **Actualizar una ecologia**
- **URL**: "/api/v1/ecologies/:id"
- **Método**: "PUT"
- **Descripción**: Actualiza una ecologia existente.
- **Parametros**:
    - `id`(requerido): El identificador único de la ecologia.  
- **Cuerpo de la solicitud**:
    ```json
    {
	"pollinators": "677d166ce3acaa1c90125e46",
	"plantId": "677c3c30385bb2f8c6bf4571"
    }
    ```
- **Respuesta de ejemplo**:
    ```json
    {
	"_id": "677c2ac4c00eef96d2680128",
	"plantId": "677c3c30385bb2f8c6bf4571",
	"pollinators": [
		"677d166ce3acaa1c90125e46"
	],
	"associatedSpecies": "Manzanilla, Diente de León, Margarita Silvestre",
	"invasiveStatus": false,
	"createdAt": "2025-01-06T19:11:00.098Z",
	"updatedAt": "2025-01-07T12:28:40.526Z",
	"__v": 0
    }
    ```
    
### 4. **Eliminar una ecologia**
- **URL**: "/api/v1/ecologies/:id"
- **Método**: "DELETE"
- **Descripción**: Elimina una ecologia de la base de datos.
- **Parametros**:
    - `id`(requerido): El identificador único de la ecologia.  
- **Respuesta de ejemplo**:
    ```json
   {
	"_id": "677c2aac8629d599e0f4ab07",
	"plantId": "677bd0f8b21379661cda1d57",
	"pollinators": [],
	"associatedSpecies": "Manzanilla, Diente de León, Margarita Silvestre",
	"invasiveStatus": false,
	"createdAt": "2025-01-06T19:10:36.498Z",
	"updatedAt": "2025-01-06T19:10:36.498Z",
	"__v": 0
   }
    ```

## **++Colección Polinizadores++**

### 1. **Obtener todas los polinizadores**
- **URL**: "/api/v1/pollinators"
- **Método**: "GET"
- **Descripción**: Obtiene la lista de todos los polinizadores en la base de datos.
- **Respuesta de ejemplo**:
    ```json
    [
    {
		"_id": "677d166ce3acaa1c90125e46",
		"species": "Apis mellifera",
		"commonName": "Abeja melifera",
		"category": "insecto",
		"imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/70/Apis_mellifera_-_Brassica_napus_-_Valingu.jpg",
		"createdAt": "2025-01-07T11:56:28.931Z",
		"updatedAt": "2025-01-07T12:14:30.545Z",
		"__v": 0
	},
	{
		"_id": "677d1bdb994cb0c56f8ffc9f",
		"species": "Andrena florea",
		"commonName": "Abeja minera",
		"category": "insecto",
		"imgUrl": "https://live.staticflickr.com/65535/49998943493_8d51229ce0_b.jpg",
		"createdAt": "2025-01-07T12:19:39.899Z",
		"updatedAt": "2025-01-07T12:19:39.899Z",
		"__v": 0
	},
	{
		"_id": "677d1c8b994cb0c56f8ffca2",
		"species": "Episyrphus balteatus",
		"commonName": "Mosca cernidora",
		"category": "insecto",
		"imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/Hoverfly_December_2007-8.jpg",
		"createdAt": "2025-01-07T12:22:35.707Z",
		"updatedAt": "2025-01-07T12:22:35.707Z",
		"__v": 0
	}
    ]
    ```

### 2. **Crear una nuevo polinizador**
- **URL**: "/api/v1/pollinators"
- **Método**: "POST"
- **Descripción**: Crea un nuevo polinizador en la base de datos.
- **Cuerpo de la solicitud**:
    ```json
    {
	"species": "Episyrphus balteatus",
  "commonName": "Mosca cernidora",
  "category": "insecto",
  "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/Hoverfly_December_2007-8.jpg"
    }
    ```
- **Respuesta de ejemplo**:
    ```json
   {
	"species": "Episyrphus balteatus",
	"commonName": "Mosca cernidora",
	"category": "insecto",
	"imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/Hoverfly_December_2007-8.jpg",
	"_id": "6783b4528a624a6edc035ab1",
	"createdAt": "2025-01-12T12:23:46.428Z",
	"updatedAt": "2025-01-12T12:23:46.428Z",
	"__v": 0
   }
    ```

### 3. **Actualiza un polinizador**
- **URL**: "/api/v1/pollinators/:id"
- **Método**: "PUT"
- **Descripción**: Actualiza un polinizador existente.
- **Parametros**:
    - `id`(requerido): El identificador único del polinizador.  
- **Cuerpo de la solicitud**:
    ```json
   {
	"category": "insecto"
   }
    ```
- **Respuesta de ejemplo**:
    ```json
    {
	"_id": "677d166ce3acaa1c90125e46",
	"species": "Apis mellifera",
	"commonName": "Abeja melifera",
	"category": "insecto",
	"imgUrl": "https://upload.wikimedia.org/wikipedia/commons/7/70/Apis_mellifera_-_Brassica_napus_-_Valingu.jpg",
	"createdAt": "2025-01-07T11:56:28.931Z",
	"updatedAt": "2025-01-07T12:14:30.545Z",
	"__v": 0
    }
    ```
    
### 4. **Eliminar un polinizador**
- **URL**: "/api/v1/pollinators/:id"
- **Método**: "DELETE"
- **Descripción**: Elimina un polinizador de la base de datos.
- **Parametros**:
    - `id`(requerido): El identificador único del polinizador.  
- **Respuesta de ejemplo**:
    ```json
    {
	"_id": "6783b40eddfa04bbe1e08dc7",
	"species": "Episyrphus balteatus",
	"commonName": "Mosca cernidora",
	"category": "insecto",
	"imgUrl": "https://upload.wikimedia.org/wikipedia/commons/1/15/Hoverfly_December_2007-8.jpg",
	"createdAt": "2025-01-12T12:22:38.317Z",
	"updatedAt": "2025-01-12T12:22:38.317Z",
	"__v": 0
    }
    ```
## Installation
Sigue estos pasos para instalar y ejecutar la API en tu entorno local:
### 1. Clonar el repositorio
Clona este repositorio en tu maquina local usando el siguiente comando en la consola:
```sh
git clone https://github.com/Iskoh10/proyecto-6-API-REST.git
```

### 2. Acceder al directorio del proyecto
Navega al directorio del proyecto clonado:
```sh
cd proyecto-6-API-REST.git
```

### 3. Instalar las dependencias
Instala las dependencias necesarias:
```sh
npm install
```

### 4. Sembrar datos iniciales (opcional)
Incluye un script de seeds para incluir datos iniciales:
```sh
npm run seed
```

### 5. Iniciar el servidor
Ejecuta el servidor con el comando:
```sh
npm run dev
```
El servidor estará disponible en: http://localhost:3000

### 6. Probar la API
Puedes usar la herramienta Insomnia para probar los endpoints de la API.

## License

**Free Software, Hell Yeah!**