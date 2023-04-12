const logout = (req, res) => {
    res.statue(200).clearCookie('token').redirect('/')
}
module.exports = { logout }