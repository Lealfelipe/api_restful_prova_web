const express = require('express');
const app = express();
const path = require('path');
const {Aluno} = require('./models');
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get('/alunos', (req, res)=>{
    res.send('Prova de Desenvolvimento WEB 2');
});

app.post('/alunos', async (req, res)=>{
    const {nome, idade} = req.body;
    
    try {
                
        await Aluno.create({nome, idade});

        res.send('Aluno cadastrado');
    } catch (error) {

        res.status(400).send(`${error.message}`);        
    }
});

app.get('/alunos/:id', (req, res)=>{
    const i = req.params.id;

    Aluno.findByPk(i).then(aluno => {
        if(aluno) {
            res.send(`Aluno: ${JSON.stringify(aluno)}`,);
        } else{
            res.send(`<h1> Aluno não encontrado! </h1>`);
        }
        
    })
    .catch((error) => {
        res.status(400).send(`${error.message}`);
    });
});

app.put('/alunos/:id', async (req, res)=>{
    const id = req.params.id;

    const {nome, idade} = req.body;

    const aluno = await Aluno.findByPk(id);

    if(!aluno){
        res.send(`Nenhum aluno associado ao ID: ${id}`);
    }

    try {
        await Aluno.update(
            {
                nome: nome, 
                idade: idade
            }, 
            {
                where: {id: id}
            }
        );  

        res.send(`Aluno alterado!`,);
                
    } catch (error) {
        res.status(400).send(`${error.message}`);        
    }    
})

app.delete('/alunos/:id', async (req, res)=>{
    const {id} = req.params;

    const aluno = await Aluno.findByPk(id);

    if(!aluno){
        res.send(`Nenhum aluno associado ao ID: ${id}`);
    }

    Aluno.destroy({
        where: {id: id}
    }).then(()=>{
        res.send(`Aluno Deletado!`);
    }).catch((erro)=> {
        res.send(`Erro ao excluir aluno!`);
    })

})



app.listen(3000, ()=>{
    console.log("Rodando na porta 3000");
})