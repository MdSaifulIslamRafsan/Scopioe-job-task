## Installation Steps:- 

- Clone the Repository:

```sh
git clone https://github.com/MdSaifulIslamRafsan/CareerLinkup-client-side.git
cd CareerLinkup-client-side
```

- Install Dependencies:

```sh
npm install
```

- Set Up Environment Variables:
Create a .env file in the root directory and add the following:

```sh
# Firebase Configuration
VITE_APIKEY=your_firebase_api_key
VITE_AUTHDOMAIN=your_firebase_auth_domain
VITE_PROJECTID=your_firebase_project_id
VITE_STORAGEBUCKET=your_firebase_storage_bucket
VITE_MESSAGINGSENDERID=your_firebase_messaging_sender_id
VITE_APPID=your_firebase_app_id

# Base URL of the Application
VITE_BASEURL=your_base_url

```
- Run the Application:

```sh
npm run dev
```