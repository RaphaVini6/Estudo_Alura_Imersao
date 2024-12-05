import express from "express";

const posts = [
    {
        descricao: 'teste',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48gR5XDZPpi5F8QEitXQUPEBvgeksGD2OKg&s'
    }
];

posts.push(
    { descricao: 'Segundo post', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48gR5XDZPpi5F8QEitXQUPEBvgeksGD2OKg&s' },
    { descricao: 'Terceiro post', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48gR5XDZPpi5F8QEitXQUPEBvgeksGD2OKg&s' },
    { descricao: 'Quarto post', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48gR5XDZPpi5F8QEitXQUPEBvgeksGD2OKg&s' },
    { descricao: 'Quinto post', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48gR5XDZPpi5F8QEitXQUPEBvgeksGD2OKg&s' },
    { descricao: 'Sexto post', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ48gR5XDZPpi5F8QEitXQUPEBvgeksGD2OKg&s' }
);

console.log(posts);

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log("Servidor ouvindo!!!!!!!!!!!");
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts:id ", (req, res) => {
    res.status(200).json(posts);
});
