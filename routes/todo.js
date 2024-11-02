const express = require('express');
const router = express.Router();

let codes = [
    { id: 1, task: "Belajar Node.Js", completed: false },
    { id: 2, task: "Membuat API", completed: false },  // Perbaiki 'False' menjadi 'false'
];

// Endpoint untuk mendapatkan data todos
router.get('/', (req, res) => {
    res.json(codes);  // Menggunakan 'codes' bukan 'todos'
});

// Endpoint untuk menambahkan data baru ke todos
router.post('/', (req, res) => {
    const newTodo = {
        id: codes.length + 1,
        task: req.body.task,
        completed: false
    };
    codes.push(newTodo);
    res.status(201).json(newTodo);
});

module.exports = router;  // Menggunakan 'router', bukan 'Router'

router.delete('/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) return res.status(404).json({ message: 'Tugas tidak ditemukan' });

    const deletedTodo = todos.splice(todoIndex, 1)[0]; // Menghapus dan menyimpan todo yang dihapus
    res.status(200).json({ message: `Tugas '${deletedTodo.task}' telah dihapus` });

});


