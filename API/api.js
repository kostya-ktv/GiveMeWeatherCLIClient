import axios from 'axios';
import { API_URL, TOKEN_DICTIONARY } from '../constants.js'
import { printError, printWeather } from '../Services/log.service.js';
import { getKeyValue } from '../Services/storage.service.js'


export const getWeather = async(city) => {

   const token = process.env.TOKEN ?? await getKeyValue(TOKEN_DICTIONARY.token)

   if(!token) {
      throw new Error('API_KEY is underfined, to set key - use -t [API_KEY]')
   }
   
   const {data} = await axios.get(API_URL, {
      params: {
         q: city,
         appid: token,
         lang: 'en',
         units: 'metric'
      }
   })
   return data

}

export const getForecast = async() => {
   try {
      const weather =  await getWeather(process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city))
  
      printWeather(weather)
   } catch (error) {
      if(error?.response?.status == 404) {
         printError('Invalid city name')
      }
      else if(error?.response?.status == 401) {
         printError('Invalid token')
      } else {
         printError(error.message)
      }
   }
  
}
