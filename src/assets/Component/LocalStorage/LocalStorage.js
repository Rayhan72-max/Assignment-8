const getStoredData = () => {
    const storedJobApplication = localStorage.getItem('job')
    if(storedJobApplication){
        return JSON.parse(storedJobApplication)
    }
    return [];
}

const storedData  = id => {
    const storedData =  getStoredData();
    
    
    
    const exist = storedData.find(data => data ===id )
    
     if(!exist){
        storedData.push(id);
        localStorage.setItem('job',JSON.stringify(storedData))
    }
}

export {getStoredData,storedData}