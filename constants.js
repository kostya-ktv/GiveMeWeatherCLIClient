import { homedir } from 'os'
import { join } from 'path'


export const API_URL = `https://api.openweathermap.org/data/2.5/weather`
export const FILE_PATH = join(homedir(), '../weather-data.json')
export const TOKEN_DICTIONARY = {
   token: 'token',
   city: 'city'
}