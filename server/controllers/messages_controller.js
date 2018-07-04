let messagesArray = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        messagesArray.push({text: req.body.text, time: req.body.time, id: id});
        id++;
        res.status(200).send(messagesArray);

    },
    read: (req, res) => {
        res.status(200).send(messagesArray);
    },
    update: (req, res) => {
        
        let actualIndex = messagesArray.findIndex( message => {
            console.log('checking message.id', message.id)
            console.log('check params', req.params.id)
            return message.id === req.params.id * 1
        })

        messagesArray.splice(actualIndex, 1, {
            id: req.body.id,
            text: req.body.text,
            time: req.body.time
        });
        console.log('checking index', actualIndex);
        
        res.status(200).send(messagesArray);
    },

    delete: (req, res) => {
        let actualIndex = messagesArray.findIndex( message => {
            return message.id === req.params.id * 1
        })
        messagesArray.splice(actualIndex, 1);
        res.status(200).send(messagesArray);
    }
}



