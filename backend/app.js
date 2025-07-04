const express = require ('express');
const tasksRoutes = require('./routes/tasks.js');


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use('/backend/routes/tasks.js',tasksRoutes);


app.listen(port, () => {
    console.log(`Servidor escuchando puerto ${port}`);
});