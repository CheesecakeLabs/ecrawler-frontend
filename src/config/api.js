const BACKEND_DOMAIN = process.env.BACKEND_DOMAIN || 'localhost:8000'

const Config = {
  API_URL: `http://${BACKEND_DOMAIN}/`,
}

export default Config
