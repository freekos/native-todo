function checkList(type) {
    let localJson = localStorage.getItem("list");
    if(localJson) {
        let localList = JSON.parse(localJson);
        let list = localList[type];
        return list;
    }
}

export default checkList;