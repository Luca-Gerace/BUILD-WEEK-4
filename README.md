### TODO

- FRONTEND
- get utenti
- login con email e pass
- login con google (UI)
- registrazione
- get esperienze
- post esperienze
- get avatar
- patch avatar

- BACKEND
- multer/cloudinary
- get/patch - avatar (solo utenti con login/registrazione)

extra
- get qualifiche
- post qualifiche



# POPOLARE IL DB CON POSTMAN

ENDPOINT - POST METHOD
``
http://localhost:3001/api/users
``

PAYLOAD
``
{
    "name": "Alice",
    "surname": "Bianchi",
    "email": "alice.foss@example.com",
    "password": "123",
    "currentPosition": "employed",
    "avatar": "https://img.freepik.com/free-photo/cheerful-dark-skinned-woman-smiling-broadly-rejoicing-her-victory-competition-among-young-writers-standing-isolated-against-grey-wall-people-success-youth-happiness-concept_273609-1246.jpg",
    "qualifications": [
        {
            "name": "Bachelor in Computer Science",
            "institute": "University of Milan",
            "_id": "66a3a29df9600b2a5511b5ab",
            "createdAt": "2024-07-26T13:20:29.981Z",
            "updatedAt": "2024-07-26T13:20:29.981Z"
        },
        {
            "name": "Master in Artificial Intelligence",
            "institute": "University of Turin",
            "_id": "66a3a29df9600b2a5511b5ac",
            "createdAt": "2024-07-26T13:20:29.982Z",
            "updatedAt": "2024-07-26T13:20:29.982Z"
        }
    ],
    "experiences": [
        {
            "company": "Tech Innovators",
            "role": "Software Intern",
            "description": "Worked on developing web applications.",
            "logo": "https://cdn.dribbble.com/users/9853924/screenshots/19234500/media/2de3ef20f56373dc1baef595866aff42.jpg?resize=400x0",
            "startDate": "2022-05-01T00:00:00.000Z",
            "_id": "66a3a29df9600b2a5511b5ad"
        },
        {
            "company": "AI Solutions",
            "role": "Junior AI Developer",
            "description": "Assisted in developing AI models.",
            "logo": "https://i.pinimg.com/originals/db/a1/a7/dba1a72669895c3b4420b762433a5461.png",
            "startDate": "2023-01-10T00:00:00.000Z",
            "endDate": "2023-06-15T00:00:00.000Z",
            "_id": "66a3a29df9600b2a5511b5ae"
        }
    ],
}
``