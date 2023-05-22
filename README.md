# Seja bem vindo 😄
## Api para redimensionamento de imagens

### Instruções para instalação:

#### 1 - No seu terminal, já dentro do projeto, entre na pasta /desafio, e digite o comando killall node, para garantir que não existe nenhum processo que esta utilizando a porta do servidor.
#### 2 - Ainda na pasta /desafio, digite o comando npm install, para instalar as dependências do projeto.
#### 3 - Último passo, digite o comando npm run start:dev, para iniciar a api.

#### Pronto! Agora a aplicação esta completa e pronta para uso 🚀🚀🚀

## Exemplo de requisição para api:

URL: `http://localhost:3000/image/save`

METHOD: `POST`

BODY: 
```
{
    "image": "https://assets.storage.trakto.io/AkpvCuxXGMf3npYXajyEZ8A2APn2/0e406885-9d03-4c72-bd92-c6411fbe5c49.jpeg",
    "compress": 0.9
}
```
## Tecnologias utilizadas:
<ol>
    <li>NestJS</li>
    <li>MongoDB</li>
    <li>Mongoose</li>
    <li>Axios</li>
    <li>Sharp</li>
    <li>ts-exif-parser</li>
</ol>

## Observações:
O arquivo .env, que contém as variáveis de ambiente, não foi adicionado ao arquivo .gitignore, para uma maior comodidade de quem for testar o projeto, mas não é uma boa prática, e deve ser evitada.
