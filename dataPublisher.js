
function createDatapublisher(url, username, password){
    var DataPublisher =  Packages.org.wso2.carbon.databridge.agent.thrift.DataPublisher;
    var dataPublisher = new DataPublisher(url, username, password);
    return dataPublisher;
}

