const method1 = (req, res) => {
    res.json({ message: "hello, welcome to the page" });
}

const method2 = (req, res) => {
    res.json({ message: "Hello, This is the post req" });
}
module.exports = {
    method1,
    method2
}