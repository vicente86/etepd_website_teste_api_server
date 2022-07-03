

export const raiz = `
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title>Servidor etepd website teste</title>
    <style>
      * {
        margin:0px;
        padding:0px;
        box-sizing: border-box;
        font-family: sans-serif;
      }
      .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: #444;
      }
      .container h1 {
        color: #fff;
        text-align: center;
        padding: 30px 0px;
      }
      .container h2 {
        color: #000;
        padding: 5px;
      }
      .container p {
        color: #fff;
        padding: 15px;
      }
      .container p span{
        color: #677CEE;
        padding: 15px;
        text-decoration: underline;
      }
      .container #obs {
        min-width: 200px;
        max-width: 800px;
        margin: 5px 10px;
        background-color: #aaa;
        color: #EF3545;
        padding: 20px;
        box-shadow: 0px 0px 10px #777;
        border-radius: 10px;
      }
      @media only screen and (max-width: 600px) {
        .container h1{
          font-size: 15px;
        }
        .container h2{
          font-size: 13px;
        }
        .container p{
          font-size: 10px;
        }
      }

    </style>
  </head>

  <div class='container'>
  
    <h1>Servidor Provisório ETEPD website</h1>
    <h2>Servidor com o banco de dados</h2>
    <p>Servidor com o banco de dados rodando no endereço: <span>http://localhost:3001/</span></br>
       Banco de dados usado: sqlite3
    </p>

    <h2>Projeto do site etepd_website_teste</h2>
    <p>Projeto rodando no endereço: <span>http://localhost:3000/</span></br>
       Banco de dados usado: sqlite3</br>
       Github do projeto: <span>https://github.com/vicente86/etepd_website_teste</span>
    </p>
  
    <br/>
    <p id='obs'>Obs.: Inicie o servidor primeiro e depois inicie o projeto. Ambos precisam funcionar simultaneamente.</br>
      Como o projeto não tem um banco de dados externo, o funcionamento será desse jeito.
    </p>
  </div>

`;