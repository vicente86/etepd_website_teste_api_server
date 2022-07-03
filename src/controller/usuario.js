import { openDb } from "../configDB.js";

export async function insertUsuario(usuario){
  openDb().then(db => {
    db.run('INSERT INTO usuario (nome, email, senha) VALUES (?, ?, ?)', [usuario.nome, usuario.email, usuario.senha]);
  })
}

export async function updateUsuario(usuario){
  openDb().then(db => {
    db.run('UPDATE usuario SET nome=?, email=?, senha=? WHERE id=?', [usuario.nome, usuario.email, usuario.senha, usuario.id]);
  })
}

export async function pesquisarUsuario(email){
  return openDb().then(db => {
    return db.get('SELECT * FROM usuario WHERE email=?', [email])
    .then(res => res)
  })
}

export async function deletaUsuario(email){
  return openDb().then(db => {
    return db.get('DELETE FROM usuario WHERE email=?', [email])
    .then(res => res)
  })
}

export async function pesquisarTodosUsuario(){
  return openDb().then(db => {
    return db.all('SELECT * FROM usuario')
    .then(res => res)
  })
}