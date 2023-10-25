class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const allData = await axios.get(`${this.BASE_URL}/characters`)
    return allData
  }

  async getOneRegister (id) {
    const oneChar = await axios.get(`${this.BASE_URL}/characters/${id}`)
    return oneChar
  }

  async createOneRegister (bodyData) {
    const newChar = await axios.post(`${this.BASE_URL}/characters`, bodyData)
    return newChar
  }

  async updateOneRegister (id, updatedInfo) {
    const updatedChar = await axios.put(`${this.BASE_URL}/characters/${id}`, updatedInfo)
    return updatedChar
  }

  async deleteOneRegister (id) {
    const deleteChar = await axios.delete(`${this.BASE_URL}/characters/${id}`)
    return deleteChar
  }
}
