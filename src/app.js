import {openDb} from './configDB.js';
import express from 'express';
import { insertUsuario, pesquisarTodosUsuario, pesquisarUsuario, updateUsuario, deletaUsuario } from './controller/usuario.js';
import { raiz } from './paginas/pagRaiz.js';

const app = express();
app.use(express.json());

openDb();

app.get('/', (req, res) => {
  res.send(raiz);
});

// cadastrar novo usuário
app.post('/cadastrar_usuario', (req, res) => {
  insertUsuario(req.body);

  res.json({
    "statusCode": 200
  })
})

// Pesquisa um único usuário
app.get('/pesquisa_usuario', async (req, res) => {
  let usuario = await pesquisarUsuario(req.body.email);
  
  if(usuario !== undefined){
    res.json(usuario);  
  }else{
    res.json({
      "msg": "Nenhum usuário encontrado com esse email"
    });
  }
})

// deleta um único usuário
app.delete('/deleta_usuario', async (req, res) => {  
  let tem = await pesquisarUsuario(req.body.email);
  let usuario = await deletaUsuario(req.body.email);
  if(tem !== undefined && usuario == undefined){
    res.json({
      "msg": "usuario deletado com sucesso"
    });
  }else{
    res.json({
      "msg": "falha! usuario não encontrado"
    });
  }
})

// Pesquisa todos os usuários
app.get('/pesquisa_todos_usuarios', async (req, res) => {
  let usuarios = await pesquisarTodosUsuario();
  res.json(usuarios);
})

// atualizar usuário existente
app.put('/atualizar_usuario', (req, res) => {
  
  if(req.body && !req.body.id){
    res.json({
      "statusCode": 400
    })
  }else{
    updateUsuario(req.body);
    res.json({
      "statusCode": 200
    })
  }
})

app.listen(3001, () => console.log("etepd_website_teste_api_server conectado com sucesso, http://localhost:3001"));