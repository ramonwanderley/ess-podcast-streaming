const fs = require('fs');

class JSONDatabase {
  constructor(filePath) {
    this.filePath = filePath;
  }

  readData() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(data);
    } catch (err) {
      console.error(`Error reading data from ${this.filePath}: ${err}`);
      return null;
    }
  }

  writeData(data) {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2));
      console.log(`Data written to ${this.filePath}`);
    } catch (err) {
      console.error(`Error writing data to ${this.filePath}: ${err}`);
    }
  }

  getAll() {
    const data = this.readData();
    return data ? Object.values(data) : [];
  }

  getData() {
    const data = this.readData();
    return data ? data : {};
  }

  getPartition(key){
    const data = this.readData();
    return data ? (data[key]|| []) : [];
  }

  updateRegisters(PK, newData){
    newData.forEach(element => {
      const data = this.readData();
      const id = data.findIndex(row => row[PK] === element[PK]);
      data[id] = element;
      this.writeData(data)
    });
  }

  getAllMatchingNames(pattern) {
    const data = this.readData();
    const filteredData = Object.values(data).filter(obj => {
      for (const key in obj) {
        if(key == 'username'){
            if (obj.hasOwnProperty(key) && obj[key].toString().match(pattern)) {
                return true;
            }
        }
           
      }
      return false;
    });
    return filteredData;
  }
}

module.exports = JSONDatabase;
