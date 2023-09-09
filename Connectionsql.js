const sql = require('mssql');

// Configura la cadena de conexión a SQL Server
const config = {
  user: 'Administrator',
  password: '52137BO96$a',
  server: 'ertechrds.cxnxmeb2mjf7.us-west-2.rds.amazonaws.com', // Por ejemplo, 'localhost'
  database: 'Steelsource',
};

// Intenta establecer la conexión a SQL Server
sql.connect(config)
  .then(() => {
    console.log('Conexión a SQL Server exitosa.');

    // Crea una nueva solicitud de consulta
    const request = new sql.Request();

    // Ejecuta una consulta SQL
    request.query('SELECT idInventario
      ,FechaEntrada
      ,idBodega
      ,idProducto
      ,descripcion
      ,Referencia
      ,NumeroRollo FROM inventarioProductos')
      .then((result) => {
        // Procesa los resultados de la consulta
        console.log('Resultados de la consulta:', result.recordset);
      })
      .catch((err) => {
        // Maneja los errores de la consulta
        console.error('Error al ejecutar la consulta:', err);
      })
      .finally(() => {
        // Cierra la conexión a SQL Server
        sql.close();
      });
  })
  .catch((err) => {
    // Maneja los errores de la conexión
    console.error('Error de conexión a SQL Server:', err);
  });
