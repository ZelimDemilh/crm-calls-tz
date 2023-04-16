module.exports.linksController = {
    getLinksGradually: async (req, res) => {
        const { links = [] } = req.body
        const result = []

        for (let i = 0; i < links.length; i++){
            const res = await fetch(links[i])
            const data = await res.json()
            result.push(data)
        }

        res.json(result)
    },

    getLinksParallel: async (req, res) => {
        const { links = [] } = req.body
        console.log(links)
        const promise = links.map(link => fetch(link).then(res => res.json()))
        const result = await Promise.all(promise)

        res.json(result)
    }
};