import * as SQLite from 'expo-sqlite/legacy';

const db = SQLite.openDatabase('exercicio.db');

// Criando a tabela no banco de dados
const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS agenda (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, telefone TEXT, braco TEXT, perna TEXT, peito TEXT, costas TEXT);",
      [],
      () => console.log("Tabela criada com sucesso."),
      (tx, error) => {
        console.log("Erro ao criar tabela:", error);
        return true;
      }
    );
  });
};

// Função para obter todos os registros
const getAgenda = (setAgenda) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM agenda;',
      [],
      (_, { rows: { _array } }) => {
        console.log("Dados recuperados:", _array);
        setAgenda(_array); // Atualiza o estado com os dados da tabela
      },
      (tx, error) => {
        console.log("Erro ao recuperar dados:", error);
        return true;
      }
    );
  });
};

// Função para adicionar um novo exercício
const adicionarExercicio = (nome, telefone, braco, perna, peito, costas, setAgenda) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO agenda (nome, telefone, braco, perna, peito, costas) VALUES (?, ?, ?, ?, ?, ?);',
      [nome, telefone, braco, perna, peito, costas],
      () => {
        console.log("Dados inseridos com sucesso.");
        getAgenda(setAgenda); // Atualiza a lista após a inserção
      },
      (tx, error) => {
        console.log("Erro ao inserir dados:", error);
        return true;
      }
    );
  });
};

createTable(); // Chama a criação da tabela ao iniciar

export { db, getAgenda, adicionarExercicio };
