#!/usr/bin/env node
import { getForecast} from './API/api.js'
import { parsArgs } from './Services/argsParser.js'
import { printHelp } from './Services/log.service.js'
import { saveCity, saveToken } from './Services/storage.service.js'


const initCLI = () => {
   const args =  parsArgs(process.argv)
   if(args.h) {
      return printHelp()
   }
   if(args.c) {
      return saveCity(args.c)
   }
   if(args.t) {
      return saveToken(args.t)
   }
   return getForecast()
}

initCLI()