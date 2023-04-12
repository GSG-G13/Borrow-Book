const logout = (req, res) => {
    res.status(200).clearCookie('token').redirect('/')
}
module.exports = { logout }