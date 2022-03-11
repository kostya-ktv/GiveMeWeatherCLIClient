import { FILE_PATH, TOKEN_DICTIONARY } from '../constants.js'
import { promises } from 'fs'
import { printError, printSuccess } from './log.service.js'


//PARSE KEY
export const saveKeyValue = async(key, value) => {
   let data = {}

   if(await isExist(FILE_PATH)) {
      const file = await promises.readFile(FILE_PATH)
      data = JSON.parse(file)
   }

   data[key] = value
   await promises.writeFile(FILE_PATH, JSON.stringify(data))
}

//GET KEY FROM STORAGE
export const getKeyValue = async(key) => {

   if(await isExist(FILE_PATH)) {
      const file = await promises.readFile(FILE_PATH)
      let data = JSON.parse(file)
      return data[key]
   }
   return undefined
}

//CHECK FILE EXISTS
export const isExist = async(path) => {
     try {
         await promises.stat(path)
         return true
     } catch (error) {
        return false
     }
}

//SAVE TOKEN
export const saveToken = async(token) => {
   if(!token.length) {
      printError('API Token not recived')
      return
   }
   try {
      await saveKeyValue(TOKEN_DICTIONARY.token, token)
      printSuccess('API Token saved')
   } catch (error) {
      printError(error.message)
   }
   
}
//SAVE CITY
export const saveCity = async(city) => {
   if(!city.length) {
      printError('City name not recived')
      return
   }
   try {
      await saveKeyValue(TOKEN_DICTIONARY.city, city)
      printSuccess('City saved')
   } catch (error) {
      printError(error.message)
   }
   
}
