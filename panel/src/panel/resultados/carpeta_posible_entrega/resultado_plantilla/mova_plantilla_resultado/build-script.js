const replace = require('replace-in-file');
const moment = require('moment');

// Escribe las variables donde sea necesario
function writeFileConfig(oData) {
  const options = {
    files: [
      'src/app/config-default.json',
    ],
    from: [
      /"appVersionFramework": "(.*)"/g,
      /"appVersionCordovaPluginLib": "(.*)"/g,
      /"compilationDate": "(.*)"/g,
      /"isDebug": (.*),/g,
    ],
    to: [
      `"appVersionFramework": "${ oData.appVersionFramework }"`,
      `"appVersionCordovaPluginLib": "${ oData.appVersionCordovaPluginLib }"`,
      `"compilationDate": "${ oData.compilationDate }"`,
      `"isDebug": ${ oData.isDebug },`,
    ],
    allowEmptyPaths: false,
  };

  try {
    const changedFiles = replace.sync(options);
    if (changedFiles.length === 0) {
      throw new Error( `Comprueba que  '${ options.files }' tiene las propiedades necesarias`);
    }
    const compilationDateFormatted = moment().format('D/MM/YYYY, hh:mm:ss');
    console.log(`***Fecha compilación: ${ compilationDateFormatted}`);
    console.log(`***Is debug: ${ oData.isDebug}`);
  } catch (error) {
    console.error('***Ha ocurrido un error: ', error);
    throw error;
  }
}

// Obtenemos las versiones de las librerias de mova y cordova-plugin-lib

let movaVersion = '';
let cordovaPluginLibVersion = '';
try {
  movaVersion = require('./node_modules/@mova/components/package.json').version;
  cordovaPluginLibVersion = require('./node_modules/@lib/cordova-plugin-lib/package.json').version;
} catch (e) {
  console.log('***Comprueba que tienes instaladas las dependencias (npm install)');
  return;
}
// Obtenemos fecha de compilacion
const timeStamp = moment(new Date());
// Obtenemos si es debug/release
const isDebug = (process.argv[2] === 'debug') ? true : false;

const oData = {
  isDebug,
  compilationDate: timeStamp,
  appVersionFramework: movaVersion,
  appVersionCordovaPluginLib: cordovaPluginLibVersion,
};

// Lanzamos la escritura de las variables
writeFileConfig(oData);
