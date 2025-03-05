/* eslint-disable max-lines */
import {Component, OnInit} from '@angular/core';
import {AppService, LocalStorageService, SqliteService} from '@mova/components/core';

@Component({
  selector: 'app-doc-sqlite-service',
  templateUrl: './doc-sqlite-service.html',
  styleUrls: ['./doc-sqlite-service.scss'],
})
export class DocSqliteService implements OnInit {
  // Timer para mostrar los tiempos de ejecución
  beginTimer;
  // Lineas a insertar para comparar
  lines = 1000;
  // Resultados de las queries
  ejemploDeUsoMenores:JSON;
  ejemploDeUsoMayores:JSON;
  ejemploDeUsoTables:JSON;
  ejemploDeUsoPersonas:JSON;
  sandboxQuery = 'SELECT * FROM personas WHERE nombre like \'Antonio\'';
  sandboxQueryResult:JSON;
  ExecQueryResult: string
  ExecArrayQueryResult: string;
  ExecAsyncQueryResult: string;
  ExecArrayQueryAsyncResult: string;
  ExistsDBQueryResult;
  useDBQueryResult;

  // Modelo del select
  SelectedDbMethod:SqliteService.dbSaveMethod;

  // Metodo de guardado
  dbMethod:SqliteService.dbSaveMethod = SqliteService.dbSaveMethod.indexedDB;

  // LocalStorage variable para guardar el metodo de guardado de la db
  methodLocalStorage = 'dbSaveMethodExample';

  // Variable para mostrar las db
  databases;
  // Nombres de db de ejemplo
  dbExample1 = 'Example1';
  dbExample2 = 'Example2';
  // Objeto de control del apartado de info
  metodoDeUsoData = {
    db: false,
    tablasBD1: false,
    tablasBD2: false,
    resultado: '',
  }

  readonly MSG_INSERT_OK = 'Datos insertados';
  readonly MSG_INSERT_KO = 'Error al insertar datos';
  readonly MSG_SQL_KO = 'Error en la sentencia';

  readonly INSERT_EXAMPLE = 'INSERT INTO ciudades VALUES (\'Paris\',2249975),(\'Berlin\',3517424),(\'Madrid\',3041579)';
  // -------------------------------------------------------------
  metodoDeUsoExampleHTML = `
  <mv-button
    class="btnExamples"
    color="primary"
    appearance="raised"
    (clickEvent)="metodoDeUso()">
    Crear bases de datos
  </mv-button>

  <mv-button
  class="btnExamples"
    *ngIf="metodoDeUsoData.db"
    color="primary"
    appearance="raised"
    (clickEvent)="metodoDeUsoAddDataDbExample1()">
    Crear tablas en bd1
  </mv-button>

  <mv-button
  class="btnExamples"
  *ngIf="metodoDeUsoData.db"
    color="primary"
    appearance="raised"
    (clickEvent)="metodoDeUsoAddDataDbExample2()">
    Crear bases de datos
  </mv-button>

  <mv-button
  class="btnExamples"
    *ngIf="metodoDeUsoData.tablasBD1"
    color="primary"
    appearance="raised"
    (clickEvent)="metodoDeUsoGetDataDbExample1()">
    Ver datos bd1
  </mv-button>

  <mv-button
  class="btnExamples"
  *ngIf="metodoDeUsoData.tablasBD2"
    color="primary"
    appearance="raised"
    (clickEvent)="metodoDeUsoGetDataDbExample2()">
    Ver datos bd2
  </mv-button>


  <pre class="jsonExample"> {{metodoDeUsoData.resultado | json}}</pre>

  `;
  metodoDeUsoExampleTS = `
  
  dbExample1 = "Example1";
  dbExample2 = "Example2";
  metodoDeUsoData = {
    db:false,
    tablasBD1:false,
    tablasBD2:false,
    resultado :""
  }
  /**
   * Metodo de uso
   */
  metodoDeUso() {
    this.printMsg("metodoDeUso");
    // Creamos las bases de datos que queramos usar
    this.sqliteService.CreateDBS([this.dbExample1, this.dbExample2], this.dbMethod)
    .then(function(result) {
      this.metodoDeUsoData.db = true;
      this.metodoDeUsoData.resultado = "Bases de datos creadas";
    }.bind(this))
    .catch(this.printError) ;
  }
  /**
   * Añade datos a la base de datos 1
   */
  metodoDeUsoAddDataDbExample1(result) {
    this.printMsg("metodoDeUsoAddData");
    // Una vez creadas las Bases de datos hacemos use para trabajar con ellas
    this.sqliteService.UseDB(this.dbExample1).then(function(result) {
      this.metodoDeUsoData.resultado = "Apuntando a "+ this.dbExample1;
      this.sqliteService.ExecAsync(
        \`DROP TABLE IF EXISTS ciudadesEjemplo;
        DROP TABLE IF EXISTS personasEjemplo;
        CREATE TABLE IF NOT EXISTS ciudadesEjemplo (city string, pop number);
        CREATE TABLE IF NOT EXISTS personasEjemplo (id number, nombre string, apellido string);
        INSERT INTO ciudadesEjemplo VALUES ('Paris',2249975),('Berlin',3517424),('Madrid',3041579);
        INSERT INTO ciudadesEjemplo VALUES ('Tokio',9273000),('Nueva York.',8399000),('Los Ángeles',3990000);
        INSERT INTO ciudadesEjemplo VALUES ('Seúl',9776000),('Londres',8982000),('Osaka',2691000);
        INSERT INTO personasEjemplo VALUES ( 1, 'Antonio','Rodriguez', ''),( 2, 'Marta','Cervantes', ''),(3,'David','Arrabal'),(4,'Julia','Calle')\`
      )
      .then(function(result){
        this.metodoDeUsoData.resultado = "Datos insertados en " + this.dbExample1;
        this.printMsg("Datos insertados");
        this.metodoDeUsoData.tablasBD1 = true;
      }.bind(this))
      .catch(function(error){
        console.error("Error al insertar datos");
        console.error(error);
      })
    }.bind(this));
    this.printMsg(result);
  }

  /**
   * Añade datos a la base de datos 2
   */
   metodoDeUsoAddDataDbExample2(result) {
    this.printMsg("metodoDeUsoAddData");
    // Una vez creadas las Bases de datos hacemos use para trabajar con ellas
    this.sqliteService.UseDB(this.dbExample2).then(function(result) {
      this.metodoDeUsoData.resultado = "Apuntando a "+ this.dbExample2;
      this.sqliteService.ExecAsync(
        \`DROP TABLE IF EXISTS grupos;
        CREATE TABLE IF NOT EXISTS grupos (grupo string, id number);
        INSERT INTO grupos VALUES ('GP1',1),('GP2',2),('GP3',3);
        INSERT INTO grupos VALUES ('GP4',4),('GP5',5),('GP6',6);\`
      )
      .then(function(result){
        this.metodoDeUsoData.resultado = "Datos insertados en " + this.dbExample2;
        this.printMsg("Datos insertados");
        this.metodoDeUsoData.tablasBD2 = true;
      }.bind(this))
      .catch(function(error){
        console.error("Error al insertar datos");
        console.error(error);
      })
    }.bind(this));
    this.printMsg(result);
  }

/**
 * Mostrar datos de la tabla de ejemplo 1
 */
  metodoDeUsoGetDataDbExample1() {

    this.sqliteService.UseDB(this.dbExample1).then(function(result) {
      this.sqliteService.ExecAsync(
        \`select * from ciudadesEjemplo;
        select * from personasEjemplo \`
      )
      .then(function(result){
        this.metodoDeUsoData.resultado = result;
      }.bind(this))
    }.bind(this));
  }
/**
 * Mostrar datos de la tabla de ejemplo 2
 */
  metodoDeUsoGetDataDbExample2() {
    this.sqliteService.UseDB(this.dbExample2).then(function(result) {
      this.sqliteService.ExecAsync(
        \`select * from grupos \`
      )
      .then(function(result){
        this.metodoDeUsoData.resultado = result;
      }.bind(this))
    }.bind(this));
  }
  `;
  ejemploUsoExampleHTML = `
  <p><strong>Ejemplo:</strong></p>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="ejemploUso()">
    Carga de datos
  </mv-button>
  
  <p><strong>SHOW TABLES FROM dbTest:</strong></p>
  <pre class="jsonExample"> {{ejemploDeUsoTables | json}}</pre>
  <p><strong>SELECT * FROM cities WHERE pop < 3500000 ORDER BY pop DESC:</strong></p>
  <pre class="jsonExample"> {{ejemploDeUsoMenores | json}}</pre>
  <p><strong>SELECT * FROM cities WHERE pop > 3500000 ORDER BY pop DESC:</strong></p>
  <pre class="jsonExample"> {{ejemploDeUsoMayores | json}}</pre>
  `;
  ejemploUsoExampleTS = `
  ejemploDeUsoMenores:JSON;
  ejemploDeUsoMayores:JSON;
  ejemploDeUsoTables:JSON;
  ...
  constructor(
    private localStorageService: LocalStorageService,
    private sqliteService: SqliteService
  ) { }

  ...
  /**
   * Ejemplo de uso de sqliteService
   */
  loadData() {
    this.printMsg("Creando base de datos en "+ this.dbMethod);
    this.sqliteService.CreateDB("dbTest", this.dbMethod)
    .then(function(result) {
      this.printMsg(result);
      this.sqliteService.ExecAsync(
        \`DROP TABLE IF EXISTS ciudades;
        DROP TABLE IF EXISTS personas;
        CREATE TABLE IF NOT EXISTS ciudades (city string, pop number);
        CREATE TABLE IF NOT EXISTS personas (id number, nombre string, apellido string);
        INSERT INTO ciudades VALUES ('Paris',2249975),('Berlin',3517424),('Madrid',3041579);
        INSERT INTO ciudades VALUES ('Tokio',9273000),('Nueva York.',8399000),('Los Ángeles',3990000);
        INSERT INTO ciudades VALUES ('Seúl',9776000),('Londres',8982000),('Osaka',2691000);
        INSERT INTO personas VALUES ( 1, 'Antonio','Rodriguez', ''),( 2, 'Marta','Cervantes', ''),(3,'David','Arrabal'),(4,'Julia','Calle')\`
      )
      .then(function(){
        this.printMsg("Datos insertados");
      })
      .catch(function(error){
        console.error("Error al insertar datos");
        console.error(error);
      })
    }.bind(this))
    .catch(function(error){
      console.error("Error al crear bd");
      console.error(error);
    });
  }

  TypeChanged(selected) {
    this.sqliteService.ExecAsync(
      \`DROP TABLE IF EXISTS ciudades;
      DROP TABLE IF EXISTS personas;
      DETACH DATABASE dbTest;
      DROP DATABASE IF EXISTS dbTest\`)
      .then(function(resultado) {

        switch (selected) {
          case SqliteService.dbSaveMethod.localStorage:
            this.dbMethod = SqliteService.dbSaveMethod.localStorage;
            break;
          case SqliteService.dbSaveMethod.indexedDB:
            this.dbMethod = SqliteService.dbSaveMethod.indexedDB;
            break;
          default:
            this.dbMethod = SqliteService.dbSaveMethod.localStorage;
            break;
        }
        this.localStorageService.setItem(this.methodLocalStorage, this.dbMethod);
        this.loadData();
      }.bind(this))
  }
  ejemploDeUso1() {
    this.printMsg("ejemploDeUso1");
    this.ejemploDeUsoMenores = this.sqliteService.Exec("SELECT * FROM ciudades WHERE pop < ? ORDER BY pop DESC", [3500000]);
    this.printMsg(this.ejemploDeUsoMenores);
  }
  ejemploDeUso2() {
    this.printMsg("ejemploDeUso2");
    this.ejemploDeUsoMayores = this.sqliteService.Exec("SELECT * FROM ciudades WHERE pop > ? ORDER BY pop DESC", [3500000]);
    this.printMsg(this.ejemploDeUsoMayores);
  }
  ejemploDeUso3() {
    this.printMsg("ejemploDeUso3");
    this.ejemploDeUsoTables = this.sqliteService.Exec('SHOW TABLES FROM dbTest');
    this.printMsg(this.ejemploDeUsoTables);
  }
  ejemploDeUso4() {
    this.printMsg("ejemploDeUso4");
    
    this.sqliteService.ExecAsync('SELECT * FROM personas')
    .then(function(result) {

      this.ejemploDeUsoPersonas = result;
      this.printMsg(this.ejemploDeUsoPersonas);
    }.bind(this))
    .catch(function(error) {
      console.error("Error en la sentencia");
    });
  }
  `;
  sandboxHTML = `
  <p><strong>Ejemplo:</strong></p>
  <mv-textarea 
    validateMaxlength=50
    showMaxlength=true
    adapt=true
    [(ngModel)]="sandboxQuery">
  </mv-textarea>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="sandBoxExec()">
    Ejecutar sql
  </mv-button>
  <p><strong>Result:</strong></p>
  <pre class="jsonExample"> {{sandboxQueryResult | json}}</pre>
  `;
  sandboxTS = `
  
  sandboxQuery:string;
  sandboxQueryResult:JSON;
  ...
  constructor(
    private localStorageService: LocalStorageService,
    private sqliteService: SqliteService
  ) { }

  ...

  sandBoxExec() {
    this.printMsg("Sandbox query exect");
    this.sqliteService.ExecAsync(this.sandboxQuery)
    .then(function(result) {

      this.sandboxQueryResult = result;
    }.bind(this))
    .catch(function(error) {
      console.error("Error en la sentencia");
    });
  }
  `;

  ExecHTML = `
  <p><strong>Ejemplo insertando {{lines}} lineas en modo normal y async:</strong></p>
      
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="ExecExample()">
    Ejecutar Exec
  </mv-button>
  <p><strong>Result:</strong></p>
  <pre class="jsonExample"> {{ExecQueryResult | json}}</pre>
  <hr/>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="ExecExampleAsync()">
    Ejecutar Exec Async
  </mv-button>
  <p><strong>Result:</strong></p>
  <pre class="jsonExample"> {{ExecAsyncQueryResult | json}}</pre>
  `;
  ExecTS = `
  // Timer para mostrar los tiempos de ejecución
  beginTimer;
  ExecQueryResult: string
  ExecArrayQueryResult: string;
  ...
  constructor(
    private localStorageService: LocalStorageService,
    private sqliteService: SqliteService
  ) { }

  ...
  /**
   * Ejemplo de queries sincrono
   */
  ExecExample() {
    this.printMsg("Ejemplo exec");
    this.printMsg("Insertando "+this.lines+" lineas");
    console.time("Insertando");
    try{
      console.timeEnd("Insertando");
      this.starTimer();

      for (let i = 0; i < this.lines; i++) {
        this.sqliteService.Exec("INSERT INTO ciudades VALUES ('Paris',2249975),('Berlin',3517424),('Madrid',3041579)");
      }
      this.ExecQueryResult ="Insertadas correctamente en " + this.stopTimer();
      this.deleteCiudades();

    }catch(error) {
      this.ExecQueryResult = "Hubo un error";
    }
  }
  
  /**
   * Ejemplo de quere asincrono
   */
  ExecExampleAsync() {
    this.printMsg("Ejemplo exec async");
    let sql = "";
    
    this.printMsg("Insertando "+this.lines+" lineas");
    console.time("Insertando");
    this.starTimer();
    for (let i = 0; i < this.lines; i++) {
      sql += "INSERT INTO ciudades VALUES ('Paris',2249975),('Berlin',3517424),('Madrid',3041579);";
    }
    this.sqliteService.ExecAsync(sql)
    
    .then(function(result) {
      console.timeEnd("Insertando");
      this.ExecAsyncQueryResult ="Insertadas correctamente en " + this.stopTimer();
      this.deleteCiudades();
    }.bind(this))
    
    .catch(function(reject) {
      console.error(reject);
      this.ExecAsyncQueryResult = "Hubo un error";
    });
    
  }
  
  /**
   * Borra las ciudades
   */
  deleteCiudades() {
    console.time("Borrando");
    this.sqliteService.Exec("DELETE FROM ciudades");
    console.timeEnd("Borrando");
  }
  
  /**
   * Inicializador del timer
   */
  starTimer() {
    this.beginTimer=Date.now();
  }
  
  /**
   * Para el timer y devuelve los segundos que ha tardado en un string
   * @returns 
   */
  stopTimer():string {
    return ( Date.now()-this.beginTimer)/1000+"secs"
  }
  `;

  ExecArrayHTML = `
  <p><strong>Ejemplo insertando {{lines}} lineas en modo normal y async:</strong></p>
  
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="ExecArrayExample()">
    Ejecutar Exec Array
  </mv-button>
  <p><strong>Result:</strong></p>
  <pre class="jsonExample"> {{ExecArrayQueryResult | json}}</pre>
  <hr/>

  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="ExecArrayExampleAsync()">
    Ejecutar Exec Array Async
  </mv-button>
  <p><strong>Result:</strong></p>
  <pre class="jsonExample"> {{ExecArrayQueryAsyncResult | json}}</pre>
  `;
  ExecArrayTS = `
  // Timer para mostrar los tiempos de ejecución
  beginTimer;
  ExecAsyncQueryResult: string
  ExecArrayQueryAsyncResult: string;
  ...
  constructor(
    private localStorageService: LocalStorageService,
    private sqliteService: SqliteService
  ) { }

  ...
  /**
   * Ejemplo de Array sincrono
   */
  ExecArrayExample() {
    this.printMsg("Ejemplo execArray");
    
    this.printMsg("Insertando "+this.lines+" lineas");
    console.time("Insertando");
    let insertArray = [];
    try {
      this.starTimer();
      for (let i = 0; i < this.lines; i++) {
        insertArray.push("INSERT INTO ciudades VALUES ('Paris',2249975),('Berlin',3517424),('Madrid',3041579)");
      }
      
      this.sqliteService.ExecArray(insertArray);
      console.timeEnd("Insertando");
      this.ExecArrayQueryResult ="Insertadas correctamente en " + this.stopTimer();
      this.deleteCiudades();
    }catch(error) {
      this.ExecArrayQueryResult = "Hubo un error";

    }
  }
  
  /**
   * Ejemplo de Array de queries asincrono
   */
  ExecArrayExampleAsync() {
    this.printMsg("Ejemplo execArray async");
    this.printMsg("Insertando "+this.lines+" lineas");
    console.time("Insertando");

    this.starTimer();
    let insertArray = [];

    for (let i = 0; i < this.lines; i++) {
      insertArray.push("INSERT INTO ciudades VALUES ('Paris',2249975),('Berlin',3517424),('Madrid',3041579)");
    }

    this.sqliteService.ExecArrayAsync(insertArray)
    
    .then(function(result) {
      this.ExecArrayQueryAsyncResult = "Insertadas correctamente en " + this.stopTimer() ;
      console.timeEnd("Insertando");
      this.deleteCiudades();
    }.bind(this))
    
    .catch(function(reject) {
      this.ExecArrayQueryAsyncResult = "Hubo un error";
      console.error(reject);
    });
  }
  
  /**
   * Borra las ciudades
   */
  deleteCiudades() {
    console.time("Borrando");
    this.sqliteService.Exec("DELETE FROM ciudades");
    console.timeEnd("Borrando");
  }
  
  /**
   * Inicializador del timer
   */
  starTimer() {
    this.beginTimer=Date.now();
  }
  
  /**
   * Para el timer y devuelve los segundos que ha tardado en un string
   * @returns 
   */
  stopTimer():string {
    return ( Date.now()-this.beginTimer)/1000+"secs"
  }
  `;

  CreateBDTS = `
  
  saveTypes =[
      {id: SqliteService.dbSaveMethod.localStorage, text: 'LocalStorage'},
      {id: SqliteService.dbSaveMethod.indexedDB, text: 'indexedDB'}
  ];
  ...
  constructor(
    private localStorageService: LocalStorageService,
    private sqliteService: SqliteService
  ) { }

  ...
  
  /**
   * Ejemplo de uso de sqliteService
   */
  loadData() {
    this.printMsg("Creando base de datos en "+ this.dbMethod);
    this.sqliteService.CreateDB("dbTest", this.dbMethod)
    .then(function(result) {
      this.printMsg(result);
      this.sqliteService.ExecAsync(
        \`DROP TABLE IF EXISTS ciudades;
        DROP TABLE IF EXISTS personas;
        CREATE TABLE IF NOT EXISTS ciudades (city string, pop number);
        CREATE TABLE IF NOT EXISTS personas (id number, nombre string, apellido string);
        INSERT INTO ciudades VALUES ('Paris',2249975),('Berlin',3517424),('Madrid',3041579);
        INSERT INTO ciudades VALUES ('Tokio',9273000),('Nueva York.',8399000),('Los Ángeles',3990000);
        INSERT INTO ciudades VALUES ('Seúl',9776000),('Londres',8982000),('Osaka',2691000);
        INSERT INTO personas VALUES ( 1, 'Antonio','Rodriguez', ''),( 2, 'Marta','Cervantes', ''),(3,'David','Arrabal'),(4,'Julia','Calle')\`
      )
      .then(function(){
        this.printMsg("Datos insertados");
      })
      .catch(function(error){
        console.error("Error al insertar datos");
        console.error(error);
      })
    }.bind(this))
    .catch(function(error){
      console.error("Error al crear bd");
      console.error(error);
    });
  }

  TypeChanged(selected) {
    this.sqliteService.ExecAsync(
      \`DROP TABLE IF EXISTS ciudades;
      DROP TABLE IF EXISTS personas;
      DETACH DATABASE dbTest;
      DROP DATABASE IF EXISTS dbTest\`)
      .then(function(resultado) {

        switch (selected) {
          case SqliteService.dbSaveMethod.localStorage:
            this.dbMethod = SqliteService.dbSaveMethod.localStorage;
            break;
          case SqliteService.dbSaveMethod.indexedDB:
            this.dbMethod = SqliteService.dbSaveMethod.indexedDB;
            break;
          default:
            this.dbMethod = SqliteService.dbSaveMethod.localStorage;
            break;
        }
        this.localStorageService.setItem(this.methodLocalStorage, this.dbMethod);
        this.loadData();
      }.bind(this))
  }
  `;
  CreateBDHTML = `
  
  `;
  ExistsDBTS = `

  ExistsDBQueryResult;
  ...
  /**
   * Ejemplo para saber si una db existe
   */
  existsExample() {

    this.ExistsDBQueryResult = this.sqliteService.ExistsDB("dbTest");
    this.printMsg(this.ExistsDBQueryResult?"Existe":"No existe");
  }
  `;
  UseDBTS =`
  
  useDBQueryResult;
  ...

  /**
   * Ejemplo de como activar una db
   */
  useDBExample(nombreDB) {
    this.useDBQueryResult = this.sqliteService.UseDB(nombreDB);
  }
  
  `;
  ExistsDBHTML = `
        
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="existsExample()">
    Ejecutar Exec
  </mv-button>
  <p><strong>Result:</strong></p>
  <pre class="jsonExample"> {{ExistsDBQueryResult | json}}</pre>
  `;
  UseDBHTML = `
        
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="useDBExample('dbTest')">
    USE dbTest
  </mv-button>
  <mv-button
    color="primary"
    appearance="raised"
    (clickEvent)="useDBExample('NoExiste')">
    USE NoExiste
  </mv-button>
  <p><strong>Result:</strong></p>
  <pre class="jsonExample"> {{useDBQueryResult | json}}</pre>
  `;
  // Options para el select de tipos de guardado
  OptionsSaveTypes =[
    {id: SqliteService.dbSaveMethod.localStorage, text: 'LocalStorage'},
    {id: SqliteService.dbSaveMethod.indexedDB, text: 'indexedDB'},
  ];

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly sqliteService: SqliteService,
    private readonly _appService: AppService,
  ) { }

  /**
   * Cargo todos los datos de device-service
   */
  ngOnInit() {
    this.localStorageService.init(false);

    const method = this.localStorageService.getItem(this.methodLocalStorage);
    this.dbMethod = method ? method : SqliteService.dbSaveMethod.indexedDB;
    this.localStorageService.setItem(this.methodLocalStorage, this.dbMethod);

    // El model lanza el evento TypeChanged y carga los datos
    this.SelectedDbMethod = this.dbMethod;
  }

  /**
   * Ejemplo de uso de sqliteService
   */
  async loadExampleData(dbName): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printMsg(`Creando base de datos en ${ this.dbMethod}`);
      this.sqliteService.CreateDB(dbName, this.dbMethod)
          .then(function(result) {
            this.printMsg(result);
            this.sqliteService.ExecAsync(
                `DROP TABLE IF EXISTS ciudades;
          DROP TABLE IF EXISTS personas;
          CREATE TABLE IF NOT EXISTS ciudades (city string, pop number);
          CREATE TABLE IF NOT EXISTS personas (id number, nombre string, apellido string);
          INSERT INTO ciudades VALUES ('Paris',2249975),('Berlin',3517424),('Madrid',3041579);
          INSERT INTO ciudades VALUES ('Tokio',9273000),('Nueva York.',8399000),('Los Ángeles',3990000);
          INSERT INTO ciudades VALUES ('Seúl',9776000),('Londres',8982000),('Osaka',2691000);
          INSERT INTO personas VALUES ( 1, 'Antonio','Rodriguez', ''),( 2, 'Marta','Cervantes', ''),(3,'David','Arrabal'),(4,'Julia','Calle')`,
            )
                .then(function(data) {
                  this.printMsg(this.MSG_INSERT_OK);
                  resolve(data);
                }.bind(this))
                .catch(function(error) {
                  console.error(this.MSG_INSERT_KO);
                  console.error(error);
                  reject(error);
                }.bind(this));
          }.bind(this))
          .catch(function(error) {
            console.error('Error al crear bd');
            console.error(error);
            reject(error);
          });
    });
  }
  /**
   * Evento al modificar el tipo de guardado de la db
   * @param selected
   */
  TypeChanged(selected) {
    this.sqliteService.ExecAsync(
        `DROP TABLE IF EXISTS ciudades;
      DROP TABLE IF EXISTS personas`)
        .then(function(resultado) {
          switch (selected) {
            case SqliteService.dbSaveMethod.localStorage:
              this.dbMethod = SqliteService.dbSaveMethod.localStorage;
              break;
            case SqliteService.dbSaveMethod.indexedDB:
              this.dbMethod = SqliteService.dbSaveMethod.indexedDB;
              break;
            default:
              this.dbMethod = SqliteService.dbSaveMethod.localStorage;
              break;
          }
          this.SelectedDbMethod = this.dbMethod;
          this.localStorageService
              .setItem(this.methodLocalStorage, this.dbMethod);
          this.loadExampleData('dbTest');
        }.bind(this));
  }

  /**
   * Método de uso
   */
  metodoDeUso() {
    this.printMsg('metodoDeUso');
    // Creamos las bases de datos que queramos usar
    this.sqliteService
        .CreateDBS([this.dbExample1, this.dbExample2], this.dbMethod)
        .then(function(result) {
          this.metodoDeUsoData.db = true;
          this.metodoDeUsoData.resultado = 'Bases de datos creadas';
        }.bind(this))
        .catch(this.printError);
  }
  /**
   * Añade datos a la base de datos 1
   */
  metodoDeUsoAddDataDbExample1(result) {
    this.printMsg('metodoDeUsoAddData');
    // Una vez creadas las Bases de datos hacemos use para trabajar con ellas
    this.sqliteService.UseDB(this.dbExample1).then(function(result) {
      this.metodoDeUsoData.resultado = `Apuntando a ${ this.dbExample1}`;
      this.sqliteService.ExecAsync(
          `DROP TABLE IF EXISTS ciudadesEjemplo;
        DROP TABLE IF EXISTS personasEjemplo;
        CREATE TABLE IF NOT EXISTS ciudadesEjemplo (city string, pop number);
        CREATE TABLE IF NOT EXISTS personasEjemplo (id number, nombre string, apellido string);
        INSERT INTO ciudadesEjemplo VALUES ('Paris',2249975),('Berlin',3517424),('Madrid',3041579);
        INSERT INTO ciudadesEjemplo VALUES ('Tokio',9273000),('Nueva York.',8399000),('Los Ángeles',3990000);
        INSERT INTO ciudadesEjemplo VALUES ('Seúl',9776000),('Londres',8982000),('Osaka',2691000);
        INSERT INTO personasEjemplo VALUES ( 1, 'Antonio','Rodriguez', ''),( 2, 'Marta','Cervantes', ''),(3,'David','Arrabal'),(4,'Julia','Calle')`,
      )
          .then(function(result) {
            this.metodoDeUsoData.resultado =
                `Datos insertados en ${ this.dbExample1}`;
            this.printMsg(this.MSG_INSERT_OK);
            this.metodoDeUsoData.tablasBD1 = true;
          }.bind(this))
          .catch(function(error) {
            console.error(this.MSG_INSERT_KO);
            console.error(error);
          }.bind(this));
    }.bind(this))
        .catch(function(error) {

        });
    this.printMsg(result);
  }

  /**
   * Añade datos a la base de datos 2
   */
  metodoDeUsoAddDataDbExample2(result) {
    this.printMsg('metodoDeUsoAddData');
    // Una vez creadas las Bases de datos hacemos use para trabajar con ellas
    this.sqliteService.UseDB(this.dbExample2).then(function(result) {
      this.metodoDeUsoData.resultado = `Apuntando a ${ this.dbExample2}`;
      this.sqliteService.ExecAsync(
          `DROP TABLE IF EXISTS grupos;
        CREATE TABLE IF NOT EXISTS grupos (grupo string, id number);
        INSERT INTO grupos VALUES ('GP1',1),('GP2',2),('GP3',3);
        INSERT INTO grupos VALUES ('GP4',4),('GP5',5),('GP6',6);`,
      )
          .then(function(result) {
            this.metodoDeUsoData.resultado =
                `Datos insertados en ${ this.dbExample2}`;
            this.printMsg(this.MSG_INSERT_OK);
            this.metodoDeUsoData.tablasBD2 = true;
          }.bind(this))
          .catch(function(error) {
            console.error(this.MSG_INSERT_KO);
            console.error(error);
          }.bind(this));
    }.bind(this))
        .catch(function(error) {

        });
    this.printMsg(result);
  }

  /**
 * Mostrar datos de la tabla de ejemplo 1
 */
  metodoDeUsoGetDataDbExample1() {
    this.sqliteService.UseDB(this.dbExample1)
        .then(function(result) {
          this.sqliteService.ExecAsync(
              `select * from ciudadesEjemplo;
        select * from personasEjemplo `,
          )
              .then(function(result) {
                this.metodoDeUsoData.resultado = result;
              }.bind(this));
        }.bind(this))
        .catch(function(error) {

        });
  }

  /**
 * Mostrar datos de la tabla de ejemplo 2
 */
  metodoDeUsoGetDataDbExample2() {
    this.sqliteService.UseDB(this.dbExample2).then(function(result) {
      this.sqliteService.ExecAsync(
          `select * from grupos `,
      )
          .then(function(result) {
            this.metodoDeUsoData.resultado = result;
          }.bind(this));
    }.bind(this))
        .catch(function(error) {

        });
  }

  /**
   * Ejemplo síncrono
   */
  ejemploDeUso1() {
    this.printMsg('ejemploDeUso1');
    this.ejemploDeUsoMenores = this.sqliteService
        .Exec('USE dbTest; SELECT * FROM ciudades WHERE pop < ? ORDER BY pop DESC', [3500000])[1];
    this.printMsg(this.ejemploDeUsoMenores);
  }

  /**
   * Ejemplo síncrono
   */
  ejemploDeUso2() {
    this.printMsg('ejemploDeUso2');
    this.ejemploDeUsoMayores = this.sqliteService
        .Exec('USE dbTest; SELECT * FROM ciudades WHERE pop > ? ORDER BY pop DESC', [3500000])[1];
    this.printMsg(this.ejemploDeUsoMayores);
  }

  /**
   * Ejemplo asíncrono
   */
  ejemploDeUso3() {
    this.printMsg('ejemploDeUso3');

    this.sqliteService.ExecAsync('USE dbTest; SHOW TABLES FROM dbTest')
        .then(function(result) {
          this.ejemploDeUsoTables = result[1];
          this.printMsg(this.ejemploDeUsoTables);
        }.bind(this))
        .catch(function(error) {
          console.error(this.MSG_SQL_KO);
        }.bind(this));
  }

  /**
   * Ejemplo asíncrono
   */
  ejemploDeUso4() {
    this.printMsg('ejemploDeUso4');

    this.sqliteService.ExecAsync('USE dbTest; SELECT * FROM personas')
        .then(function(result) {
          this.ejemploDeUsoPersonas = result[1];
          this.printMsg(this.ejemploDeUsoPersonas);
        }.bind(this))
        .catch(function(error) {
          console.error(this.MSG_SQL_KO);
        }.bind(this));
  }
  /**
 * Muestra las bases de datos
 */
  showDatabases() {
    this.sqliteService.ExecAsync('SHOW DATABASES ')
        .then(function(result) {
          this.printMsg(result);
          this.databases = result;
        }.bind(this))
        .catch(function(error) {
          console.error(this.MSG_SQL_KO);
        }.bind(this));
  }
  /**
 * Ejecuta la sentencia guardada en sandboxQuery
 */
  sandBoxExec() {
    this.printMsg('Sandbox query exect');
    this.sqliteService.ExecAsync(this.sandboxQuery)
        .then(function(result) {
          this.sandboxQueryResult = result;
        }.bind(this))
        .catch(function(error) {
          console.error(this.MSG_SQL_KO);
        }.bind(this));
  }

  /**
   * Ejemplo de queries sincrono
   */
  ExecExample() {
    this.loadExampleData('dbTest1')
        .then(function(result) {
          this.printMsg('Ejemplo exec');
          this.printMsg(`Insertando ${this.lines} lineas`);
          try {
            this.starTimer();

            for (let i = 0; i < this.lines; i++) {
              this.sqliteService.Exec(this.INSERT_EXAMPLE);
            }
            this.ExecQueryResult =
                `Insertadas correctamente en ${ this.stopTimer()}`;
            this.deleteCiudades();
          } catch (error) {
            this.ExecQueryResult = `Hubo un error${ this.stopTimer()}`;
          }
        }.bind(this))
        .catch(this.printError);
  }

  /**
   * Ejemplo de quere asincrono
   */
  ExecExampleAsync() {
    this.loadExampleData('dbTest2')
        .then(function(result) {
          this.printMsg('Ejemplo exec async');
          let sql ='';

          this.printMsg(`Insertando ${this.lines} lineas`);
          this.starTimer();
          for (let i = 0; i < this.lines; i++) {
            sql += 'INSERT INTO ciudades VALUES (\'Paris\',2249975),(\'Berlin\',3517424),(\'Madrid\',3041579);';
          }
          this.sqliteService.ExecAsync(sql)

              .then(function(result) {
                this.ExecAsyncQueryResult =
                    `Insertadas correctamente en ${ this.stopTimer()}`;
                this.deleteCiudades();
              }.bind(this))

              .catch(function(reject) {
                console.error(reject);
                this.ExecAsyncQueryResult = `Hubo un error${ this.stopTimer()}`;
              }.bind(this));
        }.bind(this))
        .catch(this.printError);
  }

  /**
   * Ejemplo de Array sincrono
   */

  ExecArrayExample() {
    this.loadExampleData('dbTest3')
        .then(function(result) {
          this.printMsg('Ejemplo execArray');

          this.printMsg(`Insertando ${this.lines} lineas`);
          const insertArray = [];
          try {
            this.starTimer();
            for (let i = 0; i < this.lines; i++) {
              insertArray.push(this.INSERT_EXAMPLE);
            }

            this.sqliteService.ExecArray(insertArray);
            this.ExecArrayQueryResult =
                `Insertadas correctamente en ${ this.stopTimer()}`;
            this.deleteCiudades();
          } catch (error) {
            this.ExecArrayQueryResult = `Hubo un error${ this.stopTimer()}`;
          }
        }.bind(this))
        .catch(this.printError);
  }

  /**
   * Ejemplo de Array de queries asincrono
   */
  ExecArrayExampleAsync() {
    this.loadExampleData('dbTest4')
        .then(function(result) {
          this.printMsg('Ejemplo execArray async');
          this.printMsg(`Insertando ${this.lines} lineas`);

          this.starTimer();
          const insertArray = [];

          for (let i = 0; i < this.lines; i++) {
            insertArray.push(this.INSERT_EXAMPLE);
          }

          this.sqliteService.ExecArrayAsync(insertArray)

              .then(function(result) {
                this.ExecArrayQueryAsyncResult =
                    `Insertadas correctamente en ${ this.stopTimer()}`;
                this.deleteCiudades();
              }.bind(this))

              .catch(function(reject) {
                this.ExecArrayQueryAsyncResult =
                    `Hubo un error${ this.stopTimer()}`;
                console.error(reject);
              }.bind(this));
        }.bind(this))
        .catch(this.printError);
  }

  /**
   * Borra las ciudades
   */
  deleteCiudades() {
    console.time('Borrando');
    this.sqliteService.Exec('USE dbTest; DELETE  FROM ciudades');
    console.timeEnd('Borrando');
  }

  /**
   * Inicializador del timer
   */
  starTimer() {
    this.beginTimer=Date.now();
  }

  /**
   * Para el timer y devuelve los segundos que ha tardado en un string
   * @returns
   */
  stopTimer():string {
    return `${( Date.now()-this.beginTimer)/1000}secs`;
  }

  /**
   * Ejemplo para saber si una db existe
   */
  existsExample() {
    this.ExistsDBQueryResult = this.sqliteService.ExistsDB('dbTest');
    this.printMsg(this.ExistsDBQueryResult?'Existe':'No existe');
  }

  /**
   * Ejemplo de como activar una db
   */
  useDBExample(nombreDB) {
    this.sqliteService.UseDB(nombreDB)

        .then(function(res) {
          this.useDBQueryResult = res;
        }.bind(this))

        .catch(function(error) {
          this.useDBQueryResult = error;
        }.bind(this));
  }

  /**
   * Método para mostrar mensajes
   * @param msg
   */
  printMsg(msg) {
    const data = {
      text: msg,
      type: 'info',
    };

    this._appService.showSnackBar(data);
  }
  /**
   * Método para mostrar errores
   * @param error
   */
  printError(error) {
    const data = {
      text: error,
      type: 'danger',
    };

    this._appService.showSnackBar(data);
  }
}
