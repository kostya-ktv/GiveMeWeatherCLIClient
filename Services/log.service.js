import Chalk from 'chalk';

export const printError = (error) => {
   console.log(Chalk.bgRed('ERROR ' + error))
}
export const printSuccess = (success) => {
   console.log(Chalk.bgGreen('SUCCESS ' + success))
}

export const printHelp = () => {
   console.log(
`${Chalk.bgCyan('HELP')}
Without parameters - weather output
-c [CITY] set a city
-t [API_KEY] set a API_KEY
-h print HELP 
`)
}

export const printWeather = (response) => {
      console.log(
`  ${Chalk.bgYellow('WEATHER')}
${Chalk.bgGreen('City')} : ${response.name}
${Chalk.bgBlue('Temp')} : ${Math.floor(response.main.temp)} Feels like: ${Math.floor(response.main.feels_like)}
${Chalk.bgCyan('Humidity')} : ${response.main.humidity}%
${Chalk.bgRed('Wind')} : ${response.wind.speed} m/s
`)
}